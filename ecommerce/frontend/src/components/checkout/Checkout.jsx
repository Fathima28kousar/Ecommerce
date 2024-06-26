import styles from "./Checkout.module.css";
import Button from "../home/button/Button";
import { useState,useEffect } from 'react'
import { useHistory } from "react-router-dom";

const Checkout = (props) => {
  const { cartItems = {} } = props.location.state || {};
  const { totalPrice = {} } = props.location.state || {};
  console.log(props.location.state);

  const history = useHistory();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    state: '',
    pincode: '',
    address: '',
    phone: '',
    paymentMethod: 'Online Payment',
})



const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "payment") {
      setFormData({ ...formData, paymentMethod: value });
  } else {
      setFormData({ ...formData, [name]: value });
  }
}

// Function to handle form submission
const handleSubmit = async (event) => {
  event.preventDefault();
//   if (
//     formData.firstName === "" ||
//     formData.lastName === "" ||
//     formData.email === "" ||
//     formData.pincode === "" ||
//     formData.address === "" ||
//     formData.phone === "" ||
//     formData.country === "" ||
//     formData.state === ""
// ) {
//     console.log("Please fill out all the form fields");
//     return; // Exit early if any field is empty
// }
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Form submitted with data:", formData);
  if (formData.paymentMethod === 'Cash On Delivery') {
      history.push('/billingDetails'); // Redirect to a page for COD success
  } else {
      // Further processing, such as sending data to backend for online payment
      history.push('/success', { totalPrice}); // Redirect to a generic success page

  }
};


 
  return (
    <div className={styles.container}>
      <div className={styles.checkout}>
        <h1>Checkout</h1>
        <div className={styles.billingDetails}>
          <div className={styles.form}>
            <h3>Billing details</h3>
            {/* <Form
              formData={formData}
              handleChange={handleChange}
              cartItems={cartItems}
              totalPrice={totalPrice}
              
            /> */}
          </div>
          <div className={styles.order}>
            <h3 className={styles.h3}>Your order</h3>
            {Object.keys(cartItems).length > 0 ?(
              <>
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
            <form onSubmit={handleSubmit}>
              <input
                type="radio"
                name="payment"
                id="online"
                value="Online Payment"
                checked={formData.paymentMethod === 'Online Payment'}
                onChange={handleChange}

              />
              <label htmlFor="online">Online Payment</label>
              <br />
              <br />
              <input
                type="radio"
                name="payment"
                id="cash"
                value="Cash On Delivery"
                checked={formData.paymentMethod === 'Cash On Delivery'}
                onChange={handleChange}
              />
              <label htmlFor="cash">Cash On Delivery</label>
              <Button type='submit' text='PLACE ORDER'  />
            </form>
            </>):(<p>Your cart is empty.</p>)}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Checkout;
