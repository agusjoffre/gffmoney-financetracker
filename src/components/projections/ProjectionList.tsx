'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Input } from '../ui/input'
import BalanceCard from '../Balance'

interface Props {}

const ProjectionList = (props: Props): JSX.Element => {
  return (
        <div className='w-full h-full bg-[var(--sky)] p-5 rounded-xl mb-11 flex flex-col'>
            <div className='py-4 flex md:flex-row md:justify-between md:items-center'>
              <h1 className='text-[var(--dark)] text-xl font-bold'>Your projections</h1>
              {/* you wil lose inflation & this month estimated inflation */}
          </div>
          <div className='flex flex-col md:flex-row gap-2 w-full h-full'>
              <BalanceCard type='income' amount={0}/>
              <BalanceCard type='outcome' amount={0}/>
              <BalanceCard type='balance' amount={0}/>
          </div>
      </div>
  )
}

export default ProjectionList
