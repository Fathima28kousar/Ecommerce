import styles from "./Checkout.module.css";
import Form from "./Form";

const Checkout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.checkout}>
        <h1>Checkout</h1>
        <div className={styles.billingDetails}>
          <div className={styles.form}>
            <h5>Billing details</h5>
            <hr />
            <Form />
          </div>
          <div className={styles.order}>
            <h1>Your order</h1>
            <table>
              <tr>
                <th>Product</th>
                <th>SubTotal</th>
              </tr>
              <tr>
                <td>Assorted coffee * 1</td>
                <td>35</td>
              </tr>
              <tr>
                <td>SubTotal</td>
                <td>35</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>35</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
