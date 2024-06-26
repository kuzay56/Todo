import React from 'react'
import { useTodo } from '../../Hook/useTodo'

import styles from './Header.module.scss'

const Header: React.FC = () => {
	const { todos } = useTodo()
	return (
		<div className={styles.header_container}>
			<div className={styles.header_title}>
				Todo list <b>{todos.length}</b> task(s)
			</div>
		</div>
	)
}

export default Header
