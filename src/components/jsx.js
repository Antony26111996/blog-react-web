import React from 'react'
import Single from '../Images/react.avif'
import { Link } from 'react-router-dom';
import Jsx from '../Images/jsx.webp'


export default function jsx() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={Jsx} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'>JSX Syntax
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>JSX (JavaScript Syntax Extension and occasionally referred as JavaScript XML) is a React extension to the JavaScript language syntax[1] which provides a way to structure component rendering using syntax familiar to many developers. It is similar in appearance to HTML.

React components are typically written using JSX, although they do not have to be as components may also be written in pure JavaScript. JSX is created by Meta (formerly Facebook).[1][2] It is similar to another extension syntax created by Meta for PHP called XHP.</p>
<a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}
