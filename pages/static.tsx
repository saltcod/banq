import * as Papa from 'papaparse'
import Transaction from '../components/Transaction'

export default function Static({ transactions }: any) {
  return (
    <div className="grid gap-4 mt-8 font-mono text-sm">
      {transactions.map((item, i) => (
        <Transaction
          key={`${item[0]}-${item[2]}-${i}`}
          date={item[0]}
          name={item[1]}
          amount={item[2]}
        />
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3102/data/august-2022.csv`)
  const data = await res.text()
  const transactions = Papa.parse(data).data
  return {
    props: {
      transactions,
    },
  }
}
