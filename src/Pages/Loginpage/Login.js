import React from 'react'
import Layout from '../../components/Layout/Layout'
import Authbgm from '../../Assets/auth.bga.jpg'
import './login.css'
import AuthForm from '../authform/AuthForm'
function Login() {
  return (
    <Layout>
     <section className='signup-container'>
    <div className='signup-img-container'>
    <img src={Authbgm} alt="authentication-background" />
    </div>
    <div className='signup-contant'>

    <div className='container'>
    <div className='contant-wrapper'>
        
            <h2>Login</h2>
            <p>Sign in with email and password</p>

         <AuthForm buttonName='login'/>
        </div>
    </div>
    </div>
     </section>
    </Layout>
  )
}

export default Login

