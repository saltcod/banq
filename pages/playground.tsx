import * as Papa from 'papaparse'
import Search from '../components/Search'
import { calculateSubTotal, fuzzyMatch, getRecordCategory } from '../lib/helpers'
import { Transaction } from '../types/types'
import { vendors } from '../types/vendors'

interface Props {
  transactions: Transaction[]
}

export default function playground({ transactions }: Props) {
  console.log(transactions)
  const amounts = transactions
    .filter((item: Transaction) => item[2] !== undefined)
    .map((item: Transaction) => Number(item[2]))
  var sum = amounts.reduce((a: number, b: number) => a + b, 0)

  return <>hay</>
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3102/data/august-2022.csv`)
  const data = await res.text()
  let transactions = Papa.parse(data).data
  transactions = transactions.filter((item: any) => item.length !== 1)
  //console.log({ transactions })

  transactions = transactions.map((transaction: any) => {
    //console.log('transaction[1]', transaction[1])
    const name = transaction[1]
    //console.log({ name })
    //console.log('short name', name)
    return [...transaction, getRecordCategory(name)]
  })
  return {
    props: {
      transactions,
    },
  }
}
