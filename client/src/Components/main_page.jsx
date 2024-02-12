import React, { useState, useRef, useEffect } from "react";

const Main_page = () => {
  const encap = useRef(null);
  const respo = useRef(null);
  const freed = useRef(null);
  const encap_inner = useRef(null);
  const respo_inner = useRef(null);
  const freed_inner = useRef(null);
  const encap_line = useRef(null);
  const respo_line = useRef(null);
  const titleFirst = useRef(null);
  const titleSecond = useRef(null);
  const titleThird = useRef(null);
  // background-color: #16252D;
  // color: white;
  // padding: 6px;
  // border-radius: 10px;
  const freed_line = useRef(null);

  //video for first ellipse
  useEffect(() => {}, []);
  const img1 = document.createElement("img");

  // const source1 = document.createElement("source");
  // video1.appendChild(source1);

  img1.src = "Images/my_favicon.ico";

  //video for second ellipse
  const img2 = document.createElement("img");

  img2.src = "Images/my_favicon.ico";

  //video for third ellipse
  const img3 = document.createElement("img");

  img3.src = "Images/my_favicon.ico";

  const coolEncapsulation = () => {
    return new Promise((resolve, reject) => {
      if (
        encap.current &&
        respo.current &&
        freed.current &&
        titleFirst.current &&
        titleSecond.current &&
        titleThird.current
      ) {
        titleFirst.current.style.backgroundColor = "#16252D";
        titleFirst.current.style.color = "white";
        // titleFirst.current.style.padding = "6px";
        titleFirst.current.style.borderRadius = "10px";

        titleSecond.current.style.backgroundColor = "white";
        titleSecond.current.style.color = "#16252D";
        // titleSecond.current.style.padding = "6px";
        titleSecond.current.style.borderRadius = "10px";

        titleThird.current.style.backgroundColor = "white";
        titleThird.current.style.color = "#16252D";
        // titleThird.current.style.padding = "6px";
        titleThird.current.style.borderRadius = "10px";

        encap.current.style.transform =
          "translate(11.1rem, 9rem) scale(2.87,5.6)";
        encap.current.style.borderRadius = "10px";

        encap.current.style.transition = "transform 2s , border-radius 2s";

        respo_inner.current.style.visibility = "hidden";
        freed_inner.current.style.visibility = "hidden";

        // encap_inner.current.style.opacity="0";

        respo.current.style.visibility = "hidden";
        freed.current.style.visibility = "hidden";

        encap_line.current.style.visibility = "hidden";
        respo_line.current.style.visibility = "hidden";
        freed_line.current.style.visibility = "hidden";

        encap.current.style.zIndex = "2";
        encap.current.style.position = "relative";
        encap.current.style.border = "0px";

        setTimeout(() => {
          img1.width = "140";
          img1.height = "80";
          img1.style.borderRadius = "10px";
          img1.style.marginTop = "-1.7rem";
          img1.style.marginLeft = "-0.3rem";

          if (encap.current) {
            encap.current.appendChild(img1);
            encap_inner.current.style.visibility = "hidden";
            encap.current.style.backgroundColor = "white";
          }
        }, 2000);
        setTimeout(() => {
          if (encap.current) {
            encap.current.style.transform = "rotate(30deg)";
            encap.current.style.borderRadius = "50%";
            encap.current.style.backgroundColor = "#FFDB58";

            encap.current.style.transition =
              "transform 1s, border-radius 4s background-color 2s";
            encap.current.style.zIndex = "2";
            encap.current.style.position = "relative";
            encap.current.style.border = "3px solid black";
            encap_inner.current.style.visibility = "visible";
            respo_inner.current.style.visibility = "visible";
            freed_inner.current.style.visibility = "visible";

            encap_line.current.style.visibility = "visible";
            respo_line.current.style.visibility = "visible";
            freed_line.current.style.visibility = "visible";

            respo.current.style.visibility = "visible";
            freed.current.style.visibility = "visible";

            if (encap.current && encap.current.contains(img1)) {
              encap.current.removeChild(img1);
            }

            // Resolve the promise when everything is done
            resolve();
          }
        }, 10000);
      } else {
        // Reject the promise if there's an error
        // reject(new Error("encap.current is not available"));
      }
    });
  };

  const coolResponsibility = () => {
    return new Promise((resolve, reject) => {
      if (
        encap.current &&
        respo.current &&
        freed.current &&
        titleFirst.current &&
        titleSecond.current &&
        titleThird.current
      ) {
        titleSecond.current.style.backgroundColor = "#16252D";
        titleSecond.current.style.color = "white";
        // titleSecond.current.style.padding = "6px";
        titleSecond.current.style.borderRadius = "10px";

        titleFirst.current.style.backgroundColor = "white";
        titleFirst.current.style.color = "#16252D";
        // titleFirst.current.style.padding = "6px";
        titleFirst.current.style.borderRadius = "10px";

        titleThird.current.style.backgroundColor = "white";
        titleThird.current.style.color = "#16252D";
        // titleThird.current.style.padding = "6px";
        titleThird.current.style.borderRadius = "10px";

        respo.current.style.transform =
          "translate(-10.1rem, 9rem) scale(2.87,5.6) ";
        respo.current.style.borderRadius = "10px";

        respo.current.style.transition = "transform 2s  , border-radius 2s";
        respo.current.style.zIndex = "2";
        respo.current.style.position = "relative";
        respo.current.style.border = "0px";
        encap.current.style.visibility = "hidden";
        freed.current.style.visibility = "hidden";

        encap_inner.current.style.visibility = "hidden";
        freed_inner.current.style.visibility = "hidden";

        encap_line.current.style.visibility = "hidden";
        respo_line.current.style.visibility = "hidden";
        freed_line.current.style.visibility = "hidden";

        setTimeout(() => {
          img2.width = "140";
          img2.height = "80";
          img2.style.marginTop = "-1.9rem";
          img2.style.marginLeft = "-0.3rem";
          img2.style.borderRadius = "10px";

          if (respo.current) {
            respo.current.appendChild(img2);
            respo_inner.current.style.visibility = "hidden";
            respo.current.style.backgroundColor = "white";
          }
        }, 2000);

        setTimeout(() => {
          if (respo.current) {
            respo.current.style.transform = "rotate(-30deg)";
            respo.current.style.borderRadius = "50%";

            respo.current.style.transition =
              "transform 2s  , border-radius 2s ";
            respo.current.style.zIndex = "2";
            respo.current.style.position = "relative";
            respo.current.style.backgroundColor = "#FFDB58";
            respo.current.style.border = "3px solid black";

            respo_inner.current.style.visibility = "visible";
            encap.current.style.visibility = "visible";
            freed.current.style.visibility = "visible";

            encap_inner.current.style.visibility = "visible";
            freed_inner.current.style.visibility = "visible";

            encap_line.current.style.visibility = "visible";
            respo_line.current.style.visibility = "visible";
            freed_line.current.style.visibility = "visible";

            if (respo.current.contains(img2)) respo.current.removeChild(img2);

            resolve();
          }
        }, 10000);
      } else {
        // Reject the promise if there's an error
        // reject(new Error("respo.current is not available"));
      }
    });
  };

  const coolFreedom = () => {
    return new Promise((resolve, reject) => {
      if (
        encap.current &&
        respo.current &&
        freed.current &&
        titleFirst.current &&
        titleSecond.current &&
        titleThird.current
      ) {
        titleThird.current.style.backgroundColor = "#16252D";
        titleThird.current.style.color = "white";
        // titleThird.current.style.padding = "6px";
        titleThird.current.style.borderRadius = "10px";

        titleSecond.current.style.backgroundColor = "white";
        titleSecond.current.style.color = "#16252D";
        // titleSecond.current.style.padding = "6px";
        titleSecond.current.style.borderRadius = "10px";

        titleFirst.current.style.backgroundColor = "white";
        titleFirst.current.style.color = "#16252D";
        // titleFirst.current.style.padding = "6px";
        titleFirst.current.style.borderRadius = "10px";

        freed.current.style.transform =
          "translate(1rem, -8.6rem) scale(2.87,5.6) ";
        freed.current.style.borderRadius = "10px";

        freed.current.style.transition = "transform 2s  , border-radius 2s";
        freed.current.style.zIndex = "2";
        freed.current.style.position = "relative";
        freed.current.style.border = "0px";

        encap.current.style.visibility = "hidden";
        respo.current.style.visibility = "hidden";

        respo_inner.current.style.visibility = "hidden";
        encap_inner.current.style.visibility = "hidden";

        encap_line.current.style.visibility = "hidden";
        respo_line.current.style.visibility = "hidden";
        freed_line.current.style.visibility = "hidden";

        setTimeout(() => {
          img3.width = "140";
          img3.height = "80";
          img3.style.marginTop = "-1.7rem";
          img3.style.marginLeft = "-0.3rem";
          img3.style.borderRadius = "10px";

          if (freed.current) {
            freed.current.appendChild(img3);
            freed_inner.current.style.visibility = "hidden";
            freed.current.style.backgroundColor = "white";
          }
        }, 2000);

        setTimeout(() => {
          if (
            freed.current &&
            encap.current &&
            respo_inner &&
            respo.current &&
            freed_line.current
          ) {
            freed.current.style.transform = "rotate(90deg)";
            freed.current.style.borderRadius = "50%";

            freed.current.style.transition =
              "transform 2s  , border-radius 2s ";
            freed.current.style.zIndex = "2";
            freed.current.style.position = "relative";
            freed.current.style.backgroundColor = "#FFDB58";

            freed.current.style.border = "3px solid black";

            freed_inner.current.style.visibility = "visible";
            encap.current.style.visibility = "visible";
            respo.current.style.visibility = "visible";

            respo_inner.current.style.visibility = "visible";
            encap_inner.current.style.visibility = "visible";
            encap_line.current.style.visibility = "visible";
            respo_line.current.style.visibility = "visible";
            freed_line.current.style.visibility = "visible";

            if (freed.current.contains(img3)) freed.current.removeChild(img3);
            resolve();
          }
        }, 10000);
      } else {
        reject();
      }
    });
  };

  const runIt = async () => {
    coolEncapsulation().then(() => {
      setTimeout(() => {
        coolResponsibility().then(() => {
          setTimeout(() => {
            coolFreedom().then(() => {
              if (
                titleFirst.current &&
                titleSecond.current &&
                titleThird.current
              ) {
                titleThird.current.style.backgroundColor = "white";
                titleThird.current.style.color = "#16252D";
                // titleThird.current.style.padding = "6px";
                titleThird.current.style.borderRadius = "10px";

                titleSecond.current.style.backgroundColor = "white";
                titleSecond.current.style.color = "#16252D";
                // titleSecond.current.style.padding = "6px";
                titleSecond.current.style.borderRadius = "10px";

                titleFirst.current.style.backgroundColor = "white";
                titleFirst.current.style.color = "#16252D";
                // titleFirst.current.style.padding = "6px";/

                titleFirst.current.style.borderRadius = "10px";
              }
            });
          }, 2000);
        });
      }, 2000);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      runIt();
    }, 1000);
  }, []);

  // runIt();
  // setInterval(runIt , 2000);

  return (
    <div className="for_footer_color" id="main_page_container">
      <div id="main_page_container_leftPart">
        <div id="main_page_container_leftPart_title">
          Where{" "}
          <span id="main_page_container_leftPart_title_first" ref={titleFirst}>
            Anonymity{" "}
          </span>
          Meets <br />
          <span
            id="main_page_container_leftPart_title_second"
            ref={titleSecond}
          >
            {" "}
            Elevation
          </span>
          ,
          <br />{" "}
          <span id="main_page_container_leftPart_title_third" ref={titleThird}>
            Accountability
            <br />
          </span>
          Leads the Way
        </div>
      </div>
      <div id="main_page_container_rightPart">
        <div id="main_page_container_rightPart_videoDiv">
          <div id="main_page_container_rightPart_firstEllipse" ref={encap}>
            <div
              id="main_page_container_rightPart_firstEllipse_inner"
              ref={encap_inner}
            >
              Anonymity
            </div>
          </div>
          <div id="main_page_container_rightPart_secondEllipse" ref={respo}>
            <div
              id="main_page_container_rightPart_secondEllipse_inner"
              ref={respo_inner}
            >
              Elevation
            </div>
          </div>
          <div id="main_page_container_rightPart_thirdEllipse" ref={freed}>
            <div
              id="main_page_container_rightPart_thirdEllipse_inner"
              ref={freed_inner}
            >
              Accountability
            </div>
          </div>

          <div
            id="main_page_container_rightPart_firstEllipse_line"
            ref={encap_line}
          ></div>
          <div
            id="main_page_container_rightPart_secondEllipse_line"
            ref={respo_line}
          ></div>

          <div
            id="main_page_container_rightPart_thirdEllipse_line"
            ref={freed_line}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Main_page;
