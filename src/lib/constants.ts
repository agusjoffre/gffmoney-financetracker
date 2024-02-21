import { type TransactionType } from '@/types/types'

export const types: TransactionType[] = ['income', 'outcome']

export const calculateLostByInflation = (balance: number, inflationRate: number): number => {
  return balance * (1 + (inflationRate / 100)) - balance
}
