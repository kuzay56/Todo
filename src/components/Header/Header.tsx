import React from 'react'
import styles from './Header.module.scss'

interface HeaderProps {
	todoCount: number
}

const Header: React.FC<HeaderProps> = ({ todoCount }) => {
	return (
		<div className={styles.header_container}>
			<div className={styles.header_title}>
				Todo list <b>{todoCount}</b> task(s)
			</div>
		</div>
	)
}

export default Header
