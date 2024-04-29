import React, { useRef, useState, useEffect } from "react";
import Child_Globally_Shared from "./Child_Globally_Shared";
// import Public_Queries_json from "./Public_Queries.json";

const Globally_Shared = () => {
  const [orgValue, setOrgValue] = useState("All");
  const [depValue, setDepValue] = useState("All");

  const [allPublicQueryArr, setAllPublicQueryArr] = useState([]);
  const [globalAllQueryArr, setAllGlobalQueryArr] = useState([]);

  const orgExpand = useRef(null);
  const orgExpandBox = useRef(null);
  const orgExpandIcon = useRef(null);
  const depExpand = useRef(null);
  const depExpandBox = useRef(null);
  const depExpandIcon = useRef(null);

  const filterString = useRef(null);

  useEffect(() => {
    if (orgExpand.current && orgExpandBox.current && orgExpandIcon.current) {
      orgExpandBox.current.style.height = "0rem";
      // console.log("clicked");
      orgExpand.current.onclick = () => {
        if (orgExpandBox.current.style.height == "0rem") {
          orgExpandBox.current.style.height = "13rem";
          orgExpandIcon.current.style.transform = "rotate(-180deg)";
        } else {
          orgExpandBox.current.style.height = "0rem";
          orgExpandIcon.current.style.transform = "rotate(0deg)";
        }
      };
    }

    if (depExpand.current && depExpandBox.current && depExpandIcon.current) {
      depExpandBox.current.style.height = "0rem";
      depExpand.current.onclick = () => {
        if (depExpandBox.current.style.height == "0rem") {
          depExpandBox.current.style.height = "13rem";
          depExpandIcon.current.style.transform = "rotate(-180deg)";
        } else {
          depExpandBox.current.style.height = "0rem";
          depExpandIcon.current.style.transform = "rotate(0deg)";
        }
      };
    }
  }, []);

  useState(() => {
    // console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      fetch("https://quire-flow-4.onrender.com/public/all", {
        // fetch("http://localhost:2300/public/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((response) => {
          setAllPublicQueryArr(response.requiredQueryData);
          setAllGlobalQueryArr(response.requiredQueryData);
          // console.log("response form public/all route", response);
        })
        .catch((err) => {
          console.log("Some error occurred while fetching all public queries");
        });
    }
  });

  const setOrganisation = (val) => {
    setOrgValue(val);
  };
  const setDepartMent = (val) => {
    setDepValue(val);
  };
  const submitForm = () => {
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

      return orgMatch && depMatch;
    });

    // console.log(filteredData);
    setAllPublicQueryArr(filteredData);
  };
  return (
    <div className="for_footer_color" id="publically_shared_container">
      <div id="publically_shared_container_title">Public Queries</div>
      {/* left part */}
      {/* /left part */}
      {/* left part */}
      <div id="publically_shared_container_details">
        <div id="publically_shared_container_left">
          {/* Organisation */}
          {/* Organisation */}
          {/* Organisation */}
          <div id="publically_shared_container_left_title">Filters</div>
          <div id="publically_shared_container_leftSecondPart">
            <div id="publically_shared_container_left_selectOrganisation">
              Select Organisation
            </div>
            <div
              id="publically_shared_container_left_selectOrganisation_expand"
              ref={orgExpand}
            >
              <div id="publically_shared_container_left_selectOrganisation_expand_titleOnly">
                {orgValue}
              </div>
              <span
                id="publically_shared_container_left_selectOrganisation_expandIcon"
                class="material-symbols-outlined"
                ref={orgExpandIcon}
              >
                expand_more
              </span>
            </div>
            <div
              id="publically_shared_container_left_selectOrganisation_expandBox"
              ref={orgExpandBox}
            >
              <div
                onClick={() => {
                  setOrganisation("Amazon");
                }}
                class="publically_shared_container_left_selectOrganisation_expandBoxClass"
                id="publically_shared_container_left_selectOrganisation_expandBox_1"
              >
                Amazon
              </div>
              <div
                onClick={() => {
                  setOrganisation("Google");
                }}
                class="publically_shared_container_left_selectOrganisation_expandBoxClass"
                id="publically_shared_container_left_selectOrganisation_expandBox_2"
              >
                Google
              </div>
              <div
                onClick={() => {
                  setOrganisation("Microsoft");
                }}
                class="publically_shared_container_left_selectOrganisation_expandBoxClass"
                id="publically_shared_container_left_selectOrganisation_expandBox_3"
              >
                Microsoft
              </div>
              <div
                onClick={() => {
                  setOrganisation("Apple");
                }}
                class="publically_shared_container_left_selectOrganisation_expandBoxClass"
                id="publically_shared_container_left_selectOrganisation_expandBox_4"
              >
                Apple
              </div>
              <div
                onClick={() => {
                  setOrganisation("Meta");
                }}
                class="publically_shared_container_left_selectOrganisation_expandBoxClass"
                id="publically_shared_container_left_selectOrganisation_expandBox_5"
              >
                Meta
              </div>
              <div
                onClick={() => {
                  setOrganisation("Atlassian");
                }}
                class="publically_shared_container_left_selectOrganisation_expandBoxClass"
                id="publically_shared_container_left_selectOrganisation_expandBox_6"
              >
                Atlassian
              </div>
              <div
                onClick={() => {
                  setOrganisation("Tower Research");
                }}
                class="publically_shared_container_left_selectOrganisation_expandBoxClass"
                id="publically_shared_container_left_selectOrganisation_expandBox_7"
              >
                TowerResearch
              </div>
              <div
                onClick={() => {
                  setOrganisation("Zomato");
                }}
                class="publically_shared_container_left_selectOrganisation_expandBoxClass"
                id="publically_shared_container_left_selectOrganisation_expandBox_8"
              >
                Zomato
              </div>
              <div
                onClick={() => {
                  setOrganisation("Netspend");
                }}
                class="publically_shared_container_left_selectOrganisation_expandBoxClass"
                id="publically_shared_container_left_selectOrganisation_expandBox_9"
              >
                Netspend
              </div>
              <div
                onClick={() => {
                  setOrganisation("All");
                }}
                class="publically_shared_container_left_selectOrganisation_expandBoxClass"
                id="publically_shared_container_left_selectOrganisation_expandBox_10"
              >
                All
              </div>
            </div>
            {/* //department */}
            {/* //department */}
            {/* //department */}
            <div id="publically_shared_container_left_selectDepartment">
              Select Department
            </div>
            <div
              id="publically_shared_container_left_selectDepartment_expand"
              ref={depExpand}
            >
              <div id="publically_shared_container_left_selectDepartment_expand_titleOnly">
                {depValue}
              </div>
              <span
                id="publically_shared_container_left_selectDepartment_expanIcon"
                class="material-symbols-outlined"
                ref={depExpandIcon}
              >
                expand_more
              </span>
            </div>
            <div
              id="publically_shared_container_left_selectDepartment_expandBox"
              ref={depExpandBox}
            >
              <div
                onClick={() => {
                  setDepartMent("Customer Support");
                }}
                className="publically_shared_container_left_selectDepartment_expandBoxClass"
                id="publically_shared_container_left_selectDepartment_expandBox1"
              >
                Customer Support
              </div>
              <div
                onClick={() => {
                  setDepartMent("Product Development");
                }}
                className="publically_shared_container_left_selectDepartment_expandBoxClass"
                id="publically_shared_container_left_selectDepartment_expandBox2"
              >
                Product Development
              </div>
              <div
                onClick={() => {
                  setDepartMent("Human Resources");
                }}
                className="publically_shared_container_left_selectDepartment_expandBoxClass"
                id="publically_shared_container_left_selectDepartment_expandBox3"
              >
                Human Resources
              </div>
              <div
                onClick={() => {
                  setDepartMent("Quality Assurance");
                }}
                className="publically_shared_container_left_selectDepartment_expandBoxClass"
                id="publically_shared_container_left_selectDepartment_expandBox4"
              >
                Quality Assurance
              </div>
              <div
                onClick={() => {
                  setDepartMent("Research");
                }}
                className="publically_shared_container_left_selectDepartment_expandBoxClass"
                id="publically_shared_container_left_selectDepartment_expandBox5"
              >
                Research
              </div>
              <div
                onClick={() => {
                  setDepartMent("Training");
                }}
                className="publically_shared_container_left_selectDepartment_expandBoxClass"
                id="publically_shared_container_left_selectDepartment_expandBox6"
              >
                Training
              </div>
              <div
                onClick={() => {
                  setDepartMent("Events");
                }}
                className="publically_shared_container_left_selectDepartment_expandBoxClass"
                id="publically_shared_container_left_selectDepartment_expandBox7"
              >
                Events
              </div>
              <div
                onClick={() => {
                  setDepartMent("Finance");
                }}
                className="publically_shared_container_left_selectDepartment_expandBoxClass"
                id="publically_shared_container_left_selectDepartment_expandBox8"
              >
                Finance
              </div>
              <div
                onClick={() => {
                  setDepartMent("Customer Support");
                }}
                className="publically_shared_container_left_selectDepartment_expandBoxClass"
                id="publically_shared_container_left_selectDepartment_expandBox9"
              >
                Customer Support
              </div>
              <div
                onClick={() => {
                  setDepartMent("All");
                }}
                className="publically_shared_container_left_selectDepartment_expandBoxClass"
                id="publically_shared_container_left_selectDepartment_expandBox10"
              >
                All
              </div>
            </div>
            {/* <input
              id="publically_shared_container_left_specific"
              type="text"
              placeholder="Search for specific string to search for"
              ref={filterString}
            /> */}
            <button
              id="publically_shared_container_left_submit"
              onClick={submitForm}
            >
              Search
            </button>
          </div>
        </div>
        {/* right part */}
        {/* right part */}
        {/* right part */}
        <div id="publically_shared_container_right">
          {localStorage.getItem("token") && allPublicQueryArr ? (
            allPublicQueryArr.length > 0 ? (
              allPublicQueryArr.map((data, index) => {
                return (
                  <Child_Globally_Shared
                    key={index}
                    organisation={data.organisation}
                    department={data.department}
                    title={data.title}
                    description={data.description}
                    uniqueNum={index}
                    preferences={data.preferences}
                    date={new Date(data.createdAt).toLocaleString()}
                    id={data._id}
                  />
                );
              })
            ) : (
              <>
                <div id="nosuchdata">
                  No query availaible . Either your filter do not match any
                  query or No public query available.
                </div>
              </>
            )
          ) : (
            "Loading...  You must login to view your all public query"
          )}
        </div>
      </div>
    </div>
  );
};

export default Globally_Shared;
