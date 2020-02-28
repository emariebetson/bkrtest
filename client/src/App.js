import React from "react";
import Form from "./components/Form";
import NavBar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import MakePost from "./components/MakePost";

function App() {
  return (
    <>
    <Form />
    {/* <NavBar /> */}
    <MakePost/>
    <Wrapper />
    </>
  )
}

export default App;
