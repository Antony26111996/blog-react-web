import React from 'react'
import Top from '../Images/top.jpg'
import { Link } from 'react-router-dom';
import Head from './head';
import Post from './post';
import Blog from './blog';
import { NavLink } from 'react-router-dom';


const Home = () => {
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
            <li className='toplistitem'><NavLink to="/blog" exact className='link' >HOME</NavLink></li>
            <li className='toplistitem'><NavLink to="/side" className='link'>ABOUT</NavLink></li>

            <li className='toplistitem'><NavLink to="/raj" className='link'>WRITE</NavLink></li>

            <li className='toplistitem'><NavLink to="/login" className='link'>LOGOUT</NavLink></li>

          </ul>
        </div>
        <div className='topright'>
          {/* <img className='topimg' src={Top} alt='img'><NavLink to="/register" className='link' exact>Register</NavLink></img> */}<h3><NavLink to="/setting" className='link'>UPDATE</NavLink></h3>
          <i className="topsearchicon fa-solid fa-magnifying-glass"></i>
        </div>



      </div>

      
    );
  };
    
  export default Home;


  


