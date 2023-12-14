import React, { useState } from "react";
import { Link } from "react-router-dom";

import newQuery from "./newQuery";

const Add_Query_page = () => {
  return (
    <div className="for_footer_color" id="askQuery_container">
      <div id="askQuery_container_header">
        Welcome to QuireFlow: Your Gateway to Seamless Queries
      </div>
      <div id="askQuery_container_desc">
        At QuireFlow, we simplify the way you handle queries and feedback. Our
        platform empowers you to effortlessly manage and respond to user
        inquiries, streamlining communication and fostering a more connected and
        responsive environment. With intuitive features and a user-friendly
        interface, QuireFlow is your go-to solution for effective query
        management. Explore the possibilities, enhance communication, and unlock
        the potential for growth with QuireFlow.
      </div>
      <Link to="/add_query">
        <div id="askQuery_container_leftPart">
          <div id="askQuery_container_leftPart_realtitle">ADD YOUR QUERY</div>
        </div>{" "}
      </Link>
    </div>
  );
};

export default Add_Query_page;
