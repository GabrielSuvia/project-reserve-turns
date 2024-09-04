import { useState } from 'react'
import styles from './turns.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeReserve } from '../redux/sliceReserve'
import axios from 'axios'

const Turns = ({turn})=>{//es un vacio sacado de la db
 console.log("ID: ", turn)//me lectura 2 veces
    const turnSelector = useSelector((state)=> state.reserve.reservation)//ya recogido de la db y create los turn
    const dispatch = useDispatch()
    const [btn, setBtn] = useState("Cancell")

const handleDelete = ()=>{

console.log(turnSelector,"turnSelector")
   const turnFind = turnSelector.find((tur)=> tur.id === turn.id)

   if(turnFind){

   console.log(turnFind.id, "eliminando en component Turn",turnFind)

    axios.put(`http://localhost:3004/turn/cancel/${turnFind.id}`, turnFind)
    .then((response)=>{ console.log("turno cancelado", response.data)
        setBtn("Cancelled")
        dispatch(removeReserve(turnFind.id))
         console.log(turnFind)
    })
    .catch((error)=> console.log({error: error.message}))
   };
}

return(<div className={styles.container}>
     
        <p className={styles.record}>date: {turn.date}</p>
        <p className={styles.record}>time: {turn.time}</p>
        <p className={styles.record}>status: {turn.status}</p>
        <button onClick={handleDelete}>{btn}</button>

       </div>)

}

export default Turns