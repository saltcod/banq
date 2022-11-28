import { FC, useEffect, useState } from 'react'
import Table from '../../components/Table'
import { supabase } from '../../lib/supabaseClient'
import { Result } from '../../types/types'
import { useRouter } from 'next/router'

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getResults, getSupaResults } from '../../lib/helpers'

const Home = () => {
  const router = useRouter()

  const [name, setName] = useState(router.query.name)
  const [years, setYears] = useState(router.query.years)
  const [divisions, setDivisions] = useState(router.query.divisions)

  useEffect(() => {
    // update state when the router changes
    if (router.query.years) {
      setYears(router.query.years)
    }
  }, router.query)

  const query = useQuery({
    queryKey: ['results', router.query.years],
    queryFn: () => getSupaResults(name, years, divisions),
  })

  return (
    <div>
      {/* <button onClick={handleYear}>Handle year</button> */}
      <p>Years: {years}</p>
      <ul>{query.data ? <Table results={query.data} /> : <span>Nothing found</span>}</ul>
    </div>
  )
}
export default Home
