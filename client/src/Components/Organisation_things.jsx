import React, { useRef, useState, useEffect } from "react";
import jsonData from "./My_Organisation.json";
import Child_Organisation_things from "./Child_Organisation_things";

const submitForm = () => {};

const Organisation_things = () => {
  const toggleBox = useRef(null);

  const [value, setValue] = useState("Select Department");
  const expandMore = useRef(null);
  const scrollContainer = useRef(null);
  const chevron_left = useRef(null);
  const chevron_right = useRef(null);
  const selectDepartmentIcon = useRef(null);

  useEffect(() => {
    if (
      toggleBox.current &&
      selectDepartmentIcon.current &&
      expandMore.current
    ) {
      toggleBox.current.style.height = "0rem";
      toggleBox.current.style.border = "none";
      expandMore.current.onclick = () => {
        console.log("expandMore.current");

        if (toggleBox.current.style.height == "0rem") {
          toggleBox.current.style.height = "17rem";
          selectDepartmentIcon.current.style.transform = "rotate(180deg)";
          toggleBox.current.style.border = "1px solid #16252D";
          toggleBox.current.style.borderTop = "none";
        } else {
          toggleBox.current.style.height = "0rem";
          selectDepartmentIcon.current.style.transform = "rotate(0deg)";
          // toggleBox.current.style.border = "none";
        }
      };
    }

    if (scrollContainer.current && chevron_right.current) {
      chevron_right.current.onclick = () => {
        scrollContainer.current.scrollBy({
          left: 1059.3333740234375,
          behavior: "smooth",
        });
      };
    }

    if (scrollContainer.current && chevron_left.current) {
      chevron_left.current.onclick = () => {
        scrollContainer.current.scrollBy({
          left: -1059.3333740234375,
          behavior: "smooth",
        });
      };
    }
  }, []);

  const setTheValue = (val) => {
    setValue(val);
  };
  return (
    <div className="for_footer_color" id="OrgThings_container">
      <div id="OrgThings_container_title">My Organisation - Google</div>
      <div id="Org_things_container_leftPart">
        <div id="OrgThings_container_filter">
          {/* <div
            id="OrgThings_container_filter_selectDepartment_title"
        
          >
            Select Department
          </div> */}
          <div
            id="OrgThings_container_filter_selectDepartment_dropDown"
            ref={expandMore}
          >
            {value}
            <div id="OrgThings_container_filter_selectDepartment_dropDown_expandMore">
              <span
                id="OrgThings_container_filter_selectDepartment_dropDown_icons"
                className="material-symbols-outlined"
                ref={selectDepartmentIcon}
              >
                expand_more
              </span>
            </div>
          </div>
          <div
            id="OrgThings_container_filter_selectDepartment_box"
            ref={toggleBox}
          >
            <div
              onClick={() => setTheValue("Select Department")}
              className="OrgThings_container_filter_selectDepartment_box_class"
              id="OrgThings_container_filter_selectDepartment_box_1"
            >
              Select Department
            </div>
            <div
              onClick={() => setTheValue("Finance")}
              className="OrgThings_container_filter_selectDepartment_box_class"
              id="OrgThings_container_filter_selectDepartment_box_1"
            >
              Finance
            </div>
            <div
              onClick={() => setTheValue("IT")}
              className="OrgThings_container_filter_selectDepartment_box_class"
              id="OrgThings_container_filter_selectDepartment_box_2"
            >
              IT
            </div>
            <div
              onClick={() => setTheValue("DevOps")}
              className="OrgThings_container_filter_selectDepartment_box_class"
              id="OrgThings_container_filter_selectDepartment_box_3"
            >
              DevOps
            </div>
            <div
              onClick={() => setTheValue("Product Management")}
              className="OrgThings_container_filter_selectDepartment_box_class"
              id="OrgThings_container_filter_selectDepartment_box_4"
            >
              Product Management
            </div>
            <div
              onClick={() => setTheValue("Marketing")}
              className="OrgThings_container_filter_selectDepartment_box_class"
              id="OrgThings_container_filter_selectDepartment_box_5"
            >
              Marketing
            </div>
          </div>

          <div id="OrgThings_container_filter_searchSpecific">
            <input
              id="OrgThings_container_filter_searchSpecific_input"
              name="OrgThings_query_specificWord"
              type="text"
              placeholder="Enter specfic string to search for "
            ></input>
          </div>

          <button
            id="OrgThings_container_filter_submitBut"
            onClick={submitForm}
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
      <div id="OrgThings_container_rightPart">
        <div id="OrgThings_container_leftArrow" ref={chevron_left}>
          <span
            id="OrgThings_container_leftArrow_symbol"
            className="material-symbols-outlined"
          >
            chevron_left
          </span>
        </div>
        <div id="OrgThings_container_scrollContainer" ref={scrollContainer}>
          {jsonData.map((data, index) => {
            return (
              <Child_Organisation_things
                key={index}
                queryTitle={data.queryTitle}
                queryDescription={data.queryDescription}
                noOfLikes={data.noOfLikes}
                noOfDislikes={data.noOfDislikes}
              />
            );
          })}
        </div>
        <div id="OrgThings_container_rightArrow" ref={chevron_right}>
          <span
            id="OrgThings_container_rightArrow_symbol"
            className="material-symbols-outlined"
          >
            chevron_right
          </span>
        </div>
      </div>
    </div>
  );
};

export default Organisation_things;
