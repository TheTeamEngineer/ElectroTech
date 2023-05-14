import React, { Component } from "react";
import classes from "./Product.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "./../../context";
import { MdShoppingBasket } from "react-icons/md";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart, info } = this.props.product;
    {
      console.log(this.props);
    }
    return (
      <>
        <ProductConsumer>
          {(value) => (
            <div class={classes.productcard}>
              <NavLink to='/details'>
                <div
                  class={classes.producttumb}
                  onClick={() => value.handleDetail(id)}>
                  <img src={img} alt={title} className={classes.Img} />
                </div>
              </NavLink>
              <div className={classes.productinfo}>
                <div class={classes.wcfright}
                onClick={(e) => {
                  e.preventDefault();
                  value.addToCart(id);
                  value.openModal(id);
                }}
                >
                  <a
                    disabled={inCart ? true : false}
                    className={
                      inCart ? classes.CartBtnDisable : classes.buybtn
                    }>
                    <MdShoppingBasket /> Add to Cart
                  </a>
                </div>
                <NavLink to='/details' style={{ textDecoration: "none" }}>
                  {" "}
                  <h3>{title}</h3>
                </NavLink>
                <div className={classes.productdetails}>
                  <div class={classes.descriptionprod}>
                    <p>{info}</p>
                  </div>
                  <div class={classes.cardfooter}>
                    <span class={classes.price}>₹{price}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ProductConsumer>
      </>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
