import { connection } from '@/db/dbConnect'
import UserSchema from '@/db/models/UserSchema'
import { type Transaction, type User } from '@/types/types'
import { auth, currentUser } from '@clerk/nextjs'
import { revalidatePath } from 'next/cache'
import { getIncomeAndOutcomeTransactions } from '@/lib/controllers/transactionControl'

const { userId } = auth()

export const initializeUser = async (): Promise<User> => {
  try {
    await connection()
    const user = await currentUser()
    const existingUser = await UserSchema.findOne({ userID: userId })
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!existingUser) {
      const newUser = await new UserSchema({
        userID: userId,
        income: 0,
        outcome: 0,
        balance: 0,
        transactions: [],
        categories: [],
        friends: [],
        projections: [],
        username: ((user?.username) !== null) ? user?.username : `${user?.firstName} ${user?.lastName}`
      }).save() as User

      revalidatePath('/dashboard')
      return JSON.parse(JSON.stringify(newUser))
    } else {
      revalidatePath('/dashboard')
      return JSON.parse(JSON.stringify(existingUser))
    }
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export const getMoney = async (): Promise<{ incomeAmount: number, outcomeAmount: number, balance: number }> => {
  const { incomeTransactions, outcomeTransactions } = await getIncomeAndOutcomeTransactions()
  if (incomeTransactions.length === 0 && outcomeTransactions.length === 0) {
    return { incomeAmount: 0, outcomeAmount: 0, balance: 0 }
  }

  if (incomeTransactions.length === 0) {
    return {
      incomeAmount: 0,
      outcomeAmount: outcomeTransactions.map((transaction: Transaction): number => {
        return transaction.amount
      }).reduce((a: number, b: number): number => {
        return a + b
      }),
      balance: 0
    }
  }
  if (outcomeTransactions.length === 0) {
    return {
      incomeAmount: incomeTransactions.map((transaction: Transaction): number => {
        return transaction.amount
      }).reduce((a: number, b: number): number => {
        return a + b
      }),
      outcomeAmount: 0,
      balance: 0
    }
  }

  const incomeAmount = incomeTransactions.map((transaction: Transaction): number => {
    return transaction.amount
  }).reduce((a: number, b: number): number => {
    return a + b
  })
  const outcomeAmount = outcomeTransactions.map((transaction: Transaction): number => {
    return transaction.amount
  }).reduce((a: number, b: number): number => {
    return a + b
  })
  const balance = incomeAmount - outcomeAmount

  return { incomeAmount, outcomeAmount, balance }
}

export const updateUserMoney = async (): Promise<{ incomeAmount: number, outcomeAmount: number, balance: number }> => {
  const { incomeAmount, outcomeAmount, balance } = await getMoney()
  try {
    await UserSchema.findOneAndUpdate({ userID: userId }, { income: incomeAmount, outcome: outcomeAmount, balance })
    revalidatePath('/dashboard')
    return JSON.parse(JSON.stringify({ incomeAmount, outcomeAmount, balance }))
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}
