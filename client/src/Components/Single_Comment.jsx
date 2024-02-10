import React, { useEffect } from "react";

const Single_Comment = (props) => {
  useEffect(() => {
    console.log("in single Comment");
  });
  return (
    <div className="single_query_global_queryComment_rightPart_main_child">
      {props.content}
    </div>
  );
};

export default Single_Comment;
