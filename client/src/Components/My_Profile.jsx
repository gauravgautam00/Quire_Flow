import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const My_Profile = () => {
  const navigate = useNavigate();
  const logOut = () => {
    if (localStorage.getItem("token") != null) {
      console.log("come");
      localStorage.clear();
      navigate("/");
    }
  };
  return (
    <>
      {localStorage.getItem("anonyKey") !== null ? (
        <>
          <div id="my_profile_container">
            <div id="my_profile_container_title">My profile</div>
            <div id="my_profile_container_anonyKey">
              My anonyKey - {localStorage.getItem("anonyKey")}
            </div>
            <button id="logOut_button" onClick={logOut}>
              Log out
            </button>
          </div>
        </>
      ) : (
        <div>
          Please <Link to="/authentication">Login/SignUp</Link> to see your
          profile
        </div>
      )}
    </>
  );
};

export default My_Profile;
