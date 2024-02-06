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
  const [preferenceValue, setPreferenceValue] = useState("Not Specified");

  const setPreference = (val) => {
    setPreferenceValue(val);
  };

  useEffect(() => {
    if (
      leftPreferencesBottomBox.current &&
      leftPreferencesDropDown.current &&
      leftPreferencesDropDownIcon.current
    ) {
      leftPreferencesBottomBox.current.style.height = "0rem";
      leftPreferencesDropDown.current.onclick = () => {
        if (leftPreferencesBottomBox.current.style.height == "0rem") {
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
  }, []);
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
                />
              </div>
            </div>
            <div id="new_query_container_main_leftAds">
              <div
                class="new_query_container_main_leftAds_child"
                id="new_query_container_main_leftAds_first"
              >
                Advertisement
              </div>
              <div
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
              </div>
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
            <hr />
            <div id="new_query_container_main_right_content_videos">
              <div id="new_query_container_main_right_content_videos_heading">
                Upload video
              </div>
              <div id="new_query_container_main_right_content_videos_upload">
                <input type="file" name="video" accept="video/*" required />
              </div>
              <div id="new_query_container_main_right_content_videos_container"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="new_query_container_submit">Submit</div>
    </div>
  );
};

export default NewQuery;
