import React from 'react'
import "./Deals.css"
import DealsArray from './DealsArray'
// import { div } from '@tensorflow/tfjs'
function Deals() {
  return (
    <>
    <div className="Deals" id='Plans'>
    <div className="blur deals-blurl"></div>
    <div className="blur deals-blurr"></div>
      <div className="deal-head">
        <span className='stroke-text'>ready to start </span>
        <span> your journey </span>
        <span className='stroke-text'> now with Us </span>
      </div>
    </div>
    <div className="cart">
        {
          DealsArray.map((items)=>{
            return(
              <div className='dealscard'>
                <div >{items.icon}</div>
               <div>{items.header}</div>
               <div>{items.price}</div>
               <div className='gapd' >{items.l1} {items.p1}</div>
               <div className='gapd'> {items.l1}{items.p2}</div>
               <div className='gapd'>{items.l1}{items.p3}</div>
               <div>{items.benefits} {items.arro}</div>
               <div >{items.button}</div>
              </div>
              
            )
          })
        }
      </div>
    </>
  )
}

export default Deals