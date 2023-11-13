import "./Nav.scss";
import {NavLink} from "react-router-dom";
import {FcTodoList} from "react-icons/fc"
import Home from "../../routers/home/Home";

const Nav = () => {
  return (
    <nav>
        <div className="nav-wrapper">
            <NavLink to={"/"} className={"navLogo"}><FcTodoList className="Logo"/>TODO LIST</NavLink>
          <ul className="nav-menu">
            <li><NavLink to={"/"}   className={({isActive}) => isActive ? "active navItem" : "navItem"}>Create Task</NavLink></li>
            <li><NavLink to={"/"}  className={({isActive}) => isActive ? "active navItem" : "navItem"}>Disabled task</NavLink></li>
            <li><NavLink to={"/"}  className={({isActive}) => isActive ? "active navItem" : "navItem"}>Archive</NavLink></li>
          </ul>
        </div>
    </nav>
  )
}

export default Nav