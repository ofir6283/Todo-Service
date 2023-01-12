import React from 'react'

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClick() {
        toggleTodo(todo.id);
    }
    console.log(todo.name, todo.id)
    return (
        <div>
            <label>
                {todo.name}
                <input type='checkbox' checked={todo.isCompleted} onChange={handleTodoClick} />
            </label>
        </div>
    )
}


