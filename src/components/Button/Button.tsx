import React from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
	color: 'orange' | 'blue' | 'red'
}

const Button: React.FC<ButtonProps> = ({ children, color, onClick }) => {
	const className = 
}

export default Button
