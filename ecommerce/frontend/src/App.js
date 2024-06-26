import Navbar from "./components//navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import About from "./components/about/About";
import Product from "./components/products/product/Product";
import Everything from "./components/everything/Everything";
import Groceries from "./components/groceries/Groceries";
import ProductDetail from "./components/products/productDetail/ProductDetail";
import { useState } from "react";
import Checkout from "./components/checkout/Checkout";
import Juice from "./components/everything/Juice"
import SuccessPage from "./components/SuccessPage";
import COD from "./components/COD";
import Form from "./components/checkout/Form";
import { useEffect } from "react";


const App = () => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);
  console.log(cart)
  console.log(cart.length)


  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div>
      <Navbar cart={cart} />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart">
          <Cart cart={cart} setCart={setCart} />
        </Route>
        <Route path="/product" component={Product} />
        <Route path="/everything" exact component={Everything} />
        <Route path="/Groceries" component={Groceries} />
        <Route path="/juice" component={Juice}/>
        <Route path="/productDetail/:id">
          <ProductDetail
            setCart={setCart}
            cart={cart}
            count={count}
            setCount={setCount}
          />
        </Route>
        <Route path="/checkout" component={Checkout} />
        <Route path="/success" component={SuccessPage} />
        {/* <Route path="/cod-success" component={COD} /> */}
        {/* <Route path="/billingDetails" component={Form} /> */}
        <Route path="/billingDetails"><Form setCart={setCart}/></Route>
        <Route path="/cod-success"><COD setCart={setCart}/></Route>
      </Switch>
      <Footer />
     
    </div>
  );
};

export default App;
