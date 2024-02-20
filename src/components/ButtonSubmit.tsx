'use client'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'

interface Props {
  text: string
  type: 'transaction' | 'category' | 'projection'
}

const ButtonSubmit = ({ text, type }: Props): JSX.Element => {
  const { pending } = useFormStatus()
  const { toast } = useToast()

  return (
          <Button
          variant={'outline'}
              onClick={() => toast({ title: 'Information', description: 'Your request has been sent' })}
              disabled={pending}
          className='w-full rounded-xl text-[var(--dark)]' type='submit'>
          {pending ? 'Creating...' : `${text}`}
        </Button>
  )
}

export default ButtonSubmit
