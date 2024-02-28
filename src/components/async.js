import React from 'react'
import Single from '../Images/react.avif'
import { Link } from 'react-router-dom';
import Await from '../Images/await.jpg'
export default function async() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={Await} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'>  Async and await.
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>"async and await make promises easier to write"<br></br>

async makes a function return a Promise<br></br>

await makes a function wait for a Promise</p>
<a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}