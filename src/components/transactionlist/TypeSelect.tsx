'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { type TransactionType } from '@/types/types'

interface Props {
  setTypeSelected: (typeSelected: TransactionType | 'all') => void
}

const TypeSelect = ({ setTypeSelected }: Props): JSX.Element => {
  return (
      <Select onValueChange={(value: TransactionType | 'all') => { setTypeSelected(value) }}>
      <SelectTrigger className='w-fit border-none bg-[var(--dark-pink)] rounded-lg md:rounded-xl text-white hover:bg-[var(--dark-pink)]'>
        <SelectValue placeholder='Type'/>
      </SelectTrigger>
      <SelectContent className='w-full bg-[var(--dark-pink)] rounded-lg md:rounded-xl text-white border-none hover:bg-[var(--dark-pink)] max-w-44'>
        <SelectItem className='w-full cursor-pointer hover:text-base' value='all'>All</SelectItem>
        <SelectItem className='w-full cursor-pointer hover:text-base' value='income'>Income</SelectItem>
        <SelectItem className='w-full cursor-pointer hover:text-base' value='outcome'>Outcome</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default TypeSelect
