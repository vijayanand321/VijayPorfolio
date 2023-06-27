import "./Navbar.css"
import {Link} from "react-router-dom"
import React from 'react'
import { FaBars , FaTimes } from "react-icons/fa"
import { useState } from "react"
const Navbar = () => { 

const [click,setClick] = useState(false);
const handleClick=()=> setClick(!click)

const [color ,setColor] = useState(false)
const changeColor =()=>{
    if(window.scrollY >=100)setColor(true);
    else setColor(false);
}

window.addEventListener("scroll",changeColor)

  return (
    <div className={color ?"header header-bg":"header"}>
        <Link to="/">
            <h1>VIJAY PORTFOLIO</h1>
        </Link>
        <ul className={click ? "navMenu active" : "navMenu"}>
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/Project">Project</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/ContactUs">ContactUs</Link></li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? <FaTimes size={20} style={{ color: "whitesmoke" }} ></FaTimes>
             :<FaBars size={20} style={{color:"whitesmoke"}}></FaBars> }
        </div>
    </div>
  )
}

export default Navbar