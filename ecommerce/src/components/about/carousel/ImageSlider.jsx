import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './ImageSlider.module.css'

const slideStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'background-image 0.3s ease', 
  cursor: 'pointer'
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div {...handlers} className={styles.sliderStyles}>
      <div>
        <div onClick={goToPrevious} className={styles.leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} className={styles.rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
    </div>
  );
};

export default ImageSlider;
