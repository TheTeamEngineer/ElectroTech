import React from 'react'
import classes from './signup.css'

 const Form = () => {
    
  return (
    <div className={classes.formcontentright}>
    <form className={classes.form} noValidate>
      <h1>
        Get started with us today! Create your account by filling out the
        information below.
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
      <div className={classes.forminputs}>
        <label className={classes.formlabel}>Confirm Password</label>
        <input
          className={classes.forminput}
          type='password'
          name='password2'
          placeholder='Confirm your password'
          
        />
      </div>
      <button className={classes.forminputbtn}  type='submit'>
        Sign up
      </button>
      <span className={classes.forminputlogin}>
        Already have an account? Login <a href='#'>here</a>
      </span>
    </form>
  </div>
);

}
export default Form;