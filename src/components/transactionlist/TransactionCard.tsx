import { type Transaction, type Category } from '@/types/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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
        backgroundColor = 'var(--dark)'
        color = 'var(--sky)'
        break
    }
  } else {
    backgroundColor = 'var(--dark)'
    color = 'var(--sky)'
  }

  const cardStyleByType = {
    backgroundColor,
    color
  }

  return (
 <article className="border-none shadow-lg shadow-[var(--sky)] md:shadow-2xl rounded-xl md:rounded-2xl p-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-around" style={cardStyleByType} >
          <div className="flex flex-col md:flex-row w-fit gap-8">
              <p className="text-sm font-medium text-[var(--light-dark)]">{transaction?.type.toUpperCase()}</p>
              <p className="text-base font-semibold whitespace-nowrap truncate">{transaction?.name}</p>
      </div>
      <div className="flex justify-center items-center p-0">
        <p className="text-xl font-bold text-center">
        {transaction?.type === 'income' ? '+' : '-'}
        {' '}
        $ {transaction?.amount}
      </p>
      </div>
      {(filteredCategory != null)
        ? <span className="whitespace-nowrap truncate">{filteredCategory?.name}</span>
        : <span className="whitespace-nowrap truncate">{transaction?.categoryName}</span>
      }

      <span className="">{date}</span>
      {(filteredCategory != null) &&
      <span>
        { filteredCategory?.importance === 0 ? '🟢' : filteredCategory?.importance === 1 ? '🟡' : '🔴'}
        </span>
      }

    </article>
  )
}

export default TransactionCard
