import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

import Cat from '../../images/cat.jpg';

const Login = () => {
  let history = useHistory();

  return (
    <div className="containerLogin">
      <div className="row align-items-center justify-content-center content">
        <div className="col-sm-12 col-md-8 col-lg-6">
          <div className="col titleOne">
            <h1 className="">PET PROFILE</h1>
          </div>
          <div className="row justify-content-center"></div>
          <div className="row justify-content-center">
            <div className="col text">
              <h4 className="h4">DEVELOP BY:</h4>
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
              <p className="text-center">Username</p>
              <input className="input" type="text" />
            </div>
            <div>
              <p className="text-center">Password</p>
              <input className="input" type="password" />
            </div>
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col textTwo">
            <h4 className="h4Two">DEVELOP BY:</h4>
            <h2>ALEJANDRA MENESES CARMONA</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
