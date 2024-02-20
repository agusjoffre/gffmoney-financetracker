'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import BalanceCard from '../Balance'
import { type ProjectionTransaction } from '@/types/types'
import ProjectionCard from './ProjectionCard'

interface Props {
  allTransactions: ProjectionTransaction[]
  projectionMoney: {
    income: number
    outcome: number
    balance: number
  }
}

const ProjectionList = ({ allTransactions, projectionMoney }: Props): JSX.Element => {
  const { income, outcome, balance } = projectionMoney
  return (
        <div className='w-full h-2/5 overflow-scroll bg-[var(--sky)] p-5 rounded-xl mb-11 flex flex-col gap-8'>
            <div className='py-4 flex md:flex-row md:justify-between md:items-center'>
              <h1 className='text-[var(--dark)] text-xl font-bold'>Your projections</h1>
              {/* you wil lose inflation & this month estimated inflation */}
      </div>
          <div className='flex flex-col md:flex-row gap-2 w-full h-fit'>
              <BalanceCard type='income' amount={income}/>
              <BalanceCard type='outcome' amount={outcome}/>
              <BalanceCard type='balance' amount={balance}/>
      </div>
      <Table className='w-full bg-[var(--sky)] rounded-xl shadow-xl text-[var(--dark)]'>
        <TableCaption className='text-[var(--dark)]'>A list of your projections</TableCaption>
        <TableHeader>
          <TableRow className='rounded-xl hover:bg-transparent font-light'>
              <TableHead className="text-center font-light text-[var(--dark)] text-xs">Type</TableHead>
              <TableHead className="text-center font-light text-[var(--dark)] text-xs">Name</TableHead>
              <TableHead className="text-center font-light text-[var(--dark)] text-xs">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allTransactions?.map((trans) => {
            return (
                <ProjectionCard key={trans._id} transaction={trans}/>
            )
          })}
        </TableBody>
      </Table>
      </div>
  )
}

export default ProjectionList
