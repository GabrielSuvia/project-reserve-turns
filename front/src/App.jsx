//import { useState } from 'react'
import './App.css'
import Register from './views/Register';
import Login from './views/Login';
import { Routes,Route,useLocation } from 'react-router-dom';
import Home from './views/home.jsx'
import Navbar from './components/Navbar.jsx'
import MisTurno from './views/misTurnos.jsx'

function App() {
 // const [count, setCount] = useState(0)
 const Location = useLocation();
 console.log(useLocation)
  return ( <div>
  {Location.pathname === "/"? <Navbar/> : null }
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/MisTurnos" element={<MisTurno/>}/>
</Routes>
</div>
  )
}

export default App
