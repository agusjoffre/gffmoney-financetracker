export interface Transaction {
  userID?: string
  name: string
  type: 'income' | 'outcome'
  amount: number
  category: string
  isMonthly?: boolean
}

export interface Category {
  userID?: string
  name: string
  importance?: number
  transactions: Transaction[] | null
}

export interface ProjectionTransaction {
  userID?: string
  name: string
  type: 'income' | 'outcome'
  amount: number
}

export interface Projection {
  userID?: string
  income: number
  outcome: number
  transactions: ProjectionTransaction[]
}

export interface User {
  userID: string
  income: number
  outcome: number
  balance: number
  transactions: Transaction[]
  categories: Category[]
  friends: string[]
  projections: Projection[]
  username: string
}
