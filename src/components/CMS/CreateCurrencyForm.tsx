'use client'
import { createCurrency } from '@/lib/controllers/currencyControl'
import { useFormStatus } from 'react-dom'
interface Props {}

const CreateCurrencyForm = (props: Props): JSX.Element => {
  const { pending } = useFormStatus()
  return (
      <form action={createCurrency} className='flex flex-col gap-4'>
          <input type="text" placeholder="Code" name="code" className='w-full' maxLength={3} minLength={3}/>
          <input type="number" placeholder="This month estimated inflation rate" name="inflationRate" className='w-full' min={0}/>
          <input type="number" placeholder="Exchange rate. 1 USD = (your currency)" name="exchangeRate" className='w-full' min={1}/>
          <button className='w-full bg-[var(--pink)] rounded-xl border-none text-[var(--dark)]' type='submit'>{pending ? 'Creating...' : 'Create'}</button>
    </form>
  )
}

export default CreateCurrencyForm
