import React, {  useState, useEffect} from "react";

//import "./style.css";
import { Link } from 'react-router-dom';
import axios from "axios";

// old register code, needs to eventually be updated


function Form() {
  // console.log(props.userInfo)
// const [userState, setUserState] = useState({
//     username: "",
//     password: "", 
//     isLoggedIn: 0
// });
const [userName, setUserName] = useState("");
const [passWord, setPassword] = useState("");

  // Setting the component's initial state
  

 
  function handleUserChange (event) {

    setUserName(event.target.value);
    // if (event.target.name === "password") {
    //   setFormState({password: event.target.value})
    // } if (event.target.name === 'username') {
    //   setFormState({username: event.target.value})
    // }
    // console.log(formState)
    console.log(userName);
  };

  function handlePasswordChange (event) {
    setPassword(event.target.value);
    console.log(passWord);
  }

  function handleFormSubmit (event) {
    // console.log(userName.match.params.id)
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    
    const newUser = {
      username: userName, 
      isLoggedIn: 1 
    }

    localStorage.setItem("newUser", JSON.stringify(newUser));

    // console.log(formState);
    // context.username.set(this.state.username)
    // context.isLoggedIn.set(this.state.isLoggedIn);
    axios
      .post("http://localhost:3002/api/appUsers", {
        username: userName,
        password: passWord
      })
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        // props.userInfo.username = formState.username;
        // props.userInfo.isLoggedIn = 1;
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
                  Register to save time waiting in line.
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
                      // onChange={(e) => setFormState({password: e.target.value})}
                      placeholder="Password"
                    ></input>
                  </fieldset>
                </form>
                <p>Don't have an account? You can <Link
              to="/login"
              className={
                window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Log in
            </Link></p>
                <button
                  className="btn-secondary"
                  onClick={handleFormSubmit}
                >
                  <Link to="/newsfeed">Sign Up</Link>
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
                {/* User: {formState.userInfo}
                Is logged in: {formState.isLoggedIn} */}
              </div>
        </section>
        </>
    );
}

export default Form;
