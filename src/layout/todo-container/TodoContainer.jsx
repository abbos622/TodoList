import React, { useEffect, useState } from 'react'
import TodoAdder from '../todo-adder/TodoAdder'
import TodoList from '../todo-list/todoList'
import "./TodoContainer.scss"

const TodoContainer = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <div className='todo-container'>
      <TodoAdder todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default TodoContainer