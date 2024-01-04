import React, { useRef, useState, useEffect } from "react";
import Child_Globally_Shared from "./Child_Globally_Shared";
import Public_Queries_json from "./Public_Queries.json";

const Globally_Shared = () => {
  const [orgValue, setOrgValue] = useState("All");
  const [depValue, setDepValue] = useState("All");

  const orgExpand = useRef(null);
  const orgExpandBox = useRef(null);
  const orgExpandIcon = useRef(null);
  const depExpand = useRef(null);
  const depExpandBox = useRef(null);
  const depExpandIcon = useRef(null);

  useEffect(() => {
    if (orgExpand.current && orgExpandBox.current && orgExpandIcon.current) {
      orgExpandBox.current.style.height = "0rem";
      console.log("clicked");
      orgExpand.current.onclick = () => {
        if (orgExpandBox.current.style.height == "0rem") {
          orgExpandBox.current.style.height = "13rem";
          orgExpandIcon.current.style.transform = "rotate(-180deg)";
        } else {
          orgExpandBox.current.style.height = "0rem";
          orgExpandIcon.current.style.transform = "rotate(0deg)";
        }
      };
    }

    if (depExpand.current && depExpandBox.current && depExpandIcon.current) {
      depExpandBox.current.style.height = "0rem";
      depExpand.current.onclick = () => {
        if (depExpandBox.current.style.height == "0rem") {
          depExpandBox.current.style.height = "13rem";
          depExpandIcon.current.style.transform = "rotate(-180deg)";
        } else {
          depExpandBox.current.style.height = "0rem";
          depExpandIcon.current.style.transform = "rotate(0deg)";
        }
      };
    }
  }, []);
  return (
    <div className="for_footer_color" id="publically_shared_container">
      <div id="publically_shared_container_title">Public Queries</div>

      {/* left part */}
      {/* /left part */}
      {/* left part */}
      <div id="publically_shared_container_left">
        {/* Organisation */}
        {/* Organisation */}
        {/* Organisation */}
        <div id="publically_shared_container_left_selectOrganisation">
          Select Organisation
        </div>
        <div
          id="publically_shared_container_left_selectOrganisation_expand"
          ref={orgExpand}
        >
          {orgValue}
          <span
            id="publically_shared_container_left_selectOrganisation_expandIcon"
            class="material-symbols-outlined"
            ref={orgExpandIcon}
          >
            expand_more
          </span>
        </div>
        <div
          id="publically_shared_container_left_selectOrganisation_expandBox"
          ref={orgExpandBox}
        >
          <div
            class="publically_shared_container_left_selectOrganisation_expandBoxClass"
            id="publically_shared_container_left_selectOrganisation_expandBox_1"
          >
            Amazon
          </div>
          <div
            class="publically_shared_container_left_selectOrganisation_expandBoxClass"
            id="publically_shared_container_left_selectOrganisation_expandBox_2"
          >
            Google
          </div>
          <div
            class="publically_shared_container_left_selectOrganisation_expandBoxClass"
            id="publically_shared_container_left_selectOrganisation_expandBox_3"
          >
            Microsoft
          </div>
          <div
            class="publically_shared_container_left_selectOrganisation_expandBoxClass"
            id="publically_shared_container_left_selectOrganisation_expandBox_4"
          >
            Apple
          </div>
          <div
            class="publically_shared_container_left_selectOrganisation_expandBoxClass"
            id="publically_shared_container_left_selectOrganisation_expandBox_5"
          >
            Meta
          </div>
          <div
            class="publically_shared_container_left_selectOrganisation_expandBoxClass"
            id="publically_shared_container_left_selectOrganisation_expandBox_6"
          >
            Atlassian
          </div>
          <div
            class="publically_shared_container_left_selectOrganisation_expandBoxClass"
            id="publically_shared_container_left_selectOrganisation_expandBox_7"
          >
            TowerResearch
          </div>
          <div
            class="publically_shared_container_left_selectOrganisation_expandBoxClass"
            id="publically_shared_container_left_selectOrganisation_expandBox_8"
          >
            Zomato
          </div>
          <div
            class="publically_shared_container_left_selectOrganisation_expandBoxClass"
            id="publically_shared_container_left_selectOrganisation_expandBox_9"
          >
            Netspend
          </div>
          <div
            class="publically_shared_container_left_selectOrganisation_expandBoxClass"
            id="publically_shared_container_left_selectOrganisation_expandBox_10"
          >
            All
          </div>
        </div>

        {/* //department */}
        {/* //department */}
        {/* //department */}
        <div id="publically_shared_container_left_selectDepartment">
          Select Department
        </div>
        <div
          id="publically_shared_container_left_selectDepartment_expand"
          ref={depExpand}
        >
          {depValue}
          <span
            id="publically_shared_container_left_selectDepartment_expanIcon"
            class="material-symbols-outlined"
            ref={depExpandIcon}
          >
            expand_more
          </span>
        </div>
        <div
          id="publically_shared_container_left_selectDepartment_expandBox"
          ref={depExpandBox}
        >
          <div
            className="publically_shared_container_left_selectDepartment_expandBoxClass"
            id="publically_shared_container_left_selectDepartment_expandBox1"
          >
            Customer Support
          </div>
          <div
            className="publically_shared_container_left_selectDepartment_expandBoxClass"
            id="publically_shared_container_left_selectDepartment_expandBox2"
          >
            Customer Support
          </div>
          <div
            className="publically_shared_container_left_selectDepartment_expandBoxClass"
            id="publically_shared_container_left_selectDepartment_expandBox3"
          >
            Customer Support
          </div>
          <div
            className="publically_shared_container_left_selectDepartment_expandBoxClass"
            id="publically_shared_container_left_selectDepartment_expandBox4"
          >
            Customer Support
          </div>
          <div
            className="publically_shared_container_left_selectDepartment_expandBoxClass"
            id="publically_shared_container_left_selectDepartment_expandBox5"
          >
            Customer Support
          </div>
          <div
            className="publically_shared_container_left_selectDepartment_expandBoxClass"
            id="publically_shared_container_left_selectDepartment_expandBox6"
          >
            Customer Support
          </div>
          <div
            className="publically_shared_container_left_selectDepartment_expandBoxClass"
            id="publically_shared_container_left_selectDepartment_expandBox7"
          >
            Customer Support
          </div>
          <div
            className="publically_shared_container_left_selectDepartment_expandBoxClass"
            id="publically_shared_container_left_selectDepartment_expandBox8"
          >
            Customer Support
          </div>
          <div
            className="publically_shared_container_left_selectDepartment_expandBoxClass"
            id="publically_shared_container_left_selectDepartment_expandBox9"
          >
            Customer Support
          </div>
          <div
            className="publically_shared_container_left_selectDepartment_expandBoxClass"
            id="publically_shared_container_left_selectDepartment_expandBox10"
          >
            All
          </div>
        </div>
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
