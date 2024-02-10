'use client'
import { type Transaction, type Category } from '@/types/types'
import CategoriesSelect from './CategoriesSelect'
import TransactionCard from './TransactionCard'
import { getOneCateogoryByName, getAllCategories } from '@/lib/controllers/transactionControl'
import { useEffect, useState } from 'react'

interface Props {
  uniqueCategories: Category[]
}

const TransactionList = ({ uniqueCategories }: Props): JSX.Element => {
  const [categorySelected, setCategorySelected] = useState('all')
  const [filteredCategory, setCategory] = useState<Category | null>()
  const [isAll, setIsAll] = useState(true)
  const [allTransactions, setAllTransactions] = useState<Transaction[] | null>()

  useEffect(() => {
    async function get (): Promise<void> {
      if (categorySelected !== 'all' && uniqueCategories.length > 0 && categorySelected !== null) {
        const categoryFiltered = await getOneCateogoryByName(categorySelected)
        setCategory(categoryFiltered)
        setIsAll(false)
      } else {
        const all = await getAllCategories()
        const transactions = all.map((cat) => {
          return cat.transactions
        })
        setCategory(null)
        setAllTransactions(transactions?.flat())
        setIsAll(true)
      }
    }

    get().catch(console.error)
  }, [categorySelected])

  return (
    <section className="h-screen w-full flex flex-col gap-4 pb-16">
      <CategoriesSelect uniqueCategories={uniqueCategories} setCategorySelected={setCategorySelected} />
      {isAll
        ? allTransactions?.map((trans: Transaction) => (
          <TransactionCard key={trans._id} filteredCategory={filteredCategory} transaction={trans} />
        ))
        : filteredCategory?.transactions?.map((trans: Transaction) => (
          <TransactionCard key={trans._id} filteredCategory={filteredCategory} transaction={trans} />
        ))}
      <h1>{categorySelected}</h1>
    </section>
  )
}

export default TransactionList
