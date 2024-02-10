import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from '../ui/button'

interface Props { }

const SelectCurrency = (props: Props): JSX.Element => {
  return (
    <form action="" className='flex flex-col gap-4'>
      <Select name='currency' disabled={true}>
      <SelectTrigger className='w-full bg-[var(--sky)] rounded-xl border-none text-[var(--dark)]   '>
        <SelectValue placeholder='Select your currency'/>
      </SelectTrigger>
      <SelectContent className='w-full bg-[var(--sky)] rounded-xl border-none text-[var(--dark)] md:font-semibold cursor-pointer'>
        <SelectItem className='cursor-pointer' value='USD'>US Dollar</SelectItem>
        <SelectItem className='cursor-pointer' value='ARS'>Peso argentino</SelectItem>
      </SelectContent>
          </Select>
          <Button disabled={true} type='submit' className='w-full bg-[var(--pink)] rounded-xl border-none text-[var(--dark)] md:font-semibold hover:bg-pink-100'>
              Apply
          </Button>
    </form>
  )
}

export default SelectCurrency
