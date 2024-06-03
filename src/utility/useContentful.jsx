import { createClient } from "contentful"


const useContentful = () => {
 
  const client =  createClient({
        space: import.meta.env.VITE_SPACE_ID,
        accessToken: import.meta.env.VITE_ACCESS_TOKEN,
        host:'https://cdn.contentful.com'
    })

    const getJournal =  async () => {
        try{
              const entries = await client.getEntries({
                    content_type:'journal',
                    select:'fields'
                    
                })

                // const images =  await client.getAsset((`${sanitizedEntries}`){

                // })

                // return entries
            const sanitizedEntries = entries.items.map((item) => {
                // const 

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


   return { getJournal }


   
}

export default useContentful