import React from 'react'
import Single from '../Images/react.avif'
import { Link } from 'react-router-dom';
import local from '../Images/local.jpg'


export default function lock() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={local} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'>State Vs Local variable
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>State Variables − Variables whose values are permanently stored in a contract storage.<br></br> Local Variables − Variables whose values are present till function is executing.</p>
             <a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}