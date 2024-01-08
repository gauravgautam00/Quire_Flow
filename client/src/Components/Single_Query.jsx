import React, { useRef, useEffect } from "react";
import Single_Query_Images from "./Single_Query_Images";
import { useParams, useNavigate } from "react-router-dom";

const Single_Query = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const backClick = useRef(null);

  const headerRight = useRef(null);
  // 1752;
  // 34.9;

  const viewComment = useRef(null);

  const singleQueryImagesLeftArrow = useRef(null);
  const singleQueryImagesRightArrow = useRef(null);
  const singleQueryImagesLeftArrowFont = useRef(null);
  const singleQueryImagesRightArrowFont = useRef(null);
  const singleQueryImagesContainer = useRef(null);

  const singleQueryLinksLeftArrow = useRef(null);
  const singleQueryLinksRightArrow = useRef(null);
  const singleQueryLinksLeftArrowFont = useRef(null);
  const singleQueryLinksRightArrowFont = useRef(null);
  const singleQueryLinksContainer = useRef(null);

  const singleQueryVideosLeftArrow = useRef(null);
  const singleQueryVideosRightArrow = useRef(null);
  const singleQueryVideosLeftArrowFont = useRef(null);
  const singleQueryVideosRightArrowFont = useRef(null);
  const singleQueryVideosContainer = useRef(null);

  //carousel runnning
  //carousel runnning
  //carousel runnning
  //carousel runnning
  //carousel runnning
  //carousel runnning
  //carousel runnning
  //carousel runnning

  useEffect(() => {
    //IMAGES
    //IMAGES
    //IMAGES

    //that linear gradient to leftArrow
    //that linear gradient to leftArrow
    //that linear gradient to leftArrow
    //that linear gradient to leftArrow

    if (
      singleQueryImagesLeftArrow.current &&
      singleQueryImagesLeftArrowFont.current
    ) {
      singleQueryImagesLeftArrow.current.onmouseover = () => {
        singleQueryImagesLeftArrow.current.style.backgroundImage =
          "linear-gradient(to left, #f0f0f0, #c5c4c4)";
        singleQueryImagesLeftArrowFont.current.style.fontSize = "x-large";
      };
      singleQueryImagesLeftArrow.current.onmouseout = () => {
        singleQueryImagesLeftArrow.current.style.boxShadow = "";
        singleQueryImagesLeftArrow.current.style.backgroundColor = "";
        singleQueryImagesLeftArrow.current.style.backgroundImage = "";
        singleQueryImagesLeftArrowFont.current.style.fontSize = "x-large";
      };
    }
    //that linear gradient to rightArrow
    //that linear gradient to rightArrow
    //that linear gradient to rightArrow
    //that linear gradient to rightArrow

    if (
      singleQueryImagesRightArrow.current &&
      singleQueryImagesRightArrowFont.current
    ) {
      singleQueryImagesRightArrow.current.onmouseover = () => {
        singleQueryImagesRightArrow.current.style.backgroundImage =
          "linear-gradient(to left,#c5c4c4,  #f0f0f0)";
        singleQueryImagesRightArrowFont.current.style.fontSize = "x-large";
      };
      singleQueryImagesRightArrow.current.onmouseout = () => {
        singleQueryImagesRightArrow.current.style.boxShadow = "";
        singleQueryImagesRightArrow.current.style.backgroundColor = "";
        singleQueryImagesRightArrow.current.style.backgroundImage = "";
        singleQueryImagesRightArrowFont.current.style.fontSize = "x-large";
      };
    }

    // container scrolling
    // container scrolling
    // container scrolling
    // container scrolling
    // container scrolling
    if (
      singleQueryImagesContainer.current &&
      singleQueryImagesLeftArrow.current &&
      singleQueryImagesRightArrow.current
    ) {
      singleQueryImagesLeftArrow.current.onclick = () => {
        const scrollLeft = singleQueryImagesContainer.current.scrollLeft;
        singleQueryImagesContainer.current.scroll({
          left: scrollLeft - 705,
          behavior: "smooth",
        });
      };

      singleQueryImagesRightArrow.current.onclick = () => {
        const scrollLeft = singleQueryImagesContainer.current.scrollLeft;
        singleQueryImagesContainer.current.scroll({
          left: scrollLeft + 705,
          behavior: "smooth",
        });
      };
    }

    //Videos
    //VIDEOS
    //VIDEOS

    //that linear gradient to leftArrow
    //that linear gradient to leftArrow
    //that linear gradient to leftArrow
    //that linear gradient to leftArrow

    if (
      singleQueryVideosLeftArrow.current &&
      singleQueryVideosLeftArrowFont.current
    ) {
      singleQueryVideosLeftArrow.current.onmouseover = () => {
        singleQueryVideosLeftArrow.current.style.backgroundImage =
          "linear-gradient(to left, #f0f0f0, #c5c4c4)";
        singleQueryVideosLeftArrowFont.current.style.fontSize = "x-large";
      };
      singleQueryVideosLeftArrow.current.onmouseout = () => {
        singleQueryVideosLeftArrow.current.style.boxShadow = "";
        singleQueryVideosLeftArrow.current.style.backgroundColor = "";
        singleQueryVideosLeftArrow.current.style.backgroundImage = "";
        singleQueryVideosLeftArrowFont.current.style.fontSize = "x-large";
      };
    }
    //that linear gradient to rightArrow
    //that linear gradient to rightArrow
    //that linear gradient to rightArrow
    //that linear gradient to rightArrow

    if (
      singleQueryVideosRightArrow.current &&
      singleQueryVideosRightArrowFont.current
    ) {
      singleQueryVideosRightArrow.current.onmouseover = () => {
        singleQueryVideosRightArrow.current.style.backgroundImage =
          "linear-gradient(to left,#c5c4c4,  #f0f0f0)";
        singleQueryVideosRightArrowFont.current.style.fontSize = "x-large";
      };
      singleQueryVideosRightArrow.current.onmouseout = () => {
        singleQueryVideosRightArrow.current.style.boxShadow = "";
        singleQueryVideosRightArrow.current.style.backgroundColor = "";
        singleQueryVideosRightArrow.current.style.backgroundImage = "";
        singleQueryVideosRightArrowFont.current.style.fontSize = "x-large";
      };
    }

    // container scrolling
    // container scrolling
    // container scrolling
    // container scrolling
    // container scrolling
    if (
      singleQueryVideosContainer.current &&
      singleQueryVideosLeftArrow.current &&
      singleQueryVideosRightArrow.current
    ) {
      singleQueryVideosLeftArrow.current.onclick = () => {
        const scrollLeft = singleQueryVideosContainer.current.scrollLeft;
        singleQueryVideosContainer.current.scroll({
          left: scrollLeft - 705,
          behavior: "smooth",
        });
      };

      singleQueryVideosRightArrow.current.onclick = () => {
        const scrollLeft = singleQueryVideosContainer.current.scrollLeft;
        singleQueryVideosContainer.current.scroll({
          left: scrollLeft + 705,
          behavior: "smooth",
        });
      };
    }
  }, []);

  //Making that headerRight as fixed
  //Making that headerRight as fixed
  //Making that headerRight as fixed
  //Making that headerRight as fixed
  //Making that headerRight as fixed
  //Making that headerRight as fixed

  window.onscroll = () => {
    const scroll = window.scrollY;
    console.log(scroll);

    if (scroll >= 1119) {
      if (headerRight.current) {
        headerRight.current.style.position = "static";
        headerRight.current.style.marginTop = "-38.0rem";
      }
    } else if (scroll >= 145 && scroll < 1119) {
      console.log("scroll here");
      if (headerRight.current) {
        headerRight.current.style.position = "fixed";
        headerRight.current.style.top = "136rem";
        headerRight.current.style.marginTop = "-134.9rem";
      }
    } else {
      if (headerRight.current) {
        headerRight.current.style.position = "static";
        headerRight.current.style.marginTop = "-98.9rem";
      }
    }
  };

  //navigate back to my-queries
  //navigate back to my-queries
  //navigate back to my-queries
  //navigate back to my-queries
  //navigate back to my-queries
  //navigate back to my-querie
  useEffect(() => {
    if (viewComment.current) {
      viewComment.current.onclick = () => {
        window.scroll({
          top: 1500,
          behavior: "smooth",
        });
      };
    }
    const handleClick = () => {
      console.log("running");
      navigate("/my_queries");
    };

    if (backClick.current) {
      backClick.current.addEventListener("click", handleClick);
    }
  });
  const { id } = useParams();
  return (
    // <>
    <div id="single_query_container">
      <div id="single_query_container_goBack" ref={backClick}>
        <span
          id="single_query_container_goBack_font"
          class="material-symbols-outlined"
        >
          undo
        </span>
        To All Queries
      </div>
      <div id="single_query_container_headerFront">
        Account Access Problem Billing Inquiry
      </div>
      <div id="single_queries_container_data">
        <div id="single_queries_container_text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          quis asperiores, corporis vitae aspernatur accusantium velit fugiat?
          Quia natus reiciendis vitae minus delectus repudiandae earum
          laboriosam, iste molestias placeat? Molestias mollitia maiores, sed
          exercitationem veniam aut error voluptatibus iusto, vero tenetur quia!
          Blanditiis illo laborum quod doloremque, suscipit eligendi. Inventore
          dignissimos ullam rerum quisquam fugit laboriosam magni magnam esse,
          sequi, autem, veritatis exercitationem vero! Nihil esse eaque nobis
          qui, earum eius expedita facilis? Odio ducimus vitae mollitia
          assumenda eveniet laborum, ipsum beatae perferendis architecto
          eligendi minus cupiditate hic minima magni et explicabo facilis
          pariatur iste necessitatibus veniam vero perspiciatis aut libero
          tempore? Consequuntur fugit laboriosam maxime quas quo quidem iusto,
          non quam cupiditate exercitationem repellat aperiam minus saepe
          quibusdam praesentium incidunt fuga? Cupiditate rem nam ratione sunt
          quos provident officiis excepturi ad hic, eius, voluptatibus molestiae
          praesentium eveniet consequuntur exercitationem earum ipsam dolor
          labore placeat nesciunt modi perspiciatis illum. Officia mollitia,
          aliquam repellendus, adipisci odit, doloribus fugit laboriosam maxime
          quas quo quidem iusto, non quam cupiditate exercitationem repellat
          aperiam minus saepe quibusdam praesentium incidunt fuga? Cupiditate
          rem nam ratione sunt quos provident officiis excepturi ad hic, eius,
          voluptatibus molestiae praesentium eveniet cons
        </div>
        {/* <div id="single_query_container_fillerFirst"></div> */}

        <div id="single_queries_container_images">
          <div id="single_queries_container_images_header">Attached Images</div>

          {/* LEFT ARROW */}
          {/* LEFT ARROW */}
          {/* LEFT ARROW */}
          {/* LEFT ARROW */}
          {/* LEFT ARROW */}
          <div
            id="single_queries_container_images_leftArrow"
            ref={singleQueryImagesLeftArrow}
          >
            <span
              id="single_queries_container_images_leftArrowFont"
              class="material-symbols-outlined"
              ref={singleQueryImagesLeftArrowFont}
            >
              arrow_back_ios
            </span>
          </div>

          {/* cONTAINER */}
          {/* cONTAINER */}
          {/* cONTAINER */}
          {/* cONTAINER */}

          <div
            id="single_queries_container_images_container"
            ref={singleQueryImagesContainer}
          >
            <div
              class="single_queries_container_images_container_child"
              id="single_queries_container_images_container_child_1"
            >
              <img
                class="single_queries_container_images_container_childImages"
                src="/Images/cess-idul-k8hNYh5ymZ8-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_images_container_child"
              id="single_queries_container_images_container_child_2"
            >
              {" "}
              <img
                class="single_queries_container_images_container_childImages"
                src="/Images/joshua-woroniecki-0289jpHHk0o-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_images_container_child"
              id="single_queries_container_images_container_child_3"
            >
              {" "}
              <img
                class="single_queries_container_images_container_childImages"
                src="/Images/thestandingdesk-sGdVTZ0wt0s-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_images_container_child"
              id="single_queries_container_images_container_child_4"
            >
              <img
                class="single_queries_container_images_container_childImages"
                src="/Images/rafael-de-nadai-b0eg-PYGICQ-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_images_container_child"
              id="single_queries_container_images_container_child_5"
            >
              {" "}
              <img
                class="single_queries_container_images_container_childImages"
                src="/Images/samuel-scalzo-xyuYk9oLA8I-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_images_container_child"
              id="single_queries_container_images_container_child_6"
            >
              {" "}
              <img
                class="single_queries_container_images_container_childImages"
                src="/Images/william-daigneault-Cd84YdL9px8-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_images_container_child"
              id="single_queries_container_images_container_child_7"
            >
              {" "}
              <img
                class="single_queries_container_images_container_childImages"
                src="/Images/sable-flow-T74mVg__F_k-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_images_container_child"
              id="single_queries_container_images_container_child_8"
            >
              {" "}
              <img
                class="single_queries_container_images_container_childImages"
                src="/Images/marco-priore-QW5XUQvlB00-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_images_container_child"
              id="single_queries_container_images_container_child_9"
            >
              {" "}
              <img
                class="single_queries_container_images_container_childImages"
                src="/Images/dennis-eusebio-2ihYdRZgyWw-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_images_container_child"
              id="single_queries_container_images_container_child_10"
            >
              {" "}
              <img
                class="single_queries_container_images_container_childImages"
                src="/Images/adrien-olichon-WNs0bW8kHTM-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
          </div>

          {/* //RIGHT ARROW */}
          {/* //RIGHT ARROW */}
          {/* //RIGHT ARROW */}
          {/* //RIGHT ARROW */}

          <div
            id="single_queries_container_images_rightArrow"
            ref={singleQueryImagesRightArrow}
          >
            <span
              id="single_queries_container_images_rightArrowFont"
              class="material-symbols-outlined"
              ref={singleQueryImagesRightArrowFont}
            >
              arrow_forward_ios
            </span>
          </div>
        </div>

        {/* <div id="single_query_container_fillerSecond"></div> */}

        <div id="single_queries_container_links">
          <div id="single_queries_container_links_header">Attached Links</div>

          {/* LEFT ARROW  LINKS  */}
          {/* LEFT ARROW LINKS  */}
          {/* LEFT ARROW LINKS  */}
          {/* LEFT ARROW LINKS  */}
          {/* LEFT ARROW LINKS  */}
          <div
            id="single_queries_container_links_leftArrow"
            ref={singleQueryLinksLeftArrow}
          >
            <span
              id="single_queries_container_links_leftArrowFont"
              class="material-symbols-outlined"
              ref={singleQueryLinksLeftArrowFont}
            >
              arrow_back_ios
            </span>
          </div>

          {/* cONTAINER  LINKS */}
          {/* cONTAINER  LINKS */}
          {/* cONTAINER  LINKS */}
          {/* cONTAINER  LINKS */}

          <div
            id="single_queries_container_links_container"
            ref={singleQueryLinksContainer}
          >
            <div
              class="single_queries_container_links_container_child"
              id="single_queries_container_links_container_child_1"
            >
              <img
                class="single_queries_container_links_container_childImages"
                src="/Images/cess-idul-k8hNYh5ymZ8-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_links_container_child"
              id="single_queries_container_links_container_child_2"
            >
              {" "}
              <img
                class="single_queries_container_links_container_childImages"
                src="/Images/bp-miller--TnlLhj46iQ-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_links_container_child"
              id="single_queries_container_links_container_child_3"
            >
              {" "}
              <img
                class="single_queries_container_links_container_childImages"
                src="/Images/thestandingdesk-sGdVTZ0wt0s-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_links_container_child"
              id="single_queries_container_links_container_child_4"
            >
              <img
                class="single_queries_container_links_container_childImages"
                src="/Images/rafael-de-nadai-b0eg-PYGICQ-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_links_container_child"
              id="single_queries_container_links_container_child_5"
            >
              {" "}
              <img
                class="single_queries_container_links_container_childImages"
                src="/Images/samuel-scalzo-xyuYk9oLA8I-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_links_container_child"
              id="single_queries_container_links_container_child_6"
            >
              {" "}
              <img
                class="single_queries_container_links_container_childImages"
                src="/Images/william-daigneault-Cd84YdL9px8-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_links_container_child"
              id="single_queries_container_links_container_child_7"
            >
              {" "}
              <img
                class="single_queries_container_links_container_childImages"
                src="/Images/sable-flow-T74mVg__F_k-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_links_container_child"
              id="single_queries_container_links_container_child_8"
            >
              {" "}
              <img
                class="single_queries_container_links_container_childImages"
                src="/Images/marco-priore-QW5XUQvlB00-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_links_container_child"
              id="single_queries_container_links_container_child_9"
            >
              {" "}
              <img
                class="single_queries_container_links_container_childImages"
                src="/Images/dennis-eusebio-2ihYdRZgyWw-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
            <div
              class="single_queries_container_links_container_child"
              id="single_queries_container_links_container_child_10"
            >
              {" "}
              <img
                class="single_queries_container_links_container_childImages"
                src="/Images/adrien-olichon-WNs0bW8kHTM-unsplash.jpg"
                height="350"
                width="650"
              />
            </div>
          </div>

          {/* //RIGHT ARROW  LINKS */}
          {/* //RIGHT ARROW  LINKS */}
          {/* //RIGHT ARROW  LINKS */}
          {/* //RIGHT ARROW LINKS  */}

          <div
            id="single_queries_container_links_rightArrow"
            ref={singleQueryLinksRightArrow}
          >
            <span
              id="single_queries_container_links_rightArrowFont"
              class="material-symbols-outlined"
              ref={singleQueryLinksRightArrowFont}
            >
              arrow_forward_ios
            </span>
          </div>
        </div>

        <div id="single_queries_container_videos">
          <div id="single_queries_container_videos_header">Attached Videos</div>

          {/* LEFT ARROW  VIDEOS  */}
          {/* LEFT ARROW VIDEOS  */}
          {/* LEFT ARROW VIDEOS  */}
          {/* LEFT ARROW VIDEOS  */}
          {/* LEFT ARROW VIDEOS  */}
          <div
            id="single_queries_container_videos_leftArrow"
            ref={singleQueryVideosLeftArrow}
          >
            <span
              id="single_queries_container_videos_leftArrowFont"
              class="material-symbols-outlined"
              ref={singleQueryVideosLeftArrowFont}
            >
              arrow_back_ios
            </span>
          </div>

          {/* cONTAINER  VIDEOS */}
          {/* cONTAINER  VIDEOS */}
          {/* cONTAINER  VIDEOS */}
          {/* cONTAINER  VIDEOS */}

          <div
            id="single_queries_container_videos_container"
            ref={singleQueryVideosContainer}
          >
            <div
              class="single_queries_container_videos_container_child"
              id="single_queries_container_videos_container_child_1"
            >
              <video
                class="single_queries_container_videos_container_childImages"
                width="650"
                height="350"
                autoplay
                muted
                controls
              >
                <source
                  src="/Videos/pexels-kindel-media-6774633 (Original).mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div
              class="single_queries_container_videos_container_child"
              id="single_queries_container_videos_container_child_2"
            >
              {" "}
              <video
                class="single_queries_container_videos_container_childImages"
                width="650"
                height="350"
                autoplay
                muted
                controls
              >
                <source
                  src="/Videos/pexels-kindel-media-6774633 (Original).mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div
              class="single_queries_container_videos_container_child"
              id="single_queries_container_videos_container_child_3"
            >
              {" "}
              <video
                class="single_queries_container_videos_container_childImages"
                width="650"
                height="350"
                autoplay
                muted
                controls
              >
                <source
                  src="/Videos/pexels-kindel-media-6774633 (Original).mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div
              class="single_queries_container_videos_container_child"
              id="single_queries_container_videos_container_child_4"
            >
              <video
                class="single_queries_container_videos_container_childImages"
                width="650"
                height="350"
                autoplay
                muted
                controls
              >
                <source
                  src="/Videos/pexels-kindel-media-6774633 (Original).mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* //RIGHT ARROW VIDEOS */}
          {/* //RIGHT ARROW  VIDEOS */}
          {/* //RIGHT ARROW  VIDEOS */}
          {/* //RIGHT ARROW VIDEOS  */}

          <div
            id="single_queries_container_videos_rightArrow"
            ref={singleQueryVideosRightArrow}
          >
            <span
              id="single_queries_container_videos_rightArrowFont"
              class="material-symbols-outlined"
              ref={singleQueryVideosRightArrowFont}
            >
              arrow_forward_ios
            </span>
          </div>
        </div>
      </div>

      <div id="single_query_container_headerRight" ref={headerRight}>
        <div id="single_query_container_headerRight_heading">
          Reciever Details
        </div>
        <div id="single_query_container_headerRight_name">
          <div id="single_query_container_headerRight_name_first">
            Name/Designation
          </div>
          <div id="single_query_container_headerRight_name_second">
            Dr. A.K. Sharma
          </div>
        </div>
        <div id="single_query_container_headerRight_anonyKey">
          <div id="single_query_container_headerRight_anonyKey_first">
            Anony Key
          </div>
          <div id="single_query_container_headerRight_anonyKey_second">
            {id}
          </div>
        </div>

        <div id="single_query_container_headerRight_organisation">
          <div id="single_query_container_headerRight_organisation_first">
            Organisation
          </div>
          <div id="single_query_container_headerRight_organisation_second">
            Google
          </div>
        </div>
        <div id="single_query_container_headerRight_department">
          <div id="single_query_container_headerRight_department_first">
            Department
          </div>
          <div id="single_query_container_headerRight_department_second">
            Search Team
          </div>
        </div>
        <div id="single_query_container_headerRight_preferences">
          <div id="single_query_container_headerRight_preferences_first">
            Preferences
          </div>
          <div id="single_query_container_headerRight_preferences_second">
            Urgent
          </div>
        </div>
        <div id="single_query_container_headerRight_status">Pending</div>
        <div id="single_query_container_headerRight_comments" ref={viewComment}>
          View Comment
        </div>
      </div>

      <div id="single_query_container_comment">
        <div id="single_query_container_comment_heading">
          Comment from the QueryReciever
        </div>
        <div id="single_queries_container_comment_content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          omnis quas incidunt eum praesentium aut illum explicabo reiciendis ab
          aperiam mollitia iste, esse eaque aspernatur libero facere doloremque
          doloribus vero fuga nihil laudantium exercitationem? Enim, quam
          quibusdam. Asperiores blanditiis obcaecati molestiae inventore placeat
          at saepe sequi corporis dolorum commodi? Laudantium consequatur nemo
          qui nulla, ipsum repellendus consectetur! Optio dolorum ea
          perferendis! Quam at, earum, voluptas, itaque eligendi esse ex
          deserunt dignissimos nihil dolorem exercitationem quas veritatis
          facere officiis doloremque praesentium vel dolores ad. Nulla debitis
          nisi cum molestias labore neque voluptatem similique sit. Nihil omnis
          aliquid voluptates exercitationem quidem assumenda!
        </div>
      </div>
    </div>
  );
};

export default Single_Query;
