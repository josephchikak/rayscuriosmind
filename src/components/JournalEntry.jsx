import { useState, useEffect, useMemo } from "react";
import useContentful from "../utility/useContentful";
import JournalCard from "./JournalCard";
import axios from "axios";




const JournalEntry = () => {

    const [entries, setEntries] = useState([])
    const { getJournal } = useContentful()

  
    useEffect(() => {

            getJournal().then((response) => setEntries(response))
    },[])

   

  return (
    <div className=" w-[100%] p-2 sm:columns-2">
        <h1> </h1>
        {
            entries.map((entry, index) => <JournalCard key={index} entry={entry.journalEntry} images={entry.images} url={entry.url}/>)
        }

    </div>
  )
}

export default JournalEntry