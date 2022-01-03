import React from "react";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div>
      <div class="card m-5 bg-danger text-white">
          <div className="card-header"><h1>About</h1></div>
        <div className="card-body p-5 bg-light title text-dark text-right"><h3>This Application is Developed By Krushang!!</h3></div>
        <div className="card-footer text-right">
          <Link to="/" className="btn btn-success">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};
