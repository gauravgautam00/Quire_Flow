import React from "react";
// import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Single_Comment from "./Single_Comment";
const Single_Query_Global = (props) => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const singleQueryBack = useRef(null);

  const photosMainContainer = useRef(null);

  const queryMarkUpperBox = useRef(null);
  const queryMarkBottomBox = useRef(null);
  const queryMarkUpperBoxIcon = useRef(null);
  const [markAsValue, setMarkAsValue] = useState("Mark it as");
  const extraDetailsUpperBox = useRef(null);
  const extraDetailsBottomBox = useRef(null);
  const extraDetailsIcon = useRef(null);
  const [isLoadingMarkAs, setIsLoadingMarkAs] = useState(false);
  const downDataDelete = useRef(null);

  useEffect(() => {
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
        // // console.log("ll");
        props.isPublicQuery
          ? navigate("/")
          : navigate("/administrative_matter");
      };
    }
  }, []);

  const callDBToSaveMarkAs = () => {
    if (localStorage.getItem("token")) {
      setIsLoadingMarkAs(true);
      // // // console.log("markAsValueeeeeeeeeeeeeeeeeeeeeeeeeee", markAsValue);

      if (markAsValue.toLowerCase() === "Mark it as".toLowerCase()) {
        alert("Select One option");
        setIsLoadingMarkAs(false);
        return;
      }
      fetch("https://quire-flow-4.onrender.com/setMarkAs", {
        // fetch("http://localhost:2300/setMarkAs", {
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
          setIsLoadingMarkAs(false);
          // // console.log("callDBToSaveMarkAs", response);
          alert("Success");
          setMarkAsValue("Mark it as");
          // window.location.reload();
        })
        .catch((err) => {
          setIsLoadingMarkAs(false);
          alert("Failed to save   . Try again later");

          console.log("error occurred", err);
        });
    }
  };
  const setValueMarkAs = (val) => {
    setMarkAsValue(val);
    // console.log(markAsValue);
  };

  //for comments
  //for comments
  //for comments

  const textareaContainingComment = useRef(null);
  const commentSendButton = useRef(null);
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetch(
        `https://quire-flow-4.onrender.com/viewComment/${props.query._id}`,
        {
          // fetch(`http://localhost:2300/viewComment/${props.query._id}`, {
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
            query_id: props.query._id,
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
            Recieved at - {new Date(props.query.createdAt).toLocaleString()}
          </div>
          {!props.isPublicQuery ? (
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
        {props.isPublicQuery ? "Public Query" : "Query For You"}
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
        <div id="single_query_global_queryPhotos_heading">Attached Photo</div>
        <div id="single_query_global_queryPhotos_main">
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
                ref={textareaContainingComment}
              ></textarea>
            </div>
            <div
              id="single_query_global_queryComment_leftPart_send"
              ref={commentSendButton}
            >
              {" "}
              Send
            </div>
          </div>
          <div id="single_query_global_queryComment_rightPart">
            <div id="single_query_global_queryComment_rightPart_heading">
              View {!props.isPublicQuery ? "your previous" : "all"} comments
            </div>
            <div id="single_query_global_queryComment_rightPart_main">
              {allComments ? (
                allComments.map((data, item) => {
                  return (
                    <Single_Comment
                      key={item}
                      content={data.content}
                      date={new Date(data.createdAt).toLocaleString()}
                    />
                  );
                })
              ) : (
                <div>No comments</div>
              )}
            </div>
          </div>
        </div>
      </div>
      {!props.isPublicQuery ? (
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
            <div id="loading_markAs">{isLoadingMarkAs ? "Loading..." : ""}</div>
            <div
              onClick={() => {
                callDBToSaveMarkAs();
              }}
              id="single_query_global_queryMark_button"
            >
              Done
            </div>
          </div>
          <div id="single_query_global_queryDelete" ref={downDataDelete}>
            Delete query
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Single_Query_Global;
