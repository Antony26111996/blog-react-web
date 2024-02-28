import React from 'react'
import { Link } from 'react-router-dom';

export default function register() {
  return (
    <div className='register'>
        <span className='registertitle'>Register</span>
        <form className='registerform'>
        <label>Username</label>
            <input type='text' className='registerinput' placeholder='Enter Your Username'></input>
            <label>Enter your mail</label>
            <input type='text' className='registerinput' placeholder='Enter Your Mail'></input>
            <label>Password</label>
            <input type='password' className='registerinput' placeholder='Enter Your Password'></input>
            <button className='registerbutton'><Link to="/login" className='link'  exact>Register</Link></button>
           
        </form>
        {/* <button className='registerlogin'><Link to="/blog" className='link'  exact>Login</Link></button> */}

    </div>
  )
}


