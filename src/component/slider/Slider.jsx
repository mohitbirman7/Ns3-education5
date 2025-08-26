import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = ({ images, interval = 3000, width = "400px", height = "300px" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="slider-container" style={{ width, height }}>
      <img
        key={index} // key change hoga to animation dobara trigger hogi
        src={images[index]}
        alt="slider"
        className="slide-image"
      />
    </div>
  );
};

export default Slider;
