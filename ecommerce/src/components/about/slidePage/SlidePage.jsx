import styles from "./SlidePage.module.css";
import DemoCarousel from "../carousel/DemoCarousel";
import { FaStar} from "react-icons/fa";
import Certify from './Certify'

const Certificate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <DemoCarousel id={styles.car} />
        <div className={styles.stars}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.
        </p>
        <div className={styles.review}>
          <img src="/images/customer1.png" alt="" />
          <p>Mila Kunit</p>
        </div>
      </div>
      <div className={styles.certificate}>
        <Certify/>
      </div>
    </div>
  );
};

export default Certificate;
