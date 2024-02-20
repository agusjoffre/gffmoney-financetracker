import { TableCell, TableRow } from '@/components/ui/table'
import { type ProjectionTransaction } from '@/types/types'
interface Props {
  transaction: ProjectionTransaction
}

const ProjectionCard = ({ transaction }: Props): JSX.Element => {
  return (
    <TableRow className=' rounded-xl font-medium text-xs'>
      <TableCell className='text-center'>{transaction?.type.toUpperCase()}</TableCell>
      <TableCell className='text-center'>{transaction?.name}</TableCell>
      <TableCell
        className='text-center'>
        {transaction?.type === 'income' ? '+' : '-'}
        {transaction?.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </TableCell>
    </TableRow>
  )
}

export default ProjectionCard
