import React from 'react'
import Single from './Images/react.avif'
import { Link } from 'react-router-dom';
export default function singlepost() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={Single} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'>What is React.js?
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality</p>
             <a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}
