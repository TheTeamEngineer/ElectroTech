import React from "react";
import classes from "./signup.css";

const Signup = (props) => {
  return props.trigger ? (
    <div className={classes.popup}>
      <div className={classes.popupinner}>
        <button
          className={classes.closebtn}
          onClick={() => props.setTrigger(false)}
        >
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};
export default Signup;
