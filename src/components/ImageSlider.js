import React, { useState, useEffect } from "react";
import "./ImageSlider.css";
const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home__bannerContainer">
      <img className="home__image" src={images[currentImageIndex]} alt="Banner" />
      <button className="home__prev" onClick={handlePrevImage}>
        &#10094;
      </button>
      <button className="home__next" onClick={handleNextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
