import React from "react";
import Child_Globally_Shared from "./Child_Globally_Shared";
import Public_Queries_json from "./Public_Queries.json";

const Globally_Shared = () => {
  return (
    <div className="for_footer_color" id="publically_shared_container">
      <div id="publically_shared_container_title">Public Queries</div>

      {/* left part */}
      {/* /left part */}
      {/* left part */}
      <div id="publically_shared_container_left">
        <div id="publically_shared_container_left_selectOrganisation">
          Select Organisation
        </div>
        <div id="publically_shared_container_left_selectOrganisation_expand"></div>
        <div id="publically_shared_container_left_selectDepartment">
          Select Department
        </div>
        <div id="publically_shared_container_left_selectDepartment_expand"></div>
        <input
          id="publically_shared_container_left_specific"
          type="text"
          placeholder="Search for specific string to search for"
        />
      </div>

      {/* right part */}
      {/* right part */}
      {/* right part */}
      <div id="publically_shared_container_right">
        {Public_Queries_json.map((data, index) => {
          return (
            <Child_Globally_Shared
              key={index}
              organisation={data.organisation}
              department={data.department}
              query={data.query}
              uniqueNum={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Globally_Shared;
