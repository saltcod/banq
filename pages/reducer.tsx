import React, { FC, useReducer } from 'react'

type Actions = { type: 'add'; text: string } | { type: 'remove'; idx: number }
type State = Todo[]

interface Todo {
	text: string;
	complete: boolean;
}

const TodoReducer = ( state: State, action: Actions ) => {
	switch ( action.type ) {
		case 'add':
			return [...state, { text: action.text, complete: false }]
		case 'remove':
			return state.filter( ( _, i ) => action.idx !== i )
		default:
			return state;
	}
}

export const ReducerExample: FC = () => {

	const [todos, dispatch] = useReducer( TodoReducer, [] );

	return (
		<div>
			<h1>Reducer example</h1>
			<button onClick={() => { dispatch( { type: 'add', text: 'mow lawn' } ) }}>Add todo</button>
			<button onClick={() => { dispatch( { type: 'remove', idx: 5 } ) }}>Remove todo</button>
		</div>
	)
}
