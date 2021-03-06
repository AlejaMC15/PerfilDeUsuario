import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Cat from '../../images/cat.jpg';

const Home = () => {
  return (
    <div>
      <>
        <div className="containerHeader">
          <h1 className="text-center textHeader">Pets profile</h1>
          <button className="displayContents">
            <img
              id="gear"
              src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwMjQiIHdpZHRoPSI4OTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8y%0D%0AMDAwL3N2ZyI+CiAgPHBhdGggZD0iTTQ0Ny45MzggMzUwQzM1OC41MzEgMzUwIDI4NiA0MjIuNTMx%0D%0AIDI4NiA1MTJjMCA4OS4zNzUgNzIuNTMxIDE2Mi4wNjIgMTYxLjkzOCAxNjIuMDYyIDg5LjQzOCAw%0D%0AIDE2MS40MzgtNzIuNjg4IDE2MS40MzgtMTYyLjA2MkM2MDkuMzc1IDQyMi41MzEgNTM3LjM3NSAz%0D%0ANTAgNDQ3LjkzOCAzNTB6TTc3Mi42MjUgNjA1LjA2MmwtMjkuMTg4IDcwLjMxMiA1Mi4wNjIgMTAy%0D%0ALjI1IDYuODc1IDEzLjUtNzIuMTg4IDcyLjE4OEw2MTEuNzUgODA3LjM3NWwtNzAuMzEyIDI4Ljg3%0D%0ANUw1MDUuNzUgOTQ1LjVsLTQuNTYyIDE0LjVIMzk5LjE1NkwzNTUgODM2LjY4OGwtNzAuMzEyLTI5%0D%0ALTEwMi40MDQgNTEuOTM4LTEzLjUgNi43NS03Mi4xNTYtNzIuMTI1IDU1Ljg3NS0xMTguNS0yOC45%0D%0ANjktNzAuMjVMMTQuNDY5IDU2OS44NzUgMCA1NjUuMTg4VjQ2My4yMTlMMTIzLjQwNiA0MTlsMjgu%0D%0AOTY5LTcwLjE4OC01MS45MDYtMTAyLjQ2OS02Ljg0NC0xMy40MzggNzIuMDYyLTcyLjA2MiAxMTgu%0D%0ANTk0IDU1Ljg0NCA3MC4yMTktMjkuMDMxIDM1LjY1Ni0xMDkuMTg4TDM5NC43NSA2NGgxMDJsNDQu%0D%0AMTg4IDEyMy40NjkgNzAuMTI1IDI5LjAzMUw3MTMuNSAxNjQuNTMwOTk5OTk5OTk5OTVsMTMuNjI1%0D%0ALTYuODQ0IDcyLjEyNSA3Mi4wNjItNTUuODc1IDExOC40MDZMNzcyLjI1IDQxOC41bDEwOS4zNzUg%0D%0AMzUuNjU2TDg5NiA0NTguNzV2MTAxLjkzOEw3NzIuNjI1IDYwNS4wNjJ6IiAvPgo8L3N2Zz4K"
              height="80"
            />
          </button>
        </div>
      </>
      <div className="">
        <h2 className="text-center textTwoHome">Home</h2>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/">
                <a className="nav-link" href="#">
                  Login <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <Link to="/info">
                <a className="nav-link" href="#">
                  Info <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col">
            <h2 className="text-center">Profile photo</h2>
            <img className="imgCat img-fluid " src={Cat} alt="img_cat" />
          </div>
          <div className="col-sm-6 md-6 lg-12 mt-4">
            <h4 className="text-left">Name</h4>
            <input
              className="form-control form-control-sm input"
              type="text"
              placeholder="Enter your pet's name"
            />
            <h4 className="text-left mt-3">Age</h4>
            <select className="form-control form-control-sm input">
              <option>Enter the pet's age</option>
              <option>1-3</option>
              <option>4-6</option>
              <option>7-9</option>
              <option>11-12</option>
              <option>13-15</option>
              <option>Other</option>
            </select>
            <h4 className="text-left mt-3">Race</h4>
            <input
              className="form-control form-control-sm input "
              type="text"
              placeholder="Enter your pet's race"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="text-center">Develop by: Alejandra Meneses Carmona</p>
      </div>
    </div>
  );
};

export default Home;
