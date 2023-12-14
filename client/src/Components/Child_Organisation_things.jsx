import React, { useEffect, useRef } from "react";

const Child_Organisation_things = (props) => {
  const childOrgThingsSideBar = useRef(null);
  const childOrgThingsHamBurger = useRef(null);
  const childOrgThingsHamburgerIcon = useRef(null);
  const childOrgThingsHeading = useRef(null);

  useEffect(() => {
    if (
      childOrgThingsHamBurger.current &&
      childOrgThingsSideBar.current &&
      childOrgThingsHeading.current &&
      childOrgThingsHamburgerIcon.current
    ) {
      childOrgThingsHamBurger.current.onclick = () => {
        if (childOrgThingsSideBar.current.style.marginLeft == "0rem") {
          childOrgThingsSideBar.current.style.marginLeft = "-20rem";
          // childOrgThingsHamBurger.current.style.marginTop = "-24rem";
          // childOrgThingsHeading.current.style.
          // childOrgThingsHamBurger.current.style.borderRadius = "4px";

          childOrgThingsHamburgerIcon.current.style.transform = "rotate(0deg)";
        } else {
          childOrgThingsSideBar.current.style.marginLeft = "0rem";
          childOrgThingsHamburgerIcon.current.style.transform = "rotate(45deg)";
          // childOrgThingsHamBurger.current.style.borderRadius = "50%";

          // childOrgThingsHamBurger.current.style.marginTop = "0rem";
        }
      };
    }
  }, []);

  return (
    <div className="for_footer_color" id="child_OrgThings_container">
      <div
        id="child_OrgThings_container_sideBar"
        ref={childOrgThingsSideBar}
      ></div>
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
