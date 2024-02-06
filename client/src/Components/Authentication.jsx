import React from "react";

const Authentication = () => {
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
          <form id="authentication_container_signUp_details">
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
                />
              </div>
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
        <form id="authentication_container_login_details">
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
              ></input>
            </div>
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
