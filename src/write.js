import React from 'react'
import Write from './Images/write.webp'
import { Link } from 'react-router-dom';
import Top from './Images/top.jpg'

export default function write() {
  return (

    <><>





    </><div className='write'>
        <img src={Write} alt='write' className='writeimg'></img>
        <form className='writeform'>
          <div className='writegroup'>
            <label htmlFor='fileinput'>
              <i className="writeicon fa-sharp fa-solid fa-plus"></i>
            </label>
            <input type='file' id='fileinput' style={{ display: "none" }}></input>
            <input type='text' placeholder='Title' className='writeinput' autoFocus={true}></input>
          </div>
          <div className='writegroup'>
            <textarea placeholder='Tell your openion' type='text' className='writeinput writetext'></textarea>
          </div>
          <button className='writesubmit'>Publish</button>
        </form>

      </div></>
  )
}
