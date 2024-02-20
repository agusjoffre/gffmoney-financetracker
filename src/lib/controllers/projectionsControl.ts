/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use server'
import ProjectionSchema from '@/db/models/ProjectionSchema'
import { connection } from '@/db/dbConnect'
import { auth } from '@clerk/nextjs'
import type { Projection, ProjectionTransaction } from '@/types/types'
import ProjectionTransactionSchema from '@/db/models/ProjectionTransactionSchema'
import { revalidatePath } from 'next/cache'

const { userId } = auth()
export const initializeProjection = async (): Promise<Projection> => {
  try {
    await connection()
    const existingProjection = await ProjectionSchema.findOne({ userID: userId })
    console.log('existingProjection', existingProjection)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!(existingProjection)) {
      const projection = {
        userID: userId,
        income: 0,
        outcome: 0,
        transactions: []
      }
      const newProjection = await new ProjectionSchema(projection).save()
      revalidatePath('/dashboard')
      return JSON.parse(JSON.stringify(newProjection))
    } else {
      return JSON.parse(JSON.stringify(existingProjection))
    }
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export const createProjectionTransaction = async (formData: FormData): Promise<ProjectionTransaction> => {
  try {
    await connection()
    await initializeProjection()
    const projTransaction = {
      userID: userId,
      name: formData.get('name') as string,
      type: formData.get('type') as string,
      amount: Number(formData.get('amount'))
    }
    const newTransaction = await new ProjectionTransactionSchema(projTransaction).save()

    // push to projection
    await ProjectionSchema.findOneAndUpdate({ userID: userId }, { $push: { transactions: newTransaction._id } })
    if (projTransaction.type === 'outcome') {
      await updateProjectionMoney(0, projTransaction.amount)
    } else {
      await updateProjectionMoney(projTransaction.amount, 0)
    }
    revalidatePath('/dashboard')
    return JSON.parse(JSON.stringify(newTransaction))
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

const updateProjectionMoney = async (income: number, outcome: number): Promise<void> => {
  try {
    await connection()
    const projection = await ProjectionSchema.findOne({ userID: userId })
    const updatedIncome = projection.income + income
    const updatedOutcome = projection.outcome + outcome
    await ProjectionSchema.findOneAndUpdate({ userID: userId }, {
      $set: {
        income: updatedIncome,
        outcome: updatedOutcome
      }
    })
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export const getAllTransactionsProjection = async (): Promise<ProjectionTransaction[]> => {
  try {
    await connection()
    const allTransactionsProjections = await ProjectionTransactionSchema.find({ userID: userId })
    return JSON.parse(JSON.stringify(allTransactionsProjections))
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export const getProjectionMoney = async (): Promise<{ income: number, outcome: number, balance: number }> => {
  try {
    await connection()
    if (!(await ProjectionSchema.findOne({ userID: userId }))) {
      return { income: 0, outcome: 0, balance: 0 }
    }
    const { income, outcome } = await ProjectionSchema.findOne({ userID: userId })
    if (!(income) && !(outcome)) {
      return { income: 0, outcome: 0, balance: 0 }
    }
    const balance = income - outcome
    revalidatePath('/dashboard')
    return JSON.parse(JSON.stringify({ income, outcome, balance }))
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}
