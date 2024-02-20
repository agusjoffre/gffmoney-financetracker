/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'
import { types } from '@/lib/constants'
import { createTransaction } from '@/lib/controllers/transactionControl'
import { type Category } from '@/types/types'
interface Props {
  uniqueCategories: Category[]
}
const NewTransactionForm = ({ uniqueCategories }: Props): JSX.Element => {
  return (
      <form action={createTransaction} className='w-full flex flex-col gap-6'>
          <Label htmlFor='name' className='flex flex-col gap-2'>
              <span>Transaction name</span>
              <Input className='rounded-xl bg-[var(--dark)] text-[var(--sky)]' required={true} id='name' name='name' type='text' placeholder='e.g Freelancing' />
          </Label>
          <Label htmlFor='amount' className='flex flex-col gap-2'>
              <span>Amount</span>
                  <Input className='rounded-xl bg-[var(--dark)] text-[var(--sky)]' required={true} id='amount' name='amount' type='number' placeholder='e.g 400'/>
          </Label>
          <Label htmlFor='type' className='flex flex-col gap-2'>
              <span>Transaction type</span>
          <Select name='type' required={true} >
              <SelectTrigger className='rounded-xl bg-[var(--dark)] text-[var(--sky)]'>
                  <SelectValue placeholder='Transaction type'/>
              </SelectTrigger>
              <SelectContent className='rounded-xl bg-[var(--dark)] text-[var(--sky)] '>
                  {types.map((type) => (
                      <SelectItem className='cursor-pointer hover:text-base' key={type} value={type}>
                          {type.toUpperCase()}
                      </SelectItem>
                  ))}
              </SelectContent>
              </Select>
          </Label>
          <Label htmlFor='category' className='flex flex-col gap-2'>
              <span>Category</span>
              <Select name='category' required={true}>
                  <SelectTrigger className='rounded-xl bg-[var(--dark)] text-[var(--sky)]'>
                      <SelectValue placeholder='Category'/>
                  </SelectTrigger>
                  <SelectContent className='rounded-xl bg-[var(--dark)] text-[var(--sky)] '>

                       {uniqueCategories.map((category) => (
                          <SelectItem className='cursor-pointer hover:text-base' key={category._id} value={category.name}>
                              {category.name.toUpperCase()}
                          </SelectItem>
                       ))}
                  </SelectContent>
              </Select>
          </Label>
          <Button variant={'outline'} className='w-full rounded-xl text-[var(--dark)]' type='submit'>Create new transaction</Button>
    </form>
  )
}

export default NewTransactionForm
