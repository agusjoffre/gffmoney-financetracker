'use client'
import { useState } from 'react'
import { Button } from '../ui/button'
import NewTransactionForm from './NewTransactionForm'
import NewCategoryForm from './NewCategoryForm'
import { type Category } from '@/types/types'

interface Props {
  uniqueCategories: Category[]
}

const NewTransaction = ({ uniqueCategories }: Props): JSX.Element => {
  const [openTrans, setOpenTrans] = useState(false)
  const [openCat, setOpenCat] = useState(false)
  return (
    <>
      <section className='bg-slate-900 bg-opacity-10 rounded-lg flex flex-col gap-4'>
          <Button
              onClick={() => { setOpenTrans(!openTrans) }}
              className='text-md font-semibold text-white
               w-full rounded-lg bg-transparent
               shadow-sm shadow-neutral-900'>
              {openTrans ? 'Close' : 'Add new transaction'}
      </Button>
      {openTrans && <NewTransactionForm uniqueCategories={uniqueCategories}/>}
      </section>
      <section className='bg-slate-900 bg-opacity-10 rounded-lg flex flex-col gap-4'>
          <Button
              onClick={() => { setOpenCat(!openCat) }}
              className='text-md font-semibold text-white
               w-full rounded-lg bg-transparent
               shadow-sm shadow-neutral-900'>
              {openCat ? 'Close' : 'Add new category'}
      </Button>
      {openCat && <NewCategoryForm />}
      </section>
    </>
  )
}

export default NewTransaction
