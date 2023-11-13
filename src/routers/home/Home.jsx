import TodoContainer from "../../layout/todo-container/todoContainer";
import Nav from "../../components/nav/Nav";
import "./Home.scss";


const Home = () => {
  return (
    <>
      <Nav/>
      <div className="home">
          <TodoContainer/>
      </div>
    </>
  )
}

export default Home