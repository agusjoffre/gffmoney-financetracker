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
    <section className="w-fit flex items-center">
          <Select name='category' onValueChange={(value) => { setCategorySelected(value) }}>
              <SelectTrigger className='w-full border-none bg-[var(--dark-pink)] rounded-lg md:rounded-xl text-white hover:bg-[var(--dark-pink)]'>
                  <SelectValue placeholder='Category' />
              </SelectTrigger>
              <SelectContent className=' w-full bg-[var(--dark-pink)] rounded-lg md:rounded-xl text-white border-none hover:bg-[var(--dark-pink)] max-w-44'>
                  <SelectItem className='w-full cursor-pointer hover:text-base' value='all'>All</SelectItem>
                  {uniqueCategories.map((category) => (
                      <SelectItem className='w-full cursor-pointer hover:text-base' key={category._id} value={category.name}>
                          {category.name}
                      </SelectItem>
                  ))}
              </SelectContent>
            </Select>
    </section>
  )
}

export default CategoriesSelect
