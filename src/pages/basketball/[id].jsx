import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import client from '../../../client'
import groq from 'groq'
import {PortableText} from '@portabletext/react'
import imageUrlBuilder from '@sanity/image-url'
function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}
const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      )
    }
  }
}
 
export async function getStaticPaths() {
  const pages = await client.fetch(groq`
  *[_type == "post" &&  "Basketball" in categories[]->title]
`)
  const paths = pages.map(item => {
    return {
      params: {id: item.slug.current}
    }
  })
  return{
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const posts = await client.fetch(groq
  ` *[_type == "post" && slug.current == ` + `"${id}"][0]`)
  return{
    props:{posts}
  }
}




function details({posts}) {
  return (
    <div>
      <Header></Header>
      <main>
  
      <article className='max-w-7xl mx-auto space-y-5 text-center'>
      <h1 className=' font-sans text-5xl text-zinc-700 '>{posts?.title}</h1>
      <PortableText className = "font-sans"
        value={posts?.body}
        components={ptComponents}
      />
    </article>            
       
        </main>
      <Footer></Footer>
    </div>
  )
}

export default details


