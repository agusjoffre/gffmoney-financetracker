/* eslint-disable @typescript-eslint/no-misused-promises */
import { createCategory } from '@/lib/controllers/transactionControl'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Button } from '../ui/button'

interface Props {}

const NewCategoryForm = (props: Props): JSX.Element => {
  return (
    <form action={createCategory}>
      <Label htmlFor='name'>
        <span>Category name</span>
        <Input required={true} id='name' name='name' type='text' placeholder='e.g Work'/>
      </Label>
      <Label htmlFor='importance'>
        <span>Importance</span>
        <Select name='importance'>
          <SelectTrigger>
            <SelectValue placeholder='Importance'/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='0'>Low</SelectItem>
            <SelectItem value='1'>Medium</SelectItem>
            <SelectItem value='2'>High</SelectItem>
          </SelectContent>
        </Select>
      </Label>
      <Button type='submit' className='w-full'>Create</Button>
    </form>
  )
}

export default NewCategoryForm
