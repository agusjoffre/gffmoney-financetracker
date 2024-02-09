export default function DashboardLayout ({
  children // will be a page or nested layout
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className='flex'>
      <main className="mx-[10%] h-screen w-full">
        {children}
      </main>

    </div>

  )
}
