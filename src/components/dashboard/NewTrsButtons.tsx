import { Button } from '../ui/button'
interface Props { }

const NewTransactionsAndCategories = (props: Props): JSX.Element => {
  return (
      <article className='flex md:flex-row gap-4 md:gap-8'>
          <Button className='bg-[var(--pink)] text-[var(--dark)] md:rounded-xl text-base font-medium hover:bg-pink-100'>Add new transaction</Button>
          <Button className='bg-[var(--pink)] text-[var(--dark)] md:rounded-xl text-base font-medium hover:bg-pink-100'>Add new category</Button>
    </article>
  )
}

export default NewTransactionsAndCategories
