'use client'
import { Button } from '../ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer'
import NewProjectionForm from './NewProjectionForm'

const NewProjection = (): JSX.Element => {
  return (
  <article className='flex md:flex-row justify-end'>
      <Drawer>
        <DrawerTrigger className='justify-end' >
          <Button className='bg-[var(--sky)] text-[var(--dark)]
           md:rounded-xl text-base font-medium hover:bg-sky-100'>Add new projection</Button>
        </DrawerTrigger>
  <DrawerContent className='w-full bg-[var(--sky)] flex flex-col justify-center items-center gap-2'>
    <DrawerHeader className='w-full flex-col flex gap-4 sm:w-3/4'>
      <DrawerTitle className='text-center text-lg'>Add a new projection</DrawerTitle>
      <NewProjectionForm />
    </DrawerHeader>
    <DrawerFooter className='w-full sm:w-3/4'>
      <DrawerClose >
              <Button
                className='text-base rounded-xl
                 w-full bg-[var(--pink)] text-[var(--dark)] hover:bg-[var(--dark-pink)]
                  hover:text-[var(--pink)]'>
                Cancel
              </Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

    </article>
  )
}

export default NewProjection
