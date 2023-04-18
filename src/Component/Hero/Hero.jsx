import React,{useState} from 'react'
import "./Hero.css"
import Header from '../Header/Header';
import { HeartFill } from 'react-bootstrap-icons';
import bar from "../imgs/bar.png"
import girl from "../imgs/girl.png"
import boy from "../imgs/boy.png"
function Hero() {
    const [show,setShow]=useState(true)
    const [show1,setShow1]=useState(true)
   setTimeout(()=>{
    if(show===true){
        setShow(false)
    }else{
        setShow(true)
    }
   },3000)
   setTimeout(()=>{
    if(show===true){
        setShow1(false)
    }else{
        setShow1(true)
    }
   },6000)
  return (
    <>
    <div className="hero" id='Home'>
        <div className='blur hero-blur'></div>
    <div className="left">
        <Header/>
        <div className="foradd">
            <div className="circle"></div>
        <span>The foremost vigour club</span>
    </div>
    <div className="Hero-text">
        <div>
            <span className='stroke-text'>Shape </span>
            <span>your</span>
        </div>
        <div>
            <span>ideal </span>
            <span className='stroke-text'>body</span>
        </div>
        <div ><span className='txt'>In here we will help  you to shape and build your ideal body and live up your life to fullest</span></div>
    </div>
    <div className="figures">
        <div><span>+ 121</span><span>expert coaches</span></div>
        <div><span>+ 952</span><span>members joined</span></div>
        <div><span>+ 16</span><span>fitness programs</span></div>
        <div className='box' >
            <div className="graph"><img src={bar} alt="graph" /></div>
            <div className="analysis">
                <span>Calories burned</span>
                <span>220 kcal</span>
            </div>
        </div>
    </div>
    
    <div className="btnrow">
            <div className="btn1">Get Started</div>
            <div className="btn2">Learn More</div>
        </div>
    </div>

    {/* right side */}
    <div className="right">
<div className="bnt">Join Now</div>
<div className="heartbox">
    <HeartFill style={{fontSize:"3rem",color:"red"}}/>
   <div>Heart Rate</div>
   <div>116 bpm </div>
</div>
<div className="imgwrapper">
{show?<img src={girl} className='img1' alt="girl" />:"  "}
{show1?<img src={boy} className='img2' alt="boy" />:"  "}
{/* <img src={boy} className='img2'alt="boy" /> */}

    </div></div>
    </div></>
  )
}

export default Hero