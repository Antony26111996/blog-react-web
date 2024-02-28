import React from 'react'
import Single from '../Images/react.avif'
import { Link } from 'react-router-dom';
import Component from '../Images/component.png'


export default function complan() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={Component} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'>React.js components.
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components</p>
<a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}
