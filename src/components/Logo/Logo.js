import React from 'react'
import ElectroTech from "../../assets/img/logo.png";
import classes from './Logo.module.css'
const Logo = (props) => {
  return (
    <div onClick={props.click}>
      <img className={classes.logo} src={ElectroTech} alt="logo" width={"130px"} />
    </div>
  );
}

export default Logo
