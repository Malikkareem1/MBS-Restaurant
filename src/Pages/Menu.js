import React, { useEffect, useState, useContext } from 'react'
import {MenuList} from '../data/data'
import Layout from '../components/Layout/Layout'
import { IoSearchSharp } from "react-icons/io5";
import "../../src/Styles/Menu.css";
import ClipLoader from "react-spinners/ClipLoader";
import { CartContext, userContext } from '../App';
const Menu = (product) => {
 
const user =useContext(userContext);
const[data, setData]=useState([])
useEffect(()=>{
  fetch("http://localhost:3000/list").then((data)=>data.json()).then((data)=>setData())
},[])
console.log();

const {cartItems, setCartItems} =useContext(CartContext)
const [loading ,setLoading]=useState(false)
useState(()=>{
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 3000);
},[])


  const [list,setList]=useState([])
  const [search,setSearch]=useState("")
  useEffect(()=>{
    setList(MenuList)
  },[])
  const handleClick=()=>{
    const temp=list.filter((p)=>p.title.toLowerCase().includes(search.toLowerCase()))
    setList(temp)
  }
  const handleSearch=(e)=>{
    setSearch(e.target.value)
    setList(MenuList)

  }

 const handleAddToCart =(obj)=>{
  setCartItems([...cartItems, obj])
  
 }
  
  return (
    <div>
   {
    loading?
    <div className='loder'>
    <ClipLoader
    color={'#36b7b7'}
    loading={loading}
  
    size={100}
   

  /> 
   </div>
   :
  
  <Layout>
  <div className='search-box'>
    <input type="text" placeholder='Search here------' onChange={(e)=>handleSearch(e)} />
   <div className='search-icon'  onClick={handleClick} > < IoSearchSharp  /></div>
  </div>
  <div className='flex'>
   {list.map((productItem,productList) => {
    return (
   <div style={{width:'90%'}}>
    <div className='menu-item'>
      <img src={productItem.image} className='product'/> 
      <p className='product-list'>{productItem.title}</p>
      <p className='product-list' >{productItem.description}</p> 
      <p className='pricing'> Rs. {productItem.price}/-</p>
      <button onClick={()=>handleAddToCart(productItem)} className='product-list-grid'>Add TO Cart</button>
      
    </div>
    
   </div>
    )
   })}
  </div>
  

</Layout>
    
}

</div>
  )
}

export default Menu
