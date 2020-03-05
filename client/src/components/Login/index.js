import React, {  useState, useEffect} from "react";

//import "./style.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import NewsFeed from "../../pages/newsfeed";

function Form() {
const [userName, setUserName] = useState("");
const [passWord, setPassword] = useState("");

 // right now, this code is set up to function for how the register page should really work. 
 //once it works, it needs to be switched.
  function handleUserChange (event) {

    setUserName(event.target.value);
    console.log(userName);
  };

  function handlePasswordChange (event) {
    setPassword(event.target.value);
    console.log(passWord);
  }

  function handleFormSubmit (event) {
    
    event.preventDefault();
    
    const newUser = {
      username: userName, 
      isLoggedIn: 1 
    }

    localStorage.setItem("newUser", JSON.stringify(newUser));

    axios
    .get(`http://localhost:3002/api/appUsers/sargissy223`)
    .then(res => {
      console.log(res.data)
      if (res.data !== null) {
        alert('This username already in use. Please choose another.')
      }
      else if (res.data === null) {
        console.log('hi')
        axios 
        .post(`http://localhost:3002/api/appUsers`, {
          username: userName, 
          password: passWord
        })
        .then(res => {
            })
            .catch(error => {
              console.log(error);
            });
      }
    })  
  };

 
    return (
      <>
        <section id="banner">
          <div className="container">
            <div className="sign-up-form">
              <div className="line-divider"></div>
              <div className="form-wrapper">
                <p className="signup-text">
                  Log in to save time waiting in line.
                </p>
                <form className="form" action="#">
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="example-name"
                      value={userName}
                      name="username"
                      onChange={handleUserChange}
                      placeholder="username"
                    ></input>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      id="example-password"
                      value={passWord}
                      name="password"
                      onChange={handlePasswordChange}
                      placeholder="Password"
                    ></input>
                  </fieldset>
                </form>
                <p>Don't have an account? You can <Link
              to="/register"
              className={
                window.location.pathname === "/register"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Register
            </Link></p>
                <button
                  className="btn-secondary"
                  onClick={handleFormSubmit}
                >
                  <Link
              to="/register"
              className={
                window.location.pathname === "/newsfeed"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
                  Sign Up</Link>
                </button>
              </div>

            </div>
          </div>
            <div>
              </div>
        </section>
        </>
    );
}

export default Form;
