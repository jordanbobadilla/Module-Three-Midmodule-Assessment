import { Component } from "react";

class Checkout extends Component {
  state = {firstName: "", lastName: "", email:"", creditCard: "", zipCode: ""}
  
  handleChange = (e) => {
      const {name, value} = e.target; 
      this.setState({[name]: value})
  }

  handleSubmit = (e) => {
      e.preventDefault()
      const {total} = this.props
      const {firstName, lastName, email, creditCard, zipCode} = this.state
      if (!firstName || !lastName || !email) {
          alert(`Input is not valid`)
      } else if (creditCard.length !== 16) {
          alert(`Credit card number is not valid`)
      } else if (zipCode.length !== 5) {
          alert(`Zip code is not valid`)
      } else {
          alert(`Yay! Purchase complete. You will be charged ${total}.`)
      }
      
  } 
  render() {
    const {firstName, lastName, email, creditCard, zipCode} = this.state
    return (
      <section className="Checkout">
        <h1>Checkout</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" type="text" name="firstName" value={firstName} onChange={this.handleChange}/>
          <label htmlFor="last-name">Last Name</label>
          <input id="last-name" type="text" name="lastName" value={lastName} onChange={this.handleChange}/>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" value={email} onChange={this.handleChange}/>
          <label htmlFor="credit-card">Credit Card</label>
          <input id="credit-card" type="text" name="creditCard" value={creditCard} onChange={this.handleChange}/>
          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="text" name="zipCode" value={zipCode} onChange={this.handleChange}/>
          <button>Buy Now</button>
        </form>
      </section>
    );
  }
}

export default Checkout;
