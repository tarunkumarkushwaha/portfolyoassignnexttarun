import React, { forwardRef } from 'react'
// import arrow from '../assets/images/arrow-forward.svg'

const Portfolio = forwardRef((prop, ref) => {
  let myData = prop.data.user.projects;
  const portfolioComponent = myData.map((item, index) => (
    <div key={index} className="gallery-card">

      <figure className="card-banner img-holder has-before" style={{ width: 290, height: 340 }}>
        <img src={item.image.url} width="450" height="625" loading="lazy" alt="The Drunken"
          className="img-cover" />
      </figure>

      <div className="card-content">
        <h3 className="h6">
          <a href={item.liveurl} className="card-title">{item.title}</a>
        </h3>

        <span className="card-tag">{item.techStack}</span>
      </div>

      <a href="#" className="btn-icon">
        {/* <img src={arrow} width="43" height="20" loading="lazy"
          alt="arrow-forward icon" /> */}
      </a>

    </div>
  ))
  return (
    <>
      <section ref={ref} className="section gallery" id="gallery">

        <div className="container pl-48">
          <div className="flex-col h3">
            <h1 className="sub-title">Projects</h1>
          </div>
          <ul className="gallery-list flex flex-wrap justify-center">
            <li className="gallery-item">
              {portfolioComponent[0]}
              {portfolioComponent[1]}
            </li>
            <li className="gallery-item">
              {portfolioComponent[2]}
              {portfolioComponent[3]}
            </li>
            <li className="gallery-item">
              {portfolioComponent[4]}
              {portfolioComponent[5]}
            </li>

            <li className="gallery-item">
              {portfolioComponent[6]}
              {portfolioComponent[7]}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
});

export default Portfolio