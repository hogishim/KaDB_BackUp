import React, { useState } from 'react';
import styled from 'styled-components';

const ImageBox = styled.div`
  width: 49vw;
  height: 60vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  position: relative;
`;

const PostItemImage = styled.img`
  width: 49vw;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
`;

const ImageSlide = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = () => {
    nextSlide();
  };

  return (
    <ImageBox>
      {images.map((src, index) => (
        <PostItemImage
          key={index}
          src={src}
          alt={`Image ${index}`}
          style={{ transform: `translateX(${(index - currentIndex) * 100 - currentIndex * 100}%)` }}
          onClick={handleImageClick}
        />
      ))}
    </ImageBox>
  );
};

export default ImageSlide;
