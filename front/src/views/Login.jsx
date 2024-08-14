import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./login.module.css"
import ValidateLogin from "../helpers/validateLogin.js";


const Login = ()=>{

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

const handleOnchange = (event)=>{
const {name, value} = event.target;
setLogin({
    ...login, [name]:value
})

    setErrors(ValidateLogin(login))
};

const handleSubmitForm = async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:3004/user/login", login, 
        {headers: {
        'Content-Type': 'application/json'
      }})
      .then((response) => console.log(response.data))
      .catch((error)=>console.log("Erro", error))
      alert("Logeo exitoso...")
       Navigate("/MisTurnos");
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