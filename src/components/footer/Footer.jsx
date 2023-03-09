import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {SlSocialTwitter} from 'react-icons/sl'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>

      <ul className='premalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/abdulkadir_barambu"><BsInstagram /></a>
        <a href="https://twitter.com/AbdulBarambu"><SlSocialTwitter /></a>
        <a href="https://wa.me/+234 8089421503"><BsWhatsapp /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abdul Barambu. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
