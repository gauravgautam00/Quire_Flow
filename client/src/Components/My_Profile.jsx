import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const My_Profile = () => {
  return (
    <>
      {localStorage.getItem("anonyKey") !== null ? (
        <>
          <div>hey my profile page here</div>

          <div>My anonyKey - {localStorage.getItem("anonyKey")}</div>
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
