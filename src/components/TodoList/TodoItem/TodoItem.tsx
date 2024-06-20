import React from 'react'
import styles from './TodoItem.module.scss'
import Button from '../../Button/Button'

interface TodoItemProps {
	todo: Todo
	checkTodo: (id: Todo['id']) => void
	deleteTodo: (id: Todo['id']) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, checkTodo, deleteTodo }) => {
	return (
		<div className={styles.todo_item_container}>
			<div>
				<div
					aria-hidden
					onClick={() => checkTodo(todo.id)}
					className={styles.todo_item_title}
					style={{
						opacity: todo.checked ? 0.5 : 1,
						textDecoration: todo.checked ? 'line-through' : 'none',
					}}
				>
					{todo.name}
				</div>
				<div aria-hidden className={styles.todo_item_description}>
					{todo.description}
				</div>
			</div>
			<div className={styles.todo_item_button_container}>
				<Button color='orange'>EDIT</Button>
				<Button color='red' onClick={() => deleteTodo(todo.id)}>
					DELETE
				</Button>
			</div>
		</div>
	)
}

export default TodoItem
