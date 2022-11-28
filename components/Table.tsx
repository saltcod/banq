import Link from 'next/link'
import { FC } from 'react'
import { Result } from '../types/types'
import { useRouter } from 'next/router'

interface Props {
  results: Result[]
}

const Table: FC<Props> = ({ results }) => {
  const router = useRouter()
  const years = router.query.years
  //console.log(router)
  return (
    <div className="grid gap-2 w-full">
      {results.map((item) => (
        <div key={item.name + item.year} className="grid gap-4 mt-8 font-mono text-xs grid-cols-8">
          <div>{item.year}</div>
          <div>{item.position}</div>
          <div className=" col-span-2 hover:underline font-bold">
            <Link href={`/results/${item.name}${years ? '?years=' + years : ''}`}>
              <a>{item.name}</a>
            </Link>
          </div>
          <div>{item.guntime}</div>
          <div>{item.chiptime}</div>
          <div>{item.runner_class}</div>
          <div>{item.classplace}</div>
        </div>
      ))}
    </div>
  )
}

export default Table
