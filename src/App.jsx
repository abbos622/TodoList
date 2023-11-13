import './App.css'
import Home from "./routers/home/Home"; 
import Arxiv from './routers/arxiv/Arxiv';
import {Routes, Route} from "react-router-dom"

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='arxiv' element={<Arxiv/>}/>
    </Routes>
  )
}

export default App
