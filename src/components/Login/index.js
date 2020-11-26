import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

import Cat from '../../images/cat.jpg';

const Login = () => {
  let history = useHistory();

  const goToHome = () => {
    history.push('/home');
    // handleClose();
  };

  return (
    <div className="container container">
      <div className="row align-items-center justify-content-center content">
        <div className="col-sm-12 col-md-8 col-lg-6">
          <div className="col">
            <h1 className="">PET PROFILE</h1>
          </div>
          <div className="row justify-content-center"></div>
          <div className="row justify-content-center">
            <div className="col text">
              <h4 className="">DEVELOP BY:</h4>
              <h2>ALEJANDRA MENESES CARMONA</h2>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-6 d-flex justify-content-center">
          <div className="card" style={{ width: '20rem' }}>
            <div className="d-flex justify-content-center">
              <img
                src={Cat}
                className="imgRedonda img-fluid"
                alt="img_profile"
              />
            </div>
            <div>
              <p>Username</p>
              <input className="input" type="text" />
            </div>
            <div>
              <p>Password</p>
              <input className="input" type="password" />
            </div>
            <div className="d-flex justify-content-center">
              <button onClick={goToHome} type="button" class="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
