import React from 'react'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Hero from './Component/Hero/Hero'
import Programs from './Component/Programs/Programs'
import Whyus from './Component/Whyus/Whyus'
import Deals from './Component/Deals/Deals'
import Testimonials from './Component/Testimonials/Testimonials'
import Join from './Component/Join/Join'
import Footer from './Component/Footer/Footer'
function App() {
 
  return (
    <>
    <div className='app'>
<Hero/>
<Programs/>
<Whyus/>
<Deals/>
<Testimonials/>
<Join/>
<Footer/>
   
    </div>
    </>
  )
}

export default App