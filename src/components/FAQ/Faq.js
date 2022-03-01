import React, { Component } from "react";
import classes from "./faq.css";
import faq from "../../assets/img/faq.png";

export default class Home extends Component {
  render() {

    return (
      <div className={classes.Container}>
        <div className={classes.imgContainer}>
          <img src={faq} className={classes.logo} />
        </div>
        <div className={classes.content}>
          <div className={classes.heading}>Frequently asked questions</div>
          <div className={classes.accordian}>
            <div>
              <input
                type="radio"
                name="example_accordion"
                id="section1"
                className={classes.accordion__input}
              />
              <label for="section1" className={classes.accordion__label}>
                Do you accept paypal?
              </label>
              <div className={classes.accordion__content}>
                <p>Yes, we do, along with AliPay, PayTM, and Payoneer.</p>
              </div>
            </div>

            <div>
              <input
                type="radio"
                name="example_accordion"
                id="section2"
                className={classes.accordion__input}
              />
              <label for="section2" className={classes.accordion__label}>
                What is your SLA Guarantee ?
              </label>
              <div className={classes.accordion__content}>
                <p>Yes, we do, along with AliPay, PayTM, and Payoneer.</p>
              </div>
            </div>
            <div>
              <input
                type="radio"
                name="example_accordion"
                id="section3"
                className={classes.accordion__input}
              />
              <label for="section3" className={classes.accordion__label}>
                Do you provide COD?
              </label>
              <div className={classes.accordion__content}>
                <p>Yes we provide COD and online payments both.</p>
              </div>
            </div>
            <div>
              <input
                type="radio"
                name="example_accordion"
                id="section4"
                className={classes.accordion__input}
              />
              <label for="section4" className={classes.accordion__label}>
                Are the products returnable ?
              </label>
              <div className={classes.accordion__content}>
                <p>Yes they are returnable.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
