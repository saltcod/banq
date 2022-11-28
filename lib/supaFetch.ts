import { supabase } from '../lib/supabaseClient'
import { Result } from '../types/types'

export function supaFetch() {
  let supaQuery = supabase.from('results').select('*').order('year', { ascending: false }).limit(50)

  if (query.years) {
    const decodedYears = decodeURI(query.years)
    supaQuery = supaQuery.in('year', query.years.split(','))
  }
}
