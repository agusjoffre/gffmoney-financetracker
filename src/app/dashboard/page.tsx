import NewTransaction from '@/components/newtransaction/NewTransaction'

interface Props {}

const DashboardPage = (props: Props): JSX.Element => {
  return (
    <section className=" py-20 h-screen w-full flex flex-col gap-8">
      <NewTransaction />
    </section>
  )
}

export default DashboardPage
