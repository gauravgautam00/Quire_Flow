import React, { useState, useRef } from 'react'
import Administrative_matter_JSON from "./administrativeMatter.json"
import Child_Administrative_matter from './Child_Administrative_matter'
import SecondInfo_Child_administrator_container  from "./secondInfo_Child_administrator_container"
import secondInfo_administrativeMatter from "./secondInfo_administrativeMatter.json"
const Administrative_matter = () => {



  const filterup=useRef(null);
  const filterleft =useRef(null);
  const queryContainer=useRef(null);


  // window.onscroll=()=>{
  //   console.log(window.scrollY);
  //   if(window.scrollY>=430){
  //       if(filterup.current){
  //         filterup.current.style.position="fixed";
  //         filterup.current.style.width="73.7rem";
  //         filterup.current.style.marginTop="-23.84rem";
          

  //       }
  //       if(filterleft.current){
  //         filterleft.current.style.position="fixed";
  //         filterleft.current.style.marginTop="-23.84rem";

  //       }
  //       if(queryContainer.current){
  //         queryContainer.current.style.marginTop="11rem";
  //       }
  //   }
  //   else{
  //     if(filterup.current){
  //       filterup.current.style.position="static";
  //       // filterup.current.style.width="73.8rem";  
  //       filterup.current.style.marginTop="2.9rem";
  //     }
  //     if(filterleft.current){
  //       filterleft.current.style.position="static";
  //       filterleft.current.style.marginTop="-6.27rem";
  //     }
  //     if(queryContainer.current){
  //       queryContainer.current.style.marginTop="-36rem";
  //     }
  //   }
  // }
  return (
    <div id="administrator_container">
      <div id="administrator_container_front">

        <div id="administrator_container_frontLeftPart">
      <div id="administrator_container_frontLeftPart_heading">
      Unlocking Insights, Managing Queries
      </div>
      <div id="administrator_container_frontLeftPart_para">
      Welcome to our administrative hub, where we believe in the power of organized information. Our platform is designed to be your trusted companion in managing queries, tracking responses, and gaining valuable insights. We understand that effective administration is built upon transparency and efficiency, and that's exactly what we offer
      </div>
      <div id="administrator_container_frontLeftPart_viewQueryButton">
        View Recieved Queries
      </div>
</div>
<div id="administrator_container_frontRightPart">
<video height="500" width="500" autoPlay loop >
  <source src="Videos/A user starting a huddle and recording a video clip with the Slack app.webm" type="video/webm"></source>
</video>
</div>


</div>
<div id="administrator_container_secondInfo">
<div id="administrator_container_secondInfo_heading">
Take a deeper dive into a new way to work

</div>
<div id="administrator_container_secondInfo_dataContainer">
{secondInfo_administrativeMatter.map((data,index)=>{
  return(
    <SecondInfo_Child_administrator_container 
    key={index}
    url={data.url}
    title1={data.title1}
    title2={data.title2}
    footer={data.footer}

    styleCustomized={index}
    />
  )
})}
</div>
</div>

<div id="administrator_container_thirdAds">

</div>

      <div id="administrator_container_viewQueries">
      
      Received Queries
      </div>
      <div id="administrator_container_allQueriesContainer">
      <div id="administrator_container_filterUp" ref={filterup}>
        <input id="administrator_container_filterUp_inputTitle" type="text" placeholder="Search specific title"/>
        <input id="administrator_container_filterUp_inputDesc" type="text" placeholder="Search specific description"/>
        <div id="administrator_container_filterUp_boxProgress">In-Progress Query</div>
        <div id="administrator_container_filterUp_boxCompleted">Completed query</div>
        <div id="administrator_container_filterUp_selectAll">All</div>
        <div id="administrator_container_filterUp_search">Search</div>
        <div id="administrator_container_filterUp_reset">Reset</div>
      </div>
      <div id="administrator_container_filterLeft" ref={filterleft}>      
     <div id="administrator_container_filterLeft_organisationHeading">Select Organisation</div> 
     <div id="administrator_container_filterLeft_organisationHeadingSelect"></div>

     <div id="administrator_container_filterLeft_departmentHeading">Select Department</div>
<div id="administrator_container_filterLeft_departmentHeadingSelect"></div>

<div id="administrator_container_filterLeft_preferencesHeading">Select Department</div>
<div id="administrator_container_filterLeft_preferencesHeadingSelect"></div>

      
      
</div>
      </div>







      {/* //Child container */}
      {/* Child container */}
      <div id="administrator_container_queriesContainer" ref={queryContainer}>
          {Administrative_matter_JSON.map((data,index)=>{
             return (
                <Child_Administrative_matter  key={index}/>
             )
          })}
      </div>
    </div>
  )
}

export default Administrative_matter
