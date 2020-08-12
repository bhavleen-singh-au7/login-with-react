import React, { useState } from 'react';
import App from '../App';
import DB from '../DB.json';

const SignUp = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    loading: false,
    didRedirect: false
  });

  const { name, email, number, password, loading, didRedirect } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    DB.push({ name, email, number, password });

    return console.log(DB);
  };

  const SignUpForm = () => {
    return (
      <form onSubmit={handleSubmit} className='mt-5'>
        <div className="customBorder my-3 py-3">
          <div className="form-group font-weight-bold px-4">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control form-control-sm" placeholder="Enter Name" autoComplete="off"
              autoCapitalize="on" onChange={handleChange('name')} />
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="form-control form-control-sm" placeholder="Enter Email"
              autoComplete="off" onChange={handleChange('email')} />
            <small className="form-text text-muted">Your email will not be shared with anyone</small>
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="number">Number</label>
            <input type="text" name="number" id="number" className="form-control form-control-sm" placeholder="9911223344"
              pattern="[0-9]{10}" onChange={handleChange('number')} />
            <small className="form-text text-muted">Only Numric Values allowed with length of 10 characters.</small>
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="form-control form-control-sm" placeholder="Enter Strong Password" onChange={handleChange('password')} />
            <small className="form-text text-muted">Enter combination of atleast 6 characters.</small>
          </div>

          <div className="form-group font-weight-bold px-4">
            <label htmlFor="confirm-pass">Confirm Password</label>
            <input type="password" name="confirm-pass" id="confirm-pass" className="form-control form-control-sm" placeholder="Enter Same Password" onChange={handleChange('confirm-pass')} />
          </div>

          <div className="text-center py-2 px-4">
            <button className="btn btn-outline-danger btn-block"> Submit</button>
          </div>
        </div>
      </form>
    );
  };



  return (
    <App>
      {SignUpForm()}
    </App>
  );

};

export default SignUp;