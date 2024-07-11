import { useState, useEffect } from 'react'
//import turns from '../helpers/turn.js'
import Turns from '../components/turn.jsx'
import style from './titulo.module.css'
import axios from 'axios'
//import Turn from '../components/turn.jsx'

const MisTurno = ()=>{
 
   const [turn, setTurn] = useState([])
 
   useEffect(async()=>{
    try{
        const arr = await axios.get("http://localhost:3004/turn")
        setTurn(arr.data)
    }catch(error){
       throw Error("hubo un error")
    }
    
   },[])
    
    return(<>
    <h1 className={style.titulo}>Mis Turnos</h1>
    
        {turn.map((turn)=>{
            return <Turns key={turn.id} turn={turn}/>
        })}
  
    </>)
}

export default MisTurno