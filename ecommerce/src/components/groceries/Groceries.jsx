import styles from './Groceries.module.css'
import items from '../products/data'
import Search from '../search/Search'

const Groceries = () => {
    const reversedItems = items.slice().reverse()
  return (
    <div className={styles.groceries}>
      <Search items={reversedItems} />
    </div>
  )
}

export default Groceries
