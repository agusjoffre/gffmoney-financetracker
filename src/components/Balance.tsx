import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface Props {}

const BalanceCard = (props: Props) => {
  return (
    <Card className='md:w-full w-full'>
        <CardHeader className='flex justify-between flex-row items-center'>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>

  )
}

export default BalanceCard
