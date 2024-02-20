import ButtonSubmit from '../ButtonSubmit'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select'
import { createProjectionTransaction } from '@/lib/controllers/projectionsControl'

const NewProjectionForm = (): JSX.Element => {
  return (
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      <form action={createProjectionTransaction} className='w-full flex flex-col gap-6'>
          <Label htmlFor='name' className='flex flex-col gap-2'>
              <span>Name of transaction</span>
              <Input className='rounded-xl bg-[var(--dark)] text-[var(--sky)]' required={true} name='name' id='name' type='text' placeholder='e.g Freelancing'/>
          </Label>
          <Label htmlFor='amount' className='flex flex-col gap-2'>
              <span>Amount</span>
        <Input
          className='rounded-xl bg-[var(--dark)] text-[var(--sky)]'
          required={true} name='amount' id='amount' type='number' min={0} step={0.01} placeholder='e.g 400' />
      </Label>
      <Label htmlFor='type' className='flex flex-col gap-2'>
        <span>Transaction type</span>
          <Select name='type' required={true}>
            <SelectTrigger className='rounded-xl bg-[var(--dark)] text-[var(--sky)]'>
              <SelectValue placeholder='Transaction type'/>
            </SelectTrigger >
            <SelectContent className='rounded-xl bg-[var(--dark)] text-[var(--sky)] '>
              <SelectItem className='cursor-pointer hover:text-base' value='income'>Income</SelectItem>
              <SelectItem className='cursor-pointer hover:text-base' value='outcome'>Outcome</SelectItem>
            </SelectContent>
          </Select>
      </Label>
      <ButtonSubmit text='Create new projection' type='projection' />
    </form>
  )
}

export default NewProjectionForm
