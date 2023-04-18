import React from 'react'
import Program from './Program';
import "./Program.css";
function Programs() {
  return (
    <div className="program" id='Program'>
  
        <div className="program-header">
            <div className="stroke-text"> Explore our</div>
            <div className="div">Programs</div>
            <div className="stroke-text"> To Shape you</div>
        </div>

        <div className="programcars">
            {Program.map((items)=>{
                return(
                <div className="cards">
                    <div style={{fontSize:"2rem",fill:"white"}}>{items.log}</div>
                    <div>{items.title}</div>
                    <div>{items.text}</div>
                    <div>{items.btn} <span style={{fontSize:"1 rem",marginLeft:"1rem"}} > {items.arro}</span></div>
    
                </div>)
            })}
        </div>
    </div>
  )
}

export default Programs