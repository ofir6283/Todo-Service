import React from 'react';
import Todo from './Todo';

export default function TodoList({ todosList, toggleTodo }) {
    return (
        todosList.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}
