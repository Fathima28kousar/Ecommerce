// import React, {useState} from 'react'
// import axios from 'axios';
// import styles from './Success.module.css'

// const SuccessPage = ({ location }) => {
//   const { totalPrice } = location.state || {};
//   // console.log({totalPrice})
//   const [name, setName] = useState('');
//   const [amount, setAmount] = useState('');
//   const [payment, setPayment] = useState(null);
//   const [paymentStatus, setPaymentStatus] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/create_order/', { name, amount });
//       setPayment(response.data.payment);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   const handlePaymentSuccess = async (paymentData) => {
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/payment_success/', paymentData);
//       setPaymentStatus(response.data.status);
//     } catch (error) {
//       console.error('Error processing payment:', error);
//     }
//   };

//   return (
//    <div className={styles.Container}>
//     <form onSubmit={handleSubmit} method='post'>
    
    
//         <div>
//         <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//         </div>
//         <label htmlFor="amount">Enter amount</label>
//       <input
//         type="number"
//         id="amount"
//         value={totalPrice} 
//         disabled
//         onChange={(e) => setAmount(e.target.value)}/>
//         <button type='submit'>Submit</button>
//     </form>
//     {payment && (
//         <div className={styles.payment}>
//             <form method="post">
//               <script src="https://checkout.razorpay.com/v1/checkout.js"
//                 data-key="YOUR_RAZORPAY_KEY"
//                 data-amount={payment.amount}
//                 data-currency="INR"
//                 data-order_id={payment.id}
//                 data-buttontext="Pay with Razorpay"
//                 data-name="Organic Store"
//                 data-description="Payment for products/services"
//                 data-image="https://example.com/logo.png"
//                 data-prefill-name={payment.name}
//                 data-prefill-email="you@example.com"
//                 data-prefill-contact="9999999999"
//                 data-theme-color="#F37254"
//                 onSuccess={handlePaymentSuccess}
//               ></script>
//               <input type="hidden" name="hidden" custom="Hidden Element" />
//             </form>
//           </div>
        
//       )}
//       {paymentStatus !== null && (
//         <div className={styles.nopayment}>
//           {paymentStatus ? (
//             <>
//               <img src="https://icons.veryicon.com/png/o/miscellaneous/new-version-of-star-selected-icon/success-26.png" className="img-fluid" style={{ height: '200px' }} alt="success" />
//               <h2 className="mt-4">Thanks your payment has been received</h2>
//             </>
//           ) : (
//             <h2>Your payment has failed, please try again</h2>
//           )}
//           <a href="/" className="btn btn-success">Buy again</a>
//         </div>
//       )}
//    </div>
//   )
// }

// export default SuccessPage

import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import { server } from '../server';

const SuccessPage = ({location}) => {
  const { totalPrice } = location.state || {};
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  // const [Razorpay] = useRazorpay();
  // const [payment, setPayment] = useState(null);
  // const [paymentStatus, setPaymentStatus] = useState(null);

  const handlePaymentSuccess = async (response) => {
    try {
      let bodyData = new FormData();

      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(response));

      await axios({
        url: `${server}/razorpay/payment/success/`,
        method: "POST",
        data: bodyData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log("Everything is OK!");
          setName("");
          setAmount("");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(console.error());
    }
  };

  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };

  const showRazorpay = async () => {
    const res = await loadScript();

    let bodyData = new FormData();

    // we will pass the amount and product name to the backend using form data
    bodyData.append("amount", amount.toString());
    bodyData.append("name", name);

    const data = await axios({
      url: `${server}/razorpay/pay/`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: bodyData,
    }).then((res) => {
      return res;
    });

    var options = {
      key_id: 'rzp_test_wucadtaz2NQLqm', // in react your environment variable must start with REACT_APP_
      key_secret: 'Un2BvQcbNWU4MpjvhlF28G9W',
      amount: data.data.payment.amount,
      currency: "INR",
      name: "Ecommerce",
      description: "Test teansaction",
      // image: "", // add image url
      order_id: data.data.payment.id,
      handler: function (response) {
        // we will handle success by calling handlePaymentSuccess method and
        // will pass the response that we've got from razorpay
        handlePaymentSuccess(response);
      },
      prefill: {
        name: "User's name",
        email: "User's email",
        contact: "User's phone",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };


  return (
    <div>
       <form>
    
    
           <div>
            <label htmlFor="name">Name</label>
                   <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
            </div>
            <label htmlFor="amount">Enter amount</label>
            <input
              type="number"
              id="amount"
              value={totalPrice} 
              // disabled
              onChange={(e) => setAmount(e.target.value)}/>
            
        </form>
        <button type='submit' onClick={showRazorpay}>Submit</button>
    </div>
  )
}

export default SuccessPage
