import React, { useState } from "react";
import "../bootstrap.css";
import { useDispatch } from "react-redux";


const Login = () => {
  const dispatch = useDispatch();
  const [userInput, setuserInput] = useState({
    email: "",
    password: "",
  });
  const emailHandler = (e) => {
    setuserInput((prevState) => {
      return { ...prevState, email: e.target.value };
    });
  };
  const passwordHandler = (e) => {
    setuserInput((prevState) => {
      return { ...prevState, password: e.target.value };
    });
  };
  const onSubmitHandler = (e) => {
      e.preventDefault();
      if(userInput.email.includes('@') && userInput.password.length>5){
        dispatch({type:'Logged_IN'});
      }
      else{
          alert("Please Enter Proper Details!!!!");
      }
  };
  return (
    <div className="card m-5 text-dark">
      <div className="card-body p-5">
        <h1 className="title text-center">Login</h1>
        <br />
        <br />
        <form onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="col-5 text-right">
              <label>Email</label>
            </div>
            <div className="col-5">
              <input
                type="email"
                value={userInput.email}
                className="form-control"
                onChange={emailHandler}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-5 text-right">
              <label>Password</label>
            </div>
            <div className="col-5">
              <input
                type="password"
                value={userInput.password}
                className="form-control"
                onChange={passwordHandler}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
