import ImageSlider from './ImageSlider'
import styles from './DemoCarousel.module.css'

const DemoCarousel = ({id}) => {
  const slides = [
    {url:'http://localhost:3000/images/carousel1.jpg',title:'organic'},
    {url:'http://localhost:3000/images/carousel2.jpg',title:'organic'},
    {url:'http://localhost:3000/images/carousel3.jpg',title:'organic'},
    {url:'http://localhost:3000/images/carousel4.jpg',title:'organic'},
  ]

  return (
    <div id={id}>
      <div className={styles.containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default DemoCarousel;