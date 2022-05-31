import React from 'react'
import "./about.css"
import ME from '../../Assets/assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>01. About Me</h2>

     <div className=" container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className= 'about__icons' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FaAward className= 'about__icons' />
              <h5> Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className= 'about__icons' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fuga amet sapiente itaque 
            doloremque ratione praesentium, voluptatum provident enim aliquam iste, sint dicta. Officiis beatae quaerat aperiam blanditiis repudiandae laboriosam.
          </p>

          <a href="https://github.com/mimalson/meenahfolio/" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
