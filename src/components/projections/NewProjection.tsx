'use client'
import { useState } from 'react'
import { Button } from '../ui/button'
import NewProjectionForm from './NewProjectionForm'
interface Props { }

const NewProjection = (props: Props): JSX.Element => {
  const [open, setOpen] = useState(false)
  return (
      <section className='bg-transparent bg-opacity-80 flex flex-col gap-4'>
            <Button
              onClick={() => { setOpen(!open) }}
              className='text-md font-semibold text-slate-900
               w-full rounded-xl bg-slate-300
               shadow-sm shadow-neutral-900'>
              {open ? 'Close' : 'Add new transaction'}
          </Button>
          {open && <NewProjectionForm />}
    </section>
  )
}

export default NewProjection
