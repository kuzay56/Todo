import React from 'react'
import Header from './components/Header/Header'
import TodoPanel from './components/TodoPanel/TodoPanel'
import TodoList from './components/TodoList/TodoList'

import styles from './App.module.scss'

function App() {
	return (
		<div className={styles.app_container}>
			<div className={styles.container}>
				<Header todoCount={todos.length} />
				<TodoPanel mode='add' addTodo={addTodo} />
				<TodoList
					todos={todos}
					todoIdForEdit={todoIdForEdit}
					checkTodo={checkTodo}
					deleteTodo={deleteTodo}
					selectTodoIdForEdit={selectTodoIdForEdit}
					changeTodo={changeTodo}
				/>
			</div>
		</div>
	)
}

export default App
