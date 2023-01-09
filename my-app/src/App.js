import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import TodoList from './TodoList';

// const LOCAL_STORAGE_KEY = 'todoApp.todoList';

function App() {

  const [todoList, setTodos] = useState([]);
  const todoNameRef = useRef();

  // Saving tasks in local storage
  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storedTodos) setTodos(storedTodos)
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(TodoList))
  // }, [todoList])

  function handleAddTodo(event) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: todoList.length + 1, name: name, isCompleted: false }]
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
  return (
    <>
      <TodoList todosList={todoList} toggleTodo={toggleTodo} />
      <input className='task-input-textbox' ref={todoNameRef} type='text' placeholder='Please Write your task here' />
      <button className='add-task-btn' onClick={handleAddTodo}>Add Task</button>
      <button className='completed-task-btn' onClick={handleClearTodos}>Mark Task as completed</button>
      <div className='tasks-left'>Tasks Left: {todoList.filter(todo => !todo.isCompleted).length}</div>
    </>
  )
}

export default App;
