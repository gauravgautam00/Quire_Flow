import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const NewQuery = () => {
  const navigate = useNavigate();
  const newQueryBack = useRef(null);
  const leftPreferencesDropDown = useRef(null);
  const leftPreferencesDropDownIcon = useRef(null);
  const leftPreferencesBottomBox = useRef(null);
  const anonyKeyInput = useRef(null);
  const titleInput = useRef(null);
  const refPublicQuery = useRef(null);
  const descriptionInput = useRef(null);
  const [preferenceValue, setPreferenceValue] = useState("None");
  const [publicQuery, setPublicQuery] = useState(false);
  const submitButton = useRef(null);
  const setPreference = (val) => {
    setPreferenceValue(val);
    console.log(preferenceValue);
  };

  useEffect(() => {
    if (
      leftPreferencesBottomBox.current &&
      leftPreferencesDropDown.current &&
      leftPreferencesDropDownIcon.current
    ) {
      leftPreferencesBottomBox.current.style.height = "0rem";
      leftPreferencesDropDown.current.onclick = () => {
        if (
          leftPreferencesBottomBox.current.style.height == "0rem" &&
          !publicQuery
        ) {
          leftPreferencesBottomBox.current.style.height = "9rem";
          leftPreferencesDropDownIcon.current.style.transform =
            "rotate(-180deg)";
        } else {
          leftPreferencesBottomBox.current.style.height = "0rem";
          leftPreferencesDropDownIcon.current.style.transform = "rotate(0deg)";
        }
      };
    }

    if (newQueryBack.current) {
      newQueryBack.current.onclick = () => {
        navigate("/");
      };
    }

    if (
      submitButton.current &&
      anonyKeyInput.current &&
      titleInput.current &&
      descriptionInput.current
    ) {
      submitButton.current.onclick = () => {
        if (!anonyKeyInput.current.value && !publicQuery) {
          alert("Please add anonyKey");
          return;
        }
        console.log("before sending", preferenceValue);
        const dataToSend = {
          preferences: preferenceValue,
          receiverAnonyKey: publicQuery ? 0 : anonyKeyInput.current.value,
          title: titleInput.current.value,
          image: "Not specified",
          video: "Not specified",
          description: descriptionInput.current.value,
          isPublic: publicQuery,
        };
        console.log("datatosend in new_Query.jsx", dataToSend);

        fetch("https://quire-flow-4.onrender.com/addQuery", {
          // fetch("http://localhost:2300/addQuery", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(dataToSend),
        })
          .then((res) => {
            if (!res.ok) {
              alert("Can't add the query please try again later");
              res.json().then(() => {
                throw new Error(
                  "Some erro occurred whileadding the query try again"
                );
              });
            }
            return res.json();
          })
          .then((response) => {
            console.log("response", response);
            alert(
              "Successfully made a query , You can view all your queries in My Query Section on top navbar"
            );
          })
          .catch((err) => {
            console.log("Some error occurred", err);
          });
      };
    }
  });

  useEffect(() => {
    if (refPublicQuery.current && anonyKeyInput.current) {
      // refPublicQuery.current.style.color = "black";

      refPublicQuery.current.onclick = () => {
        console.log("clicked public query");
        if (refPublicQuery.current.style.color == "black") {
          refPublicQuery.current.style.color = "white";
          refPublicQuery.current.style.backgroundColor = "black";
          setPublicQuery(true);
          anonyKeyInput.current.readOnly = true;
          anonyKeyInput.current.value = "";
          setPreference("none");
        } else {
          refPublicQuery.current.style.color = "black";
          refPublicQuery.current.style.backgroundColor = "white";
          setPublicQuery(false);
          anonyKeyInput.current.readOnly = false;
        }
      };
    }
  });

  return (
    <div id="new_query_container">
      <div id="new_query_container_back" ref={newQueryBack}>
        <span
          id="new_query_container_backIcon"
          class="material-symbols-outlined"
        >
          arrow_back
        </span>
        Back
      </div>
      <div id="new_query_container_heading">RELEASE NEW QUERY</div>
      <div id="new_query_container_main">
        <div id="new_query_container_main_left">
          <div id="new_query_container_main_left_heading">Enter Details</div>
          <div id="new_query_container_main_left_content">
            <div
              id="new_query_container_main_leftPreferences"
              class="new_query_container_main_left_childClass"
            >
              <div
                class="new_query_container_main_left_headingClass"
                id="new_query_container_main_leftPreferences_heading"
              >
                Select Preferences
              </div>
              <div
                id="new_query_container_main_leftPreferences_dropDown"
                ref={leftPreferencesDropDown}
              >
                <div
                  id="new_query_container_main_leftPreferences_dropDown_heading"
                  ref={leftPreferencesDropDown}
                >
                  {preferenceValue}
                </div>
                <span
                  id="new_query_container_main_leftPreferences_dropDownIcon"
                  class="material-symbols-outlined"
                  ref={leftPreferencesDropDownIcon}
                >
                  expand_more
                </span>
              </div>
              <div
                id="new_query_container_main_leftPreferences_bottomBox"
                ref={leftPreferencesBottomBox}
              >
                <div
                  onClick={() => {
                    setPreference("Urgent");
                  }}
                  className="new_query_container_main_leftPreferences_bottomBox_childClass"
                  id="new_query_container_main_leftPreferences_bottomBox_child1"
                >
                  Urgent
                </div>
                <div
                  onClick={() => {
                    setPreference("Normal");
                  }}
                  className="new_query_container_main_leftPreferences_bottomBox_childClass"
                  id="new_query_container_main_leftPreferences_bottomBox_child2"
                >
                  Normal
                </div>
                <div
                  onClick={() => {
                    setPreference("Important");
                  }}
                  className="new_query_container_main_leftPreferences_bottomBox_childClass"
                  id="new_query_container_main_leftPreferences_bottomBox_child3"
                >
                  Important
                </div>
                <div
                  onClick={() => {
                    setPreference("Research Required");
                  }}
                  className="new_query_container_main_leftPreferences_bottomBox_childClass"
                  id="new_query_container_main_leftPreferences_bottomBox_child4"
                >
                  Research Required
                </div>
                <div
                  onClick={() => {
                    setPreference("None");
                  }}
                  className="new_query_container_main_leftPreferences_bottomBox_childClass"
                  id="new_query_container_main_leftPreferences_bottomBox_child5"
                >
                  None
                </div>
              </div>
            </div>
            <div
              id="new_query_container_main_leftAnonyKey"
              class="new_query_container_main_left_childClass"
            >
              <div
                class="new_query_container_main_left_headingClass"
                id="new_query_container_main_leftAnonyKey_heading"
              >
                Enter Reciever's AnonyKey
                <label for="anony_key">
                  <span style={{ color: "red" }}> *</span>
                </label>
              </div>
              <div id="new_query_container_main_leftAnonyKey_input">
                <input
                  name="email"
                  id="new_query_container_main_leftAnonyKey_inputReal"
                  className="new_query_container_main_child_inputReal"
                  type="text"
                  required
                  ref={anonyKeyInput}
                />
              </div>
            </div>
            <div id="new_query_container_main_leftPublic" ref={refPublicQuery}>
              {publicQuery ? "Marked" : "Mark"} as Public query
            </div>
            <div id="new_query_container_main_leftAds">
              <div
                class="new_query_container_main_leftAds_child"
                id="new_query_container_main_leftAds_first"
              >
                Advertisement
              </div>
              {/* <div
                class="new_query_container_main_leftAds_child"
                id="new_query_container_main_leftAds_second"
              >
                Advertisement
              </div>

              <div
                class="new_query_container_main_leftAds_child"
                id="new_query_container_main_leftAds_third"
              >
                Advertisement
              </div> */}
            </div>
          </div>
        </div>
        <div id="new_query_container_main_right">
          <div id="new_query_container_main_right_heading">
            Enter Query Details
          </div>
          <div id="new_query_container_main_right_content">
            <div id="new_query_container_main_right_content_description">
              <div id="new_query_container_main_right_content_description_first">
                <div id="new_query_container_main_right_content_description_first_heading">
                  Enter Query title
                </div>
                <div id="new_query_container_main_right_content_description_first_para">
                  <input
                    id="new_query_container_main_right_content_description_first_paraInput"
                    type="text"
                    placeholder="Enter query title"
                    required
                    ref={titleInput}
                  />
                </div>
              </div>

              <div id="new_query_container_main_right_content_description_second">
                <div id="new_query_container_main_right_content_description_second_heading">
                  Enter query description
                </div>
                <div id="new_query_container_main_right_content_description_second_para">
                  <textarea
                    id="new_query_container_main_right_content_description_second_paraTextarea"
                    placeholder="Enter query description here"
                    required
                    ref={descriptionInput}
                  />
                </div>
              </div>
            </div>
            <hr />
            <div id="new_query_container_main_right_content_photos">
              <div id="new_query_container_main_right_content_photos_heading">
                Upload photo
              </div>
              <div id="new_query_container_main_right_content_photos_upload">
                <input type="file" name="photo" accept="image/*" required />
              </div>
              <div id="new_query_container_main_right_content_photos_container"></div>
            </div>

            {/* <div id="new_query_container_main_right_content_videos">
              <div id="new_query_container_main_right_content_videos_heading">
                Upload video
              </div>
              <div id="new_query_container_main_right_content_videos_upload">
                <input type="file" name="video" accept="video/*" required />
              </div>
              <div id="new_query_container_main_right_content_videos_container"></div>
            </div> */}
          </div>
        </div>
      </div>
      <div id="new_query_container_submit" ref={submitButton}>
        Submit
      </div>
    </div>
  );
};

export default NewQuery;
