//import About from './About'
//import Register from './Register'
//import Login from './Login'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import images from '../assets/images.png';

const Navbar = ()=>{
    return (
    <>
    <div className={styles.navbar} >
    <img src={images} alt="NH" style={{width:"70px", height:"70px"}} />
    <Link to="/">HOME</Link>
    <Link to="/Misturnos">MIS TURNOS</Link>
    <Link to="/Login">LOGIN</Link>
    <Link to="/Register">REGISTER</Link>

    </div>
    </>
    
    )
}

export default Navbar;