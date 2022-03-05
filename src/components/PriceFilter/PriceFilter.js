import React, { Component } from "react";
import classes from "./PriceFilter.css";
import { ProductConsumer } from "./../../context";

export default class PriceFilter extends Component {
  state = {
    selectprice: "", // For maintaining the selected price
  };
  constructor(props) {
    super(props);
    this.handleSort = this.handleSort.bind(this);
  }


  // Sort Function
  handleSort = (sort) => {
    const productsTobeFiltered = this.props.value.products;
    if (sort !== "") {
      productsTobeFiltered.sort((a, b) =>
        sort === "lowestprice"
          ? a.price > b.price
            ? 1
            : -1
          : a.price < b.price
          ? 1
          : -1
      );
    } else {
      productsTobeFiltered.sort((a, b) => (a.id > b.id ? 1 : -1));
    }

    this.context.handleSorting(productsTobeFiltered);
  };
  render() {
    return (
      <div>
        <h3 className={classes.heading}>Filter By Price</h3>
        <div class={classes.selectwrap}>
          <label>Order By</label>
          <select
            name="price"
            value={this.state.selectprice}
            onChange={(e) => {
              this.setState({
                selectprice: e.target.value,
              });

              this.handleSort(e.target.value);
            }}
          >
            <option value="">Select</option>
            <option value="lowestprice">Lowest to highest</option>
            <option value="highestprice">Highest to lowest</option>
          </select>
        </div>
      </div>
    );
  }
}
PriceFilter.contextType = ProductConsumer;
