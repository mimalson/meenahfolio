import React from 'react'
import "./footer.css"
import {RiFacebookFill} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href="https://github.com/mimalson/meenahfolio/" className='footer__logo'>meenahh</a>

      <ul className="permalinks">
        <li>
          <a href="#about">Home</a>
        </li>
        <li>
          <a href="#experience">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><RiFacebookFill /></a>
        <a href="https://twitter.com"><BsInstagram/></a> 
        <a href="https://instagram.com"><IoLogoTwitter/></a> 
      </div>

      <div className="love">
        <small>❤️ and ✨ Always, from Amina</small>
      </div>
    </footer>
  )
}

export default footer
