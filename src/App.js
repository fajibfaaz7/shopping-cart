import React, { Component } from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  sortProducts = (value) => {
    const sort = value;
    const products = [...this.state.products];
    products.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : sort === "highest"
        ? a.price < b.price
          ? 1
          : -1
        : a._id > b._id
        ? 1
        : -1
    );
    this.setState({ sort, products });
  };
  filterProducts = (value) => {
    const size = value;
    let products = data.products;
    if (size) {
      products = products.filter(
        (product) => product.availableSizes.indexOf(size) >= 0
      );
    }
    this.setState({ size, products, sort: "" });
    // if (size === "") {
    //   this.setState({ size, products });
    // } else {
    //   this.setState({
    //     size,
    //     products: products.filter(
    //       (product) => product.availableSizes.indexOf(size) >= 0
    //     ),
    //   });
    // }
  };
  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              />
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All right reserved</footer>
      </div>
    );
  }
}

export default App;
