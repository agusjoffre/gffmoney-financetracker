export default function DashboardLayout ({
  children // will be a page or nested layout
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className='flex'>
      <main className="sm:mx-[10%] h-screen w-full sm:w-full px-8 ">
        {children}
      </main>

    </div>

  )
}
