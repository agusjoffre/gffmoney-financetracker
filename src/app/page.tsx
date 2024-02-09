import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home (): JSX.Element {
  return (
    <main className="mx-[10%] bg-gradient-to-b h-screen flex flex-col justify-center items-center gap-4 md:shadow-sm md:shadow-blue-400">
      <h1 className="text-3xl font-bold text-center md:text-5xl md:font-bold">Welcome to Guiffre Money!</h1>
      <p className="text-sm text-center md:text-lg">For more information about this project check
      <a className= "text-sm md:text-lg text-blue-400" href="https://github.com/agusjoffre" target="_blank" rel="noreferrer">  the repository</a>
      </p>
    <Link href='/dashboard'>
        <Button
        className='w-full md:w-80 md:py-5 md:rounded-lg bg-blue-400 text-white text-md font-semibold rounded-lg md:font-bold md:text-xl'>
        Start now!
        </Button>
      </Link>

    </main>
  )
}
