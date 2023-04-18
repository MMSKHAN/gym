import React, { useState } from 'react';
import { ArrowRight,ArrowLeft } from 'react-bootstrap-icons';
import "./Testimonials.css";
import TextData from './TextData';
function Testimonials() {
    const [slected,setSelected]=useState(0);
    const length=TextData.length
  return (
   <div className="Testimonials" id='Alumni'>
    <div className="left-test">
        <div className="title">Our Peolpe Our Pride</div>
        <div className="stroke-text txtop">What They</div>
        <div className="say ">Say About us</div>
        <div className="reviewst">{TextData[slected].text}</div>
   <div className="name"> <span className='name1'> {TextData[slected].name}</span> <span > <ArrowRight className='sym'/> </span >  {TextData[slected].post}  </div>
    </div>
    <div className="right-test">
        <div className="buton">
            <span onClick={()=>{
                slected===0? setSelected(length-1):setSelected((prev)=>prev-1)
            }} ><ArrowLeft/></span>
            <span onClick={()=>{
                slected===length-1? setSelected(0):setSelected((prev)=>prev+1)

            }}><ArrowRight/></span>
        </div>
        <div className="frame"> 
        <div className="boxt">
                <div className="imgt"><img src={TextData[slected].img} alt="" /></div>
            </div>
        </div>
        
    </div>
   </div>
  )
}

export default Testimonials