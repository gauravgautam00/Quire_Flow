import React, { useRef } from "react";

const My_Queries = () => {
  const tagLine = useRef(null);
  const para = useRef(null);
  const tagLine_inner = useRef(null);
  const myQuerySecond = useRef(null);
  const myQuerySecondHeader = useRef(null);
  const myQuerySecondImage = useRef(null);
  const myQuerySecondBottom = useRef(null);

  window.onscroll = () => {
    const curScroll = window.scrollY;
    console.log("window scroll By", curScroll);
    if (curScroll >= 3126) {
      if (myQuerySecondHeader.current) {
        myQuerySecondHeader.current.style.position = "relative";
        myQuerySecondHeader.current.style.top = "149rem";
      }
      if (myQuerySecondBottom.current) {
        myQuerySecondBottom.current.style.marginTop = "-25rem";
      }
      if (myQuerySecondImage.current) {
        myQuerySecondImage.current.style.top = "122rem";
      }
    } else if (curScroll >= 2710) {
      if (myQuerySecondImage.current) {
        myQuerySecondImage.current.style.position = "relative";
        myQuerySecondImage.current.style.top = "134.1rem";
      }
      if (myQuerySecondBottom.current) {
        myQuerySecondBottom.current.style.marginTop = "-15rem";
      }
      if (myQuerySecondHeader.current) {
        myQuerySecondHeader.current.style.position = "fixed";
        myQuerySecondHeader.current.style.top = "0rem";
      }
    }
    //   if (myQuerySecondImage.current) {
    //     myQuerySecondImage.current.style.position = "relative";
    //     myQuerySecondImage.current.style.top = "133rem";
    //   }
    //   if (myQuerySecondBottom.current) {
    //     myQuerySecondBottom.current.style.marginTop = "-25.3rem";
    //   }
    //   if (myQuerySecondHeader.current) {
    //     myQuerySecondHeader.current.style.position = "fixed";
    //     myQuerySecondHeader.current.style.top = "0rem";
    //   }
    // }
    else if (curScroll >= 729) {
      if (myQuerySecondHeader.current) {
        myQuerySecondHeader.current.style.position = "fixed";
        myQuerySecondHeader.current.style.top = "0rem";
      }
      if (myQuerySecondImage.current) {
        myQuerySecondImage.current.style.position = "fixed";
        myQuerySecondImage.current.style.top = "10.3rem";
      }
      if (myQuerySecondBottom.current) {
        myQuerySecondBottom.current.style.marginTop = "10rem";
        // myQuerySecondBottom.current.style.top = "10.3rem";
      }
    } else {
      if (myQuerySecondHeader.current) {
        myQuerySecondHeader.current.style.position = "static";
      }
      if (myQuerySecondImage.current) {
        myQuerySecondImage.current.style.position = "relative";
        myQuerySecondImage.current.style.top = "0rem";
      }
      if (myQuerySecondBottom.current) {
        myQuerySecondBottom.current.style.marginTop = "-25.3rem";
      }
    }
    if (tagLine.current && tagLine_inner.current) {
      if (curScroll >= 440) {
        // root.current.appendChild(div);
      } else if (curScroll >= 377.3333129882812) {
        // tagLine.current.style.display = "none";
      } else if (curScroll >= 250) {
        tagLine.current.style.display = "block";

        // tagLine.current.style.backgroundColor = "rgba(255, 255, 255, 0.01)";
        tagLine.current.style.transform = `translate(0px, ${window.scrollY}px)`;

        // tagLine_inner.current.style.visibility = "hidden";

        // tagLine_inner.current.style.opacity = "0";
        // tagLine.current.style.border = "2px solid";
        // tagLine.current.style.borderRadius =`${curScroll - 270}%`;
        // tagLine.current.style.width = `calc(858px - ${1.5 * curScroll}px)`;
      } else {
        tagLine_inner.current.style.fontSize = "xxx-large";
        tagLine.current.style.backgroundColor = "rgba(255, 255, 255, 0.01)";
        tagLine.current.style.transform = `translate(0px, ${window.scrollY}px)`;

        // tagLine.current.style.width = `calc(858px - ${curScroll}px`;
        // tagLine_inner.current.style.visibility = "visible";
        // tagLine_inner.current.style.opacity = "1";
        // tagLine_inner.current.innerText =
        //   "Your Questions, Your Space: Explore Your Sent Queries";

        // tagLine.current.style.borderRadius = "0%";
        tagLine.current.style.height = "8rem";
      }
    }

    //para
    //para
    //para
    //para
    if (para.current) {
      para.current.style.transform = `translate(0px ,${window.scrollY}px)`;

      if (curScroll >= 191) {
        // para.current.style.display   = "none";
        para.current.style.visibility = "hidden";
        para.current.style.opacity = "0";
      } else {
        para.current.style.visibility = "visible";
        para.current.style.opacity = "1";
        para.current.style.display = "block";
      }

      if (curScroll >= 199) {
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
      <div id="my_queries_container_second" ref={myQuerySecond}>
        <div id="my_queries_container_second_header" ref={myQuerySecondHeader}>
          <div id="my_queries_container_second_header_flex">
            <div
              className="my_queries_container_second_header_flexChild_class"
              id="my_queries_container_second_header_flex_first"
            >
              Effortless Query Tracking
            </div>
            <div
              className="my_queries_container_second_header_flexChild_class"
              id="my_queries_container_second_header_flex_second"
            >
              Organized Query History
            </div>
            <div
              className="my_queries_container_second_header_flexChild_class"
              id="my_queries_container_second_header_flex_third"
            >
              Smart Query Organization
            </div>
            <div
              className="my_queries_container_second_header_flexChild_class"
              id="my_queries_container_second_header_flex_fourth"
            >
              Priority-based Query Handling
            </div>
            <div
              className="my_queries_container_second_header_flexChild_class"
              id="my_queries_container_second_header_flex_fifth"
            >
              Personalized Query Insights
            </div>
          </div>
        </div>
        <div
          id="my_queries_container_second_image"
          ref={myQuerySecondImage}
        ></div>
        <div id="my_queries_container_second_bottom" ref={myQuerySecondBottom}>
          <div
            className="my_queries_container_second_bottomChild_class"
            id="my_queries_container_second_bottom_first"
          >
            <div
              className="my_queries_container_second_bottom_data_class"
              id="my_queries_container_second_bottom_first_data"
            >
              <div
                className="my_queries_container_second_bottom_dataChildFirst_class"
                id="my_queries_container_second_bottom_first_data_first"
              >
                Keep tabs on all your queries effortlessly FIRST
              </div>
              <div
                className="my_queries_container_second_bottom_dataChildSecond_class"
                id="my_queries_container_second_bottom_first_data_second"
              >
                Our streamlined interface allows you to track the status,
                responses, and updates on every query you've sent, ensuring
                you're always in the loop.
              </div>
            </div>
          </div>
          <div
            className="my_queries_container_second_bottomChild_class"
            id="my_queries_container_second_bottom_second"
          >
            <div
              className="my_queries_container_second_bottom_data_class"
              id="my_queries_container_second_bottom_second_data"
            >
              <div
                className="my_queries_container_second_bottom_dataChildFirst_class"
                id="my_queries_container_second_bottom_second_data_first"
              >
                Keep tabs on all your queries effortlessly SECOND
              </div>
              <div
                className="my_queries_container_second_bottom_dataChildSecond_class"
                id="my_queries_container_second_bottom_second_data_second"
              >
                Our streamlined interface allows you to track the status,
                responses, and updates on every query you've sent, ensuring
                you're always in the loop.
              </div>
            </div>
          </div>
          <div
            className="my_queries_container_second_bottomChild_class"
            id="my_queries_container_second_bottom_third"
          >
            <div
              className="my_queries_container_second_bottom_data_class"
              id="my_queries_container_second_bottom_third_data"
            >
              <div
                className="my_queries_container_second_bottom_dataChildFirst_class"
                id="my_queries_container_second_bottom_third_data_first"
              >
                Keep tabs on all your queries effortlessly THIRd
              </div>
              <div
                className="my_queries_container_second_bottom_dataChildSecond_class"
                id="my_queries_container_second_bottom_third_data_second"
              >
                Our streamlined interface allows you to track the status,
                responses, and updates on every query you've sent, ensuring
                you're always in the loop.
              </div>
            </div>
          </div>
          <div
            className="my_queries_container_second_bottomChild_class"
            id="my_queries_container_second_bottom_fourth"
          >
            <div
              className="my_queries_container_second_bottom_data_class"
              id="my_queries_container_second_bottom_fourth_data"
            >
              <div
                className="my_queries_container_second_bottom_dataChildFirst_class"
                id="my_queries_container_second_bottom_fourth_data_first"
              >
                Keep tabs on all your queries effortlessly FOURTH
              </div>
              <div
                className="my_queries_container_second_bottom_dataChildSecond_class"
                id="my_queries_container_second_bottom_fourth_data_second"
              >
                Our streamlined interface allows you to track the status,
                responses, and updates on every query you've sent, ensuring
                you're always in the loop.
              </div>
            </div>
          </div>
          <div
            className="my_queries_container_second_bottomChild_class"
            id="my_queries_container_second_bottom_fifth"
          >
            <div
              className="my_queries_container_second_bottom_data_class"
              id="my_queries_container_second_bottom_fifth_data"
            >
              <div
                className="my_queries_container_second_bottom_dataChildFirst_class"
                id="my_queries_container_second_bottom_fifth_data_first"
              >
                Keep tabs on all your queries effortlessly FIFTH
              </div>
              <div
                className="my_queries_container_second_bottom_dataChildSecond_class"
                id="my_queries_container_second_bottom_fifth_data_second"
              >
                Our streamlined interface allows you to track the status,
                responses, and updates on every query you've sent, ensuring
                you're always in the loop.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="my_queries_container_third_viewQueries">
        <div id="my_queries_container_third_viewQueries_showDirection">
          Visit Sent Queries
        </div>
      </div>
    </>
  );
};

export default My_Queries;
