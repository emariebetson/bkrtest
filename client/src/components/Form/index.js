import React, {  useState, useContext} from "react";

//import "./style.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import UserContext from "./../../utils/UserContext";
import NewsFeed from "../../pages/newsfeed";

function Form(props) {
const [userState, setUserState] = useState({
    username: "",
    password: "", 
    isLoggedIn: 0
});
const [formState, setFormState] = useState({
  username: "",
  password: "",
  isLoggedIn: 0
})

  // Setting the component's initial state
  

 
  function handleInputChange (event) {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    setFormState({
      username: value, 
      password: value,
      isLoggedIn: 1
    });
  };

  function handleFormSubmit (event) {

    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // context.username.set(this.state.username)
    // context.isLoggedIn.set(this.state.isLoggedIn);
    axios
      .post("http://localhost:3001/api/register", {
        username: formState.username,
        password: formState.password
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        props.userInfo.username = formState.username;
        props.userInfo.isLoggedIn = 1;
        // setUserState({
        //   username: res.username,
        //   isLoggedIn: 1
        // })
      })
      .catch(error => {
        console.log(error);
      });
  };

    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <>
        <section id="banner">
          {/* <img
            src={require("../images/1920X900.jpg")}
            alt="iPhone"
            className="img-responsive"
         />*/}
          <div className="container">
            <div className="sign-up-form">
              {/* <img src={require("../images/logo.png")} alt="BuzzKillr" />*/}
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
                      value={formState.username}
                      name="username"
                      onChange={handleInputChange}
                      placeholder="username"
                    ></input>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      id="example-password"
                      value={formState.password}
                      name="password"
                      onChange={handleInputChange}
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
                  Sign Up
                </button>
              </div>
              {/* <img
                className="form-shadow"
                src={require("../images/bottom-shadow.png")}
                alt=""
              /> */}
            </div>
          </div>
            <div>
                User: {userState.username}
                Is logged in: {userState.isLoggedIn}
              </div>
        </section>
        </>
    );
}

export default Form;
