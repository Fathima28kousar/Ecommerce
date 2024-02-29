import { FaShoppingCart,FaArrowRight  } from "react-icons/fa";
import styles from './Button.module.css'

const Button = ({text,icon,iconSize}) => {
   let IconComponent = null;

    if (icon === 'cart'){
        IconComponent = FaShoppingCart;
    } else if (icon === 'arrow') {
        IconComponent = FaArrowRight;
    }


  return (
    <div>
      <button className={styles.button}>
      {IconComponent && <IconComponent  size={iconSize}/>} 
            <span>{text}</span>
        </button>
    </div>
  )
}

export default Button
