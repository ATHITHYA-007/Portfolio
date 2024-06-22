import './Heroimg.css'
import React from 'react'
import Introimg from "../Assert/intropage.webp"
import { Link } from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className='hero'>
     <div className='mask'>
        <img className='into-img'src={Introimg}/>

     </div>
     <div className='content'>
        <p>HI,I'M A FREELANCER</p>
        <h1>React Developer</h1>
     <div>
        <Link to="/Project" className='btn'>Project</Link>
        <Link to="/Contact" className='btn btn-light'>Contact</Link>
     </div>
     </div> 
    </div>
  )
}

export default Heroimg