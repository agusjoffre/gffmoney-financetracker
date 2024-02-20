'use client'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'

import NewTransactionForm from './NewTransactionForm'
import { type Category } from '@/types/types'
import { Button } from '../ui/button'

interface Props {
  uniqueCategories: Category[]
}

const NewTransaction = ({ uniqueCategories }: Props): JSX.Element => {
  return (
    <article className='flex md:flex-row'>
      <Drawer >
        <DrawerTrigger >
          <Button className='bg-[var(--pink)] text-[var(--dark)] md:rounded-xl text-base font-medium hover:bg-pink-100'>Add new transaction</Button>
        </DrawerTrigger>
  <DrawerContent className='w-full bg-[var(--sky)] flex flex-col justify-center items-center gap-2'>
    <DrawerHeader className='w-full flex-col flex gap-4 sm:w-3/4'>
      <DrawerTitle className='text-center text-lg'>Add a new transaction</DrawerTitle>
      <NewTransactionForm uniqueCategories={uniqueCategories}/>
    </DrawerHeader>
    <DrawerFooter className='w-full sm:w-3/4'>
      <DrawerClose >
        <Button className='text-base rounded-xl w-full bg-[var(--pink)] text-[var(--dark)] hover:bg-[var(--dark-pink)] hover:text-[var(--pink)]'>Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

    </article>
  )
}

export default NewTransaction
