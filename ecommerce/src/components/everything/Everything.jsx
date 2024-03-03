import styles from './Everything.module.css';
import Search from "../search/Search";
import items from '../products/data'

const Everything = () => {
  return (
    <div className={styles.everything}>
      <Search items={items} />
    </div>
  );
};

export default Everything;
