import React, { Component, createContext } from 'react';

const CartContext = createContext(null);

class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <CartContext.Provider value={this.state}>
        { this.props.children }
      </CartContext.Provider>
    );
  }
}

export {
  CartContext,
  CartProvider,
};
