import React from 'react'
import './Service.css'
import { BiCheck } from 'react-icons/bi'

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list_icon' />
              <p>Front-End Development</p>
            </li>
            <li>
              <BiCheck className='service__list_icon' />
              <p>Back-End Development</p>
            </li>
            <li>
              <BiCheck className='service__list_icon' />
              <p>Database Design & Management</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>App Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list_icon' />
              <p>Desktop Application</p>
            </li>
            <li>
              <BiCheck className='service__list_icon' />
              <p>Mobile Application</p>
            </li>
            <li>
              <BiCheck className='service__list_icon' />
              <p>Database Design & Management</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Software Testing</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list_icon' />
              <p>Unit Testing</p>
            </li>
            <li>
              <BiCheck className='service__list_icon' />
              <p>Integration Testing</p>
            </li>
            <li>
              <BiCheck className='service__list_icon' />
              <p>System Testing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Service
