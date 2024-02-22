import React from 'react'
import Layout from '../../components/Layout/Layout'
import Authbgm from '../../Assets/auth.bga.jpg'
import AuthForm from '../authform/AuthForm'
import './Signup.css'
function Signup() {
  return (
    <Layout>
     <section className='signup-container'>
    <div className='signup-img-container'>
    <img src={Authbgm} alt="authentication-background" />
    </div>
    <div className='signup-contant'>

    <div className='container'>
    <div className='contant-wrapper'>

            <h2>Signup</h2>
            <p>Create a Account</p>

            <AuthForm buttonName='Signup'/>
        </div>
    </div>
    </div>
     </section>
    </Layout>
  )
}

export default Signup
