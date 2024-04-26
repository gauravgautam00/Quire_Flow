import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Child_Organisation_things = (props) => {
  const childOrgThingsSideBar = useRef(null);
  const childOrgThingsHamBurger = useRef(null);
  const childOrgThingsHamburgerIcon = useRef(null);
  const childOrgThingsSideBarSecond = useRef(null);
  const childOrgThingsHamBurgerSecond = useRef(null);
  const childOrgThingsHamburgerSecondIcon = useRef(null);
  const childOrgThingsHeading = useRef(null);

  const postCommentButton = useRef(null);
  const [commentsArr, setCommentsArr] = useState();
  const [isLoadingComment, setIsLoadingComment] = useState(false);
  const contentInput = useRef(null);
  useEffect(() => {
    if (
      childOrgThingsHamBurger.current &&
      childOrgThingsSideBar.current &&
      childOrgThingsHamburgerIcon.current
    ) {
      childOrgThingsHamBurger.current.onclick = () => {
        if (childOrgThingsSideBar.current.style.marginLeft === "0rem") {
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
        if (childOrgThingsSideBarSecond.current.style.marginLeft === "20rem") {
          childOrgThingsSideBarSecond.current.style.visibility = "hidden";

          childOrgThingsSideBarSecond.current.style.marginLeft = "62rem";
          childOrgThingsHamburgerSecondIcon.current.style.transform =
            "rotate(0deg)";
        } else {
          childOrgThingsSideBarSecond.current.style.visibility = "visible";

          childOrgThingsSideBarSecond.current.style.marginLeft = "20rem";
          childOrgThingsHamburgerSecondIcon.current.style.transform =
            "rotate(45deg)";
        }
      };
    }
  }, []);

  //post commment
  //post commment
  //post commment
  //post commment
  //post commment

  useEffect(() => {
    if (postCommentButton.current && contentInput.current) {
      postCommentButton.current.onclick = () => {
        // console.log("clicked post button");
        setIsLoadingComment(true);

        const content = contentInput.current.value;

        const dataToSend = {
          content,
          query_id: props.id,
        };
        // console.log("to send data in child organisation", dataToSend);
        fetch("https://quire-flow-4.onrender.com/addComment", {
          // fetch("http://localhost:2300/addComment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(dataToSend),
        })
          .then(async (res) => {
            if (!res.ok) {
              return res.json().then((err) => {
                throw new Error(err);
              });
            }
            return res.json();
          })
          .then((response) => {
            setIsLoadingComment(false);
            setCommentsArr(response.comments);
            contentInput.current.value = "";
          })
          .catch((err) => {
            alert(
              `Some error ocurred while adding the comment . Please try again later`,
              err.message
            );
            setIsLoadingComment(false);
          });
      };
    }
  }, []);

  // view comment
  // view comment// view comment
  // view comment
  // view comment
  // view comment
  // view comment

  useEffect(() => {
    fetch(`https://quire-flow-4.onrender.com/viewComment/${props.id}`, {
      // fetch(`http://localhost:2300/viewComment/${props.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            throw new Error(err);
          });
        }
        return res.json();
      })
      .then((response) => {
        setCommentsArr(response.comments);
      })
      .catch((err) => {
        console.log(
          (`Some error ocurred while adding the comment . Please try again later`,
          err.message)
        );
      });
  }, []);
  return (
    <div className="for_footer_color" id="child_OrgThings_container">
      <div id="child_OrgThings_container_first">
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
                {props.department}
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
                {props.preferences}
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
                {props.date}
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
          <div id="child_OrgThings_container_sideBar_second_details">
            {commentsArr?.length > 0 ? (
              commentsArr.map((data) => {
                return (
                  <div
                    key={uuidv4()}
                    id="child_OrgThings_container_sideBar_second_details_eachComment"
                    className="child_OrgThings_container_sideBar_second_details_eachCommentClass"
                  >
                    <div id="child_OrgThings_container_sideBar_second_details_eachComment_first">
                      {data.content}
                    </div>
                    <div id="child_OrgThings_container_sideBar_second_details_eachComment_second">
                      {new Date(data.createdAt).toLocaleString()}
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                No commments. Add Your comment to start the conversation
              </div>
            )}
          </div>

          <div id="child_OrgThings_container_sideBar_second_addComment">
            <div id="child_OrgThings_container_sideBar_second_addComment_inputContainer">
              <input
                placeholder="Add your comment"
                id="child_OrgThings_container_sideBar_second_addComment_inputContainer_input"
                ref={contentInput}
              ></input>
              <button
                id="child_OrgThings_container_sideBar_second_addComment_inputContainer_button"
                ref={postCommentButton}
              >
                Post
              </button>
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
      </div>
      <div id="child_OrgThings_container_queryPara">
        {props.queryDescription}
      </div>
    </div>
  );
};

export default Child_Organisation_things;
