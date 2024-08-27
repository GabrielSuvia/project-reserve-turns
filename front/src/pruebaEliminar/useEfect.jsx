import { useEffect,useState, userParams } from "react";


const PruebaEfect = ()=>{

    const [contact, setContact]= useState({});
    const {id} = userParams();

useEffect(()=>{
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((data)=> setContact(data))

    return ()=>{setContact({});};

},[id])

return <>
    <h1>Contacto</h1>
    <p>{contact.name}</p>
    <p>{contact.email}</p>

</>
}

export default PruebaEfect;