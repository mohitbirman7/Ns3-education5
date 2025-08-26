import React from 'react'
import "../../../assets/css/navbar/SecondBarr.css"


const secondBarr = () => {
  return (
    <>
      <div className="secondbar">
        <div className="ns3">
          <img src="/topbar/ns3Logo.png" alt="ns3" />
        </div>
        <div className="btn">
          <div className="logo-btn">
            <figure>
              <img className="cube" src="/topbar/cube.png" alt="Taj Mahal" width="300" />
              <figcaption >All courses  </figcaption>
            </figure>

            <ul>
              <a href="/" className="about">About</a>
              <div className="aboutchild">
                <a href="">About Us</a>
                <a href="">Culture in NS3</a>
              </div>
              <a href="/" className="placement">Placement</a>
              <a href="/" className="learn">Learn & Earn</a>
              <a href="/" className="resourses">Resourses</a>
              <div className="resoursechild">
                <a href="">Gallery</a>
                <a href="">Blog</a>
                <a href="">Events</a>
                <a href="">testimonials</a>
                <a href="">summer Internship</a>
              </div>
            </ul>
          </div>
          <div className="wtup">
            <img src="/topbar/whatsupLogo.png" alt="whatsup" />
            <button>Contact</button>
          </div>
        </div>
      </div>
      <div className="scroll-bar">
        <div className="scroll-track">
          <div className="scroll-content">
            SUMMER INTERNSHIP 2025 | REAL CORPORATE EXPOSURE | INDUSTRY-GRADED PROJECTS | HANDS-ON EXPERIENCE
          </div>
          <div className="scroll-content">
            SUMMER INTERNSHIP 2025 | REAL CORPORATE EXPOSURE | INDUSTRY-GRADED PROJECTS | HANDS-ON EXPERIENCE
          </div>
        </div>
      </div>

    </>
  )
}

export default secondBarr
