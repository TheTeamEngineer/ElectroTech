import React from 'react'
import ElectroTech from "../../assets/img/logo.png";

const Logo = (props) => {
  return (
    <div onClick={props.click}>
      <img src={ElectroTech } alt="logo" width={'130px'}  />
    </div>
  )
}

export default Logo
