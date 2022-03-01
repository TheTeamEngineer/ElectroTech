import React, { Component } from "react";
import Title from "./../Title/Title";
import Product from "../Product/Product";
import classes from "./ProductList.css";
import { ProductConsumer } from "./../../context";
import SearchBar from "../SearchBar/SearchBar";
export default class ProductList extends Component {
  state = {
    searchval: "", // For maintaining the search value
    products: [],
  };
  constructor(props) {
    super(props);
    this.handleType = this.handleType.bind(this);
    this.handleClear = this.handleType.bind(this)
  }

  // Handle On Change  Value

  handleType(event) {
    this.setState({
      searchval: event.target.value,
    });

    if(!event.target.value)
    {
      this.setState({
        searchval: '',
      });
      return;
    }

    // Filtering  Data

    const filtered = this.context.products.filter((country) => {
      return country.title
        .toLowerCase()
        .startsWith(event.target.value.toLowerCase());
    });
  
    if (event.target.value !== "") this.context.filteredProducts = filtered;
    else this.context.filteredProducts = this.context.products;

    
  }

  handleClear(){
    this.setState({
      searchval: '',
    });
  }

  render() {
    return (
      <div className={classes.PageContainer} style={{ textAlign: "center" }}>
        <Title name="ElectroTech" />

        <ProductConsumer>
          {(value) => (
            <SearchBar
              handleType={this.handleType}
              handleClear={this.handleClear}
              searchval={this.state.searchval}
              value={value}
            />
          )}
        </ProductConsumer>

        <div className={classes.ProductContainer}>
          {/* If search value is present then show the filtered results else show all products */}
          {this.state.searchval ? (
            <ProductConsumer>
              {(value) => {
                return value.filteredProducts.map((product) => (
                  <Product key={product.id} product={product} />
                ));
              }}
            </ProductConsumer>
          ) : (
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => (
                  <Product key={product.id} product={product} />
                ));
              }}
            </ProductConsumer>
          )}
        </div>
      </div>
    );
  }
}
ProductList.contextType = ProductConsumer;
