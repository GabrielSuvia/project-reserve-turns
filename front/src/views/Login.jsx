import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./login.module.css"
import ValidateLogin from "../helpers/validateLogin.js";
import {useDispatch} from "react-redux";
import {logIn} from "../redux/sliceUser.jsx"


const Login = ()=>{
const dispatch = useDispatch();
const Navigate = useNavigate();

const [login, setLogin] = useState({
    userName:"",
    password:""
});

const [errors, setErrors] = useState({
    userName:"username is required",
    password:"password is required"
})
console.log(errors)
//catch all field of the interface
const handleOnchange = (event)=>{
const {name, value} = event.target;//recoje todos los valores del formulario junto con su nombre

setLogin({
    ...login, [name]:value                           //estado anterior
})

    setErrors(ValidateLogin(login))//objeto de errors puede quedar vacio
    //y no enviar ningun advertencia debajo del campo de la input

};

const handleSubmitForm = (e)=>{
    e.preventDefault();
     axios.post("http://localhost:3002/user/login", login, 
        {headers: {
        'Content-Type': 'application/json'
      }})
      .then((response) => {console.log("INFORMATION OF AXIOS.POST",response.data);
       
        dispatch(logIn(response.data));//??????
        Navigate("/MisTurnos");
       })
      .catch((error)=>console.log("Erro", error))
      alert("Logeo exitoso...")
      
       
};


    return (<div>
   
    <form onSubmit={handleSubmitForm} className={styles.formContein}>
         <h1 >Login</h1>

         <div className={styles.entrada1} >
            <label style={{position:'absolute', left:'30px',top:'68px'}}>user</label>
            <input type="text" name="userName" value={login.userName} onChange={handleOnchange} className={styles.input1}/>
            {errors.userName && <p style={{position:'absolute', left:'380px', top:'75px'}}>{errors.userName}</p>}
        </div>

        <div className={styles.entrada2}>
            <label style={{position:'absolute', left:'30px',top:'140px'}}>password</label>
            <input type="password" name="password" value={login.password} onChange={handleOnchange} className={styles.input2} />
            {errors.password &&<p style={{position:'absolute', left:'380px',top:'140px'}}>{errors.password}</p>}
      </div>

          <button type="submit" className={styles.boton}>Enter</button>
    </form>
    </div>
    )
}

export default Login;