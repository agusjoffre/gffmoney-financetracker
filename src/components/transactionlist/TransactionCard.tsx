import { type Transaction, type Category } from '@/types/types'

interface Props {
  filteredCategory: Category | undefined | null
  transaction: Transaction
}

const TransactionCard = ({ filteredCategory, transaction }: Props): JSX.Element => {
  const date = new Date(transaction?.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' })

  return (
    <article className="px-4 flex justify-between items-center h-12 w-full shadow-sm shadow-slate-700" >
          <div className="flex items-center justify-center gap-4 md:gap-8">
              <span className="text-start font-normal text-[10px] md:font-semibold md:text-lg">{transaction?.type.toUpperCase()}</span>
              <span className="text-start font-light text-[10px] text-slate-400 md:font-normal md:text-lg">{transaction?.name}</span>
          </div>
      <span className="text-start font-light text-[10px] md:font-normal md:text-lg" style={{ color: transaction?.type === 'income' ? 'green' : 'red' }}>
        {transaction?.type === 'income' ? '+' : '-'}
        {' '}
        $ {transaction?.amount}
      </span>
      {(filteredCategory != null)
        ? <span className="text-start font-light text-[10px] md:font-normal md:text-lg">{filteredCategory?.name}</span>
        : <span className="text-start font-light text-[10px] md:font-normal md:text-lg">{transaction?.categoryName}</span>
      }

      <span className="text-start font-light text-[10px] md:font-normal md:text-lg">{date}</span>
      {(filteredCategory != null) &&
      <span>
        { filteredCategory?.importance === 0 ? '🟢' : filteredCategory?.importance === 1 ? '🟡' : '🔴'}
        </span>
      }

    </article>
  )
}

export default TransactionCard
