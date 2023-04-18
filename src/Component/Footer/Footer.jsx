import React from 'react'
import "./Footer.css"
import logo from "../imgs/logo.png"
import { Linkedin,Github,Instagram } from 'react-bootstrap-icons'
function Footer() {
  return (<>
        <hr cl />
    <div className='Footer' >
<div className="footer-con">
    <span><Linkedin/></span>
    <span><Github/></span>
    <span><Instagram/></span>
</div>
   <div className="blur footer-blur"></div>
<div className="footer-logo"> <img src={logo} alt="logo" /> </div>
   
    </div>
    </> )
}

export default Footer