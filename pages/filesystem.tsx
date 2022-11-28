import * as Papa from 'papaparse'
import Search from '../components/Search'
import { calculateSubTotal, fuzzyMatch } from '../lib/helpers'
import { Transaction } from '../types/types'

interface Props {
  transactions: Transaction[]
  month: string
}

export default function playground({ transactions, month }: Props) {
  const amounts = transactions
    .filter((item: Transaction) => item[2] !== undefined)
    .map((item: Transaction) => Number(item[2]))

  var sum = amounts.reduce((a: number, b: number) => a + b, 0)

  month = month.split('-').join(' ')
  //console.log({ sum }, month.split('-').join(' '))
  return (
    <>
      <h1 className="text-lg">Generate a data file</h1>
      <p>
        Month: <span className="uppercase">{month}</span>
      </p>
      <button>Generate</button>
    </>
  )
}

export async function getServerSideProps() {
  const file = 'http://localhost:3102/data/august-2022.csv'
  const month = file.split('/')[file.split('/').length - 1].replace('.csv', '')
  const res = await fetch(file)
  const data = await res.text()
  const transactions = Papa.parse(data).data
  return {
    props: {
      transactions,
      month,
    },
  }
}
