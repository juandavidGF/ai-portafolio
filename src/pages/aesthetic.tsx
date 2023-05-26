import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen  ${inter.className}`}
    >
			{/* First Page */}
			<div className='flex flex-col h-full md:flex-row'>
				<div className='flex items-center flex-grow justify-center flex-col bg-red-500  md:w-1/2 md:min-h-screen'>
					<h1>I'm Juan David Granados</h1>
					<h2>What do I do?</h2>
					<h3>skills</h3>
				</div>
				<div className='bg-blue-500 flex-grow flex items-center justify-center md:w-1/2 md:min-h-screen'>
					<Image
						className='transform scale-x-[-1]'
						src="/juand.png"
						width={600}
						height={600}
						alt='juand profile picture'
					/>
				</div>
			</div>
			{/* projects */}
			<div>

			</div>
    </main>
  )
}
