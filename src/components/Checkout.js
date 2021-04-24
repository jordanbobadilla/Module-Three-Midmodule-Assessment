import { Component } from "react";

class Checkout extends Component {
  render() {
    return (
      <section className="Checkout">
        <h1>Checkout</h1>
        <form>
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" type="text" />
          <label htmlFor="last-name">Last Name</label>
          <input id="last-name" type="text" />
          <label htmlFor="email">Email</label>
          <input id="email" type="text" />
          <label htmlFor="credit-card">Credit Card</label>
          <input id="credit-card" type="text" />
          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="text" />
          <button>Buy Now</button>
        </form>
      </section>
    );
  }
}

export default Checkout;
