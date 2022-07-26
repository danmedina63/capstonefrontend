import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-links">
            
      
            <NavLink exact className="navbar-link" activeClassName="selected" to="/">
            Home
            </NavLink>
            <NavLink className="navbar-link" activeClassName="selected" to="/lashes">
            Lashes
            </NavLink>
            <NavLink className="navbar-link" activeClassName="selected" to="/login">
                Login
            </NavLink>
            <NavLink className="navbar-link" activeClassName="selected" to="/contact">
                Contact
            </NavLink>
        </div>
    </div>
    
  );
}