import { createClient } from "contentful"


const useContentful = () => {
 
  const client = createClient({
    space: import.meta.env.VITE_SPACE_ID,
    accessToken: import.meta.env.VITE_ACCESS_TOKEN,
    host:'https://cdn.contentful.com'
  })

  const getJournal = async () => {
    try{
      const entries = await client.getEntries({
        content_type:'journal',
        select:'fields'
      })

      const sanitizedEntries = entries.items.map((item) => {
        return {
          ...item.fields
        }
      })
      
      return sanitizedEntries
    }
    catch (error){
      console.log(error)
    }
  }

  const getWeb = async () => {
    try{
      const entries = await client.getEntries({
        content_type:'web',
        select:'fields'
      })

      const sanitizedEntries = entries.items.map((item) => {
        return {
          ...item.fields
        }
      })
      
      return sanitizedEntries
    }
    catch (error){
      console.log(error)
    }
  }

  return { getJournal, getWeb }
}

export default useContentful