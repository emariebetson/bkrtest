import React from "react";

const UserContext = React.createContext({
  currentUser: "",
  isLoggedIn: true
});

export default UserContext;