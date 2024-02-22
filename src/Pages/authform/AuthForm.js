
import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import app from '../../firebase/Firebase';
import{getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from'firebase/auth';


const AuthForm =({buttonName}) => {
    const [username, setUsernmae] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate ();
    

   
    const handleSubmit=(event)=>{
        event.preventDefault();
       const auth = getAuth(app);
       if(buttonName === 'Login' ){
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            
           navigate('/cart') 
        })
        .cath((err) => console.log(err)
        
        );
       }else{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials)=>{
         userCredentials.user.displayName=username;
         navigate('/');
        })
        .catch((err)=>{
         console.log(err);
        })
       }
     
    
   
       
        
    }
  return (
    
         <form onSubmit={handleSubmit}>
         {buttonName === "Signup" && (
             <div className='form-page'>
             <label>Username</label>
             <input type="text"
              className='form-input'
               placeholder='Enter username' 
               value={username}
               onChange={(event)=>setUsernmae(event.target.value)}
               required
               
               />
         </div>
         )}
                <div className='form-page'>
                    <label>Email</label>
                    <input type="email"
                     className='form-input'
                      placeholder='Enter email' 
                      value={email}
                      onChange={(event)=>setEmail(event.target.value)}
                      required
                      />
                </div>

                <div className='form-page'>
                    <label>Password</label>
                    <input type="password"
                     className='form-input' 
                     placeholder='Enter password' 
                     value={password}
                     onChange={(event)=>setPassword(event.target.value)}
                     required
                      />
                </div>
                <div className='form-page'>
                    
                    <input type="submit" className='product-list-grid' value={buttonName} />
                </div>
            </form>
    
  )
}

export default AuthForm
