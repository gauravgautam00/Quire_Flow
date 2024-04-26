import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Authentication = () => {
  const navigate = useNavigate();
  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [isSignupLoading, setIsSignupLoading] = useState(false);

  const signUpFormSubmit = (e) => {
    e.preventDefault();

    // const { name, email, password, confirmPassword, organisation, department } =
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const organisation = e.target.organisation.value;
    const department = e.target.department.value;
    if (!email) {
      setIsSignupLoading(false);
      alert("Please enter email");
      return;
    }
    if (!password) {
      setIsSignupLoading(false);
      alert("Please enter password");
      return;
    }
    if (!name) {
      setIsSignupLoading(false);
      alert("Please enter name");
      return;
    }
    // console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      alert("Password and Confirm password is not same");
      return;
    }
    setIsSignupLoading(true);
    const curData = {
      name,
      email,
      password,
      organisation,
      department,
    };
    // console.log(curData);

    fetch("https://quire-flow-4.onrender.com/signup", {
      // fetch("http://localhost:2300/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(curData),
    })
      .then(async (res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            throw new Error("Network response was not ok");
          });
        }
        setIsSignupLoading(false);
        return res.json();
      })
      .then((response) => {
        setIsSignupLoading(false);

        // console.log(response);
        localStorage.setItem("token", response.userToken);
        localStorage.setItem("userName", name);
        localStorage.setItem("anonyKey", response.anonyKey);
        alert("Sign up successfull taking you to the home page");
        setIsSignupLoading(false);
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        setIsSignupLoading(false);

        console.log("Some error occurred while signing up", err);
        alert(
          "Some error occurred while login . Please try again later",
          err.message
        );
      });
  };

  const loginFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email) {
      setIsLoginLoading(false);
      alert("Please enter email");
      return;
    }
    if (!password) {
      setIsLoginLoading(false);
      alert("Please enter password");
      return;
    }
    setIsLoginLoading(true);
    const data = {
      email,
      password,
    };
    // console.log(JSON.stringify(data));
    fetch("https://quire-flow-4.onrender.com/login", {
      // fetch("http://localhost:2300/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            throw new Error("Network response was not ok");
          });
        }
        setIsLoginLoading(false);
        return res.json();
      })
      .then((response) => {
        setIsLoginLoading(false);
        // console.log(response);
        localStorage.setItem("token", response.userToken);
        localStorage.setItem("userName", response.User.name);

        localStorage.setItem("anonyKey", response.anonyKey);
        alert("Successfully logged in");
        setIsLoginLoading(false);
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.error("Error:", err);
        setIsLoginLoading(false);
        alert(
          "Some error occurred while login . Please try again later",
          err.message
        );
      });
  };

  return (
    <div id="authentication_container">
      <div id="authentication_container_signUp">
        <div id="authentication_container_signUp_heading">
          <img
            id="authentication_container_signUp_heading_image"
            src="/Images/my_favicon.ico"
            alt="logo"
          ></img>
          <div id="authentication_container_signUp_heading_title">Sign up</div>
          <div id="authentication_container_signUp_heading_desc">
            Enter your details below to create your account and get started
          </div>
        </div>
        <div>
          <form
            id="authentication_container_signUp_details"
            onSubmit={signUpFormSubmit}
          >
            <div
              class="authentication_container_signUp_detailsChild"
              id="authentication_container_signUp_details_name"
            >
              <div id="authentication_container_signUp_details_name_first">
                Full Name
              </div>
              <div id="authentication_container_signUp_details_name_second">
                <input
                  class="authentication_container_signUp_detailsChild_input"
                  type="text"
                  placeholder="Enter..."
                  name="name"
                />
              </div>
            </div>
            <div
              class="authentication_container_signUp_detailsChild"
              id="authentication_container_signUp_details_email"
            >
              <div id="authentication_container_signUp_details_email_first">
                Email
              </div>
              <div id="authentication_container_signUp_details_email_second">
                <input
                  class="authentication_container_signUp_detailsChild_input"
                  type="text"
                  placeholder="Enter..."
                  name="email"
                />
              </div>
            </div>
            <div
              class="authentication_container_signUp_detailsChild"
              id="authentication_container_signUp_details_org"
            >
              <div id="authentication_container_signUp_details_org_first">
                Your organisation
              </div>
              <div id="authentication_container_signUp_details_org_second">
                <input
                  class="authentication_container_signUp_detailsChild_input"
                  type="text"
                  placeholder="Enter..."
                  name="organisation"
                />
              </div>
            </div>
            <div
              class="authentication_container_signUp_detailsChild"
              id="authentication_container_signUp_details_dep"
            >
              <div id="authentication_container_signUp_details_dep_first">
                Your department
              </div>
              <div id="authentication_container_signUp_details_dep_second">
                <input
                  class="authentication_container_signUp_detailsChild_input"
                  type="text"
                  placeholder="Enter..."
                  name="department"
                />
              </div>
            </div>
            <div
              class="authentication_container_signUp_detailsChild"
              id="authentication_container_signUp_details_password"
            >
              <div id="authentication_container_signUp_details_password_first">
                Password
              </div>
              <div id="authentication_container_signUp_details_password_second">
                <input
                  id="authentication_container_signUp_detailsChild_input_password"
                  class="authentication_container_signUp_detailsChild_input"
                  type="password"
                  placeholder="Enter..."
                  name="password"
                />
              </div>
            </div>
            <div
              class="authentication_container_signUp_detailsChild"
              id="authentication_container_signUp_details_confirmPassword"
            >
              <div id="authentication_container_signUp_details_confirmPassword_first">
                Confirm Password
              </div>
              <div id="authentication_container_signUp_details_confirmPassword_second">
                <input
                  id="authentication_container_signUp_detailsChild_input_confirmPassword"
                  class="authentication_container_signUp_detailsChild_input"
                  type="password"
                  placeholder="
                  Enter..."
                  name="confirmPassword"
                />
              </div>
            </div>
            <div className="loadingAuthentication" id="loading_signup">
              {isSignupLoading ? "Loading..." : ""}
            </div>

            <button
              id="authentication_container_signUp_details_but"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div id="authentication_container_login">
        <div id="authentication_container_login_heading">
          <div id="authentication_container_login_heading_image">
            <img
              id="authentication_container_login_heading_imageReal"
              src="/Images/my_favicon.ico"
              alt="logo"
            />
          </div>
          <div id="authentication_container_login_heading_title">
            Welcome Back
          </div>
          <div id="authentication_container_login_heading_desc">
            Glad to see you again 👋 Login To your account below
          </div>
          {/* <div id="authentication_container_login_heading_google">
            Continue with Google
          </div> */}
        </div>
        <form
          id="authentication_container_login_details"
          onSubmit={loginFormSubmit}
        >
          <div id="authentication_container_login_details_email">
            <div id="authentication_container_login_details_email_first">
              Email
            </div>
            <div id="authentication_container_login_details_email_second">
              <input
                id="authentication_container_login_details_email_input"
                type="text"
                placeholder="
                Enter email..."
                name="email"
              ></input>
            </div>
          </div>

          <div id="authentication_container_login_details_password">
            <div id="authentication_container_login_details_password_first">
              Password
            </div>
            <div id="authentication_container_login_details_password_second">
              <input
                id="authentication_container_login_details_password_input"
                type="text"
                placeholder="Enter password..."
                name="password"
              ></input>
            </div>
          </div>
          <div className="loadingAuthentication" id="loading_login">
            {isLoginLoading ? "Loading..." : ""}
          </div>
          <button id="authentication_container_login_details_but" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
