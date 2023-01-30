import React from 'react'
import Top from './Images/top.jpg'


const Blog = () => {
    return (
     
        <div className="top">
          <div className='topleft'>
          <a href='https://www.facebook.com/'><i className="topicon fa-brands fa-square-facebook"></i></a>
          <a href='https://www.instagram.com/a_n_t_o_n_y_r_a_j/'><i className="topicon fa-brands fa-square-instagram"></i></a>
          <a href='https://twitter.com/'><i className="topicon fa-brands fa-square-twitter"></i></a>
          <a href='https://in.pinterest.com/'><i className="topicon fa-brands fa-square-pinterest"></i></a>
          </div>
          
          <div className='topcenter'>
            <ul className='toplist'>
              <li className='toplistitem'>TO CREATE A SINGLE PAGE BLOG USING REACT.JS</li>
              {/* <li className='toplistitem'>ABOUT</li>
              <li className='toplistitem'>CONTACT</li>
               */}
            </ul>
          </div>
          <div className='topright'>
            <img className='topimg' src={Top} alt = 'img'></img>
            <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
          </div>
          
          
          
          
      </div>
      
    );
  };
    
  export default Blog;


  


