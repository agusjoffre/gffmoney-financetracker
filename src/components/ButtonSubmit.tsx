'use client'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'

interface Props {
  text: string
  type: 'transaction' | 'category' | 'projection'
}

const ButtonSubmit = ({ text, type }: Props): JSX.Element => {
  const { pending } = useFormStatus()

  return (
          <Button
          variant={'outline'}

              disabled={pending}
          className='w-full rounded-xl text-[var(--dark)]' type='submit'>
          {pending ? 'Creating...' : `${text}`}
        </Button>
  )
}

export default ButtonSubmit
