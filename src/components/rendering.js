import React from 'react'
import Single from '../Images/react.avif'
import { Link } from 'react-router-dom';
import Condition from '../Images/condition.jpg'
export default function rendering() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={Condition} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'>Conditional Rendering
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.</p>
             <a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}