import React from 'react'
import Single from '../Images/react.avif'
import { Link } from 'react-router-dom';
import Api from '../Images/api.png'
export default function apireact() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={Api} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'> API in React
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>REST API stands for Representational State Transfer application programming interface, sometimes referred to as the RESTful API, and it's the primary interface that is used by React. js developers which allows API connections between different parts of an application or service over the internet.</p>
             <a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}