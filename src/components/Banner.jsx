import React, { useState, useEffect } from 'react';
import '../components/Ban.css'; 

const Banner = ({ animal }) => {
  const images = animal[0].images; 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <div className="banner-container">
      <div className="banner">
        <img
          src={images[currentIndex]}
          alt={`Animal ${currentIndex}`}
          className="ani-img"
        />
      </div>
    </div>
  );
};

export default Banner;
