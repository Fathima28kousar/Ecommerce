import styles from './Groceries.module.css'
import Productlist from '../products/productlist/Productlist'
import items from '../products/data'

const Everything = () => {
    const reversedItems = items.slice().reverse()
  return (
    <div className={styles.everything}>
      <Productlist items={reversedItems}/>
    </div>
  )
}

export default Everything
