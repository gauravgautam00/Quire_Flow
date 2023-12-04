import React, { useEffect, useRef } from "react";

const Child_Administrative_matter = (props) => {
  const sidebarRightText = useRef(null);
  const sidebarRightLinks = useRef(null);
  const sidebarRightImages = useRef(null);
  const sidebarRightVideos = useRef(null);

  const arrowDown = useRef(null);
  const downData = useRef(null);
  const downDataDelete = useRef(null);

  useEffect(() => {
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

    if (arrowDown.current && downData.current) {
      arrowDown.current.onmouseover = () => {
        arrowDown.current.style.backgroundColor = "#DBDBDB";
      };
      arrowDown.current.onmouseout = () => {
        arrowDown.current.style.backgroundColor = "#FFFFFF";
      };
      arrowDown.current.onclick = () => {
        if (downData.current.style.display == "flex") {
          downData.current.style.display = "none";
          downDataDelete.current.style.display = "none";
        } else {
          downData.current.style.display = "flex";
          downDataDelete.current.style.display = "block";
        }
        // downData.current.style.backgroundColor = "red";
      };
    }
  }, []);

  return (
    <div id="child_administrator_matter">
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
        <div id="child_administrative_matter_headingTop_box1"></div>
        <div id="child_administrative_matter_headingTop_box2"></div>

        <div id="child_administrative_matter_headingTop_real">
          {props.queryTitle}
        </div>
      </div>
      {/* //second */}
      {/* //second */}
      {/* //second */}
      {/* //second */}
      {/* //second */}
      {/* //second */}
      {/* //second */}
      <div id="child_administrative_matter_sideBarLeft">
        <div id="child_administrative_matter_sideBarLeft_organisationHeading">
          Organisation
        </div>
        <div id="child_administrative_matter_sideBarLeft_organisationName">
          {props.queryOrganisation}
        </div>
        <div id="child_administrative_matter_sideBarLeft_departmentHeading">
          Department
        </div>
        <div id="child_administrative_matter_sideBarLeft_departmentName">
          {props.queryDepartment}
        </div>
        <div id="child_administrative_matter_sideBarLeft_dateHeading">
          Recieved At
        </div>
        <div id="child_administrative_matter_sideBarLeft_dateName">
          {props.dateSent}
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
      <div id="child_administrative_matter_mainData">
        {props.queryDescription}
      </div>
      {/* fourth */}
      {/* fourth */}
      {/* fourth */}
      {/* fourth */}
      {/* fourth */}
      {/* fourth */}
      {/* fourth */}
      {/* fourth */}
      {/* fourth */}
      <div id="child_administrative_matter_sideBarRight">
        <div
          id="child_administrative_matter_sideBarRight_text"
          ref={sidebarRightText}
        >
          TEXT
        </div>
        <div
          id="child_administrative_matter_sideBarRight_links"
          ref={sidebarRightLinks}
        >
          LINKS
        </div>
        <div
          id="child_administrative_matter_sideBarRight_images"
          ref={sidebarRightImages}
        >
          IMAGES
        </div>
        <div
          id="child_administrative_matter_sideBarRight_videos"
          ref={sidebarRightVideos}
        >
          VIDEOS
        </div>
      </div>
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
        >
          arrow_drop_down
        </span>
      </div>
      <div id="child_administrative_matter_BottomHide">
        <div id="child_administrative_matter_downBarBottom" ref={downData}>
          {/* first */}
          <div id="child_administrative_matter_downBarBottom_first">
            <div id="child_administrative_matter_downBarBottom_first_heading">
              Comment for querySender
            </div>
            <div id="child_administrative_matter_downBarBottom_first_textarea">
              <textarea id="child_administrative_matter_downBarBottom_first_textareaReal">
                Enter here
              </textarea>
            </div>
            <div id="child_administrative_matter_downBarBottom_first_submitComment">
              Send
            </div>
          </div>
          {/* first line */}
          <div id="child_administrative_matter_downBarBottom_firstLine"></div>
          {/* second */}
          <div id="child_administrative_matter_downBarBottom_second">
            <div id="child_administrative_matter_downBarBottom_second_header">
              Mark as
            </div>

            <div id="child_administrative_matter_downBarBottom_second_completed">
              Acknowledged
            </div>

            <div id="child_administrative_matter_downBarBottom_second_inProgress">
              IN-Progress
            </div>
            <div id="child_administrative_matter_downBarBottom_second_save">
              Save
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
