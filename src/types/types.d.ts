export type TransactionType = 'income' | 'outcome'

export interface Transaction {
  id: string
  createdAt: string | number | Date
  _id: Key | null | undefined
  userID?: string
  name: string
  type: TransactionType
  amount: number
  categoryName: string
  isMonthly?: boolean
}

export interface Category {
  _id: Key | null | undefined
  userID?: string
  name: string
  importance?: number
  transactions: Transaction[] | null
  createdAt: Date
}

export interface ProjectionTransaction {
  _id: Key | null | undefined
  userID: string
  name: string
  type: TransactionType
  amount: number
}

export interface Projection {
  userID: string
  income?: number
  outcome?: number
  transactions?: ProjectionTransaction[]
}

export interface User {
  userID: string
  income: number
  outcome: number
  balance: number
  lostWithInflation: number
  transactions: Transaction[]
  categories: Category[]
  friends: string[]
  projections: Projection[]
  username: string
}

export interface Currency {
  code: string
  inflationRate: number
  exchangeRate: number
}
