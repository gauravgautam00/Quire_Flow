import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";

const Single_Query_Global = () => {
  const { id } = useParams();

  const photosMainContainer = useRef(null);
  const photosMainLeftArrow = useRef(null);
  const photosMainRightArrow = useRef(null);
  const videosMainContainer = useRef(null);
  const videosMainLeftArrow = useRef(null);
  const videosMainRightArrow = useRef(null);
  useEffect(() => {
    if (
      photosMainContainer.current &&
      photosMainLeftArrow.current &&
      photosMainRightArrow.current
    ) {
      photosMainLeftArrow.current.onclick = () => {
        photosMainContainer.current.scrollBy({
          left: -917,
          behavior: "smooth",
        });
      };

      photosMainRightArrow.current.onclick = () => {
        photosMainContainer.current.scrollBy({
          left: 917,
          behavior: "smooth",
        });
      };
    }

    if (
      videosMainContainer.current &&
      videosMainLeftArrow.current &&
      videosMainRightArrow.current
    ) {
      videosMainLeftArrow.current.onclick = () => {
        videosMainContainer.current.scrollBy({
          left: -911,
          behavior: "smooth",
        });
      };

      videosMainRightArrow.current.onclick = () => {
        videosMainContainer.current.scrollBy({
          left: 911,
          behavior: "smooth",
        });
      };
    }
  }, []);

  return (
    <div id="single_query_global">
      <div id="single_query_global_back">
        <span
          id="single_query_global_backIcons"
          class="material-symbols-outlined"
        >
          arrow_back
        </span>
        Back
      </div>
      <div id="single_query_global_extraDetails">
        Extra Details
        <span
          id="single_query_global_extraDetailsIcon"
          class="material-symbols-outlined"
        >
          expand_more
        </span>
      </div>
      <div id="single_query_global_queryDescription">
        <div id="single_query_global_queryDescription_title">
          Account Access Problem Billing Inquiry
        </div>
        <div id="single_query_global_queryDescription_para">
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
          voluptatibus molestiae praesentium eveniet cons Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Doloribus quis asperiores, corporis
          vitae aspernatur accusantium velit fugiat? Quia natus reiciendis vitae
          minus delectus repudiandae earum laboriosam, iste molestias placeat?
          Molestias mollitia maiores, sed exercitationem veniam aut error
          voluptatibus iusto, vero tenetur quia! Blanditiis illo laborum quod
          doloremque, suscipit eligendi. Inventore dignissimos ullam rerum
          quisquam fugit laboriosam magni magnam esse, sequi, autem, veritatis
          exercitationem vero! Nihil esse eaque nobis qui, earum eius expedita
          facilis? Odio ducimus vitae mollitia assumenda eveniet laborum, ipsum
          beatae perferendis architecto eligendi minus cupiditate hic minima
          magni et explicabo facilis pariatur iste necessitatibus veniam vero
          perspiciatis aut libero tempore? Consequuntur fugit laboriosam maxime
          quas quo quidem iusto, non quam cupiditate exercitationem repellat
          aperiam minus saepe quibusdam praesentium incidunt fuga? Cupiditate
          rem nam ratione sunt quos provident officiis excepturi ad hic, eius,
          voluptatibus molestiae praesentium eveniet consequuntur exercitationem
          earum ipsam dolor labore placeat nesciunt modi perspiciatis illum.
          Officia mollitia, aliquam repellendus, adipisci odit, doloribus fugit
          laboriosam maxime quas quo quidem iusto, non quam cupiditate
          exercitationem repellat aperiam minus saepe quibusdam praesentium
          incidunt fuga? Cupiditate rem nam ratione sunt quos provident officiis
          excepturi ad hic, eius, voluptatibus molestiae praesentium eveniet
          cons Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Doloribus quis asperiores, corporis vitae aspernatur accusantium velit
          fugiat? Quia natus reiciendis vitae minus delectus repudiandae earum
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
          voluptatibus molestiae praesentium eveniet cons Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Doloribus quis asperiores, corporis
          vitae aspernatur accusantium velit fugiat? Quia natus reiciendis vitae
          minus delectus repudiandae earum laboriosam, iste molestias placeat?
          Molestias mollitia maiores, sed exercitationem veniam aut error
          voluptatibus iusto, vero tenetur quia! Blanditiis illo laborum quod
          doloremque, suscipit eligendi. Inventore dignissimos ullam rerum
          quisquam fugit laboriosam magni magnam esse, sequi, autem, veritatis
          exercitationem vero! Nihil esse eaque nobis qui, earum eius expedita
          facilis? Odio ducimus vitae mollitia assumenda eveniet laborum, ipsum
          beatae perferendis architecto eligendi minus cupiditate hic minima
          magni et explicabo facilis pariatur iste necessitatibus veniam vero
          perspiciatis aut libero tempore? Consequuntur fugit laboriosam maxime
          quas quo quidem iusto, non quam cupiditate exercitationem repellat
          aperiam minus saepe quibusdam praesentium incidunt fuga? Cupiditate
          rem nam ratione sunt quos provident officiis excepturi ad hic, eius,
          voluptatibus molestiae praesentium eveniet consequuntur exercitationem
          earum ipsam dolor labore placeat nesciunt modi perspiciatis illum.
          Officia mollitia, aliquam repellendus, adipisci odit, doloribus fugit
          laboriosam maxime quas quo quidem iusto, non quam cupiditate
          exercitationem repellat aperiam minus saepe quibusdam praesentium
          incidunt fuga? Cupiditate rem nam ratione sunt quos provident officiis
          excepturi ad hic, eius, voluptatibus molestiae praesentium eveniet
          cons Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Doloribus quis asperiores, corporis vitae aspernatur accusantium velit
          fugiat? Quia natus reiciendis vitae minus delectus repudiandae earum
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
      </div>
      <div id="single_query_global_queryPhotos">
        <div id="single_query_global_queryPhotos_heading">Attached Photos</div>
        <div id="single_query_global_queryPhotos_main">
          <div
            id="single_query_global_queryPhotos_main_leftArrow"
            ref={photosMainLeftArrow}
          >
            <span
              id="single_query_global_queryPhotos_main_leftArrowIcon"
              class="material-symbols-outlined"
            >
              chevron_left
            </span>
          </div>
          <div
            id="single_query_global_queryPhotos_main_container"
            ref={photosMainContainer}
          >
            <div
              className="single_query_global_queryPhotos_main_container_childClass"
              id="single_query_global_queryPhotos_main_container_child1"
            >
              <img
                class="single_queries_global_queryPhotos_main_container_childImageClass"
                src="/Images/dennis-eusebio-2ihYdRZgyWw-unsplash.jpg"
                height="468"
                width="900"
              />
            </div>
            <div
              className="single_query_global_queryPhotos_main_container_childClass"
              id="single_query_global_queryPhotos_main_container_child2"
            >
              <img
                class="single_queries_global_queryPhotos_main_container_childImageClass"
                src="/Images/dennis-eusebio-2ihYdRZgyWw-unsplash.jpg"
                height="468"
                width="900"
              />
            </div>
            <div
              className="single_query_global_queryPhotos_main_container_childClass"
              id="single_query_global_queryPhotos_main_container_child3"
            >
              <img
                class="single_queries_global_queryPhotos_main_container_childImageClass"
                src="/Images/dennis-eusebio-2ihYdRZgyWw-unsplash.jpg"
                height="468"
                width="900"
              />
            </div>
            <div
              className="single_query_global_queryPhotos_main_container_childClass"
              id="single_query_global_queryPhotos_main_container_child4"
            >
              <img
                class="single_queries_global_queryPhotos_main_container_childImageClass"
                src="/Images/dennis-eusebio-2ihYdRZgyWw-unsplash.jpg"
                height="468"
                width="900"
              />
            </div>
            <div
              className="single_query_global_queryPhotos_main_container_childClass"
              id="single_query_global_queryPhotos_main_container_child5"
            >
              <img
                class="single_queries_global_queryPhotos_main_container_childImageClass"
                src="/Images/dennis-eusebio-2ihYdRZgyWw-unsplash.jpg"
                height="468"
                width="900"
              />
            </div>
          </div>
          <div
            id="single_query_global_queryPhotos_main_rightArrow"
            ref={photosMainRightArrow}
          >
            <span
              id="single_query_global_queryPhotos_main_rightArrowIcon"
              class="material-symbols-outlined"
            >
              chevron_right
            </span>
          </div>
        </div>
      </div>

      <div id="single_query_global_queryVideos">
        <div id="single_query_global_queryVideos_heading">Attached Video</div>
        <div id="single_query_global_queryVideos_main">
          <div
            id="single_query_global_queryVideos_main_leftArrow"
            ref={videosMainLeftArrow}
          >
            <span
              id="single_query_global_queryVideos_main_leftArrowIcon"
              className="material-symbols-outlined"
            >
              chevron_left
            </span>
          </div>
          <div
            id="single_query_global_queryVideos_main_container"
            ref={videosMainContainer}
          >
            <div
              className="single_query_global_queryVideos_main_container_childClass"
              id="single_query_global_queryVideos_main_container_child1"
            >
              <video height="468px" width="900px" muted controls>
                <source
                  src="client\public\Videos\Video featuring a Slack customer,_.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div
              className="single_query_global_queryVideos_main_container_childClass"
              id="single_query_global_queryVideos_main_container_child2"
            >
              <video height="468px" width="900px" muted controls>
                <source
                  src="Videos\pexels-kindel-media-6774633 (Original).mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div
              className="single_query_global_queryVideos_main_container_childClass"
              id="single_query_global_queryVideos_main_container_child3"
            >
              <video height="468px" width="900px" muted controls>
                <source
                  src="Videos/pexels-kindel-media-6774633 (Original).mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div
            id="single_query_global_queryVideos_main_rightArrow"
            ref={videosMainRightArrow}
          >
            <span
              id="single_query_global_queryVideos_main_rightArrowIcon"
              className="material-symbols-outlined"
            >
              chevron_right
            </span>
          </div>
        </div>
      </div>
      <div id="single_query_global_queryComment">
        <div id="single_query_global_queryComment_heading">Comments</div>
        <div id="single_query_global_queryComment_main">
          <div id="single_query_global_queryComment_leftPart">
            <div id="single_query_global_queryComment_leftPart_addComment">
              Add Comment
            </div>
            <div id="single_query_global_queryComment_leftPart_textarea">
              <textarea
                id="single_Query_global_queryComment_leftPart_textarea_real"
                name="leftPart"
              ></textarea>
            </div>
            <div id="single_query_global_queryComment_leftPart_send"> Send</div>
          </div>
          <div id="single_query_global_queryComment_rightPart">
            <div id="single_query_global_queryComment_rightPart_heading">
              View your previous comments
            </div>
            <div id="single_query_global_queryComment_rightPart_main">
              <div
                className="single_query_global_queryComment_rightPart_main_child"
                id="single_query_global_queryComment_rightPart_main_child1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                asperiores.
              </div>
              <div
                className="single_query_global_queryComment_rightPart_main_child"
                id="single_query_global_queryComment_rightPart_main_child2"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
                voluptas illo ipsum nesciunt ut explicabo cupiditate asperiores
                velit ratione dolorum.
              </div>
              <div
                className="single_query_global_queryComment_rightPart_main_child"
                id="single_query_global_queryComment_rightPart_main_child3"
              >
                Lorem ipsum dolor sit amet.
              </div>
              <div
                className="single_query_global_queryComment_rightPart_main_child"
                id="single_query_global_queryComment_rightPart_main_child4"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolorum consequuntur dolor provident, laudantium expedita ex.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="single_query_global_queryMark">
        <div id="single_query_global_queryMark_upperBox">Mark it as</div>
        <div id="single_query_global_queryMark_bottomBox"></div>
        <div id="single_query_global_queryMark_button">Done</div>
      </div>
      <div id="single_query_global_queryDelete">Delete query</div>
    </div>
  );
};

export default Single_Query_Global;
