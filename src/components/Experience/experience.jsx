import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>02. My Experience</h2>
      
      <div className=" container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="details">
              <BsPatchCheckFill className='experience__details-icons' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className="details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>ntermediate</small>
              </div>
            </article>

            <article className="details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className="details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <h4>Boostrap</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className="details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <h4>React JS</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>ntermediate</small>
              </div>
            </article>

            <article className="details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className="details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>ntermediate</small>
              </div>
            </article>

            <article className="details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>

            <article className="details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
  </section>
  )
}

export default experience
