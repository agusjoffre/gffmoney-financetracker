/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import { type Transaction, type Category } from '@/types/types'
import { TableCell, TableRow } from '@/components/ui/table'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Button } from '../ui/button'
import { deleteTransaction } from '@/lib/controllers/transactionControl'

interface Props {
  filteredCategory: Category | undefined | null
  transaction: Transaction
}

const TransactionCard = ({ filteredCategory, transaction }: Props): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const date = new Date(transaction?.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })

  let backgroundColor
  let color

  if (filteredCategory?.importance != null) {
    switch (filteredCategory.importance) {
      case 0:
        backgroundColor = 'var(--dark)'
        color = 'white'
        break
      case 1:
        backgroundColor = 'var(--pink)'
        color = 'white'
        break
      case 2:
        backgroundColor = 'var(--dark-pink)'
        color = 'white'
        break
      default:
        backgroundColor = 'var(--dark-pink)'
        color = 'var(--sky)'
        break
    }
  } else {
    backgroundColor = 'var(--dark-pink)'
    color = 'white'
  }

  const cardStyleByType = {
    backgroundColor,
    color
  }

  return (
    <Popover >
      <PopoverTrigger asChild className='hover:bg-[var(--pink)]'>
        <TableRow className='cursor-pointer hover:bg-[var(--pink)] w-full h-full rounded-xl font-medium text-xs' style={cardStyleByType}>
          <TableCell className=' text-center '>{transaction?.type.toUpperCase()}</TableCell>
          <TableCell className=' text-center'>{transaction?.name}</TableCell>
          <TableCell className=' text-center'>{transaction?.type === 'income' ? '+' : '-'} {transaction?.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</TableCell>
          <TableCell className=' text-center'>{(filteredCategory != null) ? filteredCategory?.name : transaction?.categoryName}</TableCell>
          <TableCell className=' text-center'>{date}</TableCell>
        </TableRow>
      </PopoverTrigger>
      <PopoverContent className='bg-[var(--dark)] border-none rounded-xl text-[var(--sky)]'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h1 className='text-lg font-bold text-[var(--light-dark)]'>{transaction?.name}</h1>
          <h2 className='text-lg font-bold text-[var(--pink)]'>{transaction?.type === 'income' ? '+' : '-'} {transaction?.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h2>
          <Button className='bg-[var(--sky)] text-[var(--dark)]
           md:rounded-xl text-base font-medium
            hover:bg-sky-100 w-full'>
            Edit
          </Button>
          <Button className='bg-[var(--pink)] text-[var(--dark)]
           md:rounded-xl text-base font-medium
            hover:bg-pink-100 w-full'
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          onClick={async () => { await deleteTransaction(transaction._id) }}
          >
            Delete
          </Button>
        </div>
      </PopoverContent>
    </Popover>

  )
}

export default TransactionCard
