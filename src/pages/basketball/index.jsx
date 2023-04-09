import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import client from '../../../client'
import groq from 'groq'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}
 


function index({posts}) {
  return (
    <div>
      <Header/>
      <div className='space-y-5 py-5 gap-5  grid md:grid-cols-1 xl:grid-cols-3'>
        {posts.map((post,i) => (
        <Link key={i} href={"/basketball/" + post.slug.current}>
          <div className="flex justify-center">
  				<div
    className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 py-5">
      <img
        className="rounded-t-lg"
        src={urlFor(post.mainImage)}
        alt="postName" />    
    <div className="p-6">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {post.title}
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
      {post.title.slice(0,10)}
      </p>
    </div>
  </div>
</div>
</Link>

        ))}
      </div>
      <Footer/>
    </div>
  )
}
export default index
export async function getStaticProps() {
    const posts = await client.fetch(groq`
    *[_type == "post" &&  "Basketball" in categories[]->title]
  `)
    return{
      props:{posts}
    }
}
