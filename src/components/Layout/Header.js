import React, { useState, useContext } from 'react';

import{NavLink, Link, useNavigate} from 'react-router-dom'

import "../../Styles/HeaderStyle.css"

import { FaCartArrowDown } from "react-icons/fa";
import { userContext } from '../../App'
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase/Firebase'

const Header = () => {
  
 const user=useContext( userContext);
const auth = getAuth(app);

const handleLogout=()=>{
    signOut(auth).then(()=>{
navigate('/')
    })
.catch((err)=>{
  console.log(err);
})
    }


const showLoginandSignUp=(
  <ul className="nav-links"
      
      >
      
     
        <NavLink to='/' className='home'>
          <li ><Link to='/'></Link>Home</li>
        </NavLink>
        <NavLink to="/about" className='about'>
          <li>About</li>
        </NavLink>
        <NavLink to="/menu" className='menu'>
          <li><Link to='/menu'></Link>Menu</li>
        </NavLink>
        <NavLink to="/contact" className='contact'>
          <li>Contact</li>
        </NavLink>
        <NavLink to="/login" className='login'>
          <li>Login</li>
        </NavLink>
        <NavLink to="/signup" className='signup'>
          <li>Sign Up</li>
        </NavLink>
        <NavLink to="/cart" className='cart'>
       <li><FaCartArrowDown /></li>
        </NavLink>
      
      </ul>
)
const showLogoutAndCart=(
  <ul className="nav-links"
      
      >
      
     
        <NavLink to='/' className='home'>
          <li ><Link to='/'></Link>Home</li>
        </NavLink>
        <NavLink to="/about" className='about'>
          <li>About</li>
        </NavLink>
        <NavLink to="/menu" className='menu'>
          <li>Menu</li>
        </NavLink>
        <NavLink to="/contact" className='contact'>
          <li>Contact</li>
        </NavLink>
        <a onClick={handleLogout} className='login' >
          <li>Logout</li>
        </a>
      
        <NavLink to="/cart" className='cart'>
       <li><FaCartArrowDown /></li>
        </NavLink>
      
      </ul>
      
)
  const navigate =useNavigate();
  const [searchTerm, setSearchTerm] =useState("")
  
  const handleSubmit= (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
    
  }
  return (
    <nav className='navbar'>

      <div className='logo'> 
        
        <p className='right'>MBS <span className='restu'>Restaurant</span></p>
      </div>
      
      {/* <ul className={isMobile?"nav-links-mobile":"nav-links"}
      onClick={()=>setIsMobile(false)}
      >
      
     
        <NavLink to='/' className='home'>
          <li ><Link to='/'></Link>Home</li>
        </NavLink>
        <NavLink to="/about" className='about'>
          <li>About</li>
        </NavLink>
        <NavLink to="/menu" className='menu'>
          <li>Menu</li>
        </NavLink>
        <NavLink to="/contact" className='contact'>
          <li>Contact</li>
        </NavLink>
        <NavLink to="/login" className='login'>
          <li>Login</li>
        </NavLink>
        <NavLink to="/signup" className='signup'>
          <li>Sign Up</li>
        </NavLink>
        <NavLink to="/cart" className='cart'>
       <li><FaCartArrowDown /></li>
        </NavLink>

      </ul> */}
      {user ? showLogoutAndCart : showLoginandSignUp}
      
      
    </nav>
  );
}

export default Header

