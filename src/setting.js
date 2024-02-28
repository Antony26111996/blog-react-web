import React from 'react'
import Side from './components/side';
import Setting from './Images/setting.jpg'
import { NavLink } from 'react-router-dom';

export default function setting() {
  return (
    <div className='settings'>
        <div className='settingme'>
            <div className='settingtitle'>
                <span className='settingupdate'>Update Your Account </span>
                <span className='settingdelete'>Delete Account </span>
            </div>
            <form className='settingform'>
                <label>Profile Picture</label>
                <div className='settingprofile'>
                    <img src={Setting} alt= 'setting'></img>
                    <label htmlFor='fileinput'>
                    <i className="settingicon fa-solid fa-user"></i>
                 </label>
                <input type='file' id='fileinput' style={{display:"none"}}></input>
                </div>
                <label>Username</label>
                <input type='text' placeholder='Antony'></input>
                <label>Email</label>
                <input type='email' placeholder='antony@gmail.com'></input>
                <label>Password</label>
                <input type='password'></input>
                <button className='settingsubmit'><NavLink to="/blog" className='link' exact>Update</NavLink></button>
            </form>

        </div>
        <Side/>
    </div>
  )
}
