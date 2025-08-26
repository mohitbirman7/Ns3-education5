import React from 'react'
import "../../../assets/css/navbar/topbar.css"

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="leftbar">
          <img  src="/topbar/phoneLogo.png" alt="phone logo" />
          <a  href="/">+91-8800011138</a>
        </div>
        <div className=" leftbar centerbar">
          <img src="/topbar/emailLogo.png" alt="email-logo" />
          <a href="/">info@ns3edu.com</a>
        </div>
        <div className="rightbar">
          <a className="a1" href="/">Summer Internship</a>
          <a className="a2" href="">Corporate Training</a>
          <img src="/topbar/facebookLogo.png" alt="fb" />
          <img src="/topbar/instaLogo.png" alt="insta" />
          <img src="/topbar/linkdinLogo.png" alt="lkdin" />
          <img src="/topbar/youtubeLogo.png" alt="" />

        </div>
      </div>
    </>
  )
}

export default Topbar
