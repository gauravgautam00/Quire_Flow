import React from "react";

const Quick_Updates_child = (props) => {
  return (
    <div className="for_footer_color" id="quickUpdates_child_container">
      <div id="quickUpdates_child_container_image">
        <div id="quickUpdates_child_container_main_image">
          {props.image_url == null ? (
            "NO IMAGE FOUND"
          ) : (
            <img
              id="quickUpdates_child_container_image_real"
              src={props.image_url}
            />
          )}
        </div>
      </div>
      <div id="quickUpdates_child_container_main_data">
        <div id="quickUpdates_child_container_title">
          Title - {props.title == null ? "NO tITLE AVAILAIBLE" : props.title}
        </div>

        <div id="quickUpdates_child_container_description">
          Description -
          {props.description == null
            ? "NO DESCRIPTION AVAILAIBLE"
            : props.description}
        </div>

        <div id="quickUpdates_child_container_content">
          Content -
          {props.content == null ? "NO CONTENT AVAILAIBLE" : props.content}
        </div>
        <div id="quickUpdates_child_container_author">
          Author -{" "}
          {props.author == null ? "NO AUTHOR AVAILAIBLE" : props.author}
        </div>

        <div id="quickUpdates_child_container_url">
          URL -
          {props.url == null ? (
            "NO dATA AVAILAIBLR"
          ) : (
            <a href={props.url} target="_blank">
              Read More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quick_Updates_child;
