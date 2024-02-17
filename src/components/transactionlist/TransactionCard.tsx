import { type Transaction, type Category } from '@/types/types'
import { TableCell, TableRow } from '@/components/ui/table'

interface Props {
  filteredCategory: Category | undefined | null
  transaction: Transaction
}

const TransactionCard = ({ filteredCategory, transaction }: Props): JSX.Element => {
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
    <TableRow className=' rounded-xl font-medium text-xs' style={cardStyleByType}>
        <TableCell className='text-center'>{transaction?.type.toUpperCase()}</TableCell>
        <TableCell className='text-center'>{transaction?.name}</TableCell>
        <TableCell className='text-center'>{transaction?.type === 'income' ? '+' : '-'} ${transaction?.amount}</TableCell>
        <TableCell className='text-center'>{(filteredCategory != null) ? filteredCategory?.name : transaction?.categoryName}</TableCell>
        <TableCell className='text-center'>{date}</TableCell>
    </TableRow>

  )
}

export default TransactionCard
