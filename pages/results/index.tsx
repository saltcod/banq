import { FC } from 'react'
import { supabase } from '../lib/supabaseClient'
import { convertTimeToMS } from '../lib/helpers'
import { Result } from '../types/types'

// console.log('convertTimeToMS', convertTimeToMS('60:00'))
// console.log('convertTimeToMS', convertTimeToMS('2:00:00'))

interface Props {
  results: Result[]
}

const Home: FC<Props> = ({ results }) => {
  return (
    <>
      {results.map((item) => (
        <div key={item.name} className="grid grid-cols-7">
          <div>{item.year}</div>
          <div>{item.position}</div>
          <div>{item.name}</div>
          <div>{item.guntime}</div>
          <div>{item.chiptime}</div>
          <div>{item.runner_class}</div>
          <div>{item.classplace}</div>
        </div>
      ))}
    </>
  )
}
export default Home

export async function getServerSideProps() {
  let { data, error, status } = await supabase
    .from('results')
    .select()
    .ilike('name', '%carm%')
    .limit(50)

  return {
    props: {
      results: data,
    },
  }
}
