import React from 'react'
import {useEffect} from 'react'

const COD = ({setCart}) => {
  useEffect(() => {
    // Call handleSuccess when the component mounts
    handleSuccess();
  }, []);

  const handleSuccess = () => {
    // Clear the cart when the order is successful
    setCart([]);
    localStorage.removeItem('cart');
  };
  return (
    <div>
      <h1>Thank you for choosing COD</h1>
    </div>
  )
}

export default COD
