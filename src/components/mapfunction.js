import React from 'react'
import Single from '../Images/react.avif'
import { Link } from 'react-router-dom';
import Map from '../Images/map.avif'

export default function mapfunction() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={Map} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'> Map function in React.js
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>In ReactJs, the maps are used for traversing or displaying the list of similar objects of a component. The map method is a standard JavaScript function and not just a ReactJs feature that could be called on an array. A new array is made using the map method, and a function is called on each element of the array.</p>
             <a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}