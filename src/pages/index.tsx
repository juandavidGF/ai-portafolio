import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex flex-col min-h-screen md:flex-row md:min-h-screen ${inter.className}`}
    >
			<div className='flex items-center justify-center bg-red-500 h-1/2 md:w-1/2 md:min-h-screen'>
				<h1>I'm Juan David Granados</h1>
			</div>
			<div className='bg-blue-500 flex items-center justify-center h-1/2 md:w-1/2 md:min-h-screen'>
				<Image
					src="/juand.png"
					width={600}
					height={600}
					alt='juand profile picture'
				/>
			</div>
    </main>
  )
}
