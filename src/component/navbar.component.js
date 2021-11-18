import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <NavLink to="/" className="navbar-brand">
          Exercise Tracker
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <NavLink to="/" className="nav-link">
                Exercises
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/create/" className="nav-link">
                Create Exercise Log
              </NavLink>
            </li>

            <li className="navbar-item">
              <NavLink to="/user" className="nav-link">
                Create User
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
