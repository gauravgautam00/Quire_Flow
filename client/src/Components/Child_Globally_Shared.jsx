import React from "react";
import { Link } from "react-router-dom";

const Child_Globally_Shared = (props) => {
  return (
    <div className="for_footer_color" id="child_globally_shared_container">
      <div id="child_globally_shared_container_orgName">
        <span className="child_globally_shared_container_bold">
          Organisation Name
        </span>{" "}
        - {props.organisation}
      </div>
      <div id="child_globally_shared_container_departmentName">
        <span className="child_globally_shared_container_bold">
          Department{" "}
        </span>
        - {props.department}
      </div>

      <div id="publically_shared_container_expandMore">
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to={`/public_queries/query/${props.id}`}
        >
          Expand
        </Link>

        <span
          id="publically_shared_container_expandLink"
          class="material-symbols-outlined"
        >
          pan_zoom
        </span>
      </div>

      <div id="child_globally_shared_container_query">
        <div id="child_globally_shared_container_query_title">
          {props.title}
        </div>
        <div id="child_globally_shared_container_query_description">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default Child_Globally_Shared;
