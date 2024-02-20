/* eslint-disable @typescript-eslint/no-misused-promises */
import { createCategory } from '@/lib/controllers/transactionControl'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'

interface Props {

}

const NewCategoryForm = (): JSX.Element => {
  return (
    <form action={createCategory} className='w-full flex flex-col gap-6'>
      <Label htmlFor='name' className='flex flex-col gap-2'>
        <span>Category name</span>
        <Input className='rounded-xl bg-[var(--dark)] text-[var(--sky)]' required={true} id='name' name='name' type='text' placeholder='e.g Work'/>
      </Label>
      <Label htmlFor='importance' className='flex flex-col gap-2'>
        <span>Importance</span>
        <Select name='importance'>
          <SelectTrigger className='rounded-xl bg-[var(--dark)] text-[var(--sky)]'>
            <SelectValue placeholder='Importance'/>
          </SelectTrigger>
          <SelectContent className='rounded-xl bg-[var(--dark)] text-[var(--sky)] '>
            <SelectItem className='cursor-pointer hover:text-base' value='0'>Low</SelectItem>
            <SelectItem className='cursor-pointer hover:text-base' value='1'>Medium</SelectItem>
            <SelectItem className='cursor-pointer hover:text-base' value='2'>High</SelectItem>
          </SelectContent>
        </Select>
      </Label>
      <Button type='submit' variant={'outline'} className='w-full rounded-xl text-[var(--dark)]'>Create new category</Button>
    </form>
  )
}

export default NewCategoryForm
