import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'


import "../../Styles/Footer.css"



const Footer = () => {
  return (


   
    <footer className='footer-container'>
         <div className='icon-logo'> 
         <FontAwesomeIcon  icon={faYoutube} ></FontAwesomeIcon>
         <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
         <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
         <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
         </div>
        
       
        
        <div className='footer-box'></div>
        
        
       
        <p>All Rights Reserved &copy;Malik Tech</p>
        
      
    </footer>
  )
}

export default Footer
