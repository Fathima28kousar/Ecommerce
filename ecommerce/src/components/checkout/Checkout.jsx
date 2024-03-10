import Button from "../home/button/Button";
import styles from "./Checkout.module.css";
import Form from "./Form";

const Checkout = (props) => {
  const { cartItems = {} } = props.location.state || {};
  const {totalPrice ={} } = props.location.state || {};
  return (
    <div className={styles.container}>
      <div className={styles.checkout}>
        <h1>Checkout</h1>
        <div className={styles.billingDetails}>
          <div className={styles.form}>
            <h3>Billing details</h3>
            <Form />
          </div>
          <div className={styles.order}>
            <h3 className={styles.h3}>Your order</h3>
            <table>
              <thead>
              <tr>
                <th className={styles.product}>Product</th>
                <th className={styles.subtotal}>SubTotal</th>
              </tr>
              </thead>
              <tbody>
              {Object.values(cartItems).map((thing) => (
              <tr key={thing.id}>
                <td>{`${thing.name} \u00D7  ${thing.quantity}`} </td>
                <td className={styles.subTr}>
                  {`$ ${thing.price * thing.quantity}`}
                </td>
                
              </tr>
              
            ))}
              </tbody>

            </table>
            <div className={styles.total}>
              <h3> Total Price: </h3>
              <h2>{`$ ${totalPrice}`}</h2>
            </div>
            <form>
            <input type='radio' name='payment' id='online' value='Online Payment' />
            <label htmlFor='online'>Online Payment</label><br/><br/>
            <input type='radio' name='payment' id='cash' value='Cash On Delivery' />
            <label htmlFor='cash'>Cash On Delivery</label>
            <Button type='submit' text='PLACE ORDER' />
            </form>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
