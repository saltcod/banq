import React from 'react'
import { observer } from "mobx-react-lite";
import TransactionStore from '../stores/TransactionStore';

//const transactions = TransactionStore.filteredTransactions.filter( item => item[1].length > 1 )
const total = TransactionStore.filteredTransactionsSubTotal
console.log( total )

function Total() {
	console.log( 'rendering' )
	// const amounts = transactions.map( item => Number( item[2] ) )
	// var sum = amounts.reduce( ( ( a, b ) => a + b ), 0 );

	return (
		<span>${new Intl.NumberFormat( 'en-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 } ).format( TransactionStore.filteredTransactionsSubTotal )
		}</span>
	)
}

export default observer( Total )
