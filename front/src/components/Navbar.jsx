//import About from './About'
//import Register from './Register'
//import Login from './Login'
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import images from '../assets/images.png';
import { useDispatch, useSelector } from 'react-redux';
import {logOut} from '../redux/sliceUser'
import { resetReserve } from '../redux/sliceReserve';

const Navbar = ()=>{

    const user = useSelector((state)=>state.User.user);
    const dispatch = useDispatch();
   const navigate = useNavigate();


    const handleState = ()=>{
        dispatch(resetReserve())
     dispatch(logOut())
     navigate('/')
     return;
    }
    return (
   
    <div className={styles.navbar} >
    <img src={images} alt="NH" style={{width:"70px", height:"70px"}} />
    <Link to="/">HOME</Link>
   
   {user?(<>
    <Link to="/Misturnos">My turns</Link>
    <button className={styles.btn} onClick={handleState}>Logout</button>
    </>
   ):(<>
      <Link to="/Login">LOGIN</Link>
      <Link to="/Register">REGISTER</Link>
   </>)}
   </div>
    )
}

export default Navbar;