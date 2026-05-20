import React from 'react';
import logo from "../img/logo.svg";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/"><img src={logo} alt="" height="40" /></Link>
        <button>Explore</button>
        <div className='menu'>
            <Link to='/online-degrees' className='nav-links'>Online Degrees</Link>
            <Link to='/careers' className='nav-links'>Careers</Link>
            <Link to='/login' className='login'>Log In</Link>
            <button>Join for free</button>
        </div>
    </div>
  )
}

export default Navbar