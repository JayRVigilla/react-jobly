import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {


  return (
    <nav className="Navigation navbar navbar-light bg-light">
      <NavLink exact to="/">
        Jobly
            </NavLink>
      <NavLink exact to="/companies">
        Companies
            </NavLink>
      <NavLink exact to="/jobs">
        Jobs
            </NavLink>
      <NavLink exact to="/profile">
        Profile
            </NavLink>
      <NavLink exact to="/login">
        { localStorage._token ? "LogOut" : "Login"}
      </NavLink>
    </nav>
  )
}

export default Navigation;