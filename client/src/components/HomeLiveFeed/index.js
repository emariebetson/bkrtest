import React from "react";

function HomeLiveFeed() {
  return (
        <section id="live-feed">
          <div className="container wrapper">
            <h1 className="section-title slideDown">live feed</h1>
            <ul className="online-users list-inline slideUp">
              {/* <li><a href="#" title="Alexis Clark"><img src="http://placehold.it/300x300" alt="" className="img-responsive profile-photo" /><span className="online-dot" /></a></li> */}
              {/* <li><a href="#" title="James Carter"><img src="http://placehold.it/300x300" alt="" className="img-responsive profile-photo" /><span className="online-dot" /></a></li> */}
              {/* <li><a href="#" title="Robert Cook"><img src="http://placehold.it/300x300" alt="" className="img-responsive profile-photo" /><span className="online-dot" /></a></li> */}
              {/* <li><a href="#" title="Richard Bell"><img src="http://placehold.it/300x300" alt="" className="img-responsive profile-photo" /><span className="online-dot" /></a></li> */}
              {/* <li><a href="#" title="Anna Young"><img src="http://placehold.it/300x300" alt="" className="img-responsive profile-photo" /><span className="online-dot" /></a></li> */}
              {/* <li><a href="#" title="Julia Cox"><img src="http://placehold.it/300x300" alt="" className="img-responsive profile-photo" /><span className="online-dot" /></a></li> */}
            </ul>
            <h2 className="sub-title">see what’s happening now</h2>
            <div className="row">
              <div className="col-md-4 col-sm-6 col-md-offset-2">
                <div className="feed-item">
                  <img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo-sm" />
                  <div className="live-activity">
                    {/* <p><a href="#" className="profile-link">Sarah</a> just posted from Happy Camper</p> */}
                    <p className="text-muted">20 Secs ago</p>
                  </div>
                </div>
                <div className="feed-item">
                  <img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo-sm" />
                  <div className="live-activity">
                    {/* <p><a href="#" className="profile-link">John</a> Published a post from The Underground</p> */}
                    <p className="text-muted">1 min ago</p>
                  </div>
                </div>
                <div className="feed-item">
                  <img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo-sm" />
                  <div className="live-activity">
                    {/* <p><a href="#" className="profile-link">Julia</a> Updated her status from some bar in Old Town</p> */}
                    <p className="text-muted">5 mins ago</p>
                  </div>
                </div>
                <div className="feed-item">
                  <img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo-sm" />
                  <div className="live-activity">
                    {/* <p><a href="#" className="profile-link">Sophia</a> Shared a bouncer review at The Dueling Pianos</p> */}
                    <p className="text-muted">10 mins ago</p>
                  </div>
                </div>
                <div className="feed-item">
                  <img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo-sm" />
                  <div className="live-activity">
                    {/* <p><a href="#" className="profile-link">Linda</a> just posted a line update at The Violet Hour</p> */}
                    <p className="text-muted">20 mins ago</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="feed-item">
                  <img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo-sm" />
                  <div className="live-activity">
                    {/* <p><a href="#" className="profile-link">Nora</a> Shared a special from Sluggers</p> */}
                    <p className="text-muted">22 mins ago</p>
                  </div>
                </div>
                <div className="feed-item">
                  <img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo-sm" />
                  <div className="live-activity">
                    {/* <p><a href="#" className="profile-link">Addison</a> Shared a cover update from Tao</p> */}
                    <p className="text-muted">23 mins ago</p>
                  </div>
                </div>
                <div className="feed-item">
                  <img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo-sm" />
                  <div className="live-activity">
                    {/* <p><a href="#" className="profile-link">Diana</a> Posted a line update from John Barleycorn (RIP)</p> */}
                    <p className="text-muted">27 mins ago</p>
                  </div>
                </div>
                <div className="feed-item">
                  <img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo-sm" />
                  <div className="live-activity">
                    {/* <p><a href="#" className="profile-link">Sarah</a> Shared friend's line update from Joe's on Weed Street</p> */}
                    <p className="text-muted">30 mins ago</p>
                  </div>
                </div>
                <div className="feed-item">
                  <img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo-sm" />
                  <div className="live-activity">
                    {/* <p><a href="#" className="profile-link">Emma</a> Shared a special from Beauty Bar</p> */}
                    <p className="text-muted">33 mins ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

  export default HomeLiveFeed;