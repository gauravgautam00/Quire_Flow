import React from "react";
import { useRef, useState, useEffect } from "react";

import Research_Child_Deeper_dive from "./Research_Child_Deeper_dive";
import OnlineWebinar_Child_Deeper_dive from "./OnlineWebinar_Child_Deeper_dive";
import OpenParticipation_Child_Deeper_dive from "./OpenParticipation_Child_Deeper_dive";
import CustomerStory_Child_Deeper_dive from "./CustomerStory_Child_Deeper_dive";
const Deeper_Dive = () => {
  const leftContainer = useRef(null);
  const rightContainer = useRef(null);
  const bottomReference = useRef(null);
  const bottomCustomerStory = useRef(null);
  const bottomOpenParticipation = useRef(null);
  const bottomOnlineWebinar = useRef(null);
  const leftContainerResearch = useRef(null);
  const leftContainerOpenParticipation = useRef(null);
  const leftContainerCustomerStory = useRef(null);
  const leftContainerOnlineWebinar = useRef(null);

  const [turn, setTurn] = useState(3);

  window.onscroll = () => {
    const curScroll = window.scrollY;
    if (curScroll >= 87) {
      if (leftContainer.current && rightContainer.current) {
        leftContainer.current.style.position = "fixed";
        leftContainer.current.style.marginTop = "-70px";
        rightContainer.current.style.marginTop = "1rem";
        rightContainer.current.style.marginLeft = "21.43rem";
      }
    } else {
      leftContainer.current.style.position = "static";
      leftContainer.current.style.marginTop = "17px";
      rightContainer.current.style.marginTop = "1rem";
      rightContainer.current.style.marginLeft = "1rem";
    }
  };

  useEffect(() => {
    if (
      bottomReference.current &&
      bottomOpenParticipation.current &&
      bottomCustomerStory.current &&
      bottomOnlineWebinar.current &&
      leftContainerResearch.current &&
      leftContainerOpenParticipation.current &&
      leftContainerCustomerStory.current &&
      leftContainerOnlineWebinar.current
    ) {
      leftContainerResearch.current.onclick = () => {
        bottomReference.current.style.height = "10.5rem";
        bottomOpenParticipation.current.style.height = "0rem";
        setTurn(0);
        bottomCustomerStory.current.style.height = "0rem";
        bottomOnlineWebinar.current.style.height = "0rem";
        leftContainerResearch.current.style.backgroundColor = "#16252D";
        leftContainerResearch.current.style.color = "white";
        leftContainerOpenParticipation.current.style.backgroundColor = "white";
        leftContainerOpenParticipation.current.style.color = "#16252D";
        leftContainerCustomerStory.current.style.backgroundColor = "white";
        leftContainerCustomerStory.current.style.color = "#16252D";
        leftContainerOnlineWebinar.current.style.backgroundColor = "white";
        leftContainerOnlineWebinar.current.style.color = "#16252D";
      };
      leftContainerOpenParticipation.current.onclick = () => {
        bottomReference.current.style.height = "0rem";
        bottomOpenParticipation.current.style.height = "10.5rem";
        setTurn(1);
        bottomCustomerStory.current.style.height = "0rem";
        bottomOnlineWebinar.current.style.height = "0rem";
        leftContainerResearch.current.style.backgroundColor = "white";
        leftContainerResearch.current.style.color = "#16252D";
        leftContainerOpenParticipation.current.style.backgroundColor =
          "#16252D";
        leftContainerOpenParticipation.current.style.color = "white";
        leftContainerCustomerStory.current.style.backgroundColor = "white";
        leftContainerCustomerStory.current.style.color = "#16252D";
        leftContainerOnlineWebinar.current.style.backgroundColor = "white";
        leftContainerOnlineWebinar.current.style.color = "#16252D";
      };
      leftContainerCustomerStory.current.onclick = () => {
        bottomReference.current.style.height = "0rem";
        bottomOpenParticipation.current.style.height = "0rem";
        bottomCustomerStory.current.style.height = "10.5rem";
        setTurn(2);

        bottomOnlineWebinar.current.style.height = "0rem";
        leftContainerResearch.current.style.backgroundColor = "white";
        leftContainerResearch.current.style.color = "#16252D";
        leftContainerOpenParticipation.current.style.backgroundColor = "white";
        leftContainerOpenParticipation.current.style.color = "#16252D";
        leftContainerCustomerStory.current.style.backgroundColor = "#16252D";
        leftContainerCustomerStory.current.style.color = "white";
        leftContainerOnlineWebinar.current.style.backgroundColor = "white";
        leftContainerOnlineWebinar.current.style.color = "#16252D";
      };
      leftContainerOnlineWebinar.current.onclick = () => {
        bottomReference.current.style.height = "0rem";
        bottomOpenParticipation.current.style.height = "0rem";
        bottomCustomerStory.current.style.height = "0rem";
        bottomOnlineWebinar.current.style.height = "10.5rem";
        leftContainerResearch.current.style.backgroundColor = "white";
        setTurn(3);
        leftContainerResearch.current.style.color = "#16252D";
        leftContainerOpenParticipation.current.style.backgroundColor = "white";
        leftContainerOpenParticipation.current.style.color = "#16252D";
        leftContainerCustomerStory.current.style.backgroundColor = "white";
        leftContainerCustomerStory.current.style.color = "#16252D";
        leftContainerOnlineWebinar.current.style.backgroundColor = "#16252D";
        leftContainerOnlineWebinar.current.style.color = "white";
      };
    }
  }, []);

  return (
    <div id="deeper_dive_container">
      <div id="deeper_dive_container_left" ref={leftContainer}>
        {/* //child 1 */}
        {/* //child 1 */}
        {/* //child 1 */}

        <div
          class="deeper_dive_container_left_childClass"
          id="deeper_dive_container_left_research"
          ref={leftContainerResearch}
        >
          Research
          <span
            id="deeper_dive_container_left_researchIcon"
            class="material-symbols-outlined"
          >
            expand_more
          </span>
        </div>
        <div
          id="deeper_dive_container_left_research_bottom"
          ref={bottomReference}
        >
          <div id="deeper_dive_container_left_research_bottom_para">
            Dive into the world of artificial intelligence with Quire-Flow's
            dedicated research space.Our team is at the forefront of exploring
            and embracing the future of AI, bringing you insights,
            breakthroughs, and innovations
          </div>
        </div>

        {/* //child 2 */}
        {/* //child 2 */}
        {/* //child 2 */}
        <div
          class="deeper_dive_container_left_childClass"
          id="deeper_dive_container_left_openParticipation"
          ref={leftContainerOpenParticipation}
        >
          Open Participation
          <span
            id="deeper_dive_container_left_openParticipationIcon"
            class="material-symbols-outlined"
          >
            expand_more
          </span>
        </div>
        <div
          id="deeper_dive_container_left_openParticipation_bottom"
          ref={bottomOpenParticipation}
        >
          <div id="deeper_dive_container_left_openParticipation_bottom_para">
            Dive into the world of artificial intelligence with Quire-Flow's
            dedicated research space.Our team is at the forefront of exploring
            and embracing the future of AI, bringing you insights,
            breakthroughs, and innovations
          </div>
        </div>

        {/* //child 3 */}
        {/* //child 3 */}
        {/* //child 3 */}
        <div
          class="deeper_dive_container_left_childClass"
          id="deeper_dive_container_left_customerStory"
          ref={leftContainerCustomerStory}
        >
          Customer Story
          <span
            id="deeper_dive_container_left_customerStoryIcon"
            class="material-symbols-outlined"
          >
            expand_more
          </span>
        </div>
        <div
          id="deeper_dive_container_left_customerStory_bottom"
          ref={bottomCustomerStory}
        >
          <div id="deeper_dive_container_left_customStory_bottom_para">
            Dive into the world of artificial intelligence with Quire-Flow's
            dedicated research space.Our team is at the forefront of exploring
            and embracing the future of AI, bringing you insights,
            breakthroughs, and innovations
          </div>
        </div>
        {/* //child 4 */}
        {/* //child 4 */}
        {/* //child 4 */}
        <div
          class="deeper_dive_container_left_childClass"
          id="deeper_dive_container_left_onlineWebinar"
          ref={leftContainerOnlineWebinar}
        >
          Online Webinar
          <span
            id="deeper_dive_container_left_onlineWebinarIcon"
            class="material-symbols-outlined"
          >
            expand_more
          </span>
        </div>
        <div
          id="deeper_dive_container_left_onlineWebinar_bottom"
          ref={bottomOnlineWebinar}
        >
          <div id="deeper_dive_container_left_onlineWebinar_bottom_para">
            Dive into the world of artificial intelligence with Quire-Flow's
            dedicated research space.Our team is at the forefront of exploring
            and embracing the future of AI, bringing you insights,
            breakthroughs, and innovations
          </div>
        </div>
      </div>
      <div id="deeper_dive_container_right" ref={rightContainer}>
        <div id="deeper_dive_container_right_content">
          {turn == 3 ? (
            <OnlineWebinar_Child_Deeper_dive />
          ) : turn == 2 ? (
            <CustomerStory_Child_Deeper_dive />
          ) : turn == 1 ? (
            <OpenParticipation_Child_Deeper_dive />
          ) : (
            <Research_Child_Deeper_dive />
          )}
        </div>
      </div>
    </div>
  );
};

export default Deeper_Dive;
