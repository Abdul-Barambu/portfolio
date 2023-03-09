import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTelephone} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abdulkadirbarambu1@gmail.com</h5>
            <a href="mailto:abdulkadirbarambu1@gmail.com" target='_blank'>Send a message</a>
          </div>
          <div className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+234-8089421503</h5>
            <a href="https://wa.me/+234 8089421503" target='_blank'>Send Me a message</a>
          </div>
          <div className="contact__option">
            <BsTelephone className='contact__option-icon' />
            <h4>Phone</h4>
            <h5>+2348089421503</h5>
            <a href="tel:+2348089421503" target='_blank'>Give Me a Call</a>
          </div>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your E-mail' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
