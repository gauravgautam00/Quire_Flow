import React, { useRef } from "react";

const My_Queries = () => {
  const tagLine = useRef(null);
  const para = useRef(null);
  const tagLine_inner = useRef(null);
  const div = document.createElement("div");
  div.style.height = "39rem";
  div.style.width = "78.4rem";
  div.style.border = "2px solid white";
  div.style.marginTop = "-3.99rem";
  div.style.transition = "visibility 3s";
  div.style.visibility = "hidden";
  div.style.backgroundColor = "#1937be";
  const div_header = document.createElement("div");
  const div_left = document.createElement("div");
  const div_right = document.createElement("div");

  div.appendChild(div_header);
  div_header.style.height = "2.9rem";
  div_header.style.width = "99.9%";
  div_header.style.backgroundColor = "white";
  div_header.style.border = "2px solid green";
  div_header.innerText = "KEY FEATURES";
  div_header.style.textAlign = "center";
  div_header.style.fontSize = "xx-large";
  div_header.style.color = "black";
  div_header.style.fontFamily = "sans-serif";

  div.appendChild(div_left);

  div_left.style.height = "36rem";
  div_left.style.width = "41rem";
  div_left.style.backgroundColor = "#933a3a";

  div.appendChild(div_right);

  div_right.style.height = "36rem";
  div_right.style.width = "37.5rem";
  div_right.style.marginLeft = "41rem";
  div_right.style.backgroundColor = "white";
  div_right.style.marginTop = "-36rem";
  const div_right_image = document.createElement("img");
  div_right.appendChild(div_right_image);
  div_right_image.setAttribute(
    "src",
    "/Images/sable-flow-T74mVg__F_k-unsplash.jpg"
  );
  div_right_image.setAttribute("height", "570");
  div_right_image.setAttribute("width", "570");

  const div2 = document.createElement("div");

  div2.style.height = "39rem";
  div2.style.width = "78.4rem";
  div2.style.border = "2px solid white";
  div2.style.marginTop = "-3.99rem";
  div2.style.transition = "visibility 3s";
  div2.style.visibility = "hidden";
  div2.style.backgroundColor = "green";

  const div3 = document.createElement("div");

  div3.style.height = "20rem";
  div3.style.width = "78.4rem";
  div3.style.border = "2px solid white";
  div3.style.marginTop = "-3.99rem";
  div3.style.transition = "visibility 3s";
  div3.style.visibility = "hidden";
  div3.style.backgroundColor = "blue";

  window.onscroll = () => {
    const curScroll = window.scrollY;
    console.log("window scroll By", curScroll);
    if (tagLine.current && tagLine_inner.current) {
      if (curScroll >= 1111) {
      } else if (curScroll >= 1046) {
        tagLine.current.style.transform = `translate(0px, ${
          window.scrollY - 170
        }px)`;
        if (tagLine.current.contains(div)) {
          tagLine.current.removeChild(div);
        }
        if (tagLine.current.contains(div2)) {
          tagLine.current.removeChild(div2);
        }
        if (!tagLine.current.contains(div3)) {
          tagLine.current.appendChild(div3);
          div3.style.visibility = "visible";
        }
      } else if (curScroll >= 965) {
        tagLine.current.style.transform = `translate(0px, ${
          window.scrollY - 170
        }px)`;
        if (tagLine.current.contains(div)) {
          tagLine.current.removeChild(div);
        }
        if (!tagLine.current.contains(div2)) {
          console.log("rakahah");
          tagLine.current.appendChild(div2);
          div2.style.visibility = "visible";
        }
      } else if (curScroll >= 857) {
        tagLine.current.style.transform = `translate(0px, ${
          window.scrollY - 170
        }px)`;
        if (!tagLine.current.contains(div)) {
          tagLine.current.appendChild(div);
          div.style.visibility = "visible";
        }
        if (tagLine.current.contains(div2)) {
          tagLine.current.removeChild(div2);
        }
      } else if (curScroll >= 669.3333129882812) {
        if (tagLine.current.contains(div)) {
          tagLine.current.removeChild(div);
        }
        if (tagLine.current.contains(div2)) {
          tagLine.current.removeChild(div2);
        }
        tagLine.current.style.backgroundColor = "black";
        // tagLine.current.style.transform = `translate(0px , ${window.scrollY}px) `;
        tagLine.current.style.width = `${Math.min(
          98.3,
          Math.min(777, curScroll) - 657.83331298
        )}vw`;
        tagLine.current.style.height = `${Math.min(
          110,
          Math.min(777, curScroll) - 648.33331298
        )}vh`;
        tagLine.current.style.borderRadius = "0%";
        // tagLine.current.style.marginTop = "-3rem";
      } else if (curScroll >= 490) {
        if (tagLine.current.contains(div)) {
          tagLine.current.removeChild(div);
        }
        if (tagLine.current.contains(div2)) {
          tagLine.current.removeChild(div2);
        }
        tagLine.current.style.backgroundColor = "rgba(255, 255, 255, 0.01)";
        // tagLine.current.style.transform = `translate(0px, 0px)`;
        tagLine.current.style.width = "128px";
        tagLine.current.style.height = "128px";
        tagLine.current.style.transform = `translate(0px, ${window.scrollY}px)`;
        tagLine.current.style.borderRadius = `50%`;
      } else if (curScroll >= 270) {
        if (tagLine.current.contains(div)) {
          tagLine.current.removeChild(div);
        }
        if (tagLine.current.contains(div2)) {
          tagLine.current.removeChild(div2);
        }
        tagLine.current.style.backgroundColor = "rgba(255, 255, 255, 0.01)";
        tagLine.current.style.transform = `translate(0px, ${window.scrollY}px)`;

        tagLine_inner.current.style.visibility = "hidden";

        tagLine_inner.current.style.opacity = "0";
        tagLine.current.style.border = "2px solid";
        tagLine.current.style.borderRadius = `${curScroll - 270}%`;
        tagLine.current.style.width = `calc(858px - ${1.5 * curScroll}px)`;
      } else {
        if (tagLine.current.contains(div)) {
          tagLine.current.removeChild(div);
        }
        tagLine_inner.current.style.fontSize = "xxx-large";
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

      if (curScroll >= 160) {
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
      <div id="randomSpace"></div>
    </>
  );
};

export default My_Queries;
