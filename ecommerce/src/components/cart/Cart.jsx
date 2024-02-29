import styles from "./Cart.module.css";
import Button from "../home/button/Button";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (thingId) => {
    const updatedCart = cart.filter(
      (thing) => thing.id !== thingId && thing.quantity > 0
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  let totalPrice = 0;

  // Grouping cart items by id
  const groupedCart = cart.reduce((acc, thing) => {
    if (acc[thing.id]) {
      acc[thing.id].quantity += thing.quantity;
    } else {
      acc[thing.id] = { ...thing };
    }
    return acc;
  }, {});

  Object.values(groupedCart).forEach((thing) => {
    totalPrice += thing.price * thing.quantity;
  });

  return (
    <div className={styles.container}>
      {Object.values(groupedCart).length === 0 ? (
        <>
          <div className={styles.empty}>
            <h1>Your Cart is Empty</h1>
            <Link to="/everything">
              <Button text="CONTINUE SHOPPING..." />
            </Link>
          </div>
        </>
      ) : ( <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(groupedCart).map((thing) => (
              <tr key={thing.id} className={styles.cart}>
                <td>
                  <div>
                    <img src={thing.image1} alt="" />
                  </div>
                </td>
                <td>
                  <h4>{thing.name}</h4>
                </td>
                <td>{thing.price}</td>
                <td>
                  <div>
                    <p>{thing.quantity}</p>
                  </div>
                </td>
                <td>{thing.price * thing.quantity}</td>
                <td>
                  <FaTrash onClick={() => removeFromCart(thing.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.total}>
          <div className={styles.subtotal}>
            <p>Sub Total:{totalPrice}</p>
            <p>Grand Total: {totalPrice}</p>
            <hr/>
          </div>
          <Link to='/checkout'> <Button text="CHECKOUT" /> </Link>
        
      </div>
      </div>
        
      )}

     

      {Object.values(groupedCart).length !== 0 && (
        <div>
          <Button onClick={() => setCart([])} text="CLEAR CART" />
          
        </div>
      )}
    </div>
  );
};

export default Cart;
