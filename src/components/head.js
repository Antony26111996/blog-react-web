

import React from 'react'
import Blog from '../Images/blog.webp'

export default function Head() {
  return (
    <div className='head'>
        <div className='headtitle'>
            <span className='titlea'>React</span>
            <span className='titleb'>Blog</span>
        </div>
        <img className='headimg' src={Blog} alt='blog'/>
    </div>
  )
}

