import { FC, useEffect, useState } from 'react'
import Table from '../../components/Table'
import { supabase } from '../../lib/supabaseClient'
import { Result } from '../../types/types'
import { useRouter } from 'next/router'

import { useQuery } from '@tanstack/react-query'
import { getSupaResults } from '../../lib/helpers'

const Home = () => {
  const router = useRouter()

  const name = router.query.name
  const years = router.query.years
  const divisions = router.query.divisions

  const { isLoading, isError, data, error } = useQuery({
    queryKey: [name, years, divisions],
    queryFn: () => getSupaResults(name, years, divisions),
  })

  return <div>{data ? <Table results={data} /> : <span>Nothing found</span>}</div>
}
export default Home
