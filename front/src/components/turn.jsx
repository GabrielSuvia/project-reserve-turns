import styles from './turns.module.css'

const Turns = ({turn})=>{

return(<div className={styles.container}>
          
        <p className={styles.record}>date: {turn.date}</p>
        <p className={styles.record}>time: {turn.time}</p>
        <p className={styles.record}>status: {turn.status}</p>
        <button onClick={""}>cancel</button>

       </div>)

}

export default Turns