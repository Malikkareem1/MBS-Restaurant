import React from 'react'
import Layout from '../components/Layout/Layout'
import about from '../Assets/abouts.webp'
import "../../src/Styles/About.css"

const About = () => {
  return (
    <Layout>
     <div className='about' style={{backgroundImage:`url(${about})`, height:700,margin:0,padding:0}}>
     <div className='about-contact'>
      <h1>Welcom To My Resturant</h1>
      <p>Restaurant provides with all the amenities that one requires for a shift of mood or change in environment to cherish the pleasant atmosphere and enjoy different cuisines to satisfy your hunger.A restaurant is a place where people visit to eat and drink the food being prepared on the premises and pays for the same. The food is served at the table to have a comfortable visit for your meals. The restaurant offers a menu with various options for your meal, to choose from.</p>
      
      </div>
     </div>
    </Layout>
  )
}

export default About
