import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from "react-router-dom"
import home from '../../src/Assets/homes.webp'
import "../../src/Styles/Home.css"

const Home = () => {
  return (

<>


    <Layout>
   <div className='home' style={{backgroundImage:`url(${home})`, height:700,margin:0,padding:0}}>
   
    <div className="headerContant">
      <h1>Food Website</h1>
      <p>Best Food In Lucknow</p>
      <Link to="/menu">
      <button>Order Now</button>
      </Link>
    </div>
    </div>
   
      
    </Layout>
    
    </>
  )
}

export default Home
