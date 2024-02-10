import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { type Category } from '@/types/types'

interface Props {
  uniqueCategories: Category[]
  setCategorySelected: React.Dispatch<React.SetStateAction<string>>
}

const CategoriesSelect = ({ uniqueCategories, setCategorySelected }: Props): JSX.Element => {
  return (
      <section className="flex gap-2 max-w-full overflow-x-hidden w-full">
          <Badge onClick={() => { setCategorySelected('all') }} key={'All'} variant='secondary' className='hidden md:block md:text-sm overflow-hidden'>All</Badge>
          {uniqueCategories.map((category) => {
            return <Badge onClick={() => { setCategorySelected(category.name) }} variant='secondary' className='hidden md:block md:text-sm overflow-hidden' key={category.id}>{category.name}</Badge>
          })}
          <Select name='category' onValueChange={(value) => { setCategorySelected(value) }}>
              <SelectTrigger className='w-full md:hidden'>
                  <SelectValue placeholder='Filter by categories' />
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value='all'>All</SelectItem>
                  {uniqueCategories.map((category) => (
                      <SelectItem key={category._id} value={category.name}>
                          {category.name}
                      </SelectItem>
                  ))}
              </SelectContent>
            </Select>
    </section>
  )
}

export default CategoriesSelect
