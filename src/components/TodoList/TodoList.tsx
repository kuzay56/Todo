import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import TodoPanel from '../TodoPanel/TodoPanel'

interface TodoListProps {
	todos: Todo[]
	todoIdForEdit: Todo['id'] | null
	changeTodo: ({ name, description }: Omit<Todo, 'checked' | 'id'>) => void
	checkTodo: (id: Todo['id']) => void
	deleteTodo: (id: Todo['id']) => void
	selectTodoIdForEdit: (id: Todo['id']) => void
}

const TodoList: React.FC<TodoListProps> = ({
	todos,
	checkTodo,
	changeTodo,
	deleteTodo,
	selectTodoIdForEdit,
	todoIdForEdit,
}) => {
	return (
		<div>
			{todos.map(todo => {
				if (todo.id === todoIdForEdit)
					return (
						<TodoPanel
							key={todo.id}
							mode='edit'
							editTodo={{ name: todo.name, description: todo.description }}
							changeTodo={changeTodo}
						/>
					)

				return (
					<TodoItem
						key={todo.id}
						todo={todo}
						checkTodo={checkTodo}
						deleteTodo={deleteTodo}
						selectTodoIdForEdit={selectTodoIdForEdit}
					/>
				)
			})}
		</div>
	)
}

export default TodoList
