import React from 'react'
import Search from '../../components/Search';
import TransactionTable from '../../components/TransactionTable';
import { observer } from "mobx-react-lite";

function word() {

	return (
		<div>
			<Search />
			<TransactionTable />
		</div>
	)
}


export default observer( word )
