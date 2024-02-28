import React from 'react'
import { Link } from 'react-router-dom';
import Top from './Images/top.jpg'

export default function login() {
  return (



    <><>
      
    </><div className='login'>
        <span className='logintitle'>Login</span>
        <form className='loginform'>
          <label>Enter your mail</label>
          <input type='text' className='logininput' placeholder='Enter Your Mail'></input>
          <label>Password</label>
          <input type='password' className='logininput' placeholder='Enter Your Password'></input>
          <button className='loginbutton'><Link to="/blog" className='link' exact>Login</Link></button>
        </form>
        <button className='loginregister'><Link to="/register" className='link' exact>Register</Link></button>

      </div></>
  )
}
