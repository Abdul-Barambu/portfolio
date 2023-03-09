import React from 'react'
import './About.css'
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>3+ WorldWide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <p>
           I am Abdulkadir Umar Barambu, a software engineer with over
           4 years of experience in tech world. I am a fullstack developer, 
           a security enigineer and a system engineer.
          </p>
          <a href="contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
