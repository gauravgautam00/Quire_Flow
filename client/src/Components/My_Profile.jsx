import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const My_Profile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState();
  const logOut = () => {
    if (localStorage.getItem("token") != null) {
      console.log("come");
      localStorage.clear();
      navigate("/");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("anonyKey")) {
      fetch(
        `https://quire-flow-4.onrender.com/profile?anonyKey=${localStorage.getItem(
          "anonyKey"
        )}`
      )
        // fetch(
        //   `http://localhost:2300/profile?anonyKey=${localStorage.getItem(
        //     "anonyKey"
        //   )}`
        // )
        .then((res) => res.json())
        .then((response) => {
          setProfileData(response.user[0]);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  return (
    <>
      {localStorage.getItem("anonyKey") !== null ? (
        <>
          <div id="my_profile_container">
            <div id="my_profile_container_title">My profile</div>
            {!profileData ? (
              "Loading"
            ) : (
              <>
                <div
                  id="my_profile_container_name"
                  className="my_profile_container_childClass"
                >
                  Name - {profileData?.name}
                </div>
                <div
                  id="my_profile_container_email"
                  className="my_profile_container_childClass"
                >
                  Email - {profileData?.email}
                </div>
                <div
                  id="my_profile_container_organisation"
                  className="my_profile_container_childClass"
                >
                  Organisation - {profileData?.organisation}
                </div>
                <div
                  id="my_profile_container_department"
                  className="my_profile_container_childClass"
                >
                  Department - {profileData?.department}
                </div>
                <div
                  id="my_profile_container_anonyKey"
                  className="my_profile_container_childClass"
                >
                  My anonyKey - {profileData?.anonyKey}
                </div>
                <button
                  id="logOut_button"
                  onClick={logOut}
                  className="my_profile_container_childClass"
                >
                  Log out
                </button>
              </>
            )}
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
