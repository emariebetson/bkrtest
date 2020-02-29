import React from "react";

const UserContext = React.createContext({
  username: "",
  isLoggedIn: 0
});

export default UserContext;