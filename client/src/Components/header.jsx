import React from "react";
import { Link, NavLink } from "react-router-dom";

const header = () => {
  return (
    <div className="for_footer_color" id="header_container">
      <div id="header_container_logo">
        <Link to="/">
          {" "}
          <img
            id="my_logo"
            src="/Images/284280fe2f484eaabc362670e44a9fc4 (1).png"
          />
        </Link>
      </div>

      <div id="header_container_title">Quire Flow</div>
      <div id="header_container_searchBar">
        <input
          type="text"
          id="header_container_input"
          placeholder="Search Queries here"
        />
        <div id="header_container_input_searchIcon">
          <span className="material-symbols-outlined">search</span>
        </div>
      </div>

      <NavLink
        to="/administrative_matter"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div id="header_container_administrativePower">
          Administrative Matter
        </div>
      </NavLink>
      <NavLink
        to="/my_queries"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div id="header_container_myQueries">My Queries</div>{" "}
      </NavLink>
      <div id="header_container_account_logo">SignUp</div>
    </div>
  );
};

export default header;
