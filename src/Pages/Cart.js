import React,{useContext, useState, useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import { CartContext } from '../App';
import "../../src/Styles/Cart.css";
const Cart = () => {
  const {cartItems, setCartItems} =useContext(CartContext)
  
 const [price, setPrice] =useState(0)
  const [cart, setCart] = useState();
  const addToCart = (quantity) => {
    
   
  };

  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

const handlePrice =()=>{
  let ans =0;
  cartItems.map((productItem)=>{
    ans+=quantity * productItem.price
  })
  setPrice(ans);
}

useEffect (() => {
handlePrice();
})
const handleRemove = (id) =>{
  setCartItems(cartItems.filter((product) => product.id !== id));
setCart()
handlePrice();
};

  return (
    <Layout>
      {/* <CartItemsContainer/> */}
      <div className='main-container'>
      <h2>Food Restaurant</h2>
      <div className='cart-container'>
        {cartItems.map((productItem) => (
          <div className='title2-container'>
          <div className='title-container'>title:{productItem.title}</div>

            <img src={productItem.image} alt="err" />
            <div className='price-container'>  Price {productItem.price}
            <button onClick={()=>handleRemove(productItem.id)}>Remove</button>
            </div>
            <div className="quantity">
          <button onClick={decrement}>-</button>
          <span>{quantity}</span>
          <button onClick={increment}>+</button>
        </div>
       
          </div>

        ))}
        <div className='total'>
          <span>Total Price of your Order</span>
          <span>Rs - {price}</span>
        </div>
      </div>
      <button className="proceed-button">Proceed to Buy</button>
    </div>
    </Layout>
  )
}

export default Cart







