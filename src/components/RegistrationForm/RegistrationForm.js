import React, { useState } from "react";
import Header from '../Header/Header';
export default function RegistrationForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null
  });
 
    const handleSubmitClick = (e) => {
      e.preventDefault();
      if (state.password === state.confirmPassword) {
        //sendDetailsToServer()
      } else {
        props.showError("Passwords do not match");
      }
    };
    const handleChanges = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
          ...prevState,
          [id]: value,
        }));
    }
    return (
      <div>
        <Header title={"Registeration"}/>
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <form>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChanges}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChanges}
            />
          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={state.confirmPassword}
              onChange={handleChanges}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmitClick}
          >
            Register
          </button>
        </form>
      </div>
      </div>
    );
  };

