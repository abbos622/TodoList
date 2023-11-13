import {FiPlus} from "react-icons/fi"
import "./TodoAdder.scss"
import { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types'

const TodoAdder = ({todos, setTodos}) => {
  const [todoname, setTodoname] = useState("");
  const resIn = useRef();
  const handleFormSubmit = (e)=>{
    e.preventDefault();
    const todo = {
      id: String(Math.random(Math.random()*10000000)).slice(2, 8),
      todoname: todoname.trim(),
      isCompleted: false,
      isEdited: false,
      isDisabled: false,
      archive: false,
      date: new Date(),
      alarm: new Date().getTime + 200000,
    }
    if(todoname != " " && todoname.trim().length != 0){
      setTodos([todo, ...todos])
    }
    setTodoname("")
  }

  return (
    <div className='todo-adder'>
      <h1 className='adder__title'>Todo List</h1>
      <form className='adder__form' onSubmit={handleFormSubmit}>
        <div className="adder__wrapper">
          <label htmlFor="todo-input">Todo Name</label>
          <input type="text" id='todo-input' ref={resIn} value={todoname} onChange={e=> setTodoname(e.target.value)}/>
        </div>
        <button type='submit'><FiPlus/> Create</button>
      </form>
    </div>
  )
}

TodoAdder.prototype=({
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired
})
export default TodoAdder