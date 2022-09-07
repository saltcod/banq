import React from 'react'
import Badge from './Badge';
import { observer } from "mobx-react-lite";
import WordLink from './WordLink';

export interface TransactionProps {
	date: Date;
	name: string;
	amount: number;
}

const wordsToStrip = [
	'Point of Sale',
	'Interac',
	'Internet Banking',
	'Automated Banking Machine',
	'RETAIL PURCHASE',
	'E-TRANSFER',
	'Electronic Funds Transfer',
	'PREAUTHORIZED DEBIT',
	' - ',
];

// function cleanString( str: string ) {
// 	let description = str.replace( 'Point of Sale', '' ).replace( 'Interac', '' ).replace( 'RETAIL PURCHASE', '' ).replace( /[0-9]{6,}/, '' ).replace( ' - ', '' ).replace('Automated Banking Machine', '').replace('Electronic Funds Transfer', '')

// 	return description
// }

function cleanString( str: string ) {
	let description = str;
	wordsToStrip.forEach( words => {
		description = description.replace( words, '' );
	} )

	// remove the 10 digit id
	description = description.replace( /[0-9]{6,}/, '' );
	return description
}

// Get the type of record:  transaction,
function getRecordType( record: string ): RecordType {
	if ( record.includes( 'INTERNET TRANSFER' ) ) {
		return 'Payment Transfer'
	}
	if ( record.includes( 'RETAIL PURCHASE' ) ) {
		return 'Retail Purchase'
	}
	if ( record.includes( 'PREAUTHORIZED DEBIT' ) ) {
		return 'Debit'
	}
	if ( record.includes( 'E-TRANSFER' ) ) {
		return 'E-Transfer'
	}
	if ( record.includes( 'BILL PAY' ) ) {
		return 'Bill Pay'
	}
	if ( record.includes( 'E-TRANSFER' ) ) {
		return 'E-Transfer'
	} else {
		return undefined;
	}

}



function Transaction( { date, name, amount }: TransactionProps ) {

	const cleanedName = cleanString( name );

	return (
		<div className='flex w-full gap-4 pb-2 border-b'>
			<span> {date}</span>

			{/* <span className='text-gray-400'>{date.toLocaleDateString( "en-CA", {
				year: "numeric",
				month: "2-digit",
				day: "2-digit",
			} )}</span> */}

			<span className='flex gap-1'>
				{cleanedName.split( ' ' ).map( ( word, i ) => word.length > 1 && <WordLink key={`${date}-${word}-${i}`} word={word} /> )}
			</span>

			<span className='ml-auto'>${amount}</span>

			<Badge type={getRecordType( name )} />
		</div>
	)
}

export default observer( Transaction )
