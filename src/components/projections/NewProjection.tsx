'use client'
import { Button } from '../ui/button'

const NewProjection = (): JSX.Element => {
  return (
  <article className='flex md:flex-row gap-4 md:gap-8 md:justify-end'>
          <Button className='bg-[var(--pink)] text-[var(--dark)] md:rounded-xl text-base font-medium hover:bg-pink-100'>Add new projection</Button>
    </article>
  )
}

export default NewProjection
