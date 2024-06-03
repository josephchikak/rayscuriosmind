import { useState, useEffect, useMemo } from "react";
import useContentful from "../utility/useContentful";
import JournalCard from "./JournalCard";
import axios from "axios";




const JournalEntry = () => {

    const [entries, setEntries] = useState([])
    const { getJournal } = useContentful()

  
    useEffect(() => {

       
       
    // console.log(entries)

            getJournal().then((response) => setEntries(response))
    },[])



   


  return (
    <div className=" w-[100%] p-2 columns-2">
        <h1> </h1>
        {
            entries.map((entry, index) => <JournalCard key={index} entry={entry.journalEntry} images={entry.images}/>)
        }


    </div>
  )
}

export default JournalEntry