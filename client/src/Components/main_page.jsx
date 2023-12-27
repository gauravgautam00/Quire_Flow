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

  const freed_line = useRef(null);

  //video for first ellipse
  useEffect(() => {}, []);
  const video1 = document.createElement("video");

  const source1 = document.createElement("source");
  video1.appendChild(source1);

  source1.src = "Videos/173522 (1080p).mp4";

  source1.type = "video/mp4";

  //video for second ellipse
  const video2 = document.createElement("video");

  const source2 = document.createElement("source");
  video2.appendChild(source2);
  source2.src = "Videos/Video featuring a Slack customer,_.mp4";

  source2.type = "video/mp4";

  //video for third ellipse
  const video3 = document.createElement("video");

  const source3 = document.createElement("source");
  video3.appendChild(source3);
  source3.src = "Videos/160767 (1080p).mp4";

  source3.type = "video/mp4";

  const coolEncapsulation = () => {
    return new Promise((resolve, reject) => {
      if (encap.current && respo.current && freed.current) {
        encap.current.style.transform =
          "translate(11.1rem, 9rem) scale(2.87,5.6)";
        encap.current.style.borderRadius = "0px";

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
          video1.width = "140";
          video1.height = "80";
          video1.style.marginTop = "-1.9rem";
          video1.style.marginLeft = "-0.3rem";

          video1.autoplay = true;
          video1.loop = true;
          video1.muted = true;
          if (encap.current) {
            encap.current.appendChild(video1);
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

            if (encap.current && encap.current.contains(video1)) {
              encap.current.removeChild(video1);
            }

            // Resolve the promise when everything is done
            resolve();
          }
        }, 10000);
      } else {
        // Reject the promise if there's an error
        reject(new Error("encap.current is not available"));
      }
    });
  };

  const coolResponsibility = () => {
    return new Promise((resolve, reject) => {
      if (encap.current && respo.current && freed.current) {
        respo.current.style.transform =
          "translate(-10.1rem, 9rem) scale(2.87,5.6) ";
        respo.current.style.borderRadius = "0px";

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
          video2.width = "140";
          video2.height = "80";
          video2.style.marginTop = "-1.9rem";
          video2.style.marginLeft = "-0.3rem";

          video2.autoplay = true;
          video2.loop = true;
          video2.muted = true;
          if (respo.current) {
            respo.current.appendChild(video2);
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

            if (respo.current.contains(video2))
              respo.current.removeChild(video2);

            resolve();
          }
        }, 10000);
      } else {
        // Reject the promise if there's an error
        reject(new Error("respo.current is not available"));
      }
    });
  };

  const coolFreedom = () => {
    if (encap.current && respo.current && freed.current) {
      freed.current.style.transform =
        "translate(1rem, -8.6rem) scale(2.87,5.6) ";
      freed.current.style.borderRadius = "0px";

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
        video3.width = "140";
        video3.height = "80";
        video3.style.marginTop = "-1.9rem";
        video3.style.marginLeft = "-0.3rem";

        video3.autoplay = true;
        video3.loop = true;
        video3.muted = true;
        if (freed.current) {
          freed.current.appendChild(video3);
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

          freed.current.style.transition = "transform 2s  , border-radius 2s ";
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

          if (freed.current.contains(video3)) freed.current.removeChild(video3);
        }
      }, 10000);
    }
  };

  const runIt = async () => {
    coolEncapsulation().then(() => {
      setTimeout(() => {
        coolResponsibility().then(() => {
          setTimeout(() => {
            coolFreedom();
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
          Where Anonymity Meets <br />
          Elevation,
          <br /> Accountability Leads the Way
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
