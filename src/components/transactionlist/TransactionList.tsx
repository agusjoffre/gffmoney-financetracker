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
  const [filteredCategory, setCategory] = useState<Category | Category[]>()

  useEffect(() => {
    async function get (): Promise<void> {
      if (categorySelected !== 'all') {
        const categoryFiltered = await getOneCateogoryByName(categorySelected)
        setCategory(categoryFiltered)
      } else {
        const allCategories = await getAllCategories()
        setCategory(allCategories)
      }
    }
    get().catch(console.error)
  }, [categorySelected])

  return (
    <section className="h-screen w-full flex flex-col gap-4 pb-16">
      <CategoriesSelect uniqueCategories={uniqueCategories} setCategorySelected={setCategorySelected}/>
        <TransactionCard filteredCategory={filteredCategory}/>
        <TransactionCard />

    </section>
  )
}

export default TransactionList
