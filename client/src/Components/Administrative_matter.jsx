import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Administrative_matter_JSON from "./administrativeMatter.json";
import Child_Administrative_matter from "./Child_Administrative_matter";
import SecondInfo_Child_administrator_container from "./secondInfo_Child_administrator_container";
import secondInfo_administrativeMatter from "./secondInfo_administrativeMatter.json";
const Administrative_matter = () => {
  const takeToTheViewQueries = useRef(null);
  const filterup = useRef(null);
  const filterleft = useRef(null);
  const searchFilters = useRef(null);
  const resetFilters = useRef(null);
  const titleValue = useRef(null);
  const descriptionValue = useRef(null);

  const [orgValue, setOrgValue] = useState("Select Organisation");
  const [depValue, setDepValue] = useState("Select Department");
  const [prefValue, setPrefValue] = useState("Select Preferences");
  const [markAsValue, setMarkAsValue] = useState("Pending");
  const [allQueryArr, setAllQueryArr] = useState([]);
  const [globalQueryFullArr, setGlobalQueryFullArr] = useState([]);

  useEffect(() => {
    if (
      searchFilters.current &&
      titleValue.current &&
      descriptionValue.current
    ) {
      searchFilters.current.onclick = () => {
        const titleFilterValue = titleValue.current.value.toLowerCase();
        const descriptionFilterValue =
          descriptionValue.current.value.toLowerCase();
        console.log("global arr", globalQueryFullArr);
        const filteredData = globalQueryFullArr.filter((item) => {
          console.log("single item", item);
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
          const markAsMatch =
            markAsValue === "All" ||
            item.markAs.toLowerCase().includes(markAsValue.toLowerCase());

          const titleMatch =
            !titleFilterValue ||
            item.title.toLowerCase().includes(titleFilterValue);
          const descriptionMatch =
            !descriptionFilterValue ||
            item.description.toLowerCase().includes(descriptionFilterValue);

          console.log(
            "orgMatch",
            orgMatch,
            orgValue.toLowerCase(),
            "depMatch",
            depMatch,
            depValue.toLowerCase(),
            "prefMatch",
            prefMatch,
            prefValue.toLowerCase(),
            "markAsMatch",
            markAsMatch,
            markAsValue.toLowerCase(),
            "titleMatch",
            titleMatch,
            titleFilterValue,
            "descriptionMatch",
            descriptionMatch,
            descriptionFilterValue
          );
          return (
            orgMatch &&
            depMatch &&
            prefMatch &&
            markAsMatch &&
            titleMatch &&
            descriptionMatch
          );
        });

        console.log(filteredData);
        setAllQueryArr(filteredData);
      };
    }

    if (
      resetFilters.current &&
      titleValue.current &&
      descriptionValue.current &&
      filterUpInProgressQuery.current &&
      filterUpAcknowledgedQuery.current &&
      filterUpAll.current &&
      filterUpResearchQuery.current &&
      filterUpSpecialQuery.current &&
      filterUpPending.current
    ) {
      resetFilters.current.onclick = () => {
        setOrgValue("Select Organisation");
        setDepValue("Select Department");
        setPrefValue("Select Preferences");
        setMarkAsValue("Pending");
        titleValue.current.value = "";
        descriptionValue.current.value = "";
        filterUpInProgressQuery.current.style.backgroundColor = "white";
        filterUpInProgressQuery.current.style.color = "black";
        filterUpAcknowledgedQuery.current.style.backgroundColor = "white";
        filterUpAcknowledgedQuery.current.style.color = "black";
        filterUpAll.current.style.backgroundColor = "white";
        filterUpAll.current.style.color = "black";
        filterUpResearchQuery.current.style.backgroundColor = "white";
        filterUpResearchQuery.current.style.color = "black";
        filterUpSpecialQuery.current.style.backgroundColor = "white";
        filterUpSpecialQuery.current.style.color = "black";
        filterUpPending.current.style.backgroundColor = "#16252D";
        filterUpPending.current.style.color = "white";
        console.log("on resetting", globalQueryFullArr);
        setAllQueryArr(globalQueryFullArr);
      };
    }
  });

  const filterLeftOrganisationHeadingReference = useRef(null);
  const filterLeftDepartmentHeadingReference = useRef(null);
  const filterLeftPreferenceHeadingReference = useRef(null);
  const filterLeftOrganisationSelectReference = useRef(null);
  const filterLeftDepartmentSelectReference = useRef(null);
  const filterLeftPreferenceSelectReference = useRef(null);
  const filterUpInProgressQuery = useRef(null);
  const filterUpAcknowledgedQuery = useRef(null);
  const filterUpResearchQuery = useRef(null);
  const filterUpSpecialQuery = useRef(null);
  const filterUpAll = useRef(null);
  const filterUpPending = useRef(null);

  const queryContainer = useRef(null);
  useEffect(() => {
    if (takeToTheViewQueries.current) {
      takeToTheViewQueries.current.onclick = () => {
        if (takeToTheViewQueries.current) {
          window.scrollTo({
            top: 1342,
            behavior: "smooth",
          });
        }
      };
    }
  }, []);
  useEffect(() => {
    if (
      filterLeftOrganisationHeadingReference.current &&
      filterLeftDepartmentHeadingReference.current &&
      filterLeftPreferenceHeadingReference.current
    ) {
      filterLeftOrganisationHeadingReference.current.onclick = () => {
        filterLeftOrganisationSelectReference.current.style.height = "21rem";
        filterLeftOrganisationSelectReference.current.style.opacity = "1";
        filterLeftDepartmentSelectReference.current.style.height = "0";
        filterLeftDepartmentSelectReference.current.style.opacity = "0";
        filterLeftPreferenceSelectReference.current.style.height = "0";
        filterLeftPreferenceSelectReference.current.style.opacity = "0";
      };

      filterLeftDepartmentHeadingReference.current.onclick = () => {
        filterLeftOrganisationSelectReference.current.style.height = "0";
        filterLeftOrganisationSelectReference.current.style.opacity = "0";
        filterLeftDepartmentSelectReference.current.style.height = "21rem";
        filterLeftDepartmentSelectReference.current.style.opacity = "1";
        filterLeftPreferenceSelectReference.current.style.height = "0";
        filterLeftPreferenceSelectReference.current.style.opacity = "0";
      };

      filterLeftPreferenceHeadingReference.current.onclick = () => {
        filterLeftOrganisationSelectReference.current.style.height = "0";
        filterLeftOrganisationSelectReference.current.style.opacity = "0";
        filterLeftDepartmentSelectReference.current.style.height = "0";
        filterLeftDepartmentSelectReference.current.style.opacity = "0";
        filterLeftPreferenceSelectReference.current.style.height = "21rem";
        filterLeftPreferenceSelectReference.current.style.opacity = "1";
      };
    }
  }, []);

  window.onscroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 1460) {
      if (filterup.current) {
        filterup.current.style.position = "fixed";
        filterup.current.style.width = "73.88rem";
        filterup.current.style.top = "-2.9rem";
      }
      if (filterleft.current) {
        filterleft.current.style.position = "fixed";
        filterleft.current.style.top = "6rem";
      }
      if (queryContainer.current) {
        queryContainer.current.style.marginTop = "11.90rem";
      }
    } else {
      if (filterup.current) {
        filterup.current.style.position = "static";
        // filterup.current.style.width="73.8rem";
        filterup.current.style.marginTop = "2.9rem";
      }
      if (filterleft.current) {
        filterleft.current.style.position = "static";
        filterleft.current.style.marginTop = "-6.06rem";
      }
      if (queryContainer.current) {
        queryContainer.current.style.marginTop = "-29.4rem";
      }
    }
  };

  useEffect(() => {
    if (
      filterUpInProgressQuery.current &&
      filterUpAcknowledgedQuery.current &&
      filterUpAll.current &&
      filterUpResearchQuery.current &&
      filterUpSpecialQuery.current &&
      filterUpPending.current
    ) {
      // console.log("dd")
      filterUpInProgressQuery.current.onclick = () => {
        filterUpInProgressQuery.current.style.backgroundColor = "#16252D";
        filterUpInProgressQuery.current.style.color = "white";
        filterUpAcknowledgedQuery.current.style.backgroundColor = "white";
        filterUpAcknowledgedQuery.current.style.color = "black";
        filterUpAll.current.style.backgroundColor = "white";
        filterUpAll.current.style.color = "black";
        filterUpResearchQuery.current.style.backgroundColor = "white";
        filterUpResearchQuery.current.style.color = "black";
        filterUpSpecialQuery.current.style.backgroundColor = "white";
        filterUpSpecialQuery.current.style.color = "black";
        filterUpPending.current.style.backgroundColor = "white";
        filterUpPending.current.style.color = "black";
      };
      filterUpAcknowledgedQuery.current.onclick = () => {
        filterUpInProgressQuery.current.style.backgroundColor = "white";
        filterUpInProgressQuery.current.style.color = "black";
        filterUpAcknowledgedQuery.current.style.backgroundColor = "#16252D";
        filterUpAcknowledgedQuery.current.style.color = "white";
        filterUpAll.current.style.backgroundColor = "white";
        filterUpAll.current.style.color = "black";
        filterUpResearchQuery.current.style.backgroundColor = "white";
        filterUpResearchQuery.current.style.color = "black";
        filterUpSpecialQuery.current.style.backgroundColor = "white";
        filterUpSpecialQuery.current.style.color = "black";
        filterUpPending.current.style.backgroundColor = "white";
        filterUpPending.current.style.color = "black";
      };
      filterUpAll.current.onclick = () => {
        filterUpInProgressQuery.current.style.backgroundColor = "white";
        filterUpInProgressQuery.current.style.color = "black";
        filterUpAcknowledgedQuery.current.style.backgroundColor = "white";
        filterUpAcknowledgedQuery.current.style.color = "black";
        filterUpAll.current.style.backgroundColor = "#16252D";
        filterUpAll.current.style.color = "white";
        filterUpResearchQuery.current.style.backgroundColor = "white";
        filterUpResearchQuery.current.style.color = "black";
        filterUpSpecialQuery.current.style.backgroundColor = "white";
        filterUpSpecialQuery.current.style.color = "black";
        filterUpPending.current.style.backgroundColor = "white";
        filterUpPending.current.style.color = "black";
      };
      filterUpResearchQuery.current.onclick = () => {
        filterUpInProgressQuery.current.style.backgroundColor = "white";
        filterUpInProgressQuery.current.style.color = "black";
        filterUpAcknowledgedQuery.current.style.backgroundColor = "white";
        filterUpAcknowledgedQuery.current.style.color = "black";
        filterUpAll.current.style.backgroundColor = "white";
        filterUpAll.current.style.color = "black";
        filterUpResearchQuery.current.style.backgroundColor = "#16252D";
        filterUpResearchQuery.current.style.color = "white";
        filterUpSpecialQuery.current.style.backgroundColor = "white";
        filterUpSpecialQuery.current.style.color = "black";
        filterUpPending.current.style.backgroundColor = "white";
        filterUpPending.current.style.color = "black";
      };
      filterUpSpecialQuery.current.onclick = () => {
        filterUpInProgressQuery.current.style.backgroundColor = "white";
        filterUpInProgressQuery.current.style.color = "black";
        filterUpAcknowledgedQuery.current.style.backgroundColor = "white";
        filterUpAcknowledgedQuery.current.style.color = "black";
        filterUpAll.current.style.backgroundColor = "white";
        filterUpAll.current.style.color = "black";
        filterUpResearchQuery.current.style.backgroundColor = "white";
        filterUpResearchQuery.current.style.color = "black";
        filterUpSpecialQuery.current.style.backgroundColor = "#16252D";
        filterUpSpecialQuery.current.style.color = "white";
        filterUpPending.current.style.backgroundColor = "white";
        filterUpPending.current.style.color = "black";
      };
      filterUpPending.current.onclick = () => {
        filterUpInProgressQuery.current.style.backgroundColor = "white";
        filterUpInProgressQuery.current.style.color = "black";
        filterUpAcknowledgedQuery.current.style.backgroundColor = "white";
        filterUpAcknowledgedQuery.current.style.color = "black";
        filterUpAll.current.style.backgroundColor = "white";
        filterUpAll.current.style.color = "black";
        filterUpResearchQuery.current.style.backgroundColor = "white";
        filterUpResearchQuery.current.style.color = "black";
        filterUpSpecialQuery.current.style.backgroundColor = "white";
        filterUpSpecialQuery.current.style.color = "black";
        filterUpPending.current.style.backgroundColor = "#16252D";
        filterUpPending.current.style.color = "white";
      };
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetch("http://localhost:2300/viewQuery/administrativeMatter", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((response) => {
          const filteredData = [];
          response.queries.forEach((item) => {
            item.forEach((childItem) => {
              filteredData.push(childItem);
              console.log(new Date(childItem.createdAt));
              console.log(childItem.createdAt);
            });
          });
          setAllQueryArr(filteredData);
          setGlobalQueryFullArr(filteredData);
          console.log("response", globalQueryFullArr, filteredData);
        })
        .catch((error) => {
          console.log(
            "Some error occurred while fetching the administrative matter query",
            error
          );
        });
    }
  }, []);

  useEffect(() => {
    console.log(markAsValue);
  });

  const setOrganisation = (val) => {
    setOrgValue(val);
  };
  const setDepartment = (val) => {
    setDepValue(val);
  };
  const setPreferences = (val) => {
    setPrefValue(val);
  };
  const setMarkAs = (val) => {
    setMarkAsValue(val);
  };
  return (
    <div id="administrator_container">
      {/* FIRST PART */}
      {/* FIRST PART */}
      {/* FIRST PART */}
      {/* FIRST PART */}
      {/* FIRST PART */}
      {/* FIRST PART */}
      {/* FIRST PART */}
      {/* FIRST PART */}

      <div id="administrator_container_front">
        <div id="administrator_container_frontLeftPart">
          <div id="administrator_container_frontLeftPart_heading">
            Unlocking Insights, Managing Queries
          </div>
          <div id="administrator_container_frontLeftPart_para">
            Explore and manage all incoming queries and administrative matters
            efficiently. This section serves as the central hub for all
            anonymized interactions, allowing you to review, respond, and
            organize queries received from users. Stay informed and in control
            of administrative tasks with ease.
          </div>
          <div
            id="administrator_container_frontLeftPart_viewQueryButton"
            ref={takeToTheViewQueries}
          >
            View Recieved Queries
          </div>
        </div>
        <div id="administrator_container_frontRightPart">
          <video height="500" width="600" autoPlay loop>
            <source
              src="Videos/A user starting a huddle and recording a video clip with the Slack app.webm"
              type="video/webm"
            ></source>
          </video>
        </div>

        {/* SECOND PART */}
        {/* SECOND PART */}
        {/* SECOND PART */}
        {/* SECOND PART */}
        {/* SECOND PART */}
        {/* SECOND PART */}
        {/* SECOND PART */}
      </div>
      <div id="administrator_container_secondInfo">
        <div id="administrator_container_secondInfo_heading">
          Take a deeper dive into a new way to work
        </div>
        <div id="administrator_container_secondInfo_dataContainer">
          {secondInfo_administrativeMatter.map((data, index) => {
            return (
              <SecondInfo_Child_administrator_container
                key={index}
                url={data.url}
                title1={data.title1}
                title2={data.title2}
                footer={data.footer}
                styleCustomized={index}
              />
            );
          })}
        </div>
      </div>

      {/* THIRD PART */}
      {/* THIRD PART */}
      {/* THIRD PART */}
      {/* THIRD PART */}
      {/* THIRD PART */}
      {/* THIRD PART */}
      {/* THIRD PART */}
      {/* THIRD PART */}

      <div id="administrator_container_thirdAds"></div>

      {/* //FOURTH PART */}
      {/* //FOURTH PART */}

      {/* //FOURTH PART */}

      {/* //FOURTH PART */}
      <div id="administrator_container_viewQueries">Received Queries</div>
      {localStorage.getItem("token") !== null ? (
        <>
          <div id="administrator_container_allQueriesContainer">
            <div id="administrator_container_filterUp" ref={filterup}>
              <input
                id="administrator_container_filterUp_inputTitle"
                type="text"
                placeholder="Search specific title"
                ref={titleValue}
              />
              <input
                id="administrator_container_filterUp_inputDesc"
                type="text"
                placeholder="Search specific description"
                ref={descriptionValue}
              />
              <div id="administrator_container_filterUp_markAs">
                <div
                  class="administrator_container_filterUp_markAsChildClass"
                  id="administrator_container_filterUp_boxProgress"
                  ref={filterUpInProgressQuery}
                  onClick={() => {
                    setMarkAs("InProgress query");
                  }}
                >
                  InProgress Query
                </div>
                <div
                  class="administrator_container_filterUp_markAsChildClass"
                  id="administrator_container_filterUp_boxAcknowledged"
                  ref={filterUpAcknowledgedQuery}
                  onClick={() => {
                    setMarkAs("Acknowledged query");
                  }}
                >
                  Acknowledged query
                </div>
                <div
                  class="administrator_container_filterUp_markAsChildClass"
                  id="administrator_container_filterUp_boxResearch"
                  ref={filterUpResearchQuery}
                  onClick={() => {
                    setMarkAs("Research Required");
                  }}
                >
                  Research Required
                </div>
                <div
                  class="administrator_container_filterUp_markAsChildClass"
                  id="administrator_container_filterUp_boxSpecial"
                  ref={filterUpSpecialQuery}
                  onClick={() => {
                    setMarkAs("Special One");
                  }}
                >
                  Special one
                </div>
                <div
                  class="administrator_container_filterUp_markAsChildClass"
                  id="administrator_container_filterUp_boxPending"
                  ref={filterUpPending}
                  onClick={() => {
                    setMarkAs("Pending");
                  }}
                >
                  Pending
                </div>
                <div
                  class="administrator_container_filterUp_markAsChildClass"
                  id="administrator_container_filterUp_selectAll"
                  ref={filterUpAll}
                  onClick={() => {
                    setMarkAs("All");
                  }}
                >
                  All
                </div>
              </div>
              <div id="administrator_container_filterUp_firstSeparation"></div>

              <div
                id="administrator_container_filterUp_search"
                ref={searchFilters}
              >
                Search
              </div>
              <div
                id="administrator_container_filterUp_reset"
                ref={resetFilters}
              >
                Reset
              </div>
            </div>

            <div id="administrator_container_filterLeft" ref={filterleft}>
              <div
                id="administrator_container_filterLeft_organisationHeading"
                ref={filterLeftOrganisationHeadingReference}
              >
                <div id="administrator_container_filterLeft_organisationTitle">
                  {orgValue}
                </div>

                <span
                  id="administrator_container_filterLeft_organisationHeading_expand"
                  class="material-symbols-outlined"
                >
                  expand_more
                </span>
              </div>
              <div
                id="administrator_container_filterLeft_organisationHeadingSelect"
                ref={filterLeftOrganisationSelectReference}
              >
                <div
                  onClick={() => {
                    setOrganisation("ABC Inc.");
                  }}
                  class="administrator_container_filterLeft_organisationHeadingSelect_childClass"
                >
                  ABC Inc.
                </div>
                <div
                  onClick={() => {
                    setOrganisation("XYZ Corporation");
                  }}
                  class="administrator_container_filterLeft_organisationHeadingSelect_childClass"
                >
                  XYZ Corporation
                </div>
                <div
                  onClick={() => {
                    setOrganisation("Chitkara University");
                  }}
                  class="administrator_container_filterLeft_organisationHeadingSelect_childClass"
                >
                  Chitkara University
                </div>
                <div
                  onClick={() => {
                    setOrganisation("Tech Innovators Ltd.");
                  }}
                  class="administrator_container_filterLeft_organisationHeadingSelect_childClass"
                >
                  Tech Innovators Ltd.
                </div>

                <div
                  onClick={() => {
                    setOrganisation("Global Corp");
                  }}
                  class="administrator_container_filterLeft_organisationHeadingSelect_childClass"
                >
                  Global Corp
                </div>

                <div
                  onClick={() => {
                    setOrganisation("City Properties Inc.");
                  }}
                  class="administrator_container_filterLeft_organisationHeadingSelect_childClass"
                >
                  City Properties Inc.
                </div>

                <div
                  onClick={() => {
                    setOrganisation("Tech Solutions Ltd.");
                  }}
                  class="administrator_container_filterLeft_organisationHeadingSelect_childClass"
                >
                  Tech Solutions Ltd.
                </div>

                <div
                  onClick={() => {
                    setOrganisation("Regulatory Corp");
                  }}
                  class="administrator_container_filterLeft_organisationHeadingSelect_childClass"
                >
                  Regulatory Corp
                </div>

                <div
                  onClick={() => {
                    setOrganisation("Learning Academy");
                  }}
                  class="administrator_container_filterLeft_organisationHeadingSelect_childClass"
                >
                  Learning Academy
                </div>
                <div
                  onClick={() => {
                    setOrganisation("All");
                  }}
                  class="administrator_container_filterLeft_organisationHeadingSelect_childClass"
                >
                  All
                </div>
              </div>

              <div
                id="administrator_container_filterLeft_departmentHeading"
                ref={filterLeftDepartmentHeadingReference}
              >
                <div id="administrator_container_filterLeft_departmentTitle">
                  {depValue}
                </div>

                <span
                  id="administrator_container_filterLeft_departmentHeading_expand"
                  class="material-symbols-outlined"
                >
                  expand_more
                </span>
              </div>
              <div
                id="administrator_container_filterLeft_departmentHeadingSelect"
                ref={filterLeftDepartmentSelectReference}
              >
                <div
                  onClick={() => {
                    setDepartment("IT Support");
                  }}
                  className="administrator_container_filterLeft_departmentHeadingSelect_childClass"
                >
                  IT Support
                </div>
                <div
                  onClick={() => {
                    setDepartment("Finance");
                  }}
                  className="administrator_container_filterLeft_departmentHeadingSelect_childClass"
                >
                  Finance
                </div>
                <div
                  onClick={() => {
                    setDepartment("Product Development");
                  }}
                  className="administrator_container_filterLeft_departmentHeadingSelect_childClass"
                >
                  Product Development
                </div>
                <div
                  onClick={() => {
                    setDepartment("Human Resource");
                  }}
                  className="administrator_container_filterLeft_departmentHeadingSelect_childClass"
                >
                  Human Resources
                </div>
                <div
                  onClick={() => {
                    setDepartment("Facilities Management");
                  }}
                  className="administrator_container_filterLeft_departmentHeadingSelect_childClass"
                >
                  Facilities Management
                </div>
                <div
                  onClick={() => {
                    setDepartment("Software Development");
                  }}
                  className="administrator_container_filterLeft_departmentHeadingSelect_childClass"
                >
                  Software Development
                </div>
                <div
                  onClick={() => {
                    setDepartment("Legal and Compliance");
                  }}
                  className="administrator_container_filterLeft_departmentHeadingSelect_childClass"
                >
                  Legal and Compliance
                </div>
                <div
                  onClick={() => {
                    setDepartment("Learning and Development");
                  }}
                  className="administrator_container_filterLeft_departmentHeadingSelect_childClass"
                >
                  Learning and Development
                </div>
                <div
                  onClick={() => {
                    setDepartment("Development");
                  }}
                  className="administrator_container_filterLeft_departmentHeadingSelect_childClass"
                >
                  Development
                </div>
                <div
                  onClick={() => {
                    setDepartment("All");
                  }}
                  className="administrator_container_filterLeft_departmentHeadingSelect_childClass"
                >
                  All
                </div>
              </div>
              <div
                id="administrator_container_filterLeft_preferencesHeading"
                ref={filterLeftPreferenceHeadingReference}
              >
                <div id="administrator_container_filterLeft_preferencesTitle">
                  {" "}
                  {prefValue}
                </div>

                <span
                  id="administrator_container_filterLeft_preferencesHeading_expand"
                  class="material-symbols-outlined"
                >
                  expand_more
                </span>
              </div>
              <div
                id="administrator_container_filterLeft_preferencesHeadingSelect"
                ref={filterLeftPreferenceSelectReference}
              >
                <div
                  onClick={() => {
                    setPreferences("Urgent");
                  }}
                  className="administrator_container_filterLeft_preferencesHeadingSelect_childClass"
                >
                  Urgent
                </div>
                <div
                  onClick={() => {
                    setPreferences("Normal");
                  }}
                  className="administrator_container_filterLeft_preferencesHeadingSelect_childClass"
                >
                  Normal
                </div>
                <div
                  onClick={() => {
                    setPreferences("Important");
                  }}
                  className="administrator_container_filterLeft_preferencesHeadingSelect_childClass"
                >
                  Important
                </div>
                <div
                  onClick={() => {
                    setPreferences("Research Required");
                  }}
                  className="administrator_container_filterLeft_preferencesHeadingSelect_childClass"
                >
                  Research Required
                </div>
                <div
                  onClick={() => {
                    setPreferences("None");
                  }}
                  className="administrator_container_filterLeft_preferencesHeadingSelect_childClass"
                >
                  None
                </div>
              </div>
            </div>
          </div>

          {/* //Child container */}
          {/* Child container */}
          <div
            id="administrator_container_queriesContainer"
            ref={queryContainer}
          >
            {allQueryArr.length == 0 ? (
              <div id="noQueryFilter">
                No such query for these filters , try to change some filter{" "}
                <br />
                OR
                <br /> You have not received any query
              </div>
            ) : (
              allQueryArr.map((data, index) => {
                return (
                  <Child_Administrative_matter
                    key={index}
                    queryTitle={data.title}
                    queryOrganisation={data.organisation}
                    queryDepartment={data.department}
                    queryDescription={data.description}
                    preferences={data.preferences}
                    dateSent={data.createdAt}
                    queryImages={data.image}
                    queryVideos={data.video}
                    queryObjectId={data._id}
                  />
                );
              })
            )}
          </div>
        </>
      ) : (
        <div id="noToken_global">
          Please <Link to="/authentication">Login/SignUp</Link> to see all the
          received queries
        </div>
      )}
    </div>
  );
};

export default Administrative_matter;
