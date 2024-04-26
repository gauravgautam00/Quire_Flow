import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useRef } from "react";

const Header = () => {
  const navigate = useNavigate();
  const accountCircle = useRef(null);
  const hamburgerBox = useRef(null);
  const bottomBoxLogout = useRef(null);
  useEffect(() => {
    if (accountCircle.current && hamburgerBox.current) {
      hamburgerBox.current.style.height = "0rem";

      accountCircle.current.onclick = () => {
        // console.log("clicked");
        if (hamburgerBox.current.style.height == "0rem") {
          hamburgerBox.current.style.height = "10rem";
        } else {
          hamburgerBox.current.style.height = "0rem";
        }
      };
    }

    if (bottomBoxLogout.current) {
      bottomBoxLogout.current.onclick = () => {
        // console.log("logout clicked");
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        alert("Logout successfull");
        navigate("/");
      };
    }
  }, []);
  return (
    <>
      <div className="for_footer_color" id="header_container">
        <div id="header_container_first">
          <div id="header_container_logo">
            <Link to="/">
              <img id="my_logo" src="/Images/my_favicon.ico" />
            </Link>
          </div>
          <div id="header_container_title">Quire Flow</div>
        </div>
        <div id="header_container_second">
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
          {localStorage.getItem("token") === null ? (
            <Link
              to="/authentication"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="header_container_account_logo">Sign Up</div>
            </Link>
          ) : (
            <>
              <Link
                to="/my_profile"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div id="header_container_myProfile">My Profile</div>
              </Link>
              <div id="header_container_name">
                {localStorage.getItem("userName")}
              </div>
            </>
          )}
        </div>
      </div>

      {/* {localStorage.getItem("token") !== null && (
        <div
          id="header_container_accountHamburger_bottomBox"
          ref={hamburgerBox}
        >
          <div id="header_container_accountHamburger_bottomBox_name">
            {localStorage.getItem("userName")}
            {/* Gaurav Gautam */}
      {/* </div>
          <Link
            to="/my_profile"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div id="header_container_accountHamburger_bottomBox_profile">
              My profile
            </div>
          </Link>
          <div
            id="header_container_accountHamburger_bottomBox_logout"
            ref={bottomBoxLogout}
          >
            Logout
          </div>
        </div>
      )} */}
    </>
  );
};

export default Header;
