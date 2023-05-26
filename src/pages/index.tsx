import Image from 'next/image'
import { Inter } from 'next/font/google'

import ListProjects from '@/components/listProjects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

	const projects = [
		{
			name: "logoChain",
			description: "Generate brand assets using whatsapp and generative AI",
			url: "https://juandavidgf.com"
		},
		{
			name: "artmelon",
			description: "create your own AI generated Avatars",
			url: "https://juandavidgf.com"
		},
		{
			name: "sentiment Analysis",
			description: "sentiment analysis using RNN and deployed in ec2",
			url: "https://juandavidgf.com"
		}
	]


  return (
    <main
      className={`min-h-screen ${inter.className}`}
    >
			{/* First Section */}
			<div className='flex flex-col h-full md:flex-row'>
				{/* Item 1 */}
				<div className='flex items-center flex-grow justify-center p-4 flex-col md:w-1/2 md:min-h-screen'>
					<h1 className='text-4xl'>I'm Juan Granados</h1>
					<h2 className='text-xl mt-3'>Building AI solutions that serve Business</h2>
					{/* projects */}
					<ListProjects projects={projects} className='hidden md:block' />
					{/* hidden md:block */}
				</div>
				{/* Item 2 */}
				<div className='bg-blue-500 flex-grow flex items-center justify-center md:w-1/2 md:min-h-screen'>
					<Image
						className='p-2 transform scale-x-[-1]'
						src="/juand.png"
						width={600}
						height={600}
						alt='juand profile picture'
					/>
					<div>
						<div></div>
					</div>
				</div>
				<ListProjects projects={projects} className='block md:hidden' />
			</div>
			{/* projects */}
			<div>
			</div>
			<div>

			</div>
    </main>
  )
}
