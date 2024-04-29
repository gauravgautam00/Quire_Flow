import React from "react";

const GlobalSharing_concept = () => {
  const scrollIt = () => {
    window.scrollTo({
      top: 2116,
      behavior: "smooth",
    });
  };
  return (
    <div className="for_footer_color" id="GlobalSharing_concept_container">
      <div id="GlobalSharing_concept_container_title">Public Sharing</div>
      <div id="GlobalSharing_concept_container_message">
        QuireFlow goes beyond one-on-one interactions with its innovative public
        sharing feature. Elevate your queries to a broader audience, inviting
        diverse perspectives and insights. By opting for public sharing, your
        questions become part of a collective conversation, opening the door to
        a wealth of ideas. Embrace the collaborative spirit as the QuireFlow
        community comes together to offer valuable input and varied viewpoints.
        Experience the power of shared knowledge and foster a community that
        thrives on collective intelligence. Join QuireFlow, where your queries
        transcend individual conversations and become catalysts for shared
        learning and growth.
      </div>
      <div id="GlobalSharing_concept_container_arrow">
        <div
          id="GlobalSharing_concept_container_arrow_first"
          onClick={scrollIt}
        >
          Search Publically Shared Queries Below
        </div>
      </div>
    </div>
  );
};

export default GlobalSharing_concept;
