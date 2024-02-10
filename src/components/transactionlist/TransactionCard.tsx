interface Props {
  filteredCategory: Category | Category[]
}

const TransactionCard = ({ filteredCategory }: Props): JSX.Element => {
  console.log(filteredCategory)
  return (
      <article className="px-4 flex justify-between items-center h-12 w-full shadow-sm shadow-slate-700">
          <div className="flex items-center justify-center gap-4 md:gap-8">
              <span className="font-normal text-[10px] md:font-semibold md:text-lg">Pago</span>
              <span className="font-light text-[10px] text-slate-400 md:font-normal md:text-lg">Netflix</span>
          </div>
          <span className="font-light text-[10px] md:font-normal md:text-lg">$-3.539</span>
          <span className="font-light text-[10px] md:font-normal md:text-lg">Suscripciones</span>
          <span className="font-light text-[10px] md:font-normal md:text-lg">01/01/2024</span>
    </article>
  )
}

export default TransactionCard
