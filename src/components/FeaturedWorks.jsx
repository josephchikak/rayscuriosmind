import { useEffect, useState } from "react"
import useContentful from "../utility/useContentful"
import WebCard from "./WebCard"

const FEATURED_URLS = [
  "https://dreampalaces.co/",
  "https://lagosmuseumarchives.ng/",
  "https://www.alienprose.com/",
]

const FeaturedWorks = () => {
  const [featured, setFeatured] = useState([])
  const { getWeb } = useContentful()

  useEffect(() => {
    getWeb().then((response) => {
      if (!response) return
      const ordered = FEATURED_URLS
        .map((url) => response.find((entry) => entry.url === url))
        .filter(Boolean)
      setFeatured(ordered)
    })
  }, [])

  if (!featured.length) return null

  return (
    <>
      <h2 className="p-5 pl-5 sm:pl-10 text-[2rem] text-primary sm:text-[3rem] md:text-[5rem] lg:text-[10.5rem] border-b-2 border-primary font-gord">
        Featured Works
      </h2>

      <div className="w-full p-3 sm:p-5 columns-1 md:columns-2 gap-4 border-b-2 border-primary">
        {featured.map((entry, index) => (
          <WebCard key={index} entry={entry} />
        ))}
      </div>
    </>
  )
}

export default FeaturedWorks
