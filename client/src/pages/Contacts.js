import React from "react";

function Contacts() {
  return (
    <>
      <div className="google-maps">
        <div id="map" className="map contact-map"></div>
      </div>
      <div id="page-contents">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="contact-us">
                <div className="row">
                  <div className="col-md-8 col-sm-7">
                    <h4 className="grey">Leave a Message</h4>
                    <form className="contact-form">
                      <div className="form-group">
                        <i className="icon ion-person"></i>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter your name *"
                          required="required"
                          data-error="Name is required."
                        />
                      </div>
                      <div className="form-group">
                        <i className="icon ion-email"></i>
                        <input
                          id="contact-email"
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email *"
                          required="required"
                          data-error="Email is required."
                        />
                      </div>
                      <div className="form-group">
                        <i className="icon ion-android-call"></i>
                        <input
                          id="contact-phone"
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Enter your phone *"
                          required="required"
                          data-error="Phone is required."
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          id="form-message"
                          name="message"
                          className="form-control"
                          placeholder="Leave a message for us *"
                          rows="4"
                          required="required"
                          data-error="Please,leave us a message."
                        ></textarea>
                      </div>
                    </form>
                    <button className="btn-primary">Send a Message</button>
                  </div>
                  <div className="col-md-4 col-sm-5">
                    <h4 className="grey">Contact</h4>
                    <div className="reach">
                      <span className="phone-icon">
                        <i className="icon ion-android-call"></i>
                      </span>
                      <p>+1(312)523-5555</p>
                    </div>
                    <div className="reach">
                      <span className="phone-icon">
                        <i className="icon ion-email"></i>
                      </span>
                      <p>info@buzzkillrz</p>
                    </div>
                    <div className="reach">
                      <span className="phone-icon">
                        <i className="icon ion-ios-location"></i>
                      </span>
                      <p>Northwestern University</p>
                    </div>
                    <ul className="list-inline social-icons">
                      <li>
                        <a href="#">
                          <i className="icon ion-social-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon ion-social-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon ion-social-googleplus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon ion-social-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon ion-social-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
