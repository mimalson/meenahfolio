import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
// import {useRef} from 'react'
// import emailjs from 'emailjs-com'

const contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_mpv6dbd', 'template_5fib9vj', form.current, 'YOUR_USER_ID')
  // }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>muhaminat01@gmail.com</h5>
            <a href="mailto:muhaminat01@gmail.com">Send a Message</a>
          </article>

          <article className="contact__option">
            <FaTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>Muhammed Bliss</h5>
            <a href="https://twitter.com/simply_meenat" target='_blank' rel="noreferrer" >Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+2348142974615</h5>
            <a href="http://api.whatsapp.com/send?phone+2348142974615" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required/>
          <textarea name="message" id=""  rows="7" placeholder='Your Message' required></textarea>
           <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}


export default contact
