import styles from "./Certificate.module.css";
import DemoCarousel from "../carousel/DemoCarousel";
import Button from "../button/Button";
import { FaStar,FaRegCheckCircle } from "react-icons/fa";

const Certificate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
      <DemoCarousel id={styles.car}/> 
        <div className={styles.stars}>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </div>
        <p>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <div className={styles.review}>
            <img src='/images/customer1.png' alt='' />
            <p>Mila Kunit</p>
        </div>

      </div>
      <div className={styles.certificate}>
        <div className={styles.heading}>
          <img src="/images/organic-badge.png" alt="organic badge" />
            <div className={styles.text}>
                <h2>Certified Products</h2>
                <p>
                Click edit button to change this text. Lorem ipsum dolor sit amet
                </p>
            </div>
        </div>
        <h1>We Deal With Various Quality Organic Products!</h1>
        <img src="/images/leaf.png" alt="" />
        <div className={styles.list}>
            <ul>
                <li><FaRegCheckCircle/> Fresh fruits </li>
                <li><FaRegCheckCircle/> Dry fruits </li>
                <li><FaRegCheckCircle/> Fresh vegetables </li>
                <li><FaRegCheckCircle/> Dried vegetables </li>
                <li><FaRegCheckCircle/> Dried Coffee </li>
            </ul>
            <ul>
                <li><FaRegCheckCircle/> Beauty products </li>
                <li><FaRegCheckCircle/> Milk products </li>
                <li><FaRegCheckCircle/> Organic honey </li>
                <li><FaRegCheckCircle/> Organic tea </li>
                <li><FaRegCheckCircle/> Dried vegetables </li>
            </ul>
        </div>
        <Button text="START SHOPPING" icon="cart" />
      </div>
    </div>
  );
};

export default Certificate;
