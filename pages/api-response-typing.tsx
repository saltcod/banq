//const data = require('../data/cibc.json');
import { server } from "../config";
import * as Papa from "papaparse";
import { useContext } from "react";
import Layout from "../components/Layout";
import Record from "../components/Transaction";
import { convertStringToDate } from "../lib/helpers";
import { useState } from 'react';
import TransactionStore from '../stores/TransactionStore';
import TransactionList from "../components/TransactionTable";

interface APIResponse {
	transactions: {
		data: [],
		errors: []
		meta: {}
	}
}


export default function Home( { transactions }: APIResponse ) {
	const [searchTerm, setSearchTerm] = useState( '' );

	return (
		<Layout>
			<div className="flex items-center">
				<input
					className="w-full p-2 font-sans border"
					placeholder="Search for records..."
					type="text"
					name="search"
					onChange={( e ) => setSearchTerm( e.target.value )} />
				<span className="ml-auto">Total: </span>
			</div>

			<div className="grid gap-4 mt-8 font-mono text-sm">
				<TransactionList />

				{/* {transactions.data.map( item => item[1].toLowerCase().includes( searchTerm.toLowerCase() ) && <Record key={`${item[2]}-${item[1].replace( /\D+/g, '' )}`} date={convertStringToDate( item[0] )} name={item[1]} amount={item[2]} /> )} */}
			</div>
		</Layout>
	);
}

Home.getInitialProps = async () => {
	const res = await fetch( `${server}/data/cibc-short.csv` );

	const data = await res.text();
	const transactions = Papa.parse( data );
	return { transactions };
};
