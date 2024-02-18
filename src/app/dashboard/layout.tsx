import Header from '@/components/Header'

export default function DashboardLayout ({
  children // will be a page or nested layout
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className='h-screen w-screen sm:w-full'>
      <Header />
      <main className="sm:mx-[10%]  px-8 ">
        {children}
      </main>
      </div>

  )
}
