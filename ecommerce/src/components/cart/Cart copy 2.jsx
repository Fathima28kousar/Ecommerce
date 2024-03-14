import styles from "./Cart.module.css";
import Button from "../home/button/Button";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Cart = ({ cart, setCart }) => {
 

  return (
    <div className={styles.container}>
      {cart.length > 0 ?
      <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Remove</th>

            </tr>
          </thead>
          <tbody>
            {
              cart.map((item,index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.image1} alt={item.name} style={{'height': '100px'}}/>
                      <div>{item.name}</div>
                    </td>
                    <td>
                      <div className={styles.quantity}>
                        <button className={styles.minus} 
                          onClick={() => {
                            let newcart = [...cart]
                            if(newcart[index].quantity >1 ){
                              newcart[index].quantity -= 1
                              setCart(newcart)
                            }
                          }}
                        >-</button>
                        <span>{item.quantity}</span>
                        <button className={styles.plus}
                        onClick={()=>{
                          let newcart = [...cart]
                          newcart[index].quantity += 1
                          setCart(newcart)
                        }}
                        >+</button>
                      </div>
                      
                      </td>
                    <td>${item.price}</td>
                    <td>${item.quantity * item.price}</td>
                  </tr>
                )
              })
            }
          </tbody>
      </table>  
      :
      <div>
        <h1>The cart is empty</h1>
      </div>
    }
    </div>
  );
};

export default Cart;
