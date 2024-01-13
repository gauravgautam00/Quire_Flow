import React, { useState } from "react";
import { Link } from "react-router-dom";

import newQuery from "./New_Query";

const Add_Query_page = () => {
  return (
    <div className="for_footer_color" id="askQuery_container">
      <div id="askQuery_container_header">
        Welcome to QuireFlow: Your Gateway to Seamless Queries
      </div>
      <div id="askQuery_container_desc">
        QuireFlow revolutionizes communication by providing an anonymous query
        feature. Seamlessly raise questions or share feedback without revealing
        your identity. Enjoy the freedom to express yourself openly, fostering a
        candid and constructive environment. Our platform ensures your queries
        are treated with utmost privacy, empowering you to engage without
        constraints. Experience the liberating essence of anonymous interaction,
        making QuireFlow your go-to platform for open and confidential
        communication. Join us today and unlock a world of unrestricted
        expression.
      </div>
      <Link to="/new_query" style={{ textDecoration: "none" }}>
        <div id="askQuery_container_leftPart">
          <div id="askQuery_container_leftPart_realtitle">ADD YOUR QUERY</div>
        </div>{" "}
      </Link>
    </div>
  );
};

export default Add_Query_page;
