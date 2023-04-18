import React,{useState} from 'react'
import "./Header.css"
import logo from "../imgs/logo.png"
import { Link } from 'react-scroll'
import Arry from "./Harry";
import { List } from 'react-bootstrap-icons';
function Header() {
  const[isOpen,setOpen]=useState(false)
  const clicked=()=>{
    if(isOpen===false){
      setOpen(true)
      console.log("yr")
    }else{
      setOpen(false)
    }
  }
  return (
    <>
    <div className="header">
      <div className="imglogo">
        <img src={logo} alt="logo" className="logo"/>
        
        <div className="list  " onClick={clicked}  ><List /></div>
        </div>
        <ul className={`${ isOpen?" list-manu ":"none" }`}>
{
  Arry.map((items)=>{
    return(
    <li> <Link 
    activeClass="active"
    to={items.to}
    smooth={true}
    duration={50}
    
    
    href={items.to}>{items.name} </Link>   </li>
  )})
}
        </ul >
        
    </div>
    
    </>
  )
}

export default Header