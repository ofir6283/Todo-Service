import React, { useId } from 'react';
import Todo from './Todo';


const TodoList = ({ todosList, toggleTodo }) => {
    return (
        todosList.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}
export default TodoList