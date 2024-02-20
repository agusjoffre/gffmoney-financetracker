import BalanceCard from '@/components/Balance'
import TransactionList from '@/components/transactionlist/TransactionList'
import { getAllCategories } from '@/lib/controllers/transactionControl'
import { initializeUser, getMoney } from '@/lib/controllers/userControl'
import { Info } from 'lucide-react'
import { type Category } from '@/types/types'
import SelectCurrency from '@/components/dashboard/SelectCurrency'
import NewTransactionsAndCategories from '@/components/dashboard/NewTrsButtons'
import ProjectionList from '@/components/projections/ProjectionList'
import NewProjection from '@/components/projections/NewProjection'
import { getAllTransactionsProjection, getProjectionMoney } from '@/lib/controllers/projectionsControl'

const DashboardPage = async (): Promise<JSX.Element> => {
  const allCategories: Category[] = await getAllCategories()
  const uniqueCategories: Category[] = allCategories.filter((category, index, self) => index === self.findIndex((cat) => cat.name === category.name))
  const { incomeAmount, outcomeAmount, balance } = await getMoney()
  const allProjectionTransactions = await getAllTransactionsProjection()
  const projectionMoney = await getProjectionMoney()

  await initializeUser()

  return (
    <main className="flex flex-col md:gap-8 md:h-full md:w-full">
      <section className='md:flex md:justify-between md:items-center pt-16'>
        <article className='md:flex md:flex-col gap-1'>
          <h1 className='md:text-4xl md:font-bold text-white'>Overview</h1>
          <p className='md:text-2xl md:font-semibold text-white'>You lost <span className='text-[var(--pink)]'>$ 12.500 by the inflation last month</span></p>
          <div className='flex gap-2 items-center'>
            <p className='md:text-xl md:font-normal text-white'>Last month inflation was <span className='text-[var(--pink)]'>23%</span></p>
            {/* add tooltip to info icon */}
            <Info color='var(--pink)' size={20}/>
          </div>
        </article>
        <SelectCurrency/>
      </section>
      <section className='flex md:flex-row gap-1 w-full'>
        <BalanceCard amount={incomeAmount} type='income'/>
        <BalanceCard amount={outcomeAmount} type='outcome'/>
        <BalanceCard amount={balance} type='balance'/>
      </section>
      <section className='flex md:flex-row w-full gap-8'>
        <section className='w-full flex flex-col gap-8 md:gap-10'>
          <NewTransactionsAndCategories />
          <TransactionList uniqueCategories={uniqueCategories}/>
        </section>
        <section className='flex flex-col gap-8 md:gap-10 w-full'>
          <NewProjection/>
          <ProjectionList allTransactions={allProjectionTransactions} projectionMoney={projectionMoney}/>
        </section>
      </section>
    </main>
  )
}

export default DashboardPage
