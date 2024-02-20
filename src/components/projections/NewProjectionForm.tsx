import ButtonSubmit from '../ButtonSubmit'
import { Button } from '../ui/button'
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
      <form action={createProjectionTransaction}>
          <Label htmlFor='name'>
              <span>Name of transaction</span>
              <Input required={true} name='name' id='name' type='text' placeholder='e.g Freelancing'/>
          </Label>
          <Label htmlFor='amount'>
              <span>Amount</span>
              <Input required={true} name='amount' id='amount' type='number' min={0} step={0.01} placeholder='e.g 400'/>
      </Label>
      <Label>
        <span>Transaction type</span>
          <Select name='type' required={true}>
            <SelectTrigger>
              <SelectValue placeholder='Transaction type'/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='income'>Income</SelectItem>
              <SelectItem value='outcome'>Outcome</SelectItem>
            </SelectContent>
          </Select>
      </Label>
      <ButtonSubmit text='Create new projection' type='projection' />
    </form>
  )
}

export default NewProjectionForm
