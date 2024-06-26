import React, { useDeferredValue, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import cardDataJson from "./cardJsonData.json";
import CardQueryChild from "./CardQueryChild";

const My_Queries = () => {
  const tagLine = useRef(null);
  const para = useRef(null);
  const tagLine_inner = useRef(null);
  const myQuerySecond = useRef(null);
  const myQuerySecondHeader = useRef(null);
  const myQuerySecondImage = useRef(null);
  const myQuerySecondBottom = useRef(null);
  const upperFlexFirst = useRef(null);
  const upperFlexSecond = useRef(null);
  const upperFlexThird = useRef(null);
  const upperFlexFourth = useRef(null);
  const upperFlexFifth = useRef(null);
  const viewQueriesFilter = useRef(null);
  const viewQueriesFilterTitle = useRef(null);
  const filterOrganisation = useRef(null);
  const filterDepartment = useRef(null);
  const filterPreferences = useRef(null);
  const filterOrganisationExpand = useRef(null);
  const filterDepartmentExpand = useRef(null);
  const filterPreferencesExpand = useRef(null);

  const filterOrganisationIcon = useRef(null);
  const filterDepartmentIcon = useRef(null);
  const filterPreferencesIcon = useRef(null);

  const filterSearch = useRef(null);

  const [orgValue, setOrgValue] = useState("Select Organisation");
  const [depValue, setDepValue] = useState("Select Department");
  const [prefValue, setPrefValue] = useState("Select Preferences");
  const filterTitle = useRef(null);
  const filterDescription = useRef(null);
  const filterAnonyKey = useRef(null);
  const [globalAllQueryArr, setAllGlobalQueryArr] = useState([]);
  const [allQueryArr, setAllQueryArr] = useState([]);

  const img = document.createElement("img");

  window.onscroll = () => {
    const curScroll = window.scrollY;
    // // console.log("window scroll By", curScroll);

    if (curScroll >= 2575) {
      if (upperFlexFourth.current && upperFlexFifth.current) {
        upperFlexFifth.current.style.backgroundColor = "#16252d";
        upperFlexFifth.current.style.color = "white";
        upperFlexFourth.current.style.backgroundColor = "white";
        upperFlexFourth.current.style.color = "#16252d";
        upperFlexThird.current.style.backgroundColor = "white";
        upperFlexThird.current.style.color = "#16252d";
        upperFlexSecond.current.style.backgroundColor = "white";
        upperFlexSecond.current.style.color = "#16252d";
        upperFlexFirst.current.style.backgroundColor = "white";
        upperFlexFirst.current.style.color = "#16252d";
        img.setAttribute(
          "src",
          "/Images/annie-spratt-QckxruozjRg-unsplash.jpg"
        );
      }
    } else if (curScroll >= 2092) {
      if (
        upperFlexFourth.current &&
        upperFlexThird.current &&
        upperFlexFifth.current
      ) {
        upperFlexFourth.current.style.backgroundColor = "#16252d";
        upperFlexFourth.current.style.color = "white";
        upperFlexThird.current.style.backgroundColor = "white";
        upperFlexThird.current.style.color = "#16252d";
        upperFlexSecond.current.style.backgroundColor = "white";
        upperFlexSecond.current.style.color = "#16252d";
        upperFlexFirst.current.style.backgroundColor = "white";
        upperFlexFirst.current.style.color = "#16252d";
        upperFlexFifth.current.style.backgroundColor = "white";
        upperFlexFifth.current.style.color = "#16252d";
        img.setAttribute(
          "src",
          "/Images/campaign-creators-gMsnXqILjp4-unsplash.jpg"
        );
      }
    } else if (curScroll >= 1592) {
      if (
        upperFlexSecond.current &&
        upperFlexThird.current &&
        upperFlexFourth.current
      ) {
        upperFlexThird.current.style.backgroundColor = "#16252d";
        upperFlexThird.current.style.color = "white";
        upperFlexSecond.current.style.backgroundColor = "white";
        upperFlexSecond.current.style.color = "#16252d";
        upperFlexFourth.current.style.backgroundColor = "white";
        upperFlexFourth.current.style.color = "#16252d";
        upperFlexFirst.current.style.backgroundColor = "white";
        upperFlexFirst.current.style.color = "#16252d";
        upperFlexFifth.current.style.backgroundColor = "white";
        upperFlexFifth.current.style.color = "#16252d";
        img.setAttribute(
          "src",
          "/Images/thestandingdesk-sGdVTZ0wt0s-unsplash.jpg"
        );
      }
    } else if (curScroll >= 1087) {
      if (
        upperFlexSecond.current &&
        upperFlexFirst.current &&
        upperFlexThird.current
      ) {
        upperFlexSecond.current.style.backgroundColor = "#16252d";
        upperFlexSecond.current.style.color = "white";
        upperFlexFourth.current.style.backgroundColor = "white";
        upperFlexFourth.current.style.color = "#16252d";
        upperFlexFirst.current.style.backgroundColor = "white";
        upperFlexFirst.current.style.color = "#16252d";
        upperFlexFifth.current.style.backgroundColor = "white";
        upperFlexFifth.current.style.color = "#16252d";
        upperFlexThird.current.style.backgroundColor = "white";
        upperFlexThird.current.style.color = "#16252d";
        img.setAttribute(
          "src",
          "/Images/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg"
        );
      }
    } else {
      if (upperFlexSecond.current && upperFlexFirst.current) {
        upperFlexSecond.current.style.backgroundColor = "white";
        upperFlexSecond.current.style.color = "#16252d";
        upperFlexFirst.current.style.backgroundColor = "#16252d";
        upperFlexFirst.current.style.color = "white";
        upperFlexFifth.current.style.backgroundColor = "white";
        upperFlexFifth.current.style.color = "#16252d";
        upperFlexFourth.current.style.backgroundColor = "white";
        upperFlexFourth.current.style.color = "#16252d";
        upperFlexThird.current.style.backgroundColor = "white";
        upperFlexThird.current.style.color = "#16252d";
      }
      if (myQuerySecondImage.current) {
        myQuerySecondImage.current.appendChild(img);
        img.setAttribute("height", "400px");
        img.setAttribute("width", "544px");
        img.setAttribute(
          "src",
          "/Images/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg"
        );
      }
    }

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
    } else if (curScroll >= 729) {
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

        tagLine.current.style.transform = `translate(0px, ${window.scrollY}px)`;
      } else {
        tagLine_inner.current.style.fontSize = "xxx-large";
        tagLine.current.style.backgroundColor = "rgba(255, 255, 255, 0.01)";
        tagLine.current.style.transform = `translate(0px, ${window.scrollY}px)`;
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

  useEffect(() => {
    if (viewQueriesFilter.current && viewQueriesFilterTitle.current) {
      // viewQueriesFilter.current.style.width = "7.75rem";
      // viewQueriesFilter.current.style.height = "2.55rem";
      viewQueriesFilterTitle.current.onclick = () => {
        if (viewQueriesFilter.current.style.height == "2.55rem") {
          viewQueriesFilter.current.style.height = "28rem";
          // viewQueriesFilter.current.style.width = "78rem";
        } else {
          viewQueriesFilter.current.style.height = "2.55rem";
          // viewQueriesFilter.current.style.width = "7.75rem";
        }
      };
    }

    if (
      filterOrganisation.current &&
      filterOrganisationExpand.current &&
      viewQueriesFilter.current &&
      filterDepartment.current &&
      filterDepartmentExpand.current &&
      filterPreferences.current &&
      filterPreferencesExpand.current &&
      filterDepartmentIcon.current &&
      filterOrganisationIcon.current &&
      filterPreferencesIcon.current
    ) {
      filterDepartmentExpand.current.style.height = "0rem";
      filterPreferencesExpand.current.style.height = "0rem";

      filterOrganisationExpand.current.style.height = "14.4rem";
      filterOrganisationIcon.current.style.visibility = "hidden";

      filterOrganisation.current.onclick = () => {
        // console.log("organisation", orgOpen, depOpen, prefOpen);
        if (filterOrganisationExpand.current.style.height == "0rem") {
          filterDepartmentIcon.current.style.visibility = "visible";
          filterOrganisationIcon.current.style.visibility = "hidden";
          filterPreferencesIcon.current.style.visibility = "visible";

          filterOrganisation.current.style.borderRadius = "0px";
          filterDepartmentExpand.current.style.height = "0rem";
          filterPreferencesExpand.current.style.height = "0rem";
          filterOrganisationExpand.current.style.height = "14.4rem";
        } else {
          filterOrganisation.current.style.borderRadius = "5px";
        }
      };

      filterDepartment.current.onclick = () => {
        // console.log("department", orgOpen, depOpen, prefOpen);

        if (filterDepartmentExpand.current.style.height == "0rem") {
          filterOrganisationExpand.current.style.height = "0rem";
          filterPreferencesExpand.current.style.height = "0rem";
          filterDepartmentExpand.current.style.height = "14.4rem";
          filterDepartmentIcon.current.style.visibility = "hidden";
          filterOrganisationIcon.current.style.visibility = "visible";
          filterPreferencesIcon.current.style.visibility = "visible";

          filterDepartment.current.style.borderRadius = "0px";
        } else {
          filterDepartment.current.style.borderRadius = "5px";
        }
      };

      filterPreferences.current.onclick = () => {
        // // console.log("preferences", orgOpen, depOpen, prefOpen);

        if (filterPreferencesExpand.current.style.height == "0rem") {
          filterDepartmentExpand.current.style.height = "0rem";
          filterOrganisationExpand.current.style.height = "0rem";
          filterPreferencesExpand.current.style.height = "14.4rem";
          filterDepartmentIcon.current.style.visibility = "visible";
          filterOrganisationIcon.current.style.visibility = "visible";
          filterPreferencesIcon.current.style.visibility = "hidden";
          viewQueriesFilter.current.style.height = "28rem";
          filterPreferences.current.style.borderRadius = "0px";
        } else {
          filterPreferences.current.style.borderRadius = "5px";
        }
      };
    }
  });

  const setOrganisationValue = (val) => {
    setOrgValue(val);
  };
  const setDepartmentValue = (val) => {
    setDepValue(val);
  };
  const setPreferencesValue = (val) => {
    setPrefValue(val);
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetch("https://quire-flow-4.onrender.com/viewQuery/myQueries", {
        // fetch("http://localhost:2300/viewQuery/myQueries", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((response) => {
          const arr = [];
          response.allQuery.forEach((item) => {
            item.query.forEach((itemnext) => {
              const curEle = {
                organisation: item.receiver.organisation,
                department: item.receiver.department,
                name: item.receiver.name,
                anonyKey: item.receiver.anonyKey,
                preferences: itemnext.preferences,
                markAs: itemnext.markAs,
                title: itemnext.title,
                description: itemnext.description,
                image: itemnext.image,
                video: itemnext.video,
                _id: itemnext._id,
              };
              arr.push(curEle);
            });
          });
          // console.log("response", response, arr);
          setAllQueryArr(arr);
          setAllGlobalQueryArr(arr);
        })
        .catch((error) => {
          console.log("Some error occurred while fetching my query", error);
        });
    }
  }, []);

  const submitForm = () => {
    const filterTitleData = filterTitle.current.value;
    const filterDescriptionData = filterDescription.current.value;
    const filterAnonyKeyData = filterAnonyKey.current.value;

    console.log(globalAllQueryArr);
    console.log(orgValue, " ", depValue, " ", prefValue);
    const filteredData = globalAllQueryArr.filter((item) => {
      // console.log("single item", ietem);
      const orgMatch =
        orgValue === "All" ||
        orgValue === "Select Organisation" ||
        item.organisation.toLowerCase().includes(orgValue.toLowerCase());
      const depMatch =
        depValue === "All" ||
        depValue === "Select Department" ||
        item.department.toLowerCase().includes(depValue.toLowerCase());
      const prefMatch =
        prefValue === "Select Preferences" ||
        prefValue === "None" ||
        item.preferences.toLowerCase().includes(prefValue.toLowerCase());
      const AnonyKeyMatch =
        !filterAnonyKeyData ||
        item.anonyKey.toLowerCase().includes(filterAnonyKeyData.toLowerCase());
      const titleMatch =
        !filterTitleData || item.title.toLowerCase().includes(filterTitleData);
      const descriptionMatch =
        !filterDescriptionData ||
        item.description.toLowerCase().includes(filterDescriptionData);

      return (
        orgMatch &&
        depMatch &&
        prefMatch &&
        AnonyKeyMatch &&
        titleMatch &&
        descriptionMatch
      );
    });

    // console.log(filteredData);
    setAllQueryArr(filteredData);
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
              ref={upperFlexFirst}
            >
              Effortless Query Tracking
            </div>
            <div
              className="my_queries_container_second_header_flexChild_class"
              id="my_queries_container_second_header_flex_second"
              ref={upperFlexSecond}
            >
              Organized Query History
            </div>
            <div
              className="my_queries_container_second_header_flexChild_class"
              id="my_queries_container_second_header_flex_third"
              ref={upperFlexThird}
            >
              Smart Query Organization
            </div>
            <div
              className="my_queries_container_second_header_flexChild_class"
              id="my_queries_container_second_header_flex_fourth"
              ref={upperFlexFourth}
            >
              Priority-based Query Handling
            </div>
            <div
              className="my_queries_container_second_header_flexChild_class"
              id="my_queries_container_second_header_flex_fifth"
              ref={upperFlexFifth}
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
                Keep tabs on all your queries effortlessly
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
                Track, review, and learn from past queries.
              </div>
              <div
                className="my_queries_container_second_bottom_dataChildSecond_class"
                id="my_queries_container_second_bottom_second_data_second"
              >
                Explore your past queries in a structured and organized manner
                to gain insights and track your communication history
                effortlessly
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
                Efficiently manage and access your queries
              </div>
              <div
                className="my_queries_container_second_bottom_dataChildSecond_class"
                id="my_queries_container_second_bottom_third_data_second"
              >
                Seamlessly manage your queries with our smart organization
                feature, streamlining your workflow for optimal efficiency and
                clarity
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
                Queries with our priority-based system
              </div>
              <div
                className="my_queries_container_second_bottom_dataChildSecond_class"
                id="my_queries_container_second_bottom_fourth_data_second"
              >
                Our priority-based query handling system ensures that urgent
                matters receive immediate attention, streamlining workflow and
                enhancing productivity. Easily prioritize, track, and resolve
                queries for seamless communication and swift resolution
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
                Tailored Query Insights
              </div>
              <div
                className="my_queries_container_second_bottom_dataChildSecond_class"
                id="my_queries_container_second_bottom_fifth_data_second"
              >
                Gain valuable insights into your queries with personalized
                analytics, enhancing your understanding and decision-making.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="my_queries_container_third_viewQueries">
        <div id="my_queries_container_third_viewQueries_showDirection">
          Your Sent Queries
        </div>

        {/* // <div> */}
        <div
          id="my_queries_container_third_viewQueries_filter"
          ref={viewQueriesFilter}
        >
          <div
            id="my_queries_container_third_viewQueries_filter_title"
            ref={viewQueriesFilterTitle}
          >
            Filters
            <span
              id="my_queries_container_third_viewQueries_filter_font"
              class="material-symbols-outlined"
            >
              filter_list
            </span>
          </div>
          <div id="my_queries_container_third_viewQueries_filter_queryTitle">
            <input
              class="my_queries_container_third_viewQueries_filter_inputClass"
              placeholder="Enter title"
              type="text"
              name="filterTitle"
              ref={filterTitle}
            />
          </div>
          <div id="my_queries_container_third_viewQueries_filter_queryPara">
            <input
              class="my_queries_container_third_viewQueries_filter_inputClass"
              placeholder="Enter para"
              type="text"
              name="filterDescription"
              ref={filterDescription}
            />
          </div>
          <div id="my_queries_container_third_viewQueries_filter_anonyKey">
            <input
              class="my_queries_container_third_viewQueries_filter_inputClass"
              placeholder="Enter anonyKey"
              type="text"
              name="filterAnonyKey"
              ref={filterAnonyKey}
            />
          </div>
          <div
            id="my_queries_container_third_viewQueries_filter_organisation"
            ref={filterOrganisation}
            className="my_queries_container_third_viewQueries_filterHeading"
          >
            <div
              id="my_queries_container_third_viewQueries_filter_organisation_first"
              className="my_queries_container_third_viewQueries_filterHeading_title"
            >
              {orgValue}
            </div>
            <div
              id="my_queries_container_third_viewQueries_filter_organisation_second"
              className="my_queries_container_third_viewQueries_filterHeading_icon"
            >
              <span
                class="material-symbols-outlined my_queries_container_third_viewQueries_filter_iconClass"
                ref={filterOrganisationIcon}
              >
                expand_more
              </span>
            </div>
          </div>

          <div
            id="my_queries_container_third_viewQueries_filter_department"
            ref={filterDepartment}
            className="my_queries_container_third_viewQueries_filterHeading"
          >
            <div
              id="my_queries_container_third_viewQueries_filter_department_first"
              className="my_queries_container_third_viewQueries_filterHeading_title"
            >
              {depValue}
            </div>
            <div
              id="my_queries_container_third_viewQueries_filter_department_second"
              className="my_queries_container_third_viewQueries_filterHeading_icon"
            >
              <span
                class="material-symbols-outlined my_queries_container_third_viewQueries_filter_iconClass"
                ref={filterDepartmentIcon}
              >
                expand_more
              </span>
            </div>
          </div>
          <div
            id="my_queries_container_third_viewQueries_filter_preferences"
            ref={filterPreferences}
            className="my_queries_container_third_viewQueries_filterHeading"
          >
            <div
              id="my_queries_container_third_viewQueries_filter_preferences_first"
              className="my_queries_container_third_viewQueries_filterHeading_title"
            >
              {prefValue}
            </div>
            <div
              id="my_queries_container_third_viewQueries_filter_preferences_second"
              className="my_queries_container_third_viewQueries_filterHeading_icon"
            >
              <span
                class="material-symbols-outlined my_queries_container_third_viewQueries_filter_iconClass"
                ref={filterPreferencesIcon}
              >
                expand_more
              </span>
            </div>
          </div>
          {/* expand of ORGANISATION */}
          {/* expand of ORGANISATION */}
          {/* expand of ORGANISATION */}
          {/* expand of ORGANISATION */}
          {/* expand of ORGANISATION */}
          <div
            id="my_queries_container_third_viewQueries_filter_organisation_expand"
            ref={filterOrganisationExpand}
          >
            <div
              onClick={() => setOrganisationValue("Microsoft")}
              className="my_queries_container_third_viewQueries_filter_organisation_expandChild"
              id="my_queries_container_third_viewQueries_filter_organisation_expandChild_first"
            >
              Microsoft
            </div>
            <div
              onClick={() => setOrganisationValue("Amazon")}
              className="my_queries_container_third_viewQueries_filter_organisation_expandChild"
              id="my_queries_container_third_viewQueries_filter_organisation_expandChild_second"
            >
              Amazon
            </div>
            <div
              onClick={() => setOrganisationValue("Google")}
              className="my_queries_container_third_viewQueries_filter_organisation_expandChild"
              id="my_queries_container_third_viewQueries_filter_organisation_expandChild_third"
            >
              Google
            </div>
            <div
              onClick={() => setOrganisationValue("Apple")}
              className="my_queries_container_third_viewQueries_filter_organisation_expandChild"
              id="my_queries_container_third_viewQueries_filter_organisation_expandChild_fourth"
            >
              Apple
            </div>
            <div
              onClick={() => setOrganisationValue("Swiggy")}
              className="my_queries_container_third_viewQueries_filter_organisation_expandChild"
              id="my_queries_container_third_viewQueries_filter_organisation_expandChild_fifth"
            >
              Swiggy
            </div>
            <div
              onClick={() => setOrganisationValue("Zomato")}
              className="my_queries_container_third_viewQueries_filter_organisation_expandChild"
              id="my_queries_container_third_viewQueries_filter_organisation_expandChild_sixth"
            >
              Zomato
            </div>
            <div
              onClick={() => setOrganisationValue("Snapchat")}
              className="my_queries_container_third_viewQueries_filter_organisation_expandChild"
              id="my_queries_container_third_viewQueries_filter_organisation_expandChild_seventh"
            >
              Snapchat
            </div>
            <div
              onClick={() => setOrganisationValue("Atlassian")}
              className="my_queries_container_third_viewQueries_filter_organisation_expandChild"
              id="my_queries_container_third_viewQueries_filter_organisation_expandChild_eight"
            >
              Atlassian
            </div>
            <div
              onClick={() => setOrganisationValue("Goldman SAchs")}
              className="my_queries_container_third_viewQueries_filter_organisation_expandChild"
              id="my_queries_container_third_viewQueries_filter_organisation_expandChild_ninth"
            >
              Goldman Sachs
            </div>
            <div
              onClick={() => setOrganisationValue("Tower Research")}
              className="my_queries_container_third_viewQueries_filter_organisation_expandChild"
              id="my_queries_container_third_viewQueries_filter_organisation_expandChild_tenth"
            >
              Tower Research
            </div>

            <div
              onClick={() => setOrganisationValue("All")}
              className="my_queries_container_third_viewQueries_filter_organisation_expandChild"
              id="my_queries_container_third_viewQueries_filter_organisation_expandChild_eleventh5"
            >
              All
            </div>
          </div>
          {/* expand of DEPARTMENT */}
          {/* expand of DEPARTMENT */}
          {/* expand of DEPARTMENT */}
          {/* expand of DEPARTMENT */}
          {/* expand of DEPARTMENT */}
          <div
            id="my_queries_container_third_viewQueries_filter_department_expand"
            ref={filterDepartmentExpand}
          >
            <div
              onClick={() => setDepartmentValue("product Development")}
              className="my_queries_container_third_viewQueries_filter_department_expandChild"
              id="my_queries_container_third_viewQueries_filter_department_expandChild_first"
            >
              Product Development
            </div>
            <div
              onClick={() => setDepartmentValue("Technical Support")}
              className="my_queries_container_third_viewQueries_filter_department_expandChild"
              id="my_queries_container_third_viewQueries_filter_department_expandChild_second"
            >
              Technical Support
            </div>
            <div
              onClick={() => setDepartmentValue("Human Resources")}
              className="my_queries_container_third_viewQueries_filter_department_expandChild"
              id="my_queries_container_third_viewQueries_filter_department_expandChild_third"
            >
              Human Resources
            </div>
            <div
              onClick={() => setDepartmentValue("Quality Assurance")}
              className="my_queries_container_third_viewQueries_filter_department_expandChild"
              id="my_queries_container_third_viewQueries_filter_department_expandChild_fourth"
            >
              Quality Assurance
            </div>
            <div
              onClick={() => setDepartmentValue("Research")}
              className="my_queries_container_third_viewQueries_filter_department_expandChild"
              id="my_queries_container_third_viewQueries_filter_department_expandChild_fifth"
            >
              Research
            </div>
            <div
              onClick={() => setDepartmentValue("Training")}
              className="my_queries_container_third_viewQueries_filter_department_expandChild"
              id="my_queries_container_third_viewQueries_filter_department_expandChild_sixth"
            >
              Training
            </div>
            <div
              onClick={() => setDepartmentValue("Events")}
              className="my_queries_container_third_viewQueries_filter_department_expandChild"
              id="my_queries_container_third_viewQueries_filter_department_expandChild_seventh"
            >
              Events
            </div>
            <div
              onClick={() => setDepartmentValue("Product Development")}
              className="my_queries_container_third_viewQueries_filter_department_expandChild"
              id="my_queries_container_third_viewQueries_filter_department_expandChild_eight"
            >
              Product Development
            </div>
            <div
              onClick={() => setDepartmentValue("Finance")}
              className="my_queries_container_third_viewQueries_filter_department_expandChild"
              id="my_queries_container_third_viewQueries_filter_department_expandChild_ninth"
            >
              Finance
            </div>
            <div
              onClick={() => setDepartmentValue("Customer Support")}
              className="my_queries_container_third_viewQueries_filter_department_expandChild"
              id="my_queries_container_third_viewQueries_filter_department_expandChild_tenth"
            >
              Customer Support
            </div>
            <div
              onClick={() => setDepartmentValue("All")}
              className="my_queries_container_third_viewQueries_filter_department_expandChild"
              id="my_queries_container_third_viewQueries_filter_department_expandChild_eleventh"
            >
              All
            </div>
          </div>
          {/* expand of PREFERENCES */}
          {/* expand of PREFERENCES */}
          {/* expand of PREFERENCES */}
          {/* expand of PREFERENCES */}
          {/* expand of PREFERENCES */}
          <div
            id="my_queries_container_third_viewQueries_filter_preferences_expand"
            ref={filterPreferencesExpand}
          >
            <div
              onClick={() => setPreferencesValue("Urgent")}
              className="my_queries_container_third_viewQueries_filter_preferences_expandChild"
              id="my_queries_container_third_viewQueries_filter_preferences_expandChild_first"
            >
              Urgent
            </div>
            <div
              onClick={() => setPreferencesValue("Normal")}
              className="my_queries_container_third_viewQueries_filter_preferences_expandChild"
              id="my_queries_container_third_viewQueries_filter_preferences_expandChild_first"
            >
              Normal
            </div>
            <div
              onClick={() => setPreferencesValue("Important")}
              className="my_queries_container_third_viewQueries_filter_preferences_expandChild"
              id="my_queries_container_third_viewQueries_filter_preferences_expandChild_first"
            >
              Important
            </div>
            <div
              onClick={() => setPreferencesValue("Research Required")}
              className="my_queries_container_third_viewQueries_filter_preferences_expandChild"
              id="my_queries_container_third_viewQueries_filter_preferences_expandChild_second"
            >
              Research Required
            </div>
            <div
              onClick={() => setPreferencesValue("None")}
              className="my_queries_container_third_viewQueries_filter_preferences_expandChild"
              id="my_queries_container_third_viewQueries_filter_preferences_expandChild_third"
            >
              None
            </div>
          </div>

          <div
            id="my_queries_container_third_viewQueries_filter_search"
            ref={filterSearch}
            onClick={submitForm}
          >
            Search
          </div>
        </div>

        {allQueryArr.length > 0 ? (
          <div id="my_queries_container_third_viewQueries_data">
            {localStorage.getItem("token") ? (
              allQueryArr.map((data, index) => {
                return (
                  <Link
                    style={{ textDecoration: "none" }}
                    key={index}
                    to={`/my_queries/${data._id}`}
                  >
                    <CardQueryChild query={data} key={index} />
                  </Link>
                );
              })
            ) : (
              <div id="noToken_global">
                Please <Link to="/authentication">Login/SignUp</Link> to see all
                the received queries
              </div>
            )}
          </div>
        ) : (
          // </div>
          <div
            style={{
              marginTop: "3rem",
              fontSize: "larger",
              marginBottom: "10rem",
              marginLeft: "1rem",
            }}
          >
            No available queries . Either Your filter do not match any query or
            Your sent query is empty . Add new query by clicking{" "}
            <Link to="/new_query">here</Link>
          </div>
        )}
      </div>
    </>
  );
};

export default My_Queries;
