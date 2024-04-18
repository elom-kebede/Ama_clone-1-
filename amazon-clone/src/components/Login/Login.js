import React, { useState } from 'react'
import "./Login.css"
import {Link, useNavigate} from "react-router-dom"
import { auth } from '../firebases'
function Login() {
  const history=useNavigate();
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
    const login=(event) =>{
      event.preventDefault(); //to prevent the referesh
      
      auth.signInWithEmailAndPassword(email, password)
       .then((auth) => {
           // login in, redirect to homepage
           history.push("/")
       })
       .catch((e)=> alert(e.message));
    }
    
   
    const register=(event) =>{
      event.preventDefault(); //to prevent the referesh
      
      auth.createUserWithEmailAndPassword(email, password)
       .then((auth) => {
           // create a user redirect to homepage
       })
       .catch((e) =>alert(e.message))
    }


  return (
    <div className='login'>
      <Link to="/">
        <img className='login_logo' src="https://cdn.iconscout.com/icon/free/png-256/free-amazon-1869030-1583154.png?f=webp" alt="" />
      </Link>

      <div className="login_container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="email" value={email} onChange={(event=>setEmail(event.target.value))} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={(event=>setPassword(event.target.value))} />
          <button onClick={login} type='submit' className='login_signInButton'>Sign In</button>
          </form> 
          <p>
            By signing-in you agree to Amazon's Conditions of see our Privacy Notice, our Cookies Notice and our interest-based ads Notice.
          </p>
          <button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
