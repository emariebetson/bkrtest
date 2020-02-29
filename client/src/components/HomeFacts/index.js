import React from "react";

function HomeFacts() {
  return (
        <section id="site-facts">
          <div className="container wrapper">
            <div className="circle">
              <ul className="facts-list">
                <li>
                  <div className="fact-icon"><i className="icon ion-ios-people-outline" /></div>
                  <h3 className="text-white">3,111,111</h3>
                  <p>People ready to register</p>
                </li>
                <li>
                  <div className="fact-icon"><i className="icon ion-images" /></div>
                  <h3 className="text-white">21,012,202</h3>
                  <p>Posts to publish</p>
                </li>
                <li>
                  <div className="fact-icon"><i className="icon ion-checkmark-round" /></div>
                  <h3 className="text-white">41,242</h3>
                  <p>People online</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      );
    }

  export default HomeFacts;