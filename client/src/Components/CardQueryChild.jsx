import React from "react";

const CardQueryChild = () => {
  const colors = ["#079a58", "#1937be", "#6939ed", "#146feb", "#db6802"]; // Array of three colors

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div id="card">
      <div style={{ backgroundColor: getRandomColor() }} id="card_upper">
        <div id="card_upper_title">Query with the promotion issues</div>
        <div id="card_upper_para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
          obcaecati.m dolor sit, amet consectetur adipisicing elit. Impedit,
          obcaecati.
        </div>
      </div>
      <div id="card_between">To :-</div>
      <div id="card_lower">
        <div id="card_lower_name">
          <div id="card_lower_name_first">Name/Designation</div>
          <div id="card_lower_name_second">Dr. Ravi Sharma</div>
        </div>
        <div id="card_lower_anonyKey">
          <div id="card_lower_anonyKey_first">Anony Key</div>
          <div id="card_lower_anonyKey_second">FEDW123009Q</div>
        </div>
        <div id="card_lower_org">
          <div id="card_lower_org_first">Organisation</div>
          <div id="card_lower_org_second">Google</div>
        </div>
        <div id="card_lower_dept">
          <div id="card_lower_dept_first">Department</div>
          <div id="card_lower_dept_second">Search Team</div>
        </div>
        <div id="card_lower_preferences">
          <div id="card_lower_preferences_first">Preferences</div>
          <div id="card_lower_preferences_second">Urgent</div>
        </div>
      </div>
      <div id="card_link">
        More Details
        <span id="card_font" class="material-symbols-outlined">
          {" "}
          east{" "}
        </span>
      </div>
    </div>
  );
};

export default CardQueryChild;
