import React from "react";

function HomeDownload() {
  return (
        <section id="app-download">
          <div className="container wrapper">
            <h1 className="section-title slideDown">download</h1>
            <ul className="app-btn list-inline slideUp">
              <li><button className="btn-secondary"><img src="images/app-store.png" alt="App Store" /></button></li>
              <li><button className="btn-secondary"><img src="images/google-play.png" alt="Google Play" /></button></li>
            </ul>
            <h2 className="sub-title">stay connected anytime, anywhere</h2>
            <img src="images/1600.jpg" alt="iPhone" className="img-responsive" />
          </div>
        </section>
      );
    }

  export default HomeDownload;