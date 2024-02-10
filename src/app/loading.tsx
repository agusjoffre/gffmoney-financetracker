import Image from 'next/image'

const loading = (): JSX.Element => {
  const src = '/logo.png'
  return (
      <div className='h-screen w-full flex justify-center items-center'>
          <Image alt='loading'
              src={src} width={200} height={200}
              className='animate-pulse transition-shadow  ' />
    </div>
  )
}

export default loading
