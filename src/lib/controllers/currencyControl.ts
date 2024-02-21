'use server'
import { connection } from '@/db/dbConnect'
import CurrencySchema from '@/db/models/CurrencySchema'
import type { Currency } from '@/types/types'
import { revalidatePath } from 'next/cache'

export const getOneCurrency = async (code: string): Promise<Currency> => {
  try {
    await connection()
    const currencyInfo = await CurrencySchema.findOne({ code })
    return JSON.parse(JSON.stringify(currencyInfo)) as Currency
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}

export const createCurrency = async (formData: FormData): Promise<Currency> => {
  try {
    const currency = {
      code: formData.get('code')?.toString().toUpperCase(),
      inflationRate: Number(formData.get('inflationRate')),
      exchangeRate: Number(formData.get('exchangeRate'))
    }
    await connection()
    const newCurrency = await new CurrencySchema(currency).save()
    revalidatePath('/dashboard')
    return newCurrency
  } catch (err) {
    const error = err as Error
    throw new Error(error.message)
  }
}
