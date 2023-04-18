import React from 'react'
import "./Join.css"
function Join() {
  return (
    <div className='join' >
        <div className="join-left">
            <div className='line' ></div>
            <div> <span className='stroke-text'>Ready to</span> <span>  level up</span> </div>
            <div> <span>your body</span> <span className='stroke-text' >  with us?</span> </div>
        </div>
        <div className="join-right">

            <div className="email-container"><input type="email" name="email-text" placeholder='Enter your Email' id="email" />  <div className='email-btn' >Join now</div>  </div>
        </div>
    </div>
  )
}

export default Join