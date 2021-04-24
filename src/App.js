import {Component} from "react"
import "./App.css";
import Products from "./components/Products";

class App extends Component {
  state = { cart: []}

  addProduct(product){
    this.setState((prevState)=> {
      return {cart: [...prevState, product]}
    })
  }
  
  render() {
    return (
      <Products addProduct={this.addProduct}/>
    )
  }
};

export default App;
