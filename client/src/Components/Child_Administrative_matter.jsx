import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Child_Administrative_matter = (props) => {
  const sidebarRightText = useRef(null);
  const sidebarRightLinks = useRef(null);
  const sidebarRightImages = useRef(null);
  const sidebarRightVideos = useRef(null);
  const arrowDownIcon = useRef(null);
  const arrowDown = useRef(null);
  const downData = useRef(null);
  const bottomHideContainer = useRef(null);
  const downDataDelete = useRef(null);
  const sideBarLeftHamburgerIcon = useRef(null);
  const sideBarLeft = useRef(null);
  const sideBarLeftFirst = useRef(null);
  const sideBarLeftSecond = useRef(null);
  const sideBarLeftThird = useRef(null);
  const headingTopOptions = useRef(null);
  const headingTopOptionsIcon = useRef(null);
  const headingTopOptionsList = useRef(null);
  const headingTopOptionsListFirst = useRef(null);
  const headingTopOptionsListSecond = useRef(null);
  const headingTopOptionsListThird = useRef(null);
  const downBarBottomSecondCompleted = useRef(null);
  const downBarBottomSecondInProgress = useRef(null);
  const [icon, setIcon] = useState("menu");
  const [queryData, setQueryData] = useState(props.queryDescription);
  const [typeOfData, setTypeOfData] = useState("Text");
  useEffect(() => {
    // console.log(props.queryImages);
    if (
      sidebarRightText.current &&
      sidebarRightLinks.current &&
      sidebarRightImages.current &&
      sidebarRightVideos.current
    ) {
      sidebarRightText.current.onclick = () => {
        sidebarRightText.current.style.backgroundColor = "#1937be";
        sidebarRightText.current.style.color = "white";
        sidebarRightLinks.current.style.backgroundColor = "white";
        sidebarRightLinks.current.style.color = "black";
        sidebarRightImages.current.style.backgroundColor = "white";
        sidebarRightImages.current.style.color = "black";
        sidebarRightVideos.current.style.backgroundColor = "white";
        sidebarRightVideos.current.style.color = "black";
      };
      sidebarRightLinks.current.onclick = () => {
        sidebarRightText.current.style.backgroundColor = "white";
        sidebarRightText.current.style.color = "black";
        sidebarRightLinks.current.style.backgroundColor = "#1937be";
        sidebarRightLinks.current.style.color = "white";
        sidebarRightImages.current.style.backgroundColor = "white";
        sidebarRightImages.current.style.color = "black";
        sidebarRightVideos.current.style.backgroundColor = "white";
        sidebarRightVideos.current.style.color = "black";
      };
      sidebarRightImages.current.onclick = () => {
        sidebarRightText.current.style.backgroundColor = "white";
        sidebarRightText.current.style.color = "black";
        sidebarRightLinks.current.style.backgroundColor = "white";
        sidebarRightLinks.current.style.color = "black";
        sidebarRightImages.current.style.backgroundColor = "#1937be";
        sidebarRightImages.current.style.color = "white";
        sidebarRightVideos.current.style.backgroundColor = "white";
        sidebarRightVideos.current.style.color = "black";
      };
      sidebarRightVideos.current.onclick = () => {
        sidebarRightText.current.style.backgroundColor = "white";
        sidebarRightText.current.style.color = "black";
        sidebarRightLinks.current.style.backgroundColor = "white";
        sidebarRightLinks.current.style.color = "black";
        sidebarRightImages.current.style.backgroundColor = "white";
        sidebarRightImages.current.style.color = "black";
        sidebarRightVideos.current.style.backgroundColor = "#1937be";
        sidebarRightVideos.current.style.color = "white";
      };
    }

    if (
      arrowDown.current &&
      downData.current &&
      arrowDownIcon.current &&
      bottomHideContainer.current
    ) {
      downData.current.style.marginTop = "-15rem";
      arrowDown.current.onclick = () => {
        if (downData.current.style.marginTop == "-15rem") {
          // // console.log("entering ");
          arrowDownIcon.current.style.transform = "rotate(180deg)";
          downData.current.style.marginTop = "1rem";
        } else {
          downData.current.style.marginTop = "-15rem";
          arrowDownIcon.current.style.transform = "rotate(0deg)";
        }
      };
    }

    if (
      sideBarLeft.current &&
      sideBarLeftHamburgerIcon.current &&
      sideBarLeftFirst &&
      sideBarLeftSecond &&
      sideBarLeftThird
    ) {
      sideBarLeft.current.style.width = "4rem";
      sideBarLeftHamburgerIcon.current.onclick = () => {
        if (sideBarLeft.current.style.width == "4rem") {
          sideBarLeft.current.style.width = "16rem";
          sideBarLeftFirst.current.style.visibility = "visible";
          sideBarLeftSecond.current.style.visibility = "visible";
          sideBarLeftThird.current.style.visibility = "visible";
          sideBarLeftFirst.current.style.display = "block";
          sideBarLeftSecond.current.style.display = "block";
          sideBarLeftThird.current.style.display = "block";
          sideBarLeftFirst.current.style.opacity = "1";
          setIcon("close");
          sideBarLeftSecond.current.style.opacity = "1";
          sideBarLeftThird.current.style.opacity = "1";
        } else {
          sideBarLeft.current.style.width = "4rem";
          setIcon("menu");
          sideBarLeftFirst.current.style.visibility = "hidden";
          sideBarLeftSecond.current.style.visibility = "hidden";
          sideBarLeftThird.current.style.visibility = "hidden";
          sideBarLeftFirst.current.style.display = "none";
          sideBarLeftSecond.current.style.display = "none";
          sideBarLeftThird.current.style.display = "none";
          sideBarLeftFirst.current.style.opacity = "0";
          sideBarLeftSecond.current.style.opacity = "0";
          sideBarLeftThird.current.style.opacity = "0";
        }
      };
    }

    if (
      headingTopOptions.current &&
      headingTopOptionsIcon.current &&
      headingTopOptionsList.current
    ) {
      // console.log(headingTopOptions.current);

      headingTopOptionsList.current.style.height = "0rem";

      headingTopOptions.current.onclick = () => {
        if (headingTopOptionsList.current.style.height == "0rem") {
          headingTopOptionsList.current.style.height = "5rem";
          headingTopOptionsIcon.current.style.transform = "rotate(180deg)";
          headingTopOptionsList.current.style.border = "1px solid #1937be";
        } else {
          headingTopOptionsList.current.style.height = "0rem";
          headingTopOptionsIcon.current.style.transform = "rotate(0deg)";
          headingTopOptionsList.current.style.border = "none";
        }
      };
    }

    if (
      headingTopOptionsListFirst.current &&
      headingTopOptionsListSecond.current &&
      headingTopOptionsListThird.current
    ) {
      headingTopOptionsListFirst.current.onclick = () => {
        setTypeOfData("Text");
        setQueryData(props.queryDescription);
      };
      headingTopOptionsListSecond.current.onclick = () => {
        setTypeOfData("Images");
        setQueryData(props.queryImages);
      };
      headingTopOptionsListThird.current.onclick = () => {
        setTypeOfData("Videos");
        setQueryData(props.queryVideos);
      };
    }

    if (
      downBarBottomSecondCompleted.current &&
      downBarBottomSecondInProgress.current
    ) {
      downBarBottomSecondCompleted.current.onclick = () => {
        downBarBottomSecondCompleted.current.style.backgroundColor = "#1937be";
        downBarBottomSecondCompleted.current.style.color = "white";
        downBarBottomSecondInProgress.current.style.backgroundColor = "white";
        downBarBottomSecondInProgress.current.style.color = "#16252D";
      };
      downBarBottomSecondInProgress.current.onclick = () => {
        downBarBottomSecondInProgress.current.style.backgroundColor = "#1937be";
        downBarBottomSecondInProgress.current.style.color = "white";
        downBarBottomSecondCompleted.current.style.backgroundColor = "white";
        downBarBottomSecondCompleted.current.style.color = "#16252D";
      };
    }
  }, []);

  //bootom area
  //bootom area  //bootom area
  //bootom area
  //bootom area
  //bootom area

  const textareaContainingComment = useRef(null);
  const commentSendButton = useRef(null);
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetch(
        `https://quire-flow-4.onrender.com/viewComment/${props.queryObjectId}`,
        {
          // fetch(`http://localhost:2300/viewComment/${props.queryObjectId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((response) => {
          setAllComments(response.comments);
          allComments.map((data, index) => {
            // console.log("in map", data.content);
          });
          // console.log("allComments", response.comments.length);
        })
        .catch((error) => {
          console.log("Some error occurred", error);
        });
    }
  }, []);
  useEffect(() => {
    if (commentSendButton.current && textareaContainingComment.current) {
      commentSendButton.current.onclick = () => {
        const value = textareaContainingComment.current.value;
        if (!value) {
          alert("Comment is empty");
          return;
        }
        fetch("https://quire-flow-4.onrender.com/addComment", {
          // fetch("http://localhost:2300/addComment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            query_id: props.queryObjectId,
            content: value,
          }),
        })
          .then((res) => res.json())
          .then((response) => {
            setAllComments(response.comments);
            textareaContainingComment.current.value = "";
          })

          .catch((error) => {
            console.log(
              "some error occurred hile adding the comment in the client side",
              error
            );
          });
      };
    }
  }, []);

  //delete
  useEffect(() => {
    if (downDataDelete.current) {
      downDataDelete.current.onclick = () => {
        alert(
          "You can't delete the query for now . We are working on this . Sorry for the inconvenience"
        );
      };
    }
  }, []);

  return (
    <div id="child_administrator_matter">
      <div id="child_administrator_matter_firstPart">
        {/* first */}
        {/* first */}
        {/* first */}
        {/* first */}
        {/* first */}
        {/* first */}
        {/* first */}
        {/* first */}
        {/* first */}
        <div id="child_administrative_matter_headingTop">
          <div id="child_administrator_matter_headingTop_expand">
            <NavLink
              to={`/administrative_matter/${props.queryObjectId}`}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Expand
            </NavLink>
            <span
              id="child_administrator_matter_headingTop_expandIcon"
              class="material-symbols-outlined"
            >
              pan_zoom
            </span>
          </div>

          <div id="child_administrative_matter_headingTop_real">
            {props.queryTitle}
          </div>

          <div
            id="child_administrative_matter_headingTop_options"
            ref={headingTopOptions}
          >
            {typeOfData}

            <span
              id="child_administrative_matter_headingTop_options_downIcon"
              class="material-symbols-outlined"
              ref={headingTopOptionsIcon}
            >
              keyboard_arrow_down
            </span>
          </div>
          <div
            id="child_administrative_matter_headingTop_options_dropDown"
            ref={headingTopOptionsList}
          >
            <div
              class="child_administrative_matter_headingTop_options_dropDown_childClass"
              id="child_administrative_matter_headingTop_options_dropDown_first"
              ref={headingTopOptionsListFirst}
            >
              Text
            </div>
            <div
              class="child_administrative_matter_headingTop_options_dropDown_childClass"
              id="child_administrative_matter_headingTop_options_dropDown_second"
              ref={headingTopOptionsListSecond}
            >
              Images
            </div>
          </div>
        </div>
        {/* //second */}
        {/* //second */}
        {/* //second */}
        {/* //second */}
        {/* //second */}
        {/* //second */}
        {/* //second */}
        <div id="child_administrative_matter_sideBarLeft" ref={sideBarLeft}>
          <div
            id="child_administrative_matter_sideBarLeft_hamburgerIcon"
            ref={sideBarLeftHamburgerIcon}
          >
            <span
              id="child_administrative_matter_sideBarLeft_hamburgerIcon_real"
              class="material-symbols-outlined"
            >
              {icon}
            </span>
          </div>
          <div
            id="child_administrator_matter_sideBarLeft_first"
            ref={sideBarLeftFirst}
          >
            <div id="child_administrative_matter_sideBarLeft_organisationHeading">
              Organisation
            </div>
            <div id="child_administrative_matter_sideBarLeft_organisationName">
              {props.queryOrganisation}
            </div>
          </div>
          <div
            id="child_administrator_matter_sideBarLeft_second"
            ref={sideBarLeftSecond}
          >
            <div id="child_administrative_matter_sideBarLeft_departmentHeading">
              Department
            </div>
            <div id="child_administrative_matter_sideBarLeft_departmentName">
              {props.queryDepartment}
            </div>
          </div>
          <div
            id="child_administrator_matter_sideBarLeft_third"
            ref={sideBarLeftThird}
          >
            <div id="child_administrative_matter_sideBarLeft_dateHeading">
              Recieved At
            </div>
            <div id="child_administrative_matter_sideBarLeft_dateName">
              {new Date(props.dateSent).toLocaleString()}
            </div>
          </div>
        </div>
        {/* third */}
        {/* third */}
        {/* third */}
        {/* third */}
        {/* third */}
        {/* third */}
        {/* third */}
        {/* third */}
        <div id="child_administrative_matter_mainData">{queryData}</div>
        {/* fourth */}
        {/* fourth */}
        {/* fourth */}
        {/* fourth */}
        {/* fourth */}
        {/* fourth */}
        {/* fourth */}
        {/* fourth */}
        {/* fourth */}
        <div id="child_administrative_matter_sideBarRight"></div>
        {/* fifth */}
        {/* fifth */}
        {/* fifth */}
        {/* fifth */}
        {/* fifth */}
        {/* fifth */}
        {/* fifth */}
        {/* fifth */}
        {/* fifth */}
        {/* fifth */}
        <div id="child_administrator_matter_downBarClicks" ref={arrowDown}>
          <span
            id="child_administrator_matter_downBarClicks_icon"
            class="material-symbols-outlined"
            ref={arrowDownIcon}
          >
            arrow_drop_down
          </span>
        </div>
      </div>
      <div
        id="child_administrative_matter_BottomHide"
        ref={bottomHideContainer}
      >
        <div id="child_administrative_matter_downBarBottom" ref={downData}>
          {/* first */}
          <div id="child_administrative_matter_downBarBottom_first">
            <div id="child_administrative_matter_downBarBottom_first_heading">
              Comment for querySender
            </div>
            <div id="child_administrative_matter_downBarBottom_first_textarea">
              <textarea
                id="child_administrative_matter_downBarBottom_first_textareaReal"
                ref={textareaContainingComment}
              >
                Enter here
              </textarea>
            </div>
            <div
              id="child_administrative_matter_downBarBottom_first_submitComment"
              ref={commentSendButton}
            >
              Send
            </div>
          </div>
          {/* first line */}
          <div id="child_administrative_matter_downBarBottom_firstLine"></div>
          {/* second */}
          <div id="child_administrative_matter_downBarBottom_second">
            <div id="child_administrative_matter_downBarBottom_second_header">
              View Comments
            </div>
            <div id="child_administrative_matter_downBarBottom_second_content">
              {allComments.length > 0 ? (
                allComments.map((data) => {
                  return (
                    <div
                      id="child_administrative_matter_downBarBottom_second_content_child1"
                      className="child_administrative_matter_downBarBottom_second_content_childClass"
                    >
                      <div id="child_administrative_matter_downBarBottom_second_content_childClass_content">
                        {data.content}
                      </div>
                      <div id="child_administrative_matter_downBarBottom_second_content_childClass_date">
                        {new Date(data.createdAt).toLocaleString()}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>Write your first comment</div>
              )}
            </div>
          </div>
        </div>
        <div
          id="child_administrative_matter_downBottom_delete"
          ref={downDataDelete}
        >
          Delete This Query
        </div>
      </div>
    </div>
  );
};

export default Child_Administrative_matter;
