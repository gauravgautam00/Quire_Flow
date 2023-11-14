import React, { useRef } from "react";

const My_Queries = () => {
  const tagLine = useRef(null);
  const para = useRef(null);
  const tagLine_inner = useRef(null);

  window.onscroll = () => {
    const curScroll = window.scrollY;
    console.log(curScroll, curScroll / 100 - 1);
    if (tagLine.current && tagLine_inner.current) {
      // tagLine.current.style.transform = `translate(0px, ${window.scrollY}px)`;
      if (curScroll >= 679.3333129882812) {
        tagLine.current.style.backgroundColor = "black";
        tagLine.current.style.transform = `translate(0px , 679px) `;
        tagLine.current.style.width = `calc(-858px + ${1.5 * curScroll}px)`;
      } else if (curScroll >= 490) {
        tagLine.current.style.backgroundColor = "rgba(255, 255, 255, 0.01)";
        // tagLine.current.style.transform = `translate(0px, 0px)`;
        tagLine.current.style.transform = `translate(0px, ${window.scrollY}px)`;
      } else if (curScroll >= 200) {
        tagLine.current.style.backgroundColor = "rgba(255, 255, 255, 0.01)";
        tagLine.current.style.transform = `translate(0px, ${window.scrollY}px)`;

        tagLine_inner.current.style.visibility = "hidden";
        tagLine_inner.current.style.opacity = "0";
        tagLine.current.style.border = "2px solid";
        tagLine.current.style.borderRadius = `${curScroll - 100}%`;
        tagLine.current.style.width = `calc(858px - ${1.5 * curScroll}px)`;
      } else {
        tagLine.current.style.backgroundColor = "rgba(255, 255, 255, 0.01)";
        tagLine.current.style.transform = `translate(0px, ${window.scrollY}px)`;

        tagLine.current.style.width = `calc(858px - ${curScroll}px`;
        tagLine_inner.current.style.visibility = "visible";
        tagLine_inner.current.style.opacity = "1";
        tagLine_inner.current.innerText =
          "Your Questions, Your Space: Explore Your Sent Queries";

        tagLine.current.style.borderRadius = "0%";
        tagLine.current.style.height = "8rem";
      }
    }

    //para
    //para
    //para
    //para
    if (para.current) {
      para.current.style.transform = `translate(0px ,${window.scrollY}px)`;

      if (curScroll >= 100) {
        // para.current.style.display   = "none";
        para.current.style.visibility = "hidden";
        para.current.style.opacity = "0";
      } else {
        para.current.style.visibility = "visible";
        para.current.style.opacity = "1";
        para.current.style.display = "block";
      }

      if (curScroll >= 178) {
        para.current.style.display = "none";
      } else {
        para.current.style.display = "block";
      }
    }
  };

  return (
    <>
      <div id="my_queries_container">
        <div id="my_queries_container_tagLine" ref={tagLine}>
          <span id="my_queries_container_tagLine_inner" ref={tagLine_inner}>
            Your Questions, Your Space: Explore Your Sent Queries
          </span>
        </div>
        <div id="my_queries_container_para" ref={para}>
          Welcome to the "My Queries" section, your personal gateway to a world
          of inquiries and feedback. Here, you can easily explore and revisit
          all the queries you've ever sent. It's a space where your questions,
          concerns, and feedback are laid out for your review. From urgent
          requests to important suggestions, your queries tell a story – your
          story.At "My Queries," we believe that every question and suggestion
          is a stepping stone towards improvement and growth.
        </div>
      </div>
      <div id="my_queries_container_firstSecondGap"></div>
      <div id="my_queries_container_second"></div>
    </>
  );
};

export default My_Queries;
