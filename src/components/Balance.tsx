import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ArrowUpRightSquareIcon, ArrowDownRightSquareIcon, BarChart3Icon } from 'lucide-react'

interface Props {
  amount: number
  type: 'income' | 'outcome' | 'balance'
}

const BalanceCard = ({ amount, type }: Props): JSX.Element => {
  const amnt = amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

  let backgroundColor
  let color
  switch (type) {
    case 'income':
      backgroundColor = 'var(--sky)'
      color = 'var(--dark)'
      break
    case 'outcome':
      backgroundColor = 'var(--pink)'
      color = 'var(--dark-pink)'
      break
    case 'balance':
      backgroundColor = 'var(--dark)'
      color = 'var(--sky)'
  }

  const cardStyleByType = {
    backgroundColor,
    color
  }

  return (
    <Card className='w-full rounded-2xl border-none shadow-lg md:shadow-2xl' style={cardStyleByType}>
        <CardHeader className='flex justify-between flex-row items-center'>
            <CardTitle>{type === 'balance' ? 'Balance' : type === 'income' ? 'Income' : 'Outcome'}</CardTitle>
              <CardDescription className='sm:text-6xl text-2xl' style={cardStyleByType}>
                  {type === 'balance' ? <BarChart3Icon/> : type === 'income' ? <ArrowUpRightSquareIcon/> : <ArrowDownRightSquareIcon/>}
              </CardDescription>
        </CardHeader>
        <CardContent>
            <p className='sm:text-6xl sm:font-semibold text-right text-3xl'>{type === 'income' ? '+ ' : type === 'outcome' ? '- ' : null}{amnt}</p>
        </CardContent>
    </Card>

  )
}

export default BalanceCard
