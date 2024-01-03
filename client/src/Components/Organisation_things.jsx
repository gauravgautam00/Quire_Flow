import React, { useRef, useState } from "react";
import jsonData from "./My_Organisation.json";
import Child_Organisation_things from "./Child_Organisation_things";

const submitForm = () => {};

const Organisation_things = () => {
  const toggleBox = useRef(null);

  const [value, setValue] = useState("All");
  const [icon, setIcon] = useState("more");

  const scrollContainer = useRef(null);
  const chevron_left = useRef(null);
  const chevron_right = useRef(null);

  const selectDepartmentClicked = () => {
    if (toggleBox.current) {
      if (toggleBox.current.style.display == "none") {
        toggleBox.current.style.display = "block";
        setIcon("less");
      } else {
        toggleBox.current.style.display = "none";
        setIcon("more");
      }
    }
  };
  const selectingIt = (e) => {
    setValue(e.target.innerHTML);
    if (toggleBox.current) {
      toggleBox.current.style.display = "none";
      setIcon("more");
    }
  };

  const leftClicked = (e) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 1059.3333740234375,
        behavior: "smooth",
      });
    }
  };

  const rightClicked = (e) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -1059.3333740234375,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="for_footer_color" id="OrgThings_container">
      <div id="OrgThings_container_title">My Organisation - Google</div>
      <div id="Org_things_container_leftPart">
        <div id="OrgThings_container_filter">
          <div id="OrgThings_container_filter_selectDepartment_title">
            Select Department
          </div>
          <div
            onClick={selectDepartmentClicked}
            id="OrgThings_container_filter_selectDepartment_dropDown"
          >
            {value}
            <div id="OrgThings_container_filter_selectDepartment_dropDown_expandMore">
              <span
                id="OrgThings_container_filter_selectDepartment_dropDown_icons"
                className="material-symbols-outlined"
              >
                expand_{icon}
              </span>
            </div>
          </div>
          <div
            id="OrgThings_container_filter_selectDepartment_box"
            ref={toggleBox}
          >
            <div
              onClick={selectingIt}
              className="OrgThings_container_filter_selectDepartment_box_class"
              id="OrgThings_container_filter_selectDepartment_box_1"
            >
              All
            </div>
            <div
              onClick={selectingIt}
              className="OrgThings_container_filter_selectDepartment_box_class"
              id="OrgThings_container_filter_selectDepartment_box_1"
            >
              Finance
            </div>
            <div
              onClick={selectingIt}
              className="OrgThings_container_filter_selectDepartment_box_class"
              id="OrgThings_container_filter_selectDepartment_box_2"
            >
              IT
            </div>
            <div
              onClick={selectingIt}
              className="OrgThings_container_filter_selectDepartment_box_class"
              id="OrgThings_container_filter_selectDepartment_box_3"
            >
              DevOps
            </div>
            <div
              onClick={selectingIt}
              className="OrgThings_container_filter_selectDepartment_box_class"
              id="OrgThings_container_filter_selectDepartment_box_4"
            >
              Product Management
            </div>
            <div
              onClick={selectingIt}
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
        <div
          onClick={rightClicked}
          id="OrgThings_container_leftArrow"
          ref={chevron_right}
        >
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
        <div
          onClick={leftClicked}
          id="OrgThings_container_rightArrow"
          ref={chevron_left}
        >
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
