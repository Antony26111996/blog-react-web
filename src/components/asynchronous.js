import React from 'react'
import Single from '../Images/react.avif'
import { Link } from 'react-router-dom';
import Asy from '../Images/asy.jpg'
export default function asynchronous() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={Asy} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'> Asynchronous JS
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>Ajax is a set of web development techniques that uses various web technologies on the client-side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behaviour of the existing page.</p>
             <a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}