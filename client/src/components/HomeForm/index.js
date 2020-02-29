import React from "react";

function HomeForm() {
  return (
        <section id="banner">
          <img src="images/1920X900.jpg" alt="iPhone" className="img-responsive" />
          <div className="container">
            <div className="sign-up-form">
              <a href="index.html" className="logo"><img src="images/logo.png" alt="BuzzKillr" /></a>
              <div className="line-divider" />
              <div className="form-wrapper">
                <p className="signup-text">Sign up to save time by cutting lines.</p>
                <form action="#">
                  <fieldset className="form-group">
                    <input type="text" className="form-control" id="example-name" placeholder="Enter name" />
                  </fieldset>
                  <fieldset className="form-group">
                    <input type="email" className="form-control" id="example-email" placeholder="Enter email" />
                  </fieldset>
                  <fieldset className="form-group">
                    <input type="password" className="form-control" id="example-password" placeholder="Enter a password" />
                  </fieldset>
                </form>
                <p>By signing up you agree to the terms &amp; conditions.</p>
                <button className="btn-secondary">Sign Up</button>
              </div>
              <a href="index-register.html">Already have an account?</a>
              <img className="form-shadow" src="images/bottom-shadow.png" alt="" />
            </div>
            <svg className="arrows hidden-xs hidden-sm">
              <path className="a1" d="M0 0 L30 32 L60 0" />
              <path className="a2" d="M0 20 L30 52 L60 20" />
              <path className="a3" d="M0 40 L30 72 L60 40" />
            </svg>
          </div>
        </section>
      );
    }

  export default HomeForm;