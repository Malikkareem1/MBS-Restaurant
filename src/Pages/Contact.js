
import Layout from '../components/Layout/Layout'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

import "../../src/Styles/Contact.css"
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w9rjdp8', 'template_13h6whk', form.current, '1_kILJ-n6E-rUklNi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     alert ("Submitted")
  };
  return (
    <Layout>
     <div className='body'>
     <Container >
     
     <Row className="mb-5 mt-3">
       <Col lg="8">
         <h1 className="display-4 mb-4">Contact Me</h1>
         <hr className="t_border my-4 ml-0 text-left" />
       </Col>
     </Row>
     <Row className="sec_sp">
       <Col lg="5" className="mb-5">
         <h3 className="color_sec py-4">Get in touch</h3>
        
       </Col>
       <Col lg="7" className="d-flex align-items-center">
         <form  className="contact__form w-100" ref={form} onSubmit={sendEmail}>
           <Row>
             <Col lg="6" className="form-group">
               <input
                 className="form-control"
                 id="name"
                 name="from_name"
                 placeholder="Name" 
                 type="text"
                 required 
               />
             </Col>
             <Col lg="6" className="form-group">
               <input
                 className="form-control rounded-0"
                 id="email"
                 name="from_email"
                 placeholder="Email"
                 type="email" 
                 required 
               />
             </Col>
           </Row>
           <textarea
             className="form-control rounded-0"
             id="message"
             name="message"
             placeholder="Message"
             rows="5" 
             required
           ></textarea>
           <br />
           <Row>
             <Col lg="12" className="form-group">
               <button className="btn ac_btn" type="submit"> 
               Send
               </button>
               
             </Col>
           </Row>
         </form>
       </Col>
     </Row>
   </Container>
   </div>
    </Layout>
    
  )
}

export default Contact
