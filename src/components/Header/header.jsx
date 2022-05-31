import React from 'react'
import "./header.css"
import { Typewriter } from 'react-simple-typewriter'
import CTA from './CTA'
import ME from '../../Assets/assets/me.png'
import HeaderSocials from './HeaderSocials'
const header = () => {
  return (
     <header>
       <div className="container header__container" id='header'>
         <h5>Hello 👋 I'm</h5>
         <h1>Muhammed Amina</h1>
         <h5 className='text-light'> I'm a {' '}
           <span style={{color: 'white', fontWeight: 'bold'}}>
             <Typewriter
               words={['Frontend Developer  ', 'Designer   ']}
               loop
               cursor
               cursorStyle='_'
               typeSpeed={70}
               delaySpeed={100}
               deleteSpeed={100}
               />
           </span>
          </h5>
         <CTA />
         <HeaderSocials/>

         <div className="me">
           <img src={ME} alt="" />
         </div>

         <a href="#contact" className='scroll__down'>Scroll Downs</a>
       </div>
     </header>
  )
}

export default header
