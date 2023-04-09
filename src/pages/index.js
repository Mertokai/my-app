import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div>
    <Header/>
    <main class="max-w-7xl mx-auto text-center space-y-20">
			<div class="flex w-full px-5 space-x-5 md:space-x-44 ">
				<div class="w-1/2" >
				<img class="rounded-lg  h-full" src= "https://www.trabzonspor.org.tr/download/images/1_2395619459.jpg" alt="me"/>
				</div>
				<div class="w-1/2"><h3 class="md:text-7xl text-2xl font-serif">Selam Ben Mert burada kendimi paylaşıyorum ilgilenirsen bi bakıverirsin</h3></div>
			</div>
			<h1 class="text-7xl py-2 text-center sans-serif underline decoration-sky-500">Categories</h1>
			<div class="flex justify-center items-center h-3/5">
				<div class="md:max-w-sm w-full ">
				  <figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
					<Link href="/football">
					  <img class="rounded-lg" src="https://www.trabzonspor.org.tr/download/images/1_2395619459.jpg" alt="Futbol Resmi"/>
					</Link>
					<figcaption class="absolute px-4 text-lg text-white bottom-6">
					  <Link href="/football"><p>Futbol hadisesi</p></Link>
					</figcaption>
				  </figure>
				</div>
			  </div>
			  <div class="flex justify-center items-center h-3/5">
				<div class="max-w-sm">
				  <figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
					<Link href="/books">
					  <img class="rounded-lg" src="https://i0.shbdn.com/photos/00/67/18/x5_1058006718aky.jpg" alt="Kitaplar"/>
					</Link>
					<figcaption class="absolute px-4 text-lg text-white bottom-6">
					  <p>Kitaplarla ilgili olan uğraşım</p>
					</figcaption>
				  </figure>
				</div>
			  </div>
			  <div class="flex justify-center items-center h-3/5">
				<div class="max-w-sm">
				  <figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
					<Link href="/engineering">
					  <img class="rounded-lg" src="https://www.bilimseldunya.com/wp-content/uploads/2022/03/En-Cok-Kazandiran-Muhendislik-Dallari.jpg" alt="Mühendislik"/>
					</Link>
					<figcaption class="absolute px-4 text-lg text-white bottom-6">
					  <p >Mühendislik zırvaları</p>
					</figcaption>
				  </figure>
				</div>
			  </div>
			  <div class="flex justify-center items-center h-3/5">
				<div class="max-w-sm">
				  <figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
					<Link href="/basketball">
					  <img class="rounded-lg" src="https://cdn.vox-cdn.com/thumbor/e-_cqKMww0GmOuJ5BD-cU4voH5Y=/0x0:3600x2430/1200x800/filters:focal(1404x289:1980x865)/cdn.vox-cdn.com/uploads/chorus_image/image/71942864/1462905084.0.jpg" alt="Basketbol"/>
					</Link>
					<figcaption class="absolute px-4 text-lg text-white bottom-6">
					  <p>Basketbol hadisesi</p>
					</figcaption>
				  </figure>
				</div>			
			  </div>
			  <div class="flex justify-center items-center h-3/5">
				<div class="max-w-sm">
				  <figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
					<Link href="/travel">
					  <img class="rounded-lg" src="https://www.miki.co.uk/sites/MikiTravelGlobal/files/slider_One_final.jpg?1679529600046" alt="Futbol Resmi"/>
					</Link>
					<figcaption class="absolute px-4 text-lg text-white bottom-6">
					  <p>Usta Mertokai ile gezi rehberi</p>
					</figcaption>
				  </figure>
				</div>
			  </div>
			  <div class="flex justify-center items-center h-3/5">
				<div class="max-w-sm">
				  <figure class="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
					<Link href="/fitness">
					  <img class="rounded-lg" src="https://preview.redd.it/a-good-side-by-side-shot-that-puts-this-cbum-vs-ramon-v0-5m0wi1ry87e91.jpg?width=640&crop=smart&auto=webp&s=615e80bfb4ca28a487e96c4ac5530f178dd57757" alt="Futbol Resmi"/>
					</Link>
					<figcaption class="absolute px-4 text-lg text-white bottom-6">
					  <p>Fitness hadisesi</p>
					</figcaption>
				  </figure>
				</div>
			  </div>
			  
		</main>
    <Footer/>
    </div>
  )
}
