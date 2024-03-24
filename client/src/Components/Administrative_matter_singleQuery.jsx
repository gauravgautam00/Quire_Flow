import React, { useState, useEffect } from "react";
import Single_Query_Global from "./Single_Query_Global";
import { Link, useParams } from "react-router-dom";
const Administrative_matter_singleQuery = () => {
  const { objectId } = useParams();
  const [query, setQuery] = useState();
  // console.log(objectId);
  useEffect(() => {
    fetch(`https://quire-flow-4.onrender.com/viewSingleQuery/${objectId}`, {
      // fetch(`http://localhost:2300/viewSingleQuery/${objectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setQuery(response.curQuery);
        // console.log(response);
      })
      .catch((error) => {
        console.log(
          "Some error occurred while fetching the singleQueryData ",
          error
        );
      });
  }, [objectId]);

  return (
    <>
      {query ? (
        <Single_Query_Global query={query} />
      ) : localStorage.getItem("token") ? (
        <div>Loading...</div>
      ) : (
        <div id="noToken_global">
          Please <Link to="/authentication">Login/SignUp</Link> to see expand
          version of the query <br /> OR <br /> No such query present
        </div>
      )}
    </>
  );
};

export default Administrative_matter_singleQuery;
