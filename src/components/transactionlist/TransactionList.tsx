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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
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
    <div className='w-full h-full bg-[var(--pink)] p-5 rounded-xl mb-11'>
      <div className='py-4'>
        <h1 className='text-[var(--dark)] text-xl font-bold'>Your transactions</h1>
      </div>
      <div className='w-full flex md:flex-row flex-col md:items-center md:gap-24 pb-5'>
        <Input className='w-full bg-[var(--dark)] text-[var(--pink)]' type='text' placeholder='Search by name' />
        <CategoriesSelect setCategorySelected={setCategorySelected} uniqueCategories={uniqueCategories} />
      </div>

      <Table className='w-full bg-[var(--dark-pink)] rounded-xl shadow-xl text-[var(--dark)] hover:bg-[var(--dark-pink)]'>
  <TableCaption className='text-[var(--dark)]'>A list of your transactions.</TableCaption>
        <TableHeader>
    <TableRow className='rounded-xl hover:bg-transparent'>
      <TableHead className="text-center text-white">Type</TableHead>
      <TableHead className="text-center text-white">Name</TableHead>
      <TableHead className="text-center text-white">Amount</TableHead>
      <TableHead className="text-center text-white">Category</TableHead>
      <TableHead className="text-center text-white">Date</TableHead>
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
