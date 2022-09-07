import React, { FC } from 'react';

interface ButtonProps {
	size?: ButtonSizes
	variant?: ButtonVariants
}

type ButtonSizes = 'small' | 'large'
type ButtonVariants = 'primary' | 'ghost'

const sizes: Record<ButtonSizes, React.CSSProperties> = {
	large: {
		padding: `1rem 2rem`
	},
	small: {
		padding: `.5rem 1rem`
	}
}

const variantRecord: Record<ButtonVariants, React.CSSProperties> = {
	ghost: { border: `1px solid #eee` },
	primary: { border: `1px solid #222` },
}

const Button: FC<ButtonProps> = ( { children, size = 'small', variant = 'ghost' } ) => {
	return <button className='border' style={{ ...sizes[size], ...variantRecord[variant] }}>{children}</button>
}

export default function TSPlayground() {
	return (
		<>
			<div><Button>small button</Button></div>
			<div><Button size={'large'}>Large Button</Button></div>
		</>
	)
}
