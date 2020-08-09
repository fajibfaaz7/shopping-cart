import React, { Component } from "react";
import formatCurrency from "./../util";

class Cart extends Component {
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
              <button className="button primary">Proceed</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
