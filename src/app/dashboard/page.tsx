import NewTransaction from '@/components/newtransaction/NewTransaction'
import { getAllCategories } from '@/lib/controllers/transactionControl'
import { initializeUser } from '@/lib/controllers/userControl'
import { type Category } from '@/types/types'

const DashboardPage = async (): Promise<JSX.Element> => {
  const allCategories: Category[] = await getAllCategories()
  const uniqueCategories: Category[] = allCategories.filter((category, index, self) => index === self.findIndex((cat) => cat.name === category.name))
  await initializeUser()
  return (
    <section className=" py-20 h-screen w-full flex flex-col gap-8">
      <NewTransaction uniqueCategories={uniqueCategories}/>
    </section>
  )
}

export default DashboardPage
