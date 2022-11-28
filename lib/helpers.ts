import { supabase } from '../lib/supabaseClient'

export function convertTimeToMS(time: string) {
  let milliseconds
  if (time.split(':').length === 2) {
    /* For MM:SS */
    return (milliseconds = Number(time.split(':')[0]) * 60000 + Number(time.split(':')[1]) * 1000)
  } else if (time.split(':').length === 3) {
    /* For HH:MM:SS */
    return (milliseconds =
      Number(time.split(':')[0]) * 3600000 +
      Number(time.split(':')[1]) * 60000 +
      Number(time.split(':')[2]) * 1000)
  }
}

export async function getResults() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}

export async function getSupaResults(name: string, years: string, divisions: string) {
  console.log('getSupaResults', { years })
  let supaQuery = supabase.from('results').select('*').order('year', { ascending: false }).limit(50)

  if (name) {
    supaQuery = supaQuery.ilike('name', `%${name}%`)
  }

  if (years) {
    const decodedYears = decodeURI(years)
    console.log({ decodedYears })
    supaQuery = supaQuery.in('year', decodedYears.split(','))
  }

  if (divisions) {
    const decodedDivisions = decodeURI(divisions)
    supaQuery = supaQuery.in('division', decodedDivisions.split(','))
  }

  let { data, error } = await supaQuery

  return data
}
