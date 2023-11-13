import TodoItem from "../../components/todo-item/TodoItem"
import "./TodoList.scss"
const TodoList = ({todos, setTodos}) => {
  return (
    <div className='todo-list'>
        {
          todos?.map(({id, todoname, isCompleted, isEdited, isDisabled, date, alarm})=>
            <TodoItem
            key={id}
              id={id}
              todoname={todoname}
              isCompleted={isCompleted}
              isDisabled={isDisabled}
              date={date}
              alarm={alarm}
              todos={todos}
              setTodos={setTodos}
            />
          )
        }
    </div>
  )
}

export default TodoList