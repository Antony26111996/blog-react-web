import React from 'react'
import Single from '../Images/react.avif'
import { Link } from 'react-router-dom';
import Use from '../Images/use.png'
export default function useeffect() {
  return (
    
    <div className='singlepost'>
        <div className='singleme'>
             <img src={Use} alt='single img' className='singleimg'></img>
             <h1 className='singletitle'>      useState, useEffect
             <div className='singleedit'>
                <i className="singleicon fas fa-edit"></i>
                <i className="singleicon fa-solid fa-trash"></i>
            </div>
             </h1>
             <div className='singleinfo'>
                <span className='singleauthor'>Author: <b>Anto</b></span>
                <span className='singledate'>1 hour ago</span>
             </div>
             <p className='singledisc'>The state can now be used inside functional components that is made possible by the useState hook. Let’s have a look at how we can use useState<br></br>
useEffect is an interesting one. It removes the need for componentDidMount , componentDidUpdate and componentWillUnmount because it handles the use case of all of these life cycle methods.</p>
<a href='/blog' className='seemorelink'>Go back</a>
             

        </div>
    </div>
   
    
  )
}