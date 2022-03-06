import React from "react";
import Navigationitem from "./Navigationitem/Navigationitem";
import classes from "./Navigationitems.css";
import { TiShoppingCart } from "react-icons/ti";
const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <Navigationitem link='/shop'>Shop</Navigationitem>
      <Navigationitem link='/about'>About</Navigationitem>
      <Navigationitem link='/cart' cart='cart'>
        <TiShoppingCart className={classes.Cart} />
      </Navigationitem>
    </ul>
  );
};

export default navigationItems;
