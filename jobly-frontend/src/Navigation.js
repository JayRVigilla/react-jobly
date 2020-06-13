import React from "react";
import { NavLink } from "react-router-dom";
import {Nav} from "reactstrap"
import "./Navigation.css";

function Navigation() {


  return (
    <Nav className="nav">
      <div className="logo">
      <NavLink exact to="/" className="link">
          <b>Jobly</b>
      </NavLink>
      </div>

      <div className="links">
        <NavLink exact to="/companies" className="link">
          Companies
      </NavLink>

        <NavLink exact to="/jobs" className="link">
          Jobs
      </NavLink>

        <NavLink exact to="/profile" className="link">
          Profile
      </NavLink>

        <NavLink exact to="/login" className="link">
          {localStorage._token && localStorage.currentUser ? "LogOut" : "Login"}
        </NavLink>
      </div>
    </Nav>
  )
}

export default Navigation;