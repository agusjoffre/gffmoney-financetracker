import { SignInButton, SignOutButton, SignUp, SignUpButton, UserButton, auth, currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

const Header = async (): Promise<JSX.Element> => {
  const user = await currentUser()
  const { userId } = auth()
  return (
      <header className="px-16 flex items-center my-4 pb-6 border-b[1px] border-[var(--sky)] shadow-xl md:justify-between">
    <div className="flex md:flex-row md:gap-16">
      <Link href={'/'} className="md:flex md:flex-col gap-1 md:items-center border-r-[1px] border-[var(--sky)] pr-10">
              <Image
                  src={'/logo.png'}
                  alt="logo guiffremoney"
                  width={30}
                  height={30}
              />
                  <span className="italic text-[var(--sky)] text-xs font-bold">gffmoney</span>
        </Link>
          <nav className='flex gap-8 text-[var(--pink)] font-bold text-sm items-center'>
              <Link className='hover:text-[var(--dark-pink)]' href={'/dashboard'}>Overview</Link>
              <Link className='hover:text-[var(--dark-pink)]' href={'/projection'}>Projection</Link>
              <Link className='hover:text-[var(--dark-pink)]' href={'/categories'}>Categories</Link>
              <Link className='hover:text-[var(--dark-pink)]' href={'/income'}>Income</Link>
              <Link className='hover:text-[var(--dark-pink)]' href={'/outcome'}>Outcome</Link>
              </nav>
          </div>
          {(userId != null) && (user != null)
            ? (
            <div className='flex gap-4 items-center'>
              <UserButton afterSignOutUrl='/' />
              <div className='flex flex-col'>
                  <h1 className='text-[var(--sky)] font-semibold text-sm'>{((user?.username) != null) ? user.username : `${user?.firstName} ${user?.lastName}`}</h1>
                  <p className='text-[var(--dark-pink)] font-semibold text-xs opacity-0'>Admin</p>
              </div>
          </div>
              )
            : (
          <div className='flex gap-4 items-center'>
          <SignInButton afterSignInUrl='/dashboard' mode='modal'>
            <Button className='w-full bg-[var(--sky)] text-[var(--dark)] rounded-2xl px-8 hover:bg-[var(--dark)] hover:text-[var(--sky)] hover:border-[1px] border-[var(--sky)]'>
              Login
            </Button>
            </SignInButton>
            <SignUpButton afterSignUpUrl='/dashboard' mode='modal'>
              <Button className='w-full bg-[var(--pink)] text-[var(--dark)] rounded-2xl px-8 hover:bg-[var(--dark)] hover:text-[var(--pink)] hover:border-[1px] border-[var(--pink)]'>
                Sign Up
              </Button>
            </SignUpButton>
          </div>
              )}

    </header>
  )
}

export default Header
