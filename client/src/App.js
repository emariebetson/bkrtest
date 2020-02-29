import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Profile from "./pages/profile";
import BarMap from "./components/map";
import HotBars from "./pages/HotBars";
import SearchBar from "./pages/SearchBar";
import Wrapper from "./components/Wrapper";
import MakePost from "./components/MakePost";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Form} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/map" component={BarMap} />
          <Route exact path="/hotbars" component={HotBars} />
          <Route exact path="/search" component={SearchBar} />

          <MakePost />
        </div>
      </Router>

      <Wrapper />
    </>
  );
}

export default App;
