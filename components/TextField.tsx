
import { FC, useState, useRef, RefObject } from 'react'

interface Props {
	text: string
}

interface TextNode {
	text: string
}

export const TextField: FC<Props> = () => {
	const [name, setName] = useState<TextNode>( { text: 'Victor' } )
	const inputRef = useRef<HTMLInputElement>( null );

	return (
		<div>Hello to <input ref={inputRef} placeholder={name.text} /></div>
	)
}
