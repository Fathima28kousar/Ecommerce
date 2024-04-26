import React, {useState} from 'react'
import axios from 'axios';

const SuccessPage = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [payment, setPayment] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/', { name, amount });
      setPayment(response.data.payment);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handlePaymentSuccess = async (paymentData) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/', paymentData);
      setPaymentStatus(response.data.status);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div>
      {/* <h1>Order Successful</h1> */}
      <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Enter amount</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </div>
      {payment && (
        <div className="row mt-4">
          <div className="col-md-6 mx-auto">
            <form action="/success" method="post">
              <script src="https://checkout.razorpay.com/v1/checkout.js"
                data-key="YOUR_RAZORPAY_KEY"
                data-amount={payment.amount}
                data-currency="INR"
                data-order_id={payment.id}
                data-buttontext="Pay with Razorpay"
                data-name="Coffee Corp"
                data-description="Payment for products/services"
                data-image="https://example.com/logo.png"
                data-prefill-name={payment.name}
                data-prefill-email="you@example.com"
                data-prefill-contact="9999999999"
                data-theme-color="#F37254"
                onSuccess={handlePaymentSuccess}
              ></script>
              <input type="hidden" name="hidden" custom="Hidden Element" />
            </form>
          </div>
        </div>
      )}
      {paymentStatus !== null && (
        <div className="row mt-4">
          <div className="col-md-6 mx-auto">
            <div className="text-center mt-5 pt-5">
              {paymentStatus ? (
                <>
                  <img src="https://icons.veryicon.com/png/o/miscellaneous/new-version-of-star-selected-icon/success-26.png" className="img-fluid" style={{ height: '200px' }} alt="success" />
                  <h2 className="mt-4">Thanks your payment has been received</h2>
                </>
              ) : (
                <h2>Your payment has failed, please try again</h2>
              )}
              <a href="/" className="btn btn-success">Buy again</a>
            </div>
          </div>
        </div>
      )}
    </div>
  

    </div>
  )
}

export default SuccessPage

