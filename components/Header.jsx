import React from 'react'
import Link from 'next/link'

function Header() {
  return (
        <div>
      <header>
	<nav class="max-w-7xl mx-auto text-center ">
		<header class="flex space-x-5 justify-between py-10 px-10 ">
		<div>
			<Link href="/">
			<div class="md:flex md:space-x-5  md:items-center ">
				<img class="w-10" src="https://icons.veryicon.com/png/o/miscellaneous/home-icon-1/house-30.png" alt="Home"/>
				<h1 class="font-extrabold text-xl font-sans">Anasayfa</h1>
			</div>
			</Link>
		</div>
	
		<div class="space-x-5 flex  items-center">
		<a href="https://twitter.com/mertokai" target="_blank">
		<img class = "w-10" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png" alt=""/>
		</a>
		<a href="https://twitter.com/mertokai" target="_blank">
		<img class = "w-10" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="github"/>
		</a>
		<a href="https://www.linkedin.com/in/mert-ey%C3%BCbo%C4%9Flu-615204226/" target="_blank">
			<img class = "w-10" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="github"/>
		</a>
		</div>
		
		</header>
	</nav>
</header>
    </div>
  )
}

export default Header

