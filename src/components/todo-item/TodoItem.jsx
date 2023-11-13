import "./TodoItem.scss"
import { formatDate } from "../../helpers/formatDate";
import { useEffect, useRef, useState } from "react";

const TodoItem = ({id, todoname, isCompleted, isEdited, isDisabled, date, alarm, todos, setTodos }) => {
  const [todoactions, setTodoactions] = useState(false);
  const { hours, minutes } = formatDate(date);
  const [deleteItem, setDeleteItem] = useState(JSON.parse(localStorage.getItem("delete")) || []);
  const [completeTask, setCompleteTask] = useState(JSON.parse(localStorage.getItem("CompleteTask")) || []);
  const todoItem = useRef();

useEffect(()=>{
  localStorage.setItem("delete", JSON.stringify(deleteItem))
},[deleteItem]);

useEffect(()=>{
  localStorage.setItem("CompleteTask", JSON.stringify(completeTask))
},[completeTask])

const handleToggleActions = (e) => {
  if (e.target.closest(".todo-item")) {
    setTodoactions(!todoactions)
  }
}

const handleCompleteTask = (id)=>{
  setTodos(todos.map(todo => todo.id == id? {...todo, isCompleted: !todo.isCompleted}: todo));
  console.log(completeTask)
}

const handleDeleteTask = (id)=>{
  
    setTodos(todos.map(todo => todo.id == id? {...todo, archive: !todo.archive}: todo));
    setDeleteItem([...todos.filter(todo => todo.archive)]);
    console.log(deleteItem);
    setTodos(todos.filter(todo => todo.id !== id && todo));

  }

 
  return (
    <div className={`todo-item ${isCompleted && "todo-item--active"}`} ref={todoItem} onClick={handleToggleActions}>
        <div className={`item__content-wrapper ${isCompleted && "item__content-wrapper--active"}`}>
            <h3 className="item__name">{todoname}</h3>
            <p className="item__date">{`${hours} : ${minutes}`}</p>
        </div>
        <div onClick={e => e.stopPropagation()} className={ todoactions ? "item__actions item__actions--active" : "item__actions"}>
                <button onClick={()=> handleCompleteTask(id)}>Complete</button>
                <button>Edit</button>
                <button onClick={()=> handleDeleteTask(id)}>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem