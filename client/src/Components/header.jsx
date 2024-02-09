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
        console.log("clicked");
        if (hamburgerBox.current.style.height == "0rem") {
          hamburgerBox.current.style.height = "10rem";
        } else {
          hamburgerBox.current.style.height = "0rem";
        }
      };
    }

    if (bottomBoxLogout.current) {
      bottomBoxLogout.current.onclick = () => {
        console.log("logout clicked");
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        alert("Logout successfull");
        navigate("/");
      };
    }
  }, []);
  return (
    <>
      {localStorage.getItem("token") === null ? (
        <>
          <div className="for_footer_color" id="header_container">
            <div id="header_container_logo">
              <Link to="/">
                {" "}
                <img id="my_logo" src="/Images/my_favicon.ico" />
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

            {/* {localStorage.getItem("userName") === null ? ( */}
            <Link
              to="/authentication"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div id="header_container_account_logo">Sign Up</div>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="for_footer_color" id="header_container">
            <div id="header_container_logo">
              <Link to="/">
                {" "}
                <img id="my_logo" src="/Images/my_favicon.ico" />
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

            <div id="header_container_accountHamburger" ref={accountCircle}>
              <img
                style={{
                  borderRadius: "50%",
                  marginTop: "-10px",
                  marginLeft: "-3px",
                }}
                height="60"
                width="55"
                src="/Images/whatsapp-dp-for-boys-cartoon-7.jpeg"
                alt="dp"
              />
            </div>
          </div>
          <div
            id="header_container_accountHamburger_bottomBox"
            ref={hamburgerBox}
          >
            <div id="header_container_accountHamburger_bottomBox_name">
              {localStorage.getItem("userName")}
              {/* Gaurav Gautam */}
            </div>
            <div id="header_container_accountHamburger_bottomBox_profile">
              My profile
            </div>
            <div
              id="header_container_accountHamburger_bottomBox_logout"
              ref={bottomBoxLogout}
            >
              Logout
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
