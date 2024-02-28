import React from 'react'
import Single from '../Images/react.avif'
import { Link } from 'react-router-dom';
import Hooks from '../Images/hooks.jpg'
export default function hooksreact() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={Hooks} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'>      Hooks in React
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>Hooks were added to React in version 16.8.

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.</p>
<a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}










