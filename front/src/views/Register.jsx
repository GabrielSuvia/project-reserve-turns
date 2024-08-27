import { useState } from "react";
import axios from "axios";
import Validate from "../helpers/validate.js";
import { useNavigate} from "react-router-dom";
import styles from "./Register.module.css";

const Register = ()=>{
const navigate = useNavigate();

const [userForm, setUserForm] = useState({
    userName:"",
    password:"", 
    name:"",
    email:"",
    birthdate:"",
    nDni:"",
})
const [errors, setErrors] = useState({
  userName:"userName is required",
    password:"password is required", 
    name:"name is required",
    email:"email is required",
    birthdate:"bithdate is required",
    nDni:"nDni is required",
});


    const handleOnchange = (event)=>{

        const {name,value} = event.target;

             setUserForm({...userForm, [name]:value})

               setErrors(Validate(userForm));
         };



  const handleSubmit = (e)=>{

    e.preventDefault();

       axios.post("http://localhost:3004/user/register", userForm)
       .then((response)=>console.log(response.data))
       .catch((error)=> {
        console.error('errors to send the data', error);
        alert("faill data...");
       
       })

    alert("succesfully registered...");
   navigate("/login")
  };//onchange corre en tiempo de ejecucion

    return (<div>
   <div className={styles.formContainer}>

       <form onSubmit={handleSubmit}>
       <h1>Register</h1>
       
        <label>user</label>
        <input type="text" name="userName" value={userForm.userName} onChange={handleOnchange} />
      {errors.userName && <p style={{color:'red'}}>{errors.userName}</p>}

        <label>password</label>
        <input type="password" name="password" value={userForm.password} onChange={handleOnchange} />
        {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
        
        <label>name</label>
        <input type="text" name="name" value={userForm.name} onChange={handleOnchange} />
        {errors.name && <p style={{color:'red'}}>{errors.name}</p>}

        <label>email</label>
        <input type="email" name="email" value={userForm.email} onChange={handleOnchange}/>
        {errors.email && <p style={{color:'red'}}>{errors.email}</p>}

        <label>birthdate</label>
        <input type="text" name="birthdate" value={userForm.birthdate} onChange={handleOnchange} />
        {errors.birthdate && <p style={{color:'red'}}>{errors.birthdate}</p>}
        
        <label>nDni</label>
        <input type="number" name="nDni" value={userForm.nDni} onChange={handleOnchange} />
        {errors.nDni && <p style={{color:'red'}}>{errors.nDni}</p>}

        <button type="submit">Registrar</button>
    </form>
    </div>

  </div>)
}

export default Register;