import React from 'react';
import Cat from '../../images/cat.jpg';

const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <h1>PROYECT NAME</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2>DEVELOP BY: ALEJANDRA MENESES CARMONA</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: '18rem' }}>
              <img src={Cat} className="imgRedonda" alt="img_profile" />
              <div className="card-body">
                <p>Username</p>
                <input type="text" />
              </div>
              <div className="card-body">
                <p>Password</p>
                <input type="text" />
              </div>
              <button type="button" class="btn btn-primary">
                Primary
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
