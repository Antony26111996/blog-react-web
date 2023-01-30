import React from 'react'
import About from './Images/about.jpg'

export default function side() {
  return (
    <div className='sidebar'>
        <div className='sideitem'>
            <span className='sidetitle'>ABOUT ME</span>
            <img src={About} alt="about"></img>
            <p>Hai, This is Antony, This is the first time to create the blog using react.js only, the purpose of creating was Mr.Basil to set an assignment to create this blog and so on.</p>
        </div>
        <div className='sideitem'>
        <span className='sidetitle'>CATEGORIES</span>
        <ul className='sidelist'>
            <li className='sidelistitem'>Developer</li>
            <li className='sidelistitem'>Study</li>
            <li className='sidelistitem'>React</li>
            <li className='sidelistitem'>Fotography</li>
            <li className='sidelistitem'>Camera</li>
            <li className='sidelistitem'>Lifestyle</li>
        </ul>
        </div>
        <div className='sideitem'>
        <span className='sidetitle'>FOLLOW US</span>
        <div className='sidesocial'>
        <a href='https://www.facebook.com/'><i className="sideicon fa-brands fa-square-facebook"></i></a>
        <a href='https://www.instagram.com/a_n_t_o_n_y_r_a_j/'><i className="sideicon fa-brands fa-square-instagram"></i></a>
        <a href='https://twitter.com/'><i className="sideicon fa-brands fa-square-twitter"></i></a>
        <a href='https://in.pinterest.com/'><i className="sideicon fa-brands fa-square-pinterest"></i></a>
        </div>
        <a href='https://wa.me/qr/YW77UTYKBVBAK1'><i className="whatsapp fa fa-whatsapp fa-5x"></i></a>
        <a href='tel:956-657-2867'><i className='call fa fa-phone'></i></a>
        </div>
    </div>
  )
}
