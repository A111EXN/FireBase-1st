import React,{useState} from 'react'
import { auth } from '../../config/firebaseConfig'
import { createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword } from 'firebase/auth'
import {useNavigate } from 'react-router-dom'
import './auth.css'

function Auth() {

  let navigate = useNavigate();
  const [existingUser,setExistingUser]=useState(true)
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')


  const handleLogin=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then(res=>{
      navigate('/')
    })
    .catch(err=>{
      console.log(err)
    })
  }

  const handleSignup=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password)
    .then (res=>{
      console.log(res)
      updateProfile(auth.currentUser, {displayName:name})
      setExistingUser(true)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  

  return (
    <div>
    {
      existingUser
      ? <form className='auth-form' onSubmit={handleLogin}>
        <h1>Login with your email</h1>
        <div className='form-group'>
            <input
            type='email'
            placeholder='Enter your email'
            onChange={(e)=>setEmail(e.target.value)}
            value={email || "" }
            required
            />
            <input
            type='password'
            placeholder='Enter your password'
            onChange={(e)=>setPassword(e.target.value)}
            value={password || "" }
            required
            />            
        </div>
        <button type='submit'>Submit</button>
        <p>Don't have an account? <span className='form-link' onClick={()=>setExistingUser(false)}>Signup</span></p>
        </form> 
      : <form className='auth-form' onSubmit={handleSignup}>
        <h1>Signup with your email</h1>
        <div className='form-group'>
        <input
            type='text'
            placeholder='Enter your name'
            onChange={(e)=>setName(e.target.value)}
            value={name || "" }
            required
            />
            <input
            type='email'
            placeholder='Enter your email'
            onChange={(e)=>setEmail(e.target.value)}
            value={email || "" }
            required
            />
            <input
            type='password'
            placeholder='Enter your password'
            onChange={(e)=>setPassword(e.target.value)}
            value={password || "" }
            required
            />            
        </div>
        <button type='submit'>Submit</button>
          <p>Already have an account <spam className='form-link' onClick={()=>setExistingUser(true)}>Login</spam></p>
        </form>
    }
      </div>
  )
}

export default Auth