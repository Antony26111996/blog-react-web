import React from 'react'
import Single from '../Images/react.avif'
import { Link } from 'react-router-dom';
import Style from '../Images/style.jpeg'
export default function rendering() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={Style} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'>Styles to React Component
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>Ways to add Styles to React Component<br></br>
1)Add the Global Styles to “index. html” File.<br></br>
2)Create a Style for Each Individual Component.<br></br>
3)Adding Inline Style to React Component Elements.<br></br>
4)Attach style property to JavaScript Style Object</p>
<a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}