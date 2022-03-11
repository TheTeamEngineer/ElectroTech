import React from 'react'
import classes from '../Signup/signup.css'

 const Login = () => {
    
  return (
    <div className={classes.formcontentright}>
    <form className={classes.form} noValidate>
      <h1>
      Get started with us today!
      </h1>
      <div className={classes.forminputs}>
        <label className={classes.formlabel}>Username</label>
        <input
          className={classes.forminput}
          type='text'
          name='username'
          placeholder='Enter your username'
        />
      </div>
      <div className={classes.forminputs}>
        <label className={classes.formlabel}>Email</label>
        <input
          className={classes.forminput}
          type='email'
          name='email'
          placeholder='Enter your email'
          
        />
      </div>
      <div className={classes.forminputs}>
        <label className={classes.formlabel}>Password</label>
        <input
          className={classes.forminput}
          type='password'
          name='password'
          placeholder='Enter your password'
         
        />
      </div>
      <button className={classes.forminputbtn}  type='submit'>
        Login
      </button>
      <span className={classes.forminputlogin}>
        Dont't have an account? SignUp <a href='#'>here</a>
      </span>
    </form>
  </div>
);

}
export default Login;