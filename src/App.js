
import React, {useState, useEffect, createContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import app from './firebase/Firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import  Home  from './Pages/Home'
import About from './Pages/About'
import  Menu  from './Pages/Menu'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import  Login  from './Pages/Loginpage/Login'
import Signup from './Pages/Signuppages/Signup'

export const userContext =createContext({});
export const CartContext =createContext([]);
const App = () => {
  const auth= getAuth(app);
const [authenticatedUser, setAuthenticatedUser] =useState(null);

const [cartItems, setCartItems] = useState([]);


useEffect(()=>{
  onAuthStateChanged (auth, (user)=>{
if(user){

setAuthenticatedUser(user);
}else{
  setAuthenticatedUser(null);
}
  })

},[])

console.log(cartItems);

useEffect(()=>{
console.log(cartItems);
},[cartItems])
  
  return (
    <userContext.Provider value ={authenticatedUser} >
      <CartContext.Provider value ={{cartItems, setCartItems}} >
    <BrowserRouter>
   
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/menu' element={<Menu/>}/>
      
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/signup'  element={<Signup/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     
   
  
    
     
    </BrowserRouter>
    </CartContext.Provider>
    </userContext.Provider>
  )
}

export default App





