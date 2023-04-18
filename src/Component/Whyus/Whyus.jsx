import React from 'react';
import "./Whyus.css";
import p1 from "../imgs/r1.jpg"
import pic4 from"../imgs/r4.jpg"
import pic2 from"../imgs/r2.jpg"
import pic3 from"../imgs/r3.jpg"
import img1 from "../imgs/tick.png"
import img2 from "../imgs/ad-removebg-preview (1).png"
import img3 from "../imgs/n-removebg-preview.png"
import img4 from "../imgs/nb-removebg-preview.png"
function Whyus() {
  return (
   <>
   <div className="reason" id="Why us">
    <div className="left-r">

        <div className="row ">
            <div className="col-sm-6 ">
        <div className="rpic1"><img src={p1} alt="reason" /></div>

            </div>
            <div className="col-sm-6 ">
            <div className="rpic2"><img src={pic4} alt="reason" /></div>
            <div className="row mt-4">
                <div className="col-sm-6">
        <div className="rpic3"><img src={pic2} alt="reason" /></div>

                </div>
                <div className="col-sm-6">
        <div className="rpic4"><img src={pic3} alt="reason" /></div>

                </div>

            </div>

            </div>
        </div>
        </div>

    <div className="right-r">
<div className="reasonsr">Some reasons</div>
<div className="title-r"> <span className='stroke-text'>why</span> choose us? </div>
<div className="col1">
    <img src={img1} alt="tick" />
    <div>over 150+ expert coachs</div>
</div>
<div className="col1">
    <img src={img1} alt="tick" />
    <div>train smarter and faster than before</div>
</div>
<div className="col1">
    <img src={img1} alt="tick" />
    <div>1 free program for new member</div>
</div>
<div className="col1">
    <img src={img1} alt="tick" />
    <div>reliable partners</div>
</div>
<div className='part'>our partners</div>
<div className="logos">
    <img src={img2} alt="niki" />
    <img src={img3} alt="adidas" />
    <img src={img4} alt="nb" />
</div>
    </div>
    </div>
   
   </>
  )
}

export default Whyus