import { useState } from "react"
import "./Arxiv.scss"
import Nav from '../../components/nav/Nav'


const Arxiv = () => {
  // const [arxiv, setArxiv] = useState(localStorage.getItem("delete") || [])
  return (
    <>
        <Nav/>
        <div className="arxiv"></div>
    </>
  )
}

export default Arxiv