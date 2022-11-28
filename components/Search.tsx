import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Search() {
  const router = useRouter()
  const { word } = router.query
  const [searchTerm, setSearchTerm] = useState<string | string[] | undefined>(word)

  useEffect(() => {
    if (word) {
      setSearchTerm(word)
    } else {
      setSearchTerm('')
    }
  })

  function handleSearch(e: any) {
    e.preventDefault()
    const searchTerm = e.target.name.value
    setSearchTerm(searchTerm)
    if (router.pathname.includes('results')) {
      router.push(searchTerm)
    } else {
      router.push(`/results/${searchTerm}`)
    }
  }

  return (
    <form onSubmit={(e) => handleSearch(e)}>
      <div className="relative flex items-center mt-4">
        <input
          id="name"
          className="w-full p-2 font-sans border"
          placeholder="Search for records..."
          type="text"
          defaultValue={searchTerm}
          name="search"
          // onChange={(e) => handleSearch(e.target.value)}
        />

        <button className="absolute font-mono text-xs font-bold right-16 top-4"></button>

        <Link href={'/'}>
          <a
            onClick={() => setSearchTerm('')}
            className="absolute p-1 font-mono text-xs font-bold uppercase bg-gray-100 rounded-md right-2 top-3 hover:bg-gray-300"
          >
            Clear{' '}
          </a>
        </Link>
      </div>
    </form>
  )
}

export default Search
