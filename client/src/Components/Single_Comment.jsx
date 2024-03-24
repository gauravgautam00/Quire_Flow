import React, { useEffect } from "react";

const Single_Comment = (props) => {
  return (
    <div className="single_query_global_queryComment_rightPart_main_child">
      <div id="single_query_global_queryComment_rightPart_main_child_content">
        {props.content}
      </div>
      <div id="single_query_global_queryComment_rightPart_main_child_date">
        {props.date}
      </div>
    </div>
  );
};

export default Single_Comment;
