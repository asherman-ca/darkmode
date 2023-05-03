import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className='w-full h-full flex-1 flex justify-center items-center dark:bg-black dark:text-white'>
			Page
		</main>
	)
}
