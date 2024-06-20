import React from 'react'
import { TodoContext } from './TodoContext'

const DEFAULT_TODO_LIST = [
	{ id: 1, name: 'task 1', description: 'description 1', checked: false },
	{ id: 2, name: 'task 2', description: 'description 2', checked: false },
	{
		id: 3,
		name: 'task 3',
		description:
			'so long task description 3 so long task description so long task description so long task description so long task description',
		checked: true,
	},
]

interface TodoProviderProps {
	children: React.ReactNode
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
	const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST)
	const [todoIdForEdit, setTodoIdForEdit] = React.useState<Todo['id'] | null>(
		null
	)

	const selectTodoIdForEdit = (id: Todo['id']) => {
		setTodoIdForEdit(id)
	}

	const addTodo = ({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
		setTodos([
			...todos,
			{ id: todos[todos.length - 1].id + 1, description, name, checked: false },
		])
	}

	const checkTodo = (id: Todo['id']) => {
		setTodos(
			todos.map(todo => {
				if (todo.id === id) {
					return { ...todo, checked: !todo.checked }
				}
				return todo
			})
		)
	}

	const deleteTodo = (id: Todo['id']) => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const changeTodo = ({ name, description }: Omit<Todo, 'checked' | 'id'>) => {
		setTodos(
			todos.map(todo => {
				if (todo.id === todoIdForEdit) {
					return { ...todo, name, description }
				}
				return todo
			})
		)
		setTodoIdForEdit(null)
	}
	const value = React.useMemo(
		() => ({
			todoIdForEdit,
			todos,
			changeTodo,
			deleteTodo,
			checkTodo,
			addTodo,
			selectTodoIdForEdit,
		}),
		[
			todoIdForEdit,
			todos,
			changeTodo,
			deleteTodo,
			checkTodo,
			addTodo,
			selectTodoIdForEdit,
		]
	)
	return <TodoContex.Provider value={value}> {children} </TodoContex.Provider>
}
