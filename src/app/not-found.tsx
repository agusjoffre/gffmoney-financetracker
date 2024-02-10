import Link from 'next/link'

const NotFound = (): JSX.Element => {
  return (
      <div className='h-screen w-full flex flex-col gap-16 justify-center items-center'>
          <h1>Oops... something went wrong...</h1>
          <p>We couldn`t find the page you were looking for</p>
          <Link href='/'>Go back to home</Link>
    </div>
  )
}

export default NotFound
