import BalanceCard from '@/components/Balance'
import NewProjection from '@/components/projections/NewProjection'

const ProjectionPage = (): JSX.Element => {
  return (
      <section className=" py-20 h-full w-full flex flex-col gap-8">
          <NewProjection/>
          <div
              className='sm:w-full flex flex-col h-fit
               sm:flex gap-8 sm:flex-row
                sm:justify-center sm:items-center'>
            {/* <BalanceCard amount={incomeAmount} type='income'/>
            <BalanceCard amount={outcomeAmount} type='outcome'/>
            <BalanceCard amount={balance} type='balance'/> */}
        </div>
    </section>
  )
}

export default ProjectionPage
