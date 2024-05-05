import React, { useEffect } from "react";
import image from "../images/removebg.png";
import image4 from "../images/user.png";
import { Link, useNavigate } from "react-router-dom";

import BottomNavbar from "./BottomNavbar";
import Dashboard from "./Dashboard";

const Home = ({user,setUser}) => {
  let username;
  if (user && user.authtoken && user.authtoken.username) {
    username = user.authtoken.username;
    console.log(username)
  }
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === null) {
      navigate("/loginform");
    }
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/loginform");
    setUser({});

  };
  return (
    <div>
      <nav class="navbar sticky-top navbar-light bg-success d-flex justify-content-end">
        <div className="current-user">
       
          <Link className="nav--link " onClick={() => handleLogOut()}>
            {/* <img src={image4} className="user mr-2, overlap=circular" /> */}
            Logout
          </Link>
        </div>
      </nav>
      <div class="wrapper ">
        <div className="bar col-md-3 bg-success mt-2 rounded">
          <div class="sidebar">
            <ul>
              <li>
                <Link className="nav--link " to="/dashboard">
                  <i class="fa fa-home" aria-hidden="true"></i>Dashboard
                </Link>
              </li>
              <li>
                <Link className="nav--link " to="/recipes">
                  <i class="fa fa-file" aria-hidden="true"></i>Recipes
                </Link>
              </li>
              <li>
              <Link className="nav--link " to="/deviceLogs">
                  <i class="fa fa-sign-in" aria-hidden="true"></i>Device Logs
                </Link>
              </li>
              <li>
                <Link className="nav--link " to="/allDevices">
                  <i class="fa fa-desktop" aria-hidden="true"></i>All Devices
                </Link>
              </li>
              <li>
                <Link className="nav--link " to="/about">
                  <i class="fa fa-info-circle" aria-hidden="true"></i>About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <Dashboard />
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Home;
