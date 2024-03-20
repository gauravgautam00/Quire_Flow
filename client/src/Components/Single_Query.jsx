import React, { useRef, useEffect, useState } from "react";
import Single_Query_Images from "./Single_Query_Images";
import Single_Comment from "./Single_Comment";
import { useParams, useNavigate, Link } from "react-router-dom";

const Single_Query = () => {
  const { objectId } = useParams();
  const [query, setQuery] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(objectId);
  }, []);

  const navigate = useNavigate();
  const backClick = useRef(null);

  const headerRight = useRef(null);
  // 1752;
  // 34.9;

  const viewComment = useRef(null);

  const singleQueryImagesLeftArrow = useRef(null);
  const singleQueryImagesRightArrow = useRef(null);
  const singleQueryImagesLeftArrowFont = useRef(null);
  const singleQueryImagesRightArrowFont = useRef(null);
  const singleQueryImagesContainer = useRef(null);

  const singleQueryLinksLeftArrow = useRef(null);
  const singleQueryLinksRightArrow = useRef(null);
  const singleQueryLinksLeftArrowFont = useRef(null);
  const singleQueryLinksRightArrowFont = useRef(null);
  const singleQueryLinksContainer = useRef(null);

  const singleQueryVideosLeftArrow = useRef(null);
  const singleQueryVideosRightArrow = useRef(null);
  const singleQueryVideosLeftArrowFont = useRef(null);
  const singleQueryVideosRightArrowFont = useRef(null);
  const singleQueryVideosContainer = useRef(null);

  //carousel runnning
  //carousel runnning
  //carousel runnning
  //carousel runnning
  //carousel runnning
  //carousel runnning
  //carousel runnning
  //carousel runnning

  useEffect(() => {
    //IMAGES
    //IMAGES
    //IMAGES

    //that linear gradient to leftArrow
    //that linear gradient to leftArrow
    //that linear gradient to leftArrow
    //that linear gradient to leftArrow

    if (
      singleQueryImagesLeftArrow.current &&
      singleQueryImagesLeftArrowFont.current
    ) {
      singleQueryImagesLeftArrow.current.onmouseover = () => {
        singleQueryImagesLeftArrow.current.style.backgroundImage =
          "linear-gradient(to left, #f0f0f0, #c5c4c4)";
        singleQueryImagesLeftArrowFont.current.style.fontSize = "x-large";
      };
      singleQueryImagesLeftArrow.current.onmouseout = () => {
        singleQueryImagesLeftArrow.current.style.boxShadow = "";
        singleQueryImagesLeftArrow.current.style.backgroundColor = "";
        singleQueryImagesLeftArrow.current.style.backgroundImage = "";
        singleQueryImagesLeftArrowFont.current.style.fontSize = "x-large";
      };
    }
    //that linear gradient to rightArrow
    //that linear gradient to rightArrow
    //that linear gradient to rightArrow
    //that linear gradient to rightArrow

    if (
      singleQueryImagesRightArrow.current &&
      singleQueryImagesRightArrowFont.current
    ) {
      singleQueryImagesRightArrow.current.onmouseover = () => {
        singleQueryImagesRightArrow.current.style.backgroundImage =
          "linear-gradient(to left,#c5c4c4,  #f0f0f0)";
        singleQueryImagesRightArrowFont.current.style.fontSize = "x-large";
      };
      singleQueryImagesRightArrow.current.onmouseout = () => {
        singleQueryImagesRightArrow.current.style.boxShadow = "";
        singleQueryImagesRightArrow.current.style.backgroundColor = "";
        singleQueryImagesRightArrow.current.style.backgroundImage = "";
        singleQueryImagesRightArrowFont.current.style.fontSize = "x-large";
      };
    }

    // container scrolling
    // container scrolling
    // container scrolling
    // container scrolling
    // container scrolling
    if (
      singleQueryImagesContainer.current &&
      singleQueryImagesLeftArrow.current &&
      singleQueryImagesRightArrow.current
    ) {
      singleQueryImagesLeftArrow.current.onclick = () => {
        const scrollLeft = singleQueryImagesContainer.current.scrollLeft;
        singleQueryImagesContainer.current.scroll({
          left: scrollLeft - 705,
          behavior: "smooth",
        });
      };

      singleQueryImagesRightArrow.current.onclick = () => {
        const scrollLeft = singleQueryImagesContainer.current.scrollLeft;
        singleQueryImagesContainer.current.scroll({
          left: scrollLeft + 705,
          behavior: "smooth",
        });
      };
    }

    //Videos
    //VIDEOS
    //VIDEOS

    //that linear gradient to leftArrow
    //that linear gradient to leftArrow
    //that linear gradient to leftArrow
    //that linear gradient to leftArrow

    if (
      singleQueryVideosLeftArrow.current &&
      singleQueryVideosLeftArrowFont.current
    ) {
      singleQueryVideosLeftArrow.current.onmouseover = () => {
        singleQueryVideosLeftArrow.current.style.backgroundImage =
          "linear-gradient(to left, #f0f0f0, #c5c4c4)";
        singleQueryVideosLeftArrowFont.current.style.fontSize = "x-large";
      };
      singleQueryVideosLeftArrow.current.onmouseout = () => {
        singleQueryVideosLeftArrow.current.style.boxShadow = "";
        singleQueryVideosLeftArrow.current.style.backgroundColor = "";
        singleQueryVideosLeftArrow.current.style.backgroundImage = "";
        singleQueryVideosLeftArrowFont.current.style.fontSize = "x-large";
      };
    }
    //that linear gradient to rightArrow
    //that linear gradient to rightArrow
    //that linear gradient to rightArrow
    //that linear gradient to rightArrow

    if (
      singleQueryVideosRightArrow.current &&
      singleQueryVideosRightArrowFont.current
    ) {
      singleQueryVideosRightArrow.current.onmouseover = () => {
        singleQueryVideosRightArrow.current.style.backgroundImage =
          "linear-gradient(to left,#c5c4c4,  #f0f0f0)";
        singleQueryVideosRightArrowFont.current.style.fontSize = "x-large";
      };
      singleQueryVideosRightArrow.current.onmouseout = () => {
        singleQueryVideosRightArrow.current.style.boxShadow = "";
        singleQueryVideosRightArrow.current.style.backgroundColor = "";
        singleQueryVideosRightArrow.current.style.backgroundImage = "";
        singleQueryVideosRightArrowFont.current.style.fontSize = "x-large";
      };
    }

    // container scrolling
    // container scrolling
    // container scrolling
    // container scrolling
    // container scrolling
    if (
      singleQueryVideosContainer.current &&
      singleQueryVideosLeftArrow.current &&
      singleQueryVideosRightArrow.current
    ) {
      singleQueryVideosLeftArrow.current.onclick = () => {
        const scrollLeft = singleQueryVideosContainer.current.scrollLeft;
        singleQueryVideosContainer.current.scroll({
          left: scrollLeft - 705,
          behavior: "smooth",
        });
      };

      singleQueryVideosRightArrow.current.onclick = () => {
        const scrollLeft = singleQueryVideosContainer.current.scrollLeft;
        singleQueryVideosContainer.current.scroll({
          left: scrollLeft + 705,
          behavior: "smooth",
        });
      };
    }
  }, []);

  //Making that headerRight as fixed
  //Making that headerRight as fixed
  //Making that headerRight as fixed
  //Making that headerRight as fixed
  //Making that headerRight as fixed
  //Making that headerRight as fixed

  window.onscroll = () => {
    const scroll = window.scrollY;
    console.log(scroll);

    if (scroll >= 620) {
      if (headerRight.current) {
        headerRight.current.style.position = "static";
        headerRight.current.style.marginTop = "-68.5rem";
      }
    } else if (scroll >= 145 && scroll < 620) {
      // console.log("scroll here");
      if (headerRight.current) {
        headerRight.current.style.position = "fixed";
        headerRight.current.style.top = "136rem";
        headerRight.current.style.marginTop = "-134.9rem";
      }
    } else {
      if (headerRight.current) {
        headerRight.current.style.position = "static";
        headerRight.current.style.marginTop = "-98.9rem";
      }
    }
  };

  //navigate back to my-queries
  //navigate back to my-queries
  //navigate back to my-queries
  //navigate back to my-queries
  //navigate back to my-queries
  //navigate back to my-querie
  useEffect(() => {
    if (viewComment.current) {
      viewComment.current.onclick = () => {
        window.scroll({
          top: 1500,
          behavior: "smooth",
        });
      };
    }
    const handleClick = () => {
      // console.log("running");
      navigate("/my_queries");
    };

    if (backClick.current) {
      backClick.current.addEventListener("click", handleClick);
    }
  });

  useEffect(() => {
    // fetch(`https://quire-flow-4.onrender.com/viewSingleQuery/${objectId}`, {
    fetch(`http://localhost:2300/viewSingleQuery/${objectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setQuery(response.curQuery);
        setComments(response.curQuery.comments);
        console.log(
          "in line 266 in single query",
          response.curQuery,
          "query",
          query,
          "comments",
          comments
        );
      })
      .catch((error) => {
        console.log(
          "Some error occurred while fetching the singleQueryData ",
          error
        );
      });
  }, [objectId]);

  return (
    <>
      {query ? (
        <div id="single_query_container">
          <div id="single_query_container_goBack" ref={backClick}>
            <span
              id="single_query_container_goBack_font"
              class="material-symbols-outlined"
            >
              undo
            </span>
            To All Queries
          </div>
          <div id="single_query_container_headerFront">{query.title}</div>
          <div id="single_queries_container_data">
            <div id="single_queries_container_text">{query.description}</div>
            {/* <div id="single_query_container_fillerFirst"></div> */}

            <div id="single_queries_container_images">
              <div id="single_queries_container_images_header">
                Attached Images
              </div>

              {/* LEFT ARROW */}
              {/* LEFT ARROW */}
              {/* LEFT ARROW */}
              {/* LEFT ARROW */}
              {/* LEFT ARROW */}
              <div
                id="single_queries_container_images_leftArrow"
                ref={singleQueryImagesLeftArrow}
              >
                <span
                  id="single_queries_container_images_leftArrowFont"
                  class="material-symbols-outlined"
                  ref={singleQueryImagesLeftArrowFont}
                >
                  arrow_back_ios
                </span>
              </div>

              {/* cONTAINER */}
              {/* cONTAINER */}
              {/* cONTAINER */}
              {/* cONTAINER */}

              <div
                id="single_queries_container_images_container"
                ref={singleQueryImagesContainer}
              >
                <div
                  class="single_queries_container_images_container_child"
                  id="single_queries_container_images_container_child_1"
                >
                  <img
                    class="single_queries_container_images_container_childImages"
                    src="/Imagess/cess-idul-k8hNYh5ymZ8-unsplash.jpg"
                    height="350"
                    width="650"
                    alt="Image for the query received"
                  />
                </div>
                <div
                  class="single_queries_container_images_container_child"
                  id="single_queries_container_images_container_child_2"
                >
                  {" "}
                  <img
                    class="single_queries_container_images_container_childImages"
                    src="/Imagess/joshua-woroniecki-0289jpHHk0o-unsplash.jpg"
                    height="350"
                    width="650"
                    alt="Image for the query received"
                  />
                </div>
                <div
                  class="single_queries_container_images_container_child"
                  id="single_queries_container_images_container_child_3"
                >
                  {" "}
                  <img
                    class="single_queries_container_images_container_childImages"
                    src="/Imagess/thestandingdesk-sGdVTZ0wt0s-unsplash.jpg"
                    height="350"
                    width="650"
                    alt="Image for the query received"
                  />
                </div>
                <div
                  class="single_queries_container_images_container_child"
                  id="single_queries_container_images_container_child_4"
                >
                  <img
                    class="single_queries_container_images_container_childImages"
                    src="/Imagess/rafael-de-nadai-b0eg-PYGICQ-unsplash.jpg"
                    height="350"
                    width="650"
                    alt="Image for the query received"
                  />
                </div>
                <div
                  class="single_queries_container_images_container_child"
                  id="single_queries_container_images_container_child_5"
                >
                  {" "}
                  <img
                    class="single_queries_container_images_container_childImages"
                    src="/Imagess/samuel-scalzo-xyuYk9oLA8I-unsplash.jpg"
                    height="350"
                    width="650"
                    alt="Image for the query received"
                  />
                </div>
                <div
                  class="single_queries_container_images_container_child"
                  id="single_queries_container_images_container_child_6"
                >
                  {" "}
                  <img
                    class="single_queries_container_images_container_childImages"
                    src="/Imagess/william-daigneault-Cd84YdL9px8-unsplash.jpg"
                    height="350"
                    width="650"
                    alt="Image for the query received"
                  />
                </div>
                <div
                  class="single_queries_container_images_container_child"
                  id="single_queries_container_images_container_child_7"
                >
                  {" "}
                  <img
                    class="single_queries_container_images_container_childImages"
                    src="/Imagess/sable-flow-T74mVg__F_k-unsplash.jpg"
                    height="350"
                    width="650"
                    alt="Image for the query received"
                  />
                </div>
                <div
                  class="single_queries_container_images_container_child"
                  id="single_queries_container_images_container_child_8"
                >
                  {" "}
                  <img
                    class="single_queries_container_images_container_childImages"
                    src="/Imagess/marco-priore-QW5XUQvlB00-unsplash.jpg"
                    height="350"
                    width="650"
                    alt="Image for the query received"
                  />
                </div>
                <div
                  class="single_queries_container_images_container_child"
                  id="single_queries_container_images_container_child_9"
                >
                  {" "}
                  <img
                    class="single_queries_container_images_container_childImages"
                    src="/Imagess/dennis-eusebio-2ihYdRZgyWw-unsplash.jpg"
                    height="350"
                    width="650"
                    alt="Image for the query received"
                  />
                </div>
                <div
                  class="single_queries_container_images_container_child"
                  id="single_queries_container_images_container_child_10"
                >
                  {" "}
                  <img
                    class="single_queries_container_images_container_childImages"
                    src="/Imagess/adrien-olichon-WNs0bW8kHTM-unsplash.jpg"
                    height="350"
                    width="650"
                    alt="Image for the query received"
                  />
                </div>
              </div>

              {/* //RIGHT ARROW */}
              {/* //RIGHT ARROW */}
              {/* //RIGHT ARROW */}
              {/* //RIGHT ARROW */}

              <div
                id="single_queries_container_images_rightArrow"
                ref={singleQueryImagesRightArrow}
              >
                <span
                  id="single_queries_container_images_rightArrowFont"
                  class="material-symbols-outlined"
                  ref={singleQueryImagesRightArrowFont}
                >
                  arrow_forward_ios
                </span>
              </div>
            </div>

            {/* <div id="single_query_container_fillerSecond"></div> */}
          </div>

          <div id="single_query_container_headerRight" ref={headerRight}>
            <div id="single_query_container_headerRight_heading">
              Reciever Details
            </div>
            <div id="single_query_container_headerRight_name">
              <div id="single_query_container_headerRight_name_first">
                Name/Designation
              </div>
              <div id="single_query_container_headerRight_name_second">
                {query.receiverName}
              </div>
            </div>
            <div id="single_query_container_headerRight_anonyKey">
              <div id="single_query_container_headerRight_anonyKey_first">
                Anony Key
              </div>
              <div id="single_query_container_headerRight_anonyKey_second">
                {query.receiverAnonyKey}
              </div>
            </div>

            <div id="single_query_container_headerRight_organisation">
              <div id="single_query_container_headerRight_organisation_first">
                Organisation
              </div>
              <div id="single_query_container_headerRight_organisation_second">
                {query.receiverOrganisation}
              </div>
            </div>
            <div id="single_query_container_headerRight_department">
              <div id="single_query_container_headerRight_department_first">
                Department
              </div>
              <div id="single_query_container_headerRight_department_second">
                {query.receiverDepartment}
              </div>
            </div>
            <div id="single_query_container_headerRight_preferences">
              <div id="single_query_container_headerRight_preferences_first">
                Preferences
              </div>
              <div id="single_query_container_headerRight_preferences_second">
                {query.preferences}
              </div>
            </div>
            <div id="single_query_container_headerRight_status">
              {query.markAs}
            </div>
            <div
              id="single_query_container_headerRight_comments"
              ref={viewComment}
            >
              View Comment
            </div>
          </div>

          <div id="single_query_container_comment">
            <div id="single_query_container_comment_heading">
              Comment from the QueryReciever
            </div>
            <div id="single_queries_container_comment_content">
              {comments.map((item, key) => {
                return <Single_Comment content={item.content} key={key} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div id="noToken_global">
          Please <Link to="/authentication">Login/SignUp</Link> to see expand
          version of the query <br /> OR <br /> No such query present
        </div>
      )}
    </>
  );
};

export default Single_Query;
