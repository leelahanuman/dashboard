import React, { useState } from "react";
import image from "./images/and.jpeg";
import image1 from "./images/yello_info.png";
import image2 from "./images/fig image1.webp";
import image3 from "./images/hy5.png";
import image4 from "./images/sad.png";
import { useNavigate } from "react-router-dom";
import loginapi from "../api/LoginApi";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate()
  const handleSubmit =async (event) => {
    event.preventDefault();
    // if (username === "admin" && password === "password") {
    //   // Login successful
    //   console.log("Login successful!");
    //   localStorage.setItem("isLoggedIn",true);
    //   navigate("/");
    //   // Redirect to home page or other protected rou
    // } else {
    //   // Login failed
    //   console.error("Invalid username or password");
    //   // Display error message to user

    // }
    const response=await loginapi({username,password});
    if(response.token){
         localStorage.setItem("isLoggedIn",true);
      navigate("/");
    }

    else {
        console.error("Invalid username or password");
  
      }
    console.log(response);
  };
  return (
    <>
    <form onSubmit={handleSubmit}>

      <div className="login-page ">
        <div className="form bg-success rounded">
          <div className="">
            <img src={image} className="img"></img>
          </div>
          <div className="login">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              />
            <br />
            <input
              type="password"
              password="username"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              />
            <br />
            <span className="user-span">
              <img src={image1} className="info" />
              Your password that will insantly log you In
            </span>
            <button className="go">Login</button>
            <p>OR</p>
          </div>
          <div className="button-container">
            <button className="get">
              <img src={image2} className="devIcon" />
              Get your new device now!
            </button>
            <br />
            <div className="sidebyside">
              <button name="submit" type="submit">
                <img src={image3} className="devIcon3" /> Support
              </button>
              <button className="forgot" name="submit" type="submit">
                <img src={image4} className="devIcon3"></img>
                Forgot password?
              </button>
            </div>
          </div>
          <div className="Agree">
            <span>By continuing you are agreeing to our</span>
            <span>Terms od Service,Privacy policy,Content Policy</span>
          </div>
        </div>
      </div>

      </form>
    </>
  );
};
export default LoginForm;
