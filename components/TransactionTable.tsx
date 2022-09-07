import React from 'react'
import { observer } from "mobx-react-lite";
import Transaction from './Transaction';
import TransactionStore from '../stores/TransactionStore';

function TransactionTable() {

	return (

		<div className="grid gap-4 mt-8 font-mono text-sm">
			{TransactionStore.filteredTransactions.map( ( item, i ) => <Transaction key={`${item[0]}-${item[2]}-${i}`} date={item[0]} name={item[1]} amount={item[2]} /> )}

			{/* {transactions.map( ( item, i ) => <p key={`hi-${i}`}>h12</p> )} */}

		</div>
	)
}

export default observer( TransactionTable )
