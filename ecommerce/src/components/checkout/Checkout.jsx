import styles from './Checkout.module.css'

const Checkout = () => {
  return (
    <div className={styles.container}>
        <div className={styles.checkout}>
            <h1>Checkout</h1>

            <div className={styles.billingDetails}>
                <div className={styles.form}>
                    <form>
                        <div>
                            <label>First Name</label>
                            <input type='text' />
                        </div>

                        <div>
                            <label>Last Name</label>
                            <input type='text' />
                        </div>
                        
                    </form>
                </div>
                <div className={styles.order}></div>
            </div>
        </div>
    </div>
  )
}

export default Checkout
