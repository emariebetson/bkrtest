import React from "react";

function HomeFeatures() {
  return (
        <section id="features">
          <div className="container wrapper">
            <h1 className="section-title slideDown">|</h1>
            <div className="row slideUp">
              <div className="feature-item col-md-2 col-sm-6 col-xs-6 col-md-offset-2">
                <div className="feature-icon"><i className="icon ion-images" /></div>
                <a href="newsfeed.html"><h3>Live Line Feed</h3></a>
              </div>
              <div className="feature-item col-md-2 col-sm-6 col-xs-6">
                <div className="feature-icon"><i className="icon ion-person-add" /></div>
                <a href="newsfeed-people-nearby.html.html"><h3>Make Friends</h3></a>
              </div>
              <div className="feature-item col-md-2 col-sm-6 col-xs-6">
                <div className="feature-icon"><i className="icon ion-chatbox-working" /></div>
                <a href="newsfeed-messages.html.html"><h3>Specials &amp; Cover</h3></a>
              </div>
              <div className="feature-item col-md-2 col-sm-6 col-xs-6">
                <div className="feature-icon"><i className="icon ion-compose" /></div>
                <a href="newsfeed.html"><h3>Submit Updates</h3></a>
              </div>
            </div>
            <h2 className="sub-title">find buzzkillrz like you</h2>
            <div id="incremental-counter" data-value={101242} />
            <p>People Are Ready to Sign Up with Your Investment :)</p>
            <img src="images/face-map.png" alt="" className="img-responsive face-map slideUp hidden-sm hidden-xs" />
          </div>
        </section>
      );
    }

  export default HomeFeatures;