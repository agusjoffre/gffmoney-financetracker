import BalanceCard from '@/components/Balance'
import NewTransaction from '@/components/newtransaction/NewTransaction'
import TransactionList from '@/components/transactionlist/TransactionList'
import { getAllCategories } from '@/lib/controllers/transactionControl'
import { initializeUser } from '@/lib/controllers/userControl'
import { type Category } from '@/types/types'

const DashboardPage = async (): Promise<JSX.Element> => {
  const allCategories: Category[] = await getAllCategories()
  const uniqueCategories: Category[] = allCategories.filter((category, index, self) => index === self.findIndex((cat) => cat.name === category.name))

  await initializeUser()

  return (
    <section className=" py-20 h-full w-full flex flex-col gap-8">
      <NewTransaction uniqueCategories={uniqueCategories} />
      <div className=' sm:w-full flex flex-col h-fit sm:flex gap-8 sm:flex-row sm:justify-center sm:items-center'>
        <BalanceCard />
        <BalanceCard />
        <BalanceCard/>
      </div>

      <TransactionList uniqueCategories={uniqueCategories}/>
    </section>
  )
}

export default DashboardPage
