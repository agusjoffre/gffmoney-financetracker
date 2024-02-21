'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useEffect, useState } from 'react'
import { getOneCurrency } from '@/lib/controllers/currencyControl'
import { updateLostWithInflation } from '@/lib/controllers/userControl'
import { calculateLostByInflation } from '@/lib/constants'

interface Props {
  balanceTotal: number
}

const SelectCurrency = ({ balanceTotal }: Props): JSX.Element => {
  const [currencyCode, setCurrencyCode] = useState('ARS')
  const [inflationRate, setInflationRate] = useState(0)
  console.log(balanceTotal)
  console.log('inflation', inflationRate)
  useEffect(() => {
    /* get currencySchema(code) from database & setInflationRate */
    async function getCurrency (): Promise<void> {
      const { inflationRate } = await getOneCurrency(currencyCode)
      setInflationRate(inflationRate)
    }
    getCurrency().catch(console.error)

    async function update (): Promise<void> {
      const lost: number = calculateLostByInflation(balanceTotal, inflationRate)
      console.log('lost', lost)
      await updateLostWithInflation(lost)
    }

    update().catch(console.error)
  }, [currencyCode])

  return (
    <article className='flex flex-col gap-4'>
      <Select name='currency' onValueChange={(value: string) => { setCurrencyCode(value) }}>
      <SelectTrigger className='w-full bg-[var(--sky)] rounded-xl border-none text-[var(--dark)]'>
        <SelectValue placeholder='Select your currency'/>
      </SelectTrigger>
      <SelectContent className='w-full bg-[var(--sky)] rounded-xl border-none text-[var(--dark)] md:font-semibold cursor-pointer'>
        <SelectItem className='cursor-pointer' value='none'>None</SelectItem>
        <SelectItem className='cursor-pointer' value='ARS'>ARS</SelectItem>
      </SelectContent>
          </Select>
    </article>
  )
}

export default SelectCurrency
