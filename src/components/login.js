import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-25 w-md-40 w-lg-50"> 
        <form className="p-4 border rounded shadow">
          <h2 className='text-center mb-4'>Login</h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-3">
            Forgot <a href="#">password?</a>
          </p>
          <p className="text-center mt-2">
          Didnt register?<Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
