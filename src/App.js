import { Component } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Products from "./components/Products";
import formatPrice from "./helpers/formatPrice";

class App extends Component {
  state = { cart: [] };

  addProduct = (product) => {
    this.setState((prevState) => {
      return { cart: [...prevState.cart, product] };
    });
  };

  subtotal = () => {
    const {cart} = this.state
    let sum = 0
    cart.forEach(product => sum += product.price)
    return formatPrice(sum)
  }

  tax = () => {
    const {cart} = this.state
    let sum = 0
    cart.forEach(product => sum += product.price)
    return formatPrice(sum * 0.05)
  }

  total = () => {
    const {cart} = this.state
    let sum = 0
    cart.forEach(product => sum += product.price)
    const subtotal = sum
    const tax = sum * 0.05
    return formatPrice(subtotal + tax)
  }

  render() {
    const { cart } = this.state;
    const subtotal = this.subtotal()
    const tax = this.tax()
    const total = this.total()
    return (
      <main>
        <Products formatPrice={formatPrice} addProduct={this.addProduct} />
        <div>
          <Cart formatPrice={formatPrice} cart={cart} subtotal={subtotal} tax={tax} total={total}/>
          <Checkout total={total}/>
        </div>
      </main>
    );
  }
}

export default App;
