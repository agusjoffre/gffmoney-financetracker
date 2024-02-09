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
      <form action={createTransaction}>
          <Label htmlFor='name'>
              <span>Transaction name</span>
              <Input required={true} id='name' name='name' type='text' placeholder='e.g Freelancing' />
          </Label>
          <Label htmlFor='amount'>
              <span>Amount</span>
                  <Input required={true} id='amount' name='amount' type='number' placeholder='e.g 400'/>
          </Label>
          <Label htmlFor='type'>
              <span>Transaction type</span>
          <Select name='type' required={true}>
              <SelectTrigger>
                  <SelectValue placeholder='Transaction type'/>
              </SelectTrigger>
              <SelectContent>
                  {types.map((type) => (
                      <SelectItem key={type} value={type}>
                          {type.toUpperCase()}
                      </SelectItem>
                  ))}
              </SelectContent>
              </Select>
          </Label>
          <Label htmlFor='category'>
              <span>Category</span>
              <Select name='category' required={true}>
                  <SelectTrigger>
                      <SelectValue placeholder='Category'/>
                  </SelectTrigger>
                  <SelectContent>

                       {uniqueCategories.map((category) => (
                          <SelectItem key={category._id} value={category.name}>
                              {category.name.toUpperCase()}
                          </SelectItem>
                       ))}
                  </SelectContent>
              </Select>
          </Label>
          <Label htmlFor='isMonthly' className='flex justify-center items-center gap-4'>
              <span>Is a monthly transaction?</span>
              <Input className='w-4' id='isMonthly' type='checkbox' />
          </Label>
          <Button className='w-full' type='submit'>Add transaction</Button>
    </form>
  )
}

export default NewTransactionForm
