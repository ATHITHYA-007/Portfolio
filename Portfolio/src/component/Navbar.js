import './Navbar.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes }from "react-icons/fa"

const Navbar = () => {

  const[Click,setClick] = useState(false)
  const handleClick=()=>
  setClick(!Click)
  const[color,setcolor]=useState(false);
  const changecolor =()=>{
    if(window.scrollY>=100){
      setcolor(true);

    }
    else{
      setcolor(false)
    }
  }
  
  return (
    <div className={color ? "header header-bg":"header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
          <ul className={Click ? "navbar-menu active":"navbar-menu"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Project">Project</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <div className='iconss' onClick={handleClick}>
            {Click ?(

              <FaTimes size={20} style={{color:"#fff"}}/>
            ):
          <FaBars size={20} style={{color:"#fff"}}/>
          }
          </div>
    </div>
  )
}

export default Navbar