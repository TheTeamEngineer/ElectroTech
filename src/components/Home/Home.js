import React, { Component } from "react";
import classes from "./Home.css";
import Robot from "./../../assets/img/hero_shape.png";
import Robo from "./../../assets/img/robo.png";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Faq from "../FAQ/Faq";
import { FaChevronRight } from "react-icons/fa";


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className={classes.Container}>
          <img src={Robot} alt='home' className={classes.Img} />
          <div className={classes.heroSection}>
            <div className={classes.Headding}>
              <h1 className={classes.Title}>
                <span className={classes.underline}>Thoughtful</span>
                <br /> standards for <br /> modern Robotics
              </h1>
              <div>
                <NavLink className={classes.Btn} to='/shop'>
                  <span>Shop Now</span>
                  <FaChevronRight className={classes.BtnIcon} />
                </NavLink>
              </div>
            </div>
            <img src={Robo} alt='home' className={classes.roboImg} />
          </div>
        </div>
        <Faq />

        <Footer />
      </div>
    );
  }
}
