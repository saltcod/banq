import React, { useEffect } from 'react'
import TransactionStore from '../stores/TransactionStore';
import { observer } from "mobx-react-lite";
import Total from "./Total";
import { useRouter } from 'next/router'
import Link from 'next/link'

function Search() {
	const router = useRouter();
	const { word } = router.query


	useEffect( () => {
		if ( word ) {
			TransactionStore.setSearchTerm( word )
		}
	} )


	return (
		<div className="relative flex items-center">
			<input
				className="w-full p-2 font-sans border"
				placeholder="Search for records..."
				type="text"
				defaultValue={word ? word : ''}
				name="search"
				onChange={( e ) => TransactionStore.setSearchTerm( e.target.value )} />

			<button className="absolute font-mono text-xs font-bold right-16 top-4"><Total /> </button>

			<Link href={'/'}>
				<a onClick={() => TransactionStore.clearSearchTerm()} className="absolute p-1 font-mono text-xs font-bold uppercase bg-gray-100 rounded-md right-2 top-3 hover:bg-gray-300">Clear </a>
			</Link>
		</div>
	)
}

export default observer( Search )
