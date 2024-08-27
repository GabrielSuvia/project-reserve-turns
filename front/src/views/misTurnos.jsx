import { useEffect } from 'react'
//import turns from '../helpers/turn.js'
import Turns from '../components/turn.jsx'
import style from './titulo.module.css'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import { resetReserve, reservationAdd} from '../redux/sliceReserve.jsx'
import { useNavigate } from 'react-router-dom'
//import Turn from '../components/turn.jsx'

const MisTurno = ()=>{
    const dispatch = useDispatch();
    const userSelect = useSelector((state)=> state.User.user)
    const turnSelect = useSelector((state)=> state.reserve.reservation)//[]
    const navigate = useNavigate()

if(!userSelect){
    alert('Is necesary to login your users')
    return;
}
   
  console.log("turnSelect-misturno",turnSelect)

 const handleAddTurn = ()=>{
      navigate('/createTurn')
 }
  //catch user with hir id and his turns array

   useEffect(()=>{
    
        axios.get(`http://localhost:3004/user/${userSelect.id}`)
        .then((response) => {  response.data.turnId?.forEach((item)=>dispatch(reservationAdd(item)) )
            console.log("userId, turnId",response.data.turnId)
        })//un arreglo
        .catch((error)=> console.log(error))

        //al desmontarse el user
        /*
         return ()=>{dispatch(resetReserve())
            console.log("Activando el reset al salir usuario",turnSelect, userSelect)
         }*/

   },userSelect?[userSelect.id] : [])
   
    console.log("renderizando",turnSelect)
    return(<>

    <div>
    <h3>Usuario: {userSelect.userName}</h3>
    <p>photo</p>
    </div>
    
    <button onClick={handleAddTurn} className={style.boton}>Crear Nuevo turno</button>
    <h1 className={style.titulo}>Mis Turnos</h1>
    
        {turnSelect?.map((item,index)=>{
            return <Turns key={index} turn={item}/>
        })}
  
    </>)
}

export default MisTurno