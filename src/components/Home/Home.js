import React, { Component } from "react";
import classes from "./Home.css";
import Robot from "./../../assets/img/robot.jpg";
import { NavLink } from "react-router-dom";
import Footer from '../Footer/Footer'
  

export default class Home extends Component {
  render() {
    return (
      <div> 
      <div className={classes.Container}>
        <img src={Robot} alt="home" className={classes.Img} />
        <div className={classes.Overlay} />
        <div className={classes.Headding}>
          <h1 className={classes.Title}>
            Thoughtful standards for modern Robotics
          </h1>
          <NavLink to ="/shop">
            <button className={classes.Btn}>shop now</button>
          </NavLink>
        </div>
 
       </div>

		<Footer />
      </div>
      
       
            
    );
  }
}
