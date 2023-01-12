import React, { useId, useRef, useState } from 'react';
import uuid4 from 'uuid4';
import './App.css';
import MainBackground from './images/oceanBackground.jpg';
import TodoList from './TodoList';

// const LOCAL_STORAGE_KEY = 'todoApp.todoList';

function App() {

  const [todoList, setTodos] = useState([]);
  const todoNameRef = useRef();

  function handleAddTodo(event) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuid4(), name: name, isCompleted: false }]
    })
    todoNameRef.current.value = null;
  }

  function toggleTodo(id) {
    const newTodos = [...todoList];
    const todo = newTodos.find(todo => todo.id === id);
    todo.isCompleted = !todo.isCompleted;
    setTodos(newTodos);
  }

  function handleClearTodos() {
    const newTodos = todoList.filter(todo => !todo.isCompleted)
    setTodos(newTodos)
  }
  console.log(todoList.length)
  return (
    <>
      <div className='body' style={{ backgroundImage: `url(${MainBackground})` }}>
        <div >
          <div className='main-container'>

            {/* <img className='main-background-img' src={MainBackground} /> */}
            <input className='task-input-textbox' ref={todoNameRef} type='text' placeholder='Please Write your task here' />
            <button className='add-task-btn' onClick={handleAddTodo}>Add Task</button>
            <button className='completed-task-btn' onClick={handleClearTodos}>Mark Task as completed</button>
            <div className='tasks-left'>Tasks Left: {todoList.filter(todo => !todo.isCompleted).length}</div>
          </div>
        </div>

        <div className='tasks'>
          <TodoList todosList={todoList} toggleTodo={toggleTodo} />
        </div>
      </div>
    </>
  )
}

export default App;
