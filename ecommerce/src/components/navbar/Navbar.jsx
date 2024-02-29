import { Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import {FaShoppingBasket,FaUser,FaBars,FaTimes} from "react-icons/fa";
import { useState } from "react";


const Navbar = ({cart}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      
      <nav className={styles.navbar}>
        <div className={styles.header}>
          <Link to='/index'><img src="/images/logo.svg" alt="" /></Link>
          <ul className={styles.groceries}>
            <li><Link to='/everything'>Everything</Link></li>
            <li><Link to='/Groceries'>Groceries</Link></li>
            <li><Link to='/'>Juice</Link></li>
            
            
          </ul>
        </div>

      <div className={styles.header2}>
        <ul className={styles.about}>
          <li><Link to='/about' >About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>

        <ul className={styles.icons}>
          <li className={styles.icon}>
          <Link to='/cart'>
              <FaShoppingBasket />{cart.length}</Link>
          </li>
          <li className={styles.profile}>
            <FaUser />
          </li>
        </ul>
      </div>

      <div className={styles.toggleButton} onClick={toggleDropDown}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {isOpen && (
        <div className={`${styles.dropDownMenu} ${styles.open}`}>
          <ul>
            <li>
              <FaUser />
            </li>
            <li>Everything</li>
            <li>Groceries</li>
            <li>Juice</li>
            <li><Link to='/about' >About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>

    
    </div>
    
  );
};

export default Navbar;
