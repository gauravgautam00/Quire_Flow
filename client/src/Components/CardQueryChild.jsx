import React from "react";

const CardQueryChild = (props) => {
  const colors = ["#079a58", "#1937be", "#6939ed", "#146feb", "#db6802"];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  return (
    <div id="card">
      <div style={{ backgroundColor: getRandomColor() }} id="card_upper">
        <div id="card_upper_title">{props.query.title}</div>
        <div id="card_upper_para">{props.query.description}</div>
      </div>
      <div id="card_between">To :-</div>
      <div id="card_lower">
        <div id="card_lower_anonyKey">
          <div id="card_lower_anonyKey_first">Anony Key</div>
          <div id="card_lower_anonyKey_second">{props.query.anonyKey}</div>
        </div>
        <div id="card_lower_org">
          <div id="card_lower_org_first">Organisation</div>
          <div id="card_lower_org_second">{props.query.organisation}</div>
        </div>
        <div id="card_lower_dept">
          <div id="card_lower_dept_first">Department</div>
          <div id="card_lower_dept_second">{props.query.department}</div>
        </div>
        <div id="card_lower_preferences">
          <div id="card_lower_preferences_first">Preferences</div>
          <div id="card_lower_preferences_second">
            {props.query.preferences}
          </div>
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
