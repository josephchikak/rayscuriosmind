import { useState, useEffect, useLayoutEffect } from "react";
import useContentful from "../utility/useContentful";
import JournalCard from "./JournalCard";




const JournalEntry = () => {

    const [entries, setEntries] = useState([])
    const { getJournal } = useContentful()



  
    useEffect(() => {

            getJournal().then((response) => setEntries(response))
    },[])

   

  return (
    <div className=" w-[100%] p-5 sm:columns-2">
        <h1> </h1>
        {
            entries.map((entry, index) => <JournalCard r key={index} entry={entry.journalEntry} images={entry.images} url={entry.url} code={entry.code}/>)
        }

    </div>
  )
}

export default JournalEntry