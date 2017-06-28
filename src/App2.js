// Import dependencies 
// stuff other people made
import React, { Component } from 'react';
import './App.css';
// Custom stuff
import Calculator from './Calculator'

class App2 extends Component {
  constructor(props) {
    super(props);
    this.products = props.products
    console.log(props.products)
  }
  render() {

    return(
      <Calculator />
    )


  }
}

export default App2; 