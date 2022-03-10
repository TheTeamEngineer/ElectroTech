import React from "react";
import Navigationitem from "./Navigationitem/Navigationitem";
import classes from "./Navigationitems.css";
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react";
import Signup from "../../Signup/Signup";
import Form from "../../Signup/Form";
import Login from "../../Login/Login";

const navigationItems = () => {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <ul className={classes.NavigationItems}>
      <button onClick={() => setSignup(true)} className={classes.signup}>
        Signup
      </button>
      <button onClick={() => setLogin(true)} className={classes.login}>
        Login
      </button>
      <Navigationitem link="/shop">Shop</Navigationitem>
      <Navigationitem link="/about">About</Navigationitem>
      
      <Navigationitem link="/cart" cart="cart">
        <TiShoppingCart className={classes.Cart} />
      </Navigationitem>
      <Signup trigger={signup} setTrigger={setSignup}>
        <Form />
      </Signup>
      <Signup trigger={login} setTrigger={setLogin}>
        <Login />
      </Signup>
    </ul>
  );
};

export default navigationItems;
