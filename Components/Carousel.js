import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

const ImageCarousel = ({ images, text }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="image-carousel">
      <p className='caption dark-blue'>{text[activeIndex]}</p>
      <img className="slide" src={images[activeIndex]} alt={`Image ${activeIndex}`} />
      <button className="prev" disabled={activeIndex === 0} onClick={handlePrevClick}><AiOutlineLeft/></button>
      <button className="next" disabled={activeIndex === images.length-1} onClick={handleNextClick}><AiOutlineRight/></button>
    </div>
  );
};

export default ImageCarousel;
