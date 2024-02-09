'use server'
import { type Category, type Transaction } from '@/types/types'
import CategorySchema from '@/db/models/CategorySchema'
import TransactionSchema from '@/db/models/TransactionSchema'
import { auth } from '@clerk/nextjs'
import { connection } from '@/db/dbConnect'

const { userId } = auth()

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
    return JSON.parse(JSON.stringify(newTransaction))
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
    const newCategory = await new CategorySchema(category).save()
    console.log(newCategory)
    return JSON.parse(JSON.stringify(newCategory))
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    await connection()
    const categories = await CategorySchema.find({ userID: userId })
    return JSON.parse(JSON.stringify(categories))
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}
