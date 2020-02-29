import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Profile from "./pages/profile";
import NewsFeed from "./pages/newsfeed";
import HotBars from "./pages/HotBars";
import SearchBar from "./pages/SearchBar";
import Wrapper from "./components/Wrapper";
import MakePost from "./components/MakePost";
import HomeFeatures from "./components/HomeFeatures";
import HomeDownload from "./components/HomeDownload";
import HomeFacts from "./components/HomeFacts";
import HomeLiveFeed from "./components/HomeLiveFeed";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Form} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/newsfeed" component={NewsFeed} />
          <Route exact path="/hotbars" component={HotBars} />
          <Route exact path="/search" component={SearchBar} />
        </div>
      </Router>
      <div>
        <HomeLiveFeed />
        <Footer />
        </div>
    </>
  );
}

export default App;
