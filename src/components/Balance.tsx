import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface Props {
  amount: number
  type: 'income' | 'outcome' | 'balance'
}

const BalanceCard = ({ amount, type }: Props): JSX.Element => {
  const amnt = amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
  return (
    <Card className='md:w-full w-full h-full'>
        <CardHeader className='flex justify-between flex-row items-center'>
            <CardTitle>{type === 'balance' ? 'Balance' : type === 'income' ? 'Income' : 'Outcome'}</CardTitle>
              <CardDescription className='sm:text-6xl text-2xl text-white '>
                  {type === 'balance' ? '$' : type === 'income' ? '⬆' : '⬇'}
              </CardDescription>
        </CardHeader>
        <CardContent>
            <p className='sm:text-6xl sm:font-semibold text-right text-3xl'>{amnt}</p>
        </CardContent>
    </Card>

  )
}

export default BalanceCard
