'use client'
import { type Transaction, type Category, type TransactionType } from '@/types/types'
import CategoriesSelect from './CategoriesSelect'
import TransactionCard from './TransactionCard'
import { getOneCateogoryByName, getAllCategories, getIncomeAndOutcomeTransactions } from '@/lib/controllers/transactionControl'
import { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Input } from '../ui/input'
import TypeSelect from './TypeSelect'

interface Props {
  uniqueCategories: Category[]
}

const TransactionList = ({ uniqueCategories }: Props): JSX.Element => {
  const [typeSelected, setTypeSelected] = useState<TransactionType | 'all'>('all')
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
    <div className='w-full h-full bg-[var(--pink)] p-5 rounded-xl mb-11'>
      <div className='py-4'>
        <h1 className='text-[var(--dark)] text-xl font-bold'>Your transactions</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-4 pb-5'>
        <Input className='w-full bg-[var(--dark)] text-[var(--pink)] rounded-xl' type='text' placeholder='Search by name' />
        <CategoriesSelect setCategorySelected={setCategorySelected} uniqueCategories={uniqueCategories} />
        <TypeSelect setTypeSelected={setTypeSelected} />
      </div>

      <Table className='w-full bg-[var(--dark-pink)] rounded-xl shadow-xl text-[var(--dark)] hover:bg-[var(--dark-pink)]'>
  <TableCaption className='text-[var(--dark)]'>A list of your transactions.</TableCaption>
        <TableHeader>
    <TableRow className='rounded-xl hover:bg-transparent font-light'>
      <TableHead className="text-center font-light text-white text-xs">Type</TableHead>
      <TableHead className="text-center font-light text-white text-xs">Name</TableHead>
      <TableHead className="text-center font-light text-white text-xs">Amount</TableHead>
      <TableHead className="text-center font-light text-white text-xs">Category</TableHead>
      <TableHead className="text-center font-light text-white text-xs">Date</TableHead>
    </TableRow>
  </TableHeader>
        <TableBody>
    {isAll
      ? allTransactions?.map((trans: Transaction) => (
        <TransactionCard key={trans._id} filteredCategory={filteredCategory} transaction={trans} />
      ))
      : filteredCategory?.transactions?.map((trans: Transaction) => (
        <TransactionCard key={trans._id} filteredCategory={filteredCategory} transaction={trans} />
      ))}
  </TableBody>
      </Table>
  </div>

  )
}

export default TransactionList
