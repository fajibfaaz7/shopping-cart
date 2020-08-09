import React, { Component } from "react";
import formatCurrency from "./../util";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckout: false,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  createOrder = (e) => {
    e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <div className="cart cart-header">
          {cartItems.length === 0
            ? "Cart is empty"
            : `You have ${cartItems.length} items in cart`}
        </div>
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index}>
                <div className="item-top">
                  <img src={item.image} alt={item.title} />
                  <div>{item.title}</div>
                </div>
                <div className="item-bottom">
                  <div className="item-price">
                    {formatCurrency(item.price)} x {item.count}
                  </div>
                  <button
                    onClick={() => this.props.removeFromCart(item)}
                    className="button"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div>
            <div className="cart">
              <div className="cart-total">
                <h2>
                  Total:{" "}
                  {formatCurrency(
                    cartItems.reduce(
                      (acc, curr) => acc + curr.price * curr.count,
                      0
                    )
                  )}
                </h2>
                <button
                  onClick={() => this.setState({ showCheckout: true })}
                  className="button primary"
                >
                  Proceed
                </button>
              </div>
            </div>
            {this.state.showCheckout && (
              <div className="form-container">
                <form onSubmit={this.createOrder}>
                  <div className="form-body">
                    <label htmlFor="email">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="form-body">
                    <label htmlFor="name">Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="form-body">
                    <label htmlFor="address">Address</label>
                    <textarea
                      name="address"
                      type="text"
                      required
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="form-body">
                    <button className="button primary" type="submit">
                      Place Order
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
