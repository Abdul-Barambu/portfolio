import React from 'react'
import './Portfolio.css'
import Dashboard from '../../assets/dashboard.png'
import Paylite from '../../assets/paylite.png'
import Orellions from '../../assets/orellions.png'
import portfolio3 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Dashboard} alt="" />
          </div>
          <h3>Admin Dashboard</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Abdul-Barambu/admin-dashboard" className="btn" target='_blank'>Github</a>
            <a href="https://admin-dashboard-virid-chi.vercel.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Paylite} alt="" />
          </div>
          <h3>Paylite Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Abdul-Barambu/Paylite" className="btn" target='_blank'>Github</a>
            <a href="https://paylite-olive.vercel.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={Orellions} alt="" />
          </div>
          <h3>Orellions Company Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/" className="btn" target='_blank'>Github</a>
            <a href="https://orellions.vercel.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={portfolio3} alt="" />
          </div>
          <h3>Title</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn" target='_blank'>Github</a>
            <a href="#" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio
