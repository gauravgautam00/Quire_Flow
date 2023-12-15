import React, { useEffect, useRef } from "react";

const Child_Organisation_things = (props) => {
  const childOrgThingsSideBar = useRef(null);
  const childOrgThingsHamBurger = useRef(null);
  const childOrgThingsHamburgerIcon = useRef(null);
  const childOrgThingsSideBarSecond = useRef(null);
  const childOrgThingsHamBurgerSecond = useRef(null);
  const childOrgThingsHamburgerSecondIcon = useRef(null);
  const childOrgThingsHeading = useRef(null);

  useEffect(() => {
    if (
      childOrgThingsHamBurger.current &&
      childOrgThingsSideBar.current &&
      childOrgThingsHamburgerIcon.current
    ) {
      childOrgThingsHamBurger.current.onclick = () => {
        if (childOrgThingsSideBar.current.style.marginLeft == "0rem") {
          childOrgThingsSideBar.current.style.marginLeft = "-20rem";
          childOrgThingsHamburgerIcon.current.style.transform = "rotate(0deg)";
        } else {
          childOrgThingsSideBar.current.style.marginLeft = "0rem";
          childOrgThingsHamburgerIcon.current.style.transform = "rotate(45deg)";
        }
      };
    }

    if (
      childOrgThingsHamBurgerSecond.current &&
      childOrgThingsSideBarSecond.current &&
      childOrgThingsHamburgerSecondIcon.current
    ) {
      childOrgThingsHamBurgerSecond.current.onclick = () => {
        if (childOrgThingsSideBarSecond.current.style.marginLeft == "20rem") {
          childOrgThingsSideBarSecond.current.style.marginLeft = "62rem";
          childOrgThingsHamburgerSecondIcon.current.style.transform =
            "rotate(0deg)";
        } else {
          childOrgThingsSideBarSecond.current.style.marginLeft = "20rem";
          childOrgThingsHamburgerSecondIcon.current.style.transform =
            "rotate(45deg)";
        }
      };
    }
  }, []);

  return (
    <div className="for_footer_color" id="child_OrgThings_container">
      <div id="child_OrgThings_container_sideBar" ref={childOrgThingsSideBar}>
        <div id="child_OrgThings_container_sideBar_cancelDiv">
          <div id="child_OrgThings_container_sideBar_cancelDiv_detailsContainer">
            Details
          </div>
        </div>
        <div id="child_OrgThings_container_sideBar_details">
          <div
            className="child_OrgThings_container_sideBar_detailsClass"
            id="child_OrgThings_container_sideBar_detailsDepartment"
          >
            <div id="child_OrgThings_container_sideBar_detailsDepartment_first">
              Department
            </div>
            <div id="child_OrgThings_container_sideBar_detailsDepartment_second">
              Google Search
            </div>
          </div>
          <div
            className="child_OrgThings_container_sideBar_detailsClass"
            id="child_OrgThings_container_sideBar_detailsPreferences"
          >
            <div id="child_OrgThings_container_sideBar_detailsPreferences_first">
              Preferences
            </div>
            <div id="child_OrgThings_container_sideBar_detailsPreferences_second">
              Research Required
            </div>
          </div>
          <div
            className="child_OrgThings_container_sideBar_detailsClass"
            id="child_OrgThings_container_sideBar_detailsDate"
          >
            <div id="child_OrgThings_container_sideBar_detailsDate_first">
              Date
            </div>
            <div id="child_OrgThings_container_sideBar_detailsDate_second">
              11-04-2004
            </div>
          </div>
        </div>
      </div>

      <div
        id="child_OrgThings_container_hamburger"
        ref={childOrgThingsHamBurger}
      >
        <span
          id="child_OrgThings_container_hamburger_icon"
          class="material-symbols-outlined"
          ref={childOrgThingsHamburgerIcon}
        >
          add
        </span>
      </div>

      <div
        id="child_OrgThings_container_sideBar_second"
        ref={childOrgThingsSideBarSecond}
      >
        <div id="child_OrgThings_container_sideBar_second_cancelDiv">
          <div id="child_OrgThings_container_sideBar_second_cancelDiv_commentContainer">
            Comments
          </div>
        </div>
        <div id="child_OrgThings_container_sideBar_second_details"></div>

        <div id="child_OrgThings_container_sideBar_second_vote">
          <div id="child_OrgThings_container_sideBar_second_vote_upvotes">
            <div id="child_OrgThings_container_sideBar_second_vote_upvotes_first">
              <span
                id="child_OrgThings_container_sideBar_second_vote_upvotes_first_icon"
                class="material-symbols-outlined"
              >
                thumb_up
              </span>
            </div>
            <div id="child_OrgThings_container_sideBar_second_vote_upvotes_second"></div>
            <div id="child_OrgThings_container_sideBar_second_vote_upvotes_third">
              35.6K
            </div>
          </div>
          <div id="child_OrgThings_container_sideBar_second_vote_downvotes">
            <div id="child_OrgThings_container_sideBar_second_vote_downvotes_first">
              <span
                id="child_OrgThings_container_sideBar_second_vote_downvotes_first_icon"
                class="material-symbols-outlined"
              >
                thumb_down
              </span>
            </div>
            <div id="child_OrgThings_container_sideBar_second_vote_downvotes_second"></div>
            <div id="child_OrgThings_container_sideBar_second_vote_downvotes_third">
              3.6K
            </div>
          </div>
        </div>
      </div>

      <div
        id="child_OrgThings_container_hamburger_second"
        ref={childOrgThingsHamBurgerSecond}
      >
        <span
          id="child_OrgThings_container_hamburger_second_icon"
          class="material-symbols-outlined"
          ref={childOrgThingsHamburgerSecondIcon}
        >
          add
        </span>
      </div>

      <div
        id="child_OrgThings_container_queryHeading"
        ref={childOrgThingsHeading}
      >
        {props.queryTitle}
      </div>
      <div id="child_OrgThings_container_queryPara">
        {props.queryDescription}
      </div>
    </div>
  );
};

export default Child_Organisation_things;
