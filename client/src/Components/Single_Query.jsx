import React, { useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Single_Query = () => {
  const navigate = useNavigate();
  const backClick = useRef(null);

  const headerRight = useRef(null);
  // 1752;
  // 34.9;

  window.onscroll = () => {
    const scroll = window.scrollY;
    console.log(scroll);

    if (scroll >= 1752) {
      if (headerRight.current) {
        headerRight.current.style.position = "static";
        headerRight.current.style.marginTop = "-34.9rem";
      }
    } else if (scroll >= 145 && scroll <= 1752) {
      console.log("scroll here");
      if (headerRight.current) {
        headerRight.current.style.position = "fixed";
        headerRight.current.style.top = "136rem";
        headerRight.current.style.marginTop = "-134.9rem";
      }
    } else {
      if (headerRight.current) {
        headerRight.current.style.position = "static";
        headerRight.current.style.marginTop = "-134.9rem";
      }
    }
  };
  useEffect(() => {
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
        <div id="single_queries_container_images">
          <div id="single_queries_container_images_header">Attached Images</div>
          <div id="single_queries_container_images_container"></div>
        </div>
        <div id="single_queries_container_links">
          <div id="single_queries_container_links_header">Attached Links</div>
          <div id="single_queries_container_links_container"></div>
        </div>
        <div id="single_queries_container_videos">
          <div id="single_queries_container_videos_header">Attached Videos</div>
          <div id="single_queries_container_videos_container"></div>
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
      </div>
    </div>
  );
};

export default Single_Query;
