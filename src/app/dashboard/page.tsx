import NewTransaction from '@/components/newtransaction/NewTransaction'
import { getAllCategories } from '@/lib/controllers/transactionControl'
import { type Category } from '@/types/types'

const DashboardPage = async (): Promise<JSX.Element> => {
  const allCategories = await getAllCategories()
  const uniqueCategories = allCategories.filter((category, index, self) => index === self.findIndex((cat) => cat.name === category.name))
  return (
    <section className=" py-20 h-screen w-full flex flex-col gap-8">
      <NewTransaction uniqueCategories={uniqueCategories}/>
    </section>
  )
}

export default DashboardPage
