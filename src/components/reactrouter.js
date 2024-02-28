import React from 'react'
import Single from '../Images/react.avif'
import { Link } from 'react-router-dom';
import Route from '../Images/route.png'
export default function reactrouter() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={Route} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'> Routing
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works.</p>
             <a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}