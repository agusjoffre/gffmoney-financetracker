import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'

interface Props { }

const SelectCurrency = (props: Props): JSX.Element => {
  const [currencyCode, setCurrencyCode] = useState('')
  const [inflationRate, setInflationRate] = useState(0)
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    /* get currencySchema(code) from database & setInflationRate
      get balance from user & setBalance
      calculateInflation(balance, inflationRate)
    */
  }, [currencyCode])

  return (
    <article className='flex flex-col gap-4'>
      <Select name='currency' disabled={true} onValueChange={(value: string) => { setCurrencyCode(value) }}>
      <SelectTrigger className='w-full bg-[var(--sky)] rounded-xl border-none text-[var(--dark)]'>
        <SelectValue placeholder='Select your currency'/>
      </SelectTrigger>
      <SelectContent className='w-full bg-[var(--sky)] rounded-xl border-none text-[var(--dark)] md:font-semibold cursor-pointer'>
        <SelectItem className='cursor-pointer' value=''>None</SelectItem>
        <SelectItem className='cursor-pointer' value='ARS'>ARS</SelectItem>
      </SelectContent>
          </Select>
          <Button disabled={true} type='submit' className='w-full bg-[var(--pink)] rounded-xl border-none text-[var(--dark)] md:font-semibold hover:bg-pink-100'>
              Apply
          </Button>
    </article>
  )
}

export default SelectCurrency
