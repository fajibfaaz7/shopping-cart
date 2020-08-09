import React, { Component } from "react";
import formatCurrency from "../util";

class Products extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <ul className="products">
          {products.map((product, index) => (
            <li key={index}>
              <div className="product">
                <a href={`#${product._id}`}>
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button
                    className="button primary"
                    onClick={() => this.props.addToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
