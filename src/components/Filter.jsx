import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-count">{this.props.count} Products</div>
        <div className="filter-sort">
          Order{" "}
          <select
            value={this.props.sort}
            onChange={(event) => this.props.sortProducts(event.target.value)}
          >
            <option value="">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter{" "}
          <select
            value={this.props.size}
            onChange={(event) => this.props.filterProducts(event.target.value)}
          >
            <option value="">ALL</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filter;
