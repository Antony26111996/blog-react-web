import React from 'react'
import Single from '../Images/react.avif'
import { Link } from 'react-router-dom';
import Vs from '../Images/vs.jpg'


export default function tional() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={Vs} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'>Class Vs Functional
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.<br></br>

A class component requires you to extend from React.Component and create a render function which returns a React element. This requires more code but will also give you some benefits which you will see later on.</p>
<a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}
