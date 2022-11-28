import { FC } from 'react'
import { supabase } from '../lib/supabaseClient'
import { convertTimeToMS } from '../lib/helpers'
import { Result } from '../types/types'
import { useQuery } from '@tanstack/react-query'
import Table from '../components/Table'
import { getSupaResults } from '../lib/helpers'
import { useRouter } from 'next/router'
// console.log('convertTimeToMS', convertTimeToMS('60:00'))
// console.log('convertTimeToMS', convertTimeToMS('2:00:00'))

interface Props {
  results: Result[]
}

const Home: FC<Props> = ({ results }) => {
  const router = useRouter()

  const name = router.query.name
  const years = router.query.years
  const divisions = router.query.divisions

  const { isLoading, data } = useQuery({
    queryKey: [name, years, divisions],
    queryFn: () => getSupaResults(name, years, divisions),
    initialData: results,
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  return (
    <div className="grid gap-2">{data ? <Table results={data} /> : <span>Nothing found</span>}</div>
  )
}
export default Home

export async function getServerSideProps() {
  let { data } = await supabase
    .from('results')
    .select('*')
    .order('year', { ascending: false })
    .limit(50)

  return {
    props: {
      results: data,
    },
  }
}

// export async function getServerSideProps(context: any) {
//   console.log(context)
//   const { query } = context
//   if (query.years) {
//     //console.log(query.years)
//   }
//   //const { query } = context
//   //let { data, error, status } = await supabase.from('results').select().limit(50)

//   let supaQuery = supabase.from('results').select('*').order('year', { ascending: false }).limit(50)

//   if (query.years) {
//     const decodedYears = decodeURI(query.years)
//     supaQuery = supaQuery.in('year', query.years.split(','))
//   }
//   console.log({ supaQuery })
//   let { data, error } = await supaQuery

//   return {
//     props: {
//       results: data,
//     },
//   }
// }
