import classNames from 'classnames';


interface BadgeProps {
	type: RecordType
}

export default function Badge( { type }: BadgeProps ) {
	const classes = classNames( {
		'bg-gray-200': type === 'Retail Purchase',
		'bg-gray-100': type === 'E-Transfer',
		'bg-gray-50': type === 'Debit',
	} );

	return (
		<div className='min-w-[140px]'>

			<span
				className={classNames(
					"py-1 px-2 text-xs font-mono rounded-md uppercase ",
					classes
				)}
			>
				{type}</span>
		</div>
	)
}


async function getChars() {
	const res = await fetch( 'https://rickandmortyapi.com/api/character' );
	const data = await res.json()
}
