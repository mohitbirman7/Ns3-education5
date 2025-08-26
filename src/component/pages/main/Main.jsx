import React, { useState, useEffect } from 'react'
import "../../../assets/css/main/Main.css"


const Main = () => {


  // 1) Images array banaye
  const images = [
    "/main/poster1img1.png",
   "/main/poster1img2.png",
   "/main/poster1img3.png"
  ];
  const images2 = [
    "/main/poster2img1.png",
   "/main/poster2img2.png",
   "/main/poster2img3.png"
  ];
  // 2) Current index state
  const [index, setIndex] = useState(0);

  // 3) useEffect se interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 second per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mainuper">
        <div className="text">
          <h1>Blending Knowledge with <br />
            Practical Experience</h1>
        </div>
        <div className="poster1">
          <img  key={index} // ye key important hai animation trigger ke liye
        src={images[index]}
        alt="slider"
        className="slide-image" />
        </div>
        <div className="poster2">
          <img  key={index} // ye key important hai animation trigger ke liye
        src={images2[index]}
        alt="slider"
        className="slide-image" />
        </div>
      </div>


      {/* for next div bar */}

      <div className="divspace1">
        <div className="pp pos1">
          <img src="/main/logo5.png" alt="logo5" />
        </div>
        <div className="pp pos2">
          <img src="/main/logo1.png" alt="logo1" />
          <p className='num'>1000+</p>
          <p className='str'>Domestic Students</p>
        </div>
        <div className="pp pos3">
          <img src="/main/logo2.png" alt="logo2" />
          <p className="num">5000+</p>
          <p className="str">International Student</p>
        </div>
        <div className="pp pos4">
          <img src="/main/logo3.png" alt="logo3" />
          <p className="num">5000+</p>
          <p className="str">Student Placement</p>
        </div>
        <div className="pp pos5">
          <img src="/main/logo4.png" alt="logo4" />
          <p className="num">1000+</p>
          <p className="str">Collavoration Programs</p>
        </div>
      </div>


      {/* for next div: 1.logo and 2. text */}



      <div className="divspace2">
        <div className="pos6">
          <img src="/main/logo6.png" alt="logo6" />
        </div>
        <div className="text1">
          <h1>Best IT Training Institute in<br /> India</h1>
          <p>Welcome to NS3EDU, where we're dedicated to crafting Cyber Security experts through
            top-notch training and certification programs. Our courses cover everything from fundamental
            to advanced levels, ensuring you gain comprehensive knowledge and skills. Plus, our certification
            validates your expertise, making you stand out in the industry.</p>
          <p>NS3Edu is an educational institution that focuses on providing comprehensive courses like Cloud
            Computing, DevOps, CCNA, CCIE, CCNP, Cyber Security, Ethical Hacking, Full Stack Development and more.</p>
        </div>
      </div>

      {/* cart place or course buying place */}
      <div className="allcarts">
        <div className="divspace3">
          <div className="container">
            <h2>Explore <br />Our Master Program</h2>
          </div>
          <div className="options">
            <a href="" className="btn">View All</a>
            <a href="" className="btn">It Networking</a>
            <a href="" className="btn">Cyber Security</a>
            <a href="" className="btn">Cloud Engineering</a>
          </div>
        </div>
        {/* for cart  courses*/}

        <div className="cartspace1">
          <div className="cart1">
            <img className='cartimg' src="/main/cart1.png" alt="cart1" />
            <div className="cartdetail">
              <div className="ondemand">
                <img className='cartlogo' src="/main/cartlogo.png" alt="logo" />
                <p>On Demand</p>
                <br />
              </div>
              <a href="" className='cartname'>Advanced Certification in<br /> Cloud Computing</a>
              <div className="cartstars">
                <img src="/main/cartstars.png" alt="rating" />
                <p>4.9(1198)</p>
              </div>
            </div>
          </div>
          <div className="cart1">
            <img className='cartimg' src="/main/cart1.png" alt="cart1" />
            <div className="cartdetail">
              <div className="ondemand">
                <img className='cartlogo' src="/main/cartlogo.png" alt="logo" />
                <p>On Demand</p>
                <br />
              </div>
              <a href="" className='cartname'>Advanced Certification in<br /> Cloud Computing</a>
              <div className="cartstars">
                <img src="/main/cartstars.png" alt="rating" />
                <p>4.9(1198)</p>
              </div>
            </div>
          </div>
          <div className="cart1">
            <img className='cartimg' src="/main/cart1.png" alt="cart1" />
            <div className="cartdetail">
              <div className="ondemand">
                <img className='cartlogo' src="/main/cartlogo.png" alt="logo" />
                <p>On Demand</p>
                <br />
              </div>
              <a href="" className='cartname'>Advanced Certification in<br /> Cloud Computing</a>
              <div className="cartstars">
                <img src="/main/cartstars.png" alt="rating" />
                <p>4.9(1198)</p>
              </div>
            </div>
          </div>
          <div className="cart1">
            <img className='cartimg' src="/main/cart1.png" alt="cart1" />
            <div className="cartdetail">
              <div className="ondemand">
                <img className='cartlogo' src="/main/cartlogo.png" alt="logo" />
                <p>On Demand</p>
                <br />
              </div>
              <a href="" className='cartname'>Advanced Certification in<br /> Cloud Computing</a>
              <div className="cartstars">
                <img src="/main/cartstars.png" alt="rating" />
                <p>4.9(1198)</p>
              </div>
            </div>
          </div>
          <div className="cart1">
            <img className='cartimg' src="/main/cart1.png" alt="cart1" />
            <div className="cartdetail">
              <div className="ondemand">
                <img className='cartlogo' src="/main/cartlogo.png" alt="logo" />
                <p>On Demand</p>
                <br />
              </div>
              <a href="" className='cartname'>Advanced Certification in<br /> Cloud Computing</a>
              <div className="cartstars">
                <img src="/main/cartstars.png" alt="rating" />
                <p>4.9(1198)</p>
              </div>
            </div>
          </div>
          <div className="cart1">
            <img className='cartimg' src="/main/cart1.png" alt="cart1" />
            <div className="cartdetail">
              <div className="ondemand">
                <img className='cartlogo' src="/main/cartlogo.png" alt="logo" />
                <p>On Demand</p>
                <br />
              </div>
              <a href="" className='cartname'>Advanced Certification in<br /> Cloud Computing</a>
              <div className="cartstars">
                <img src="/main/cartstars.png" alt="rating" />
                <p>4.9(1198)</p>
              </div>
            </div>
          </div>
          <div className="cart1">
            <img className='cartimg' src="/main/cart1.png" alt="cart1" />
            <div className="cartdetail">
              <div className="ondemand">
                <img className='cartlogo' src="/main/cartlogo.png" alt="logo" />
                <p>On Demand</p>
                <br />
              </div>
              <a href="" className='cartname'>Advanced Certification in<br /> Cloud Computing</a>
              <div className="cartstars">
                <img src="/main/cartstars.png" alt="rating" />
                <p>4.9(1198)</p>
              </div>
            </div>
          </div>
          <div className="cart1">
            <img className='cartimg' src="/main/cart1.png" alt="cart1" />
            <div className="cartdetail">
              <div className="ondemand">
                <img className='cartlogo' src="/main/cartlogo.png" alt="logo" />
                <p>On Demand</p>
                <br />
              </div>
              <a href="" className='cartname'>Advanced Certification in<br /> Cloud Computing</a>
              <div className="cartstars">
                <img src="/main/cartstars.png" alt="rating" />
                <p>4.9(1198)</p>
              </div>
            </div>
          </div>
          <div className="cart1">
            <img className='cartimg' src="/main/cart1.png" alt="cart1" />
            <div className="cartdetail">
              <div className="ondemand">
                <img className='cartlogo' src="/main/cartlogo.png" alt="logo" />
                <p>On Demand</p>
                <br />
              </div>
              <a href="" className='cartname'>Advanced Certification in<br /> Cloud Computing</a>
              <div className="cartstars">
                <img src="/main/cartstars.png" alt="rating" />
                <p>4.9(1198)</p>
              </div>
            </div>
          </div>
          <div className="cart1">
            <img className='cartimg' src="/main/cart1.png" alt="cart1" />
            <div className="cartdetail">
              <div className="ondemand">
                <img className='cartlogo' src="/main/cartlogo.png" alt="logo" />
                <p>On Demand</p>
                <br />
              </div>
              <a href="" className='cartname'>Advanced Certification in<br /> Cloud Computing</a>
              <div className="cartstars">
                <img src="/main/cartstars.png" alt="rating" />
                <p>4.9(1198)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="coursebtn">
          <a href="/" className="viewallcourse btn-sucess">View All Courses</a>
        </div>
      </div>
      {/* college names div */}
      <div className="clgdiv">
        <div className="clgheading">
          <h2>Campus Collaboration (MOU's)</h2>
        </div>
        <div className="college">
          <div className="clgcart">
            <img src="/main/clg1.png" alt="clg1" />
            <h4>SGT UNIVERSITY, Gurugram</h4>
            <p>MoU Signed between NS3EDU and SGT University  </p>
          </div>
          <div className="clgcart">
            <img src="/main/clg2.png" alt="clg2" />
            <h4>Baba Mastnath University, Rohtak</h4>
            <p>MoU Signed between NS3EDU and Baba Mastnath University  </p>
          </div>
          <div className="clgcart">
            <img src="/main/clg3.png" alt="clg3" />
            <h4>Jagannath University, Haryana</h4>
            <p>MoU Signed between NS3EDU and Jaganath University  </p>
          </div>
          <div className="clgcart">
            <img src="/main/clg4.png" alt="clg4" />
            <h4 id='wctm'>World College Of Technology & Management, Gurugram</h4>
            <p>MoU Signed between NS3EDU and WCTM University  </p>
          </div>
        </div>
      </div>
      {/* for partners */}
      <div className="partners">
        <div className="partnercombine" style={{ backgroundImage: 'url("/main/map.jpg")', backgroundSize: 'cover' }}>
          <div className="ptnrheading">
            <h2>Our Placement Partners</h2>
          </div>
          <div className="ptnrrows">
            <div className="row ptnrrow1">
              <img src="/main/cartlogo1.png" alt="logo1" />
              <img src="/main/cartlogo2.png" alt="logo2" />
              <img src="/main/cartlogo3.png" alt="logo3" />
              <img src="/main/cartlogo4.png" alt="logo4" />
              <img src="/main/cartlogo5.png" alt="logo5" />
              <img src="/main/cartlogo24.png" alt="logo24" />
            </div>
            <div className="row ptnrrow2">
              <img src="/main/cartlogo6.png" alt="logo6" />
              <img src="/main/cartlogo7.png" alt="logo7" />
              <img src="/main/cartlogo8.png" alt="logo8" />
              <img src="/main/cartlogo9.png" alt="logo9" />
              <img src="/main/cartlogo10.png" alt="logo10" />
              <img src="/main/cartlogo11.png" alt="logo11" />
            </div>
            <div className="row ptnrrow3">
              <img src="/main/cartlogo12.png" alt="logo12" />
              <img src="/main/cartlogo29.png" alt="logo29" />
              <img src="/main/cartlogo13.png" alt="logo13" />
              <img src="/main/cartlogo14.png" alt="logo14" />
              <img src="/main/cartlogo15.png" alt="logo15" />
              <img src="/main/cartlogo16.png" alt="logo16" />
            </div>
            <div className="row ptnrrow4">
              <img src="/main/cartlogo17.png" alt="logo17" />
              <img src="/main/cartlogo18.png" alt="logo18" />
              <img src="/main/cartlogo19.png" alt="logo19" />
              <img src="/main/cartlogo20.png" alt="logo20" />
              <img src="/main/cartlogo21.png" alt="logo21" />
              <img src="/main/cartlogo22.png" alt="logo22" />
            </div>
            <div className="row ptnrrow5">
              <img src="/main/cartlogo23.png" alt="logo23" />
              <img src="/main/cartlogo24.png" alt="logo24" />
              <img src="/main/cartlogo25.png" alt="logo25" />
              <img src="/main/cartlogo26.png" alt="logo26" />
              <img src="/main/cartlogo27.png" alt="logo27" />
              <img src="/main/cartlogo28.png" alt="logo28" />
            </div>
          </div>
        </div>
      </div>
      {/* for next divbar */}
      <div className="imgh2">
        <div className="imgh leftimgh2">
          <img src="/main/imglogo1.png" alt="logo1" />
          <h2>Learn with skills over 50+ courses</h2>
        </div>
        <div className=" imgh centerimgh2">
          <img src="/main/imglogo2.png" alt="logo2" />
          <h2>Earn certificates and diploma</h2>
        </div>
        <div className="imgh rightimgh2">
          <img src="/main/imglogo2.png" alt="logo3" />
          <h2>earn from anywhere, any time</h2>
        </div>
      </div>
      <div className="joinLogo">
        <div className="logosame joinLogo1">
          <img src="/main/poster1.png" alt="" />
        </div>
        <div className="logosame joinLogo2">
          <img src="/main/poster2.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Main
