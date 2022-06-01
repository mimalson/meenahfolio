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
            I’m a talented, ambitious, and self-motivated frontend developer 
            and technical writer with a solid technical background and useful skills 
            ranging from self-discipline, teamwork, and the ability to work with minimum supervision.
            
            <p>.         
              </p> 
             I'm capable of playing a key front-end role with intermediate knowledge of core front-end 
            technologies, frameworks, and libraries. I deliver pixel-perfect UIs while ensuring maximum accessibility, 
            user-friendliness, and usability.
          </p>

          <a href="https://github.com/mimalson/meenahfolio/" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
