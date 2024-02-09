import React from "react";
// import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Single_Query_Global = (props) => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const singleQueryBack = useRef(null);

  const photosMainContainer = useRef(null);
  const photosMainLeftArrow = useRef(null);
  const photosMainRightArrow = useRef(null);
  const videosMainContainer = useRef(null);
  const videosMainLeftArrow = useRef(null);
  const videosMainRightArrow = useRef(null);
  const queryMarkUpperBox = useRef(null);
  const queryMarkBottomBox = useRef(null);
  const queryMarkUpperBoxIcon = useRef(null);
  const [markAsValue, setMarkAsValue] = useState("Mark it as");
  const extraDetailsUpperBox = useRef(null);
  const extraDetailsBottomBox = useRef(null);
  const extraDetailsIcon = useRef(null);

  useEffect(() => {
    if (
      photosMainContainer.current &&
      photosMainLeftArrow.current &&
      photosMainRightArrow.current
    ) {
      photosMainLeftArrow.current.onclick = () => {
        photosMainContainer.current.scrollBy({
          left: -917,
          behavior: "smooth",
        });
      };

      photosMainRightArrow.current.onclick = () => {
        photosMainContainer.current.scrollBy({
          left: 917,
          behavior: "smooth",
        });
      };
    }

    if (
      videosMainContainer.current &&
      videosMainLeftArrow.current &&
      videosMainRightArrow.current
    ) {
      videosMainLeftArrow.current.onclick = () => {
        videosMainContainer.current.scrollBy({
          left: -911,
          behavior: "smooth",
        });
      };

      videosMainRightArrow.current.onclick = () => {
        videosMainContainer.current.scrollBy({
          left: 911,
          behavior: "smooth",
        });
      };
    }

    if (
      extraDetailsUpperBox.current &&
      extraDetailsBottomBox.current &&
      extraDetailsIcon.current
    ) {
      extraDetailsBottomBox.current.style.height = "0rem";
      extraDetailsUpperBox.current.onclick = () => {
        if (extraDetailsBottomBox.current.style.height === "0rem") {
          extraDetailsBottomBox.current.style.height = "10rem";
          extraDetailsIcon.current.style.transform = "rotate(-180deg)";
        } else {
          extraDetailsBottomBox.current.style.height = "0rem";
          extraDetailsIcon.current.style.transform = "rotate(0deg)";
        }
      };
    }
    if (singleQueryBack.current) {
      singleQueryBack.current.onclick = () => {
        console.log("ll");
        navigate("/");
      };
    }
  }, []);

  const callDBToSaveMarkAs = () => {
    if (localStorage.getItem("token")) {
      console.log(markAsValue);
      fetch("http://localhost:2300/setMarkAs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          markAsValue,
          query_id: props.query._id,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            return new Error(res.json().message);
          }
          res.json();
        })
        .then((response) => {
          console.log("callDBToSaveMarkAs", response);
          // window.location.reload();
        })
        .catch((err) => {
          console.log("error occurred", err);
        });
    }
  };
  const setValueMarkAs = (val) => {
    setMarkAsValue(val);
    console.log(markAsValue);
  };

  return (
    <div id="single_query_global">
      <div id="single_query_global_back" ref={singleQueryBack}>
        <span
          id="single_query_global_backIcons"
          class="material-symbols-outlined"
        >
          arrow_back
        </span>
        Back
      </div>

      <div id="single_query_global_extraDetails">
        <div
          id="single_query_global_extraDetails_upperBox"
          ref={extraDetailsUpperBox}
        >
          Extra Details
          <span
            id="single_query_global_extraDetailsIcon"
            class="material-symbols-outlined"
            ref={extraDetailsIcon}
          >
            expand_more
          </span>
        </div>
        <div
          id="single_query_global_extraDetails_bottomBox"
          ref={extraDetailsBottomBox}
        >
          <div
            className="single_query_global_extraDetails_bottomBox_child"
            id="single_query_global_extraDetails_bottomBox_child1"
          >
            Organisation - {props.query.organisation}
          </div>
          <div
            className="single_query_global_extraDetails_bottomBox_child"
            id="single_query_global_extraDetails_bottomBox_child2"
          >
            Department - {props.query.department}
          </div>
          <div
            className="single_query_global_extraDetails_bottomBox_child"
            id="single_query_global_extraDetails_bottomBox_child3"
          >
            Recieved at - {new Date(props.query.createdAt).toString()}
          </div>
          {!props.isPublic ? (
            <>
              <div
                className="single_query_global_extraDetails_bottomBox_child"
                id="single_query_global_extraDetails_bottomBox_child4"
              >
                Preferences - {props.query.preferences}
              </div>
              <div
                className="single_query_global_extraDetails_bottomBox_child"
                id="single_query_global_extraDetails_bottomBox_child5"
              >
                Marked As - {props.query.markAs}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div id="single_query_global_isPublicQuery">
        {props.isPublic ? "Public Query" : "Query For You"}
      </div>
      <div id="single_query_global_queryDescription">
        <div id="single_query_global_queryDescription_title">
          {props.query.title}
        </div>
        <div id="single_query_global_queryDescription_para">
          {props.query.description}
        </div>
      </div>
      <div id="single_query_global_queryPhotos">
        <div id="single_query_global_queryPhotos_heading">Attached Photos</div>
        <div id="single_query_global_queryPhotos_main">
          <div
            id="single_query_global_queryPhotos_main_leftArrow"
            ref={photosMainLeftArrow}
          >
            <span
              id="single_query_global_queryPhotos_main_leftArrowIcon"
              class="material-symbols-outlined"
            >
              chevron_left
            </span>
          </div>
          <div
            id="single_query_global_queryPhotos_main_container"
            ref={photosMainContainer}
          >
            <div
              className="single_query_global_queryPhotos_main_container_childClass"
              id="single_query_global_queryPhotos_main_container_child1"
            >
              <img
                class="single_queries_global_queryPhotos_main_container_childImageClass"
                src="/Imagess/dennis-eusebio-2ihYdRZgyWw-unsplash.jpg"
                height="468"
                width="900"
                alt="Photo attached with this query"
              />
            </div>
            <div
              className="single_query_global_queryPhotos_main_container_childClass"
              id="single_query_global_queryPhotos_main_container_child2"
            >
              <img
                class="single_queries_global_queryPhotos_main_container_childImageClass"
                src="/Imagess/dennis-eusebio-2ihYdRZgyWw-unsplash.jpg"
                height="468"
                width="900"
                alt="Photo attached with this query"
              />
            </div>
            <div
              className="single_query_global_queryPhotos_main_container_childClass"
              id="single_query_global_queryPhotos_main_container_child3"
            >
              <img
                class="single_queries_global_queryPhotos_main_container_childImageClass"
                src="/Imagess/dennis-eusebio-2ihYdRZgyWw-unsplash.jpg"
                height="468"
                width="900"
                alt="Photo attached with this query"
              />
            </div>
            <div
              className="single_query_global_queryPhotos_main_container_childClass"
              id="single_query_global_queryPhotos_main_container_child4"
            >
              <img
                class="single_queries_global_queryPhotos_main_container_childImageClass"
                src="/Imagess/dennis-eusebio-2ihYdRZgyWw-unsplash.jpg"
                height="468"
                width="900"
                alt="Photo attached with this query"
              />
            </div>
            <div
              className="single_query_global_queryPhotos_main_container_childClass"
              id="single_query_global_queryPhotos_main_container_child5"
            >
              <img
                class="single_queries_global_queryPhotos_main_container_childImageClass"
                src="/Imagess/dennis-eusebio-2ihYdRZgyWw-unsplash.jpg"
                height="468"
                width="900"
                alt="Photo attached with this query"
              />
            </div>
          </div>
          <div
            id="single_query_global_queryPhotos_main_rightArrow"
            ref={photosMainRightArrow}
          >
            <span
              id="single_query_global_queryPhotos_main_rightArrowIcon"
              class="material-symbols-outlined"
            >
              chevron_right
            </span>
          </div>
        </div>
      </div>
      <div id="single_query_global_queryVideos">
        <div id="single_query_global_queryVideos_heading">Attached Video</div>
        <div id="single_query_global_queryVideos_main">
          <div
            id="single_query_global_queryVideos_main_leftArrow"
            ref={videosMainLeftArrow}
          >
            <span
              id="single_query_global_queryVideos_main_leftArrowIcon"
              className="material-symbols-outlined"
            >
              chevron_left
            </span>
          </div>
          <div
            id="single_query_global_queryVideos_main_container"
            ref={videosMainContainer}
          >
            <div
              className="single_query_global_queryVideos_main_container_childClass"
              id="single_query_global_queryVideos_main_container_child1"
            >
              <video height="468px" width="900px" muted controls autoPlay>
                <source
                  src="/Videoss/pexels-mehmet-kılınç-18856748 (2160p).mp4"
                  type="video/mp4"
                  alt="query Video"
                />
              </video>
            </div>
            <div
              className="single_query_global_queryVideos_main_container_childClass"
              id="single_query_global_queryVideos_main_container_child2"
            >
              <video height="468px" width="900px" muted controls>
                <source
                  src="/Videoss/pexels-mikhail-nilov-6962343 (Original).webm"
                  type="video/webm"
                  alt="query Video"
                />
              </video>
            </div>
            <div
              className="single_query_global_queryVideos_main_container_childClass"
              id="single_query_global_queryVideos_main_container_child3"
            >
              <video height="468px" width="900px" muted controls>
                <source
                  src="/Videoss/pexels-mikhail-nilov-6962343 (Original).mp4"
                  type="video/mp4"
                  alt="query Video"
                />
              </video>
            </div>
          </div>

          <div
            id="single_query_global_queryVideos_main_rightArrow"
            ref={videosMainRightArrow}
          >
            <span
              id="single_query_global_queryVideos_main_rightArrowIcon"
              className="material-symbols-outlined"
            >
              chevron_right
            </span>
          </div>
        </div>
      </div>
      <div id="single_query_global_queryComment">
        <div id="single_query_global_queryComment_heading">Comments</div>
        <div id="single_query_global_queryComment_main">
          <div id="single_query_global_queryComment_leftPart">
            <div id="single_query_global_queryComment_leftPart_addComment">
              Add Your Comment
            </div>
            <div id="single_query_global_queryComment_leftPart_textarea">
              <textarea
                id="single_Query_global_queryComment_leftPart_textarea_real"
                name="leftPart"
              ></textarea>
            </div>
            <div id="single_query_global_queryComment_leftPart_send"> Send</div>
          </div>
          <div id="single_query_global_queryComment_rightPart">
            <div id="single_query_global_queryComment_rightPart_heading">
              View {!props.isPublic ? "your previous" : "all"} comments
            </div>
            <div id="single_query_global_queryComment_rightPart_main">
              <div
                className="single_query_global_queryComment_rightPart_main_child"
                id="single_query_global_queryComment_rightPart_main_child1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                asperiores.
              </div>
              <div
                className="single_query_global_queryComment_rightPart_main_child"
                id="single_query_global_queryComment_rightPart_main_child2"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
                voluptas illo ipsum nesciunt ut explicabo cupiditate asperiores
                velit ratione dolorum.
              </div>
              <div
                className="single_query_global_queryComment_rightPart_main_child"
                id="single_query_global_queryComment_rightPart_main_child3"
              >
                Lorem ipsum dolor sit amet.
              </div>
              <div
                className="single_query_global_queryComment_rightPart_main_child"
                id="single_query_global_queryComment_rightPart_main_child4"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum consequuntur dolor provident, laudantium expedita ex.
              </div>
            </div>
          </div>
        </div>
      </div>
      {!props.isPublic ? (
        <div id="single_query_global_queryLastPart">
          <div id="single_query_global_queryMark">
            <div
              id="single_query_global_queryMark_upperBox"
              ref={queryMarkUpperBox}
            >
              <div id="single_query_global_queryMark_upperBox_heading">
                {markAsValue}
              </div>

              <span
                id="single_query_global_queryMark_upperBoxIcon"
                class="material-symbols-outlined"
                ref={queryMarkUpperBoxIcon}
              >
                expand_more
              </span>
            </div>
            <div
              id="single_query_global_queryMark_bottomBox"
              ref={queryMarkBottomBox}
            >
              <div
                className="single_query_global_queryMark_bottomBox_child"
                id="single_query_global_queryMark_bottomBox_child1"
                onClick={() => {
                  setValueMarkAs("Acknowledged Query");
                }}
              >
                Acknowledged Query
              </div>
              <div
                className="single_query_global_queryMark_bottomBox_child"
                id="single_query_global_queryMark_bottomBox_child2"
                onClick={() => {
                  setValueMarkAs("Research Required");
                }}
              >
                Research required
              </div>
              <div
                className="single_query_global_queryMark_bottomBox_child"
                id="single_query_global_queryMark_bottomBox_child3"
                onClick={() => {
                  setValueMarkAs("InProgress Query");
                }}
              >
                InProgress Query
              </div>
              <div
                className="single_query_global_queryMark_bottomBox_child"
                id="single_query_global_queryMark_bottomBox_child4"
                onClick={() => {
                  setValueMarkAs("Special One");
                }}
              >
                Special one
              </div>
              <div
                className="single_query_global_queryMark_bottomBox_child"
                id="single_query_global_queryMark_bottomBox_child1"
                onClick={() => {
                  setValueMarkAs("Pending");
                }}
              >
                Pending(Default)
              </div>
            </div>
            <div id="single_query_global_queryMark_disclaimer">
              Please click on Done to save your Marked As for this query
            </div>
            <div
              onClick={() => {
                callDBToSaveMarkAs();
              }}
              id="single_query_global_queryMark_button"
            >
              Done
            </div>
          </div>
          <div id="single_query_global_queryDelete">Delete query</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Single_Query_Global;
