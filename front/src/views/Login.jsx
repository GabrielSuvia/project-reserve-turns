import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./login.module.css"
import ValidateLogin from "../helpers/validateLogin.js";
import {useDispatch} from "react-redux";
import {logIn} from "../redux/sliceUser.jsx"
import { resetReserve } from "../redux/sliceReserve.jsx";


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
     axios.post("http://localhost:3004/user/login", login, 
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


    return (<div className={styles.loginContainer}>
   
    <form onSubmit={handleSubmitForm}>
         <h1>Login</h1>

            <label>user</label>
            <input type="text" name="userName" value={login.userName} onChange={handleOnchange} />
            {errors.userName && <p style={{color:'red'}}>{errors.userName}</p>}
        
            <label>password</label>
            <input type="password" name="password" value={login.password} onChange={handleOnchange} />
            {errors.password &&<p style={{color:'red'}}>{errors.password}</p>}

          <button type="submit">Enter</button>
    </form>
    </div>
    )
}

export default Login;