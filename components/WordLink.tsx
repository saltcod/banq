import React, { FC } from 'react'
import { observer } from "mobx-react-lite";
import TransactionStore from '../stores/TransactionStore';
import Link from 'next/link'
interface Props {
	word: string
}

function WordLink( { word }: Props ) {

	return (
		<Link href={`/transactions/${word.toLowerCase()}`}>
			<a className='hover:underline'>
				{word}
			</a>
		</Link>
	)
}

export default observer( WordLink )
