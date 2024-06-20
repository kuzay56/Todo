import React from 'react'
import { TodoContext } from '../utils/context/TodoContext'

export const useTodo = () => React.useContext(TodoContext)
