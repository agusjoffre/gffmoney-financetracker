'use server'
import { type Category, type Transaction } from '@/types/types'
import CategorySchema from '@/db/models/CategorySchema'
import TransactionSchema from '@/db/models/TransactionSchema'
import UserSchema from '@/db/models/UserSchema'
import { auth } from '@clerk/nextjs'
import { connection } from '@/db/dbConnect'
import { revalidatePath } from 'next/cache'
import { updateUserMoney } from './userControl'

const { userId } = auth()
console.log(userId)

export const createTransaction = async (formData: FormData): Promise<Transaction> => {
  try {
    const transaction = {
      userID: userId,
      name: formData.get('name') as string,
      type: formData.get('type') as string,
      amount: Number(formData.get('amount')),
      categoryName: formData.get('category') as string
    }
    await connection()
    const newTransaction = await new TransactionSchema(transaction).save()
    const category = await CategorySchema.findOneAndUpdate(
      { userID: userId, name: transaction.categoryName },
      { $push: { transactions: [newTransaction._id] } },
      { new: true }
    )
    await category?.save()

    const user = await UserSchema.findOneAndUpdate({ userID: userId },
      { $push: { transactions: [newTransaction._id] } }, { new: true })
    await user.save()

    await updateUserMoney()

    revalidatePath('/dashboard')

    return JSON.parse(JSON.stringify(newTransaction))
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export const getAllTransactions = async (): Promise<Transaction[]> => {
  try {
    await connection()
    const allTransactions = await TransactionSchema.find({ userID: userId })
    return JSON.parse(JSON.stringify(allTransactions))
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    await connection()
    const categories = await CategorySchema.find({ userID: userId }).populate('transactions')
    return JSON.parse(JSON.stringify(categories))
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export const createCategory = async (formData: FormData): Promise<Category> => {
  try {
    const category = {
      userID: userId,
      name: formData.get('name') as string,
      importance: Number(formData.get('importance'))
    }
    await connection()
    const newCategory = await new CategorySchema(category).save() as Category

    const user = await UserSchema.findOneAndUpdate({ userID: userId },
      { $push: { categories: [newCategory._id] } }, { new: true })
    await user.save()

    await updateUserMoney()

    revalidatePath('/dashboard')

    return JSON.parse(JSON.stringify(newCategory))
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export const getIncomeAndOutcomeTransactions = async (): Promise<{ incomeTransactions: Transaction[], outcomeTransactions: Transaction[] }> => {
  try {
    await connection()
    const incomeTransactions = await TransactionSchema.find({ userID: userId, type: 'income' })
    const outcomeTransactions = await TransactionSchema.find({ userID: userId, type: 'outcome' })
    return {
      incomeTransactions,
      outcomeTransactions
    }
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export const getOneCateogoryByName = async (category: string): Promise<Category> => {
  try {
    await connection()
    const categoryFiltered = await CategorySchema.findOne({ userID: userId, name: category }).populate('transactions')
    return JSON.parse(JSON.stringify(categoryFiltered))
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}
