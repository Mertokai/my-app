// client.ts
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '7dxc6egu', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})