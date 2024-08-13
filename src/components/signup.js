import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const SignUp = () => {

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-25 w-md-45 w-lg-50"> {/* Adjust width here */}
        <form className="p-4 border rounded shadow">
          <h2 className='text-center mb-4'>SIGN UP</h2>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Username</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter Your name"
            />
          </div>
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

            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        
        </form>
      </div>
    </div>
  );
};
export default SignUp;
