'use client'
import { type Transaction, type Category } from '@/types/types'
import CategoriesSelect from './CategoriesSelect'
import TransactionCard from './TransactionCard'
import { getOneCateogoryByName, getAllCategories } from '@/lib/controllers/transactionControl'
import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

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
    <Card className='border-none shadow-xl min-w-full max-w-full w-full flex flex-col rounded-lg md:rounded-xl bg-[var(--pink)]'>
      <CardHeader className='flex md:flex-row justify-between items-center'>
        <CardTitle className='text-[var(--dark)] md:font-bold md:text-2xl'>
          Your transactions
        </CardTitle>
        <CardDescription className='flex md:flex-row gap-2 items-center'>
          <p className='text-[var(--dark)] md:font-medium md:text-sm'>Filter by</p>
          <CategoriesSelect uniqueCategories={uniqueCategories} setCategorySelected={setCategorySelected} />
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4 w-full border-none'>
        {isAll
          ? allTransactions?.map((trans: Transaction) => (
            <TransactionCard key={trans._id} filteredCategory={filteredCategory} transaction={trans} />
          ))
          : filteredCategory?.transactions?.map((trans: Transaction) => (
            <TransactionCard key={trans._id} filteredCategory={filteredCategory} transaction={trans} />
          ))}
      </CardContent>
    </Card>

  )
}

export default TransactionList
