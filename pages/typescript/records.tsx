import React, { FC } from 'react';

interface Starship {
	name: string
	warp: boolean
}

const starShips: Record<string, Starship> = {
	firstOne: {
		name: 'Enterprise',
		warp: true
	},
	secondOne: {
		name: 'Borg Qube',
		warp: false
	}

}


export default function records() {
	return (
		<>

			{Object.entries( starShips ).map( item => <p>{item[1].name}</p> )}
		</>
	)
}
