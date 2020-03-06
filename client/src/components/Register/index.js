import React, { Component } from "react";
//import "./style.css";
import axios from "axios";

class Form extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.username) {
      alert("Fill out your username please!");
    } else if (this.state.password.length < 6) {
      alert(`Choose a more secure password ${this.state.username}`);
    }
    console.log(this.state);
    axios
      .post("http://localhost:3001/api/register", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
          username: "",
          password: ""
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
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
                Sign up to save time by cutting lines. 
                </p>
                <form className="form" action="#">
                  <fieldset className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="example-name"
                      value={this.state.username}
                      name="username"
                      onChange={this.handleInputChange}
                      placeholder="username"
                    ></input>
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      id="example-password"
                      value={this.state.password}
                      name="password"
                      onChange={this.handleInputChange}
                      placeholder="Password"
                    ></input>
                  </fieldset>
                </form>
                <p>By signing up you agree to the terms & conditions.</p>
                <p>Already have an account?</p>
                <button
                  className="btn-secondary"
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </button>
              </div>
              {/* <img
                className="form-shadow"
                src={require("../images/bottom-shadow.png")}
                alt=""
              /> */}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Form;
