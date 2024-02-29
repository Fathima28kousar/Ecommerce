import styles from './Everything.module.css'
import Productlist from '../products/productlist/Productlist'
import items from '../products/data'


const Everything = () => {
  
  return (
    <div className={styles.everything}>
      <Productlist items={items}/>
    </div>
  )
}

export default Everything
