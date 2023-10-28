import React, { useState, useRef, useEffect } from 'react'
import Administrative_matter_JSON from "./administrativeMatter.json"
import Child_Administrative_matter from './Child_Administrative_matter'
import SecondInfo_Child_administrator_container  from "./secondInfo_Child_administrator_container"
import secondInfo_administrativeMatter from "./secondInfo_administrativeMatter.json"
const Administrative_matter = () => {


  const takeToTheViewQueries=useRef(null);
  const filterup=useRef(null);
  const filterleft =useRef(null);
  const filterLeftOrganisationHeadingReference=useRef(null);
  const filterLeftDepartmentHeadingReference=useRef(null);
  const filterLeftPreferenceHeadingReference=useRef(null);
  const filterLeftOrganisationSelectReference=useRef(null);
  const filterLeftDepartmentSelectReference=useRef(null);
  const filterLeftPreferenceSelectReference=useRef(null);
  const filterUpInProgressQuery=useRef(null);
  const filterUpCompleteQuery=useRef(null);
  const filterUpAll=useRef(null);



  const queryContainer=useRef(null);
useEffect(()=>{
  if(takeToTheViewQueries.current){
  takeToTheViewQueries.current.onclick=()=>{
    if(takeToTheViewQueries.current){
    window.scrollTo({
      top:1342,
      behavior:'smooth'
    })
  }
}

  }
},[])
  useEffect(()=>{
  if(
    filterLeftOrganisationHeadingReference.current && filterLeftDepartmentHeadingReference.current &&
    filterLeftPreferenceHeadingReference.current){



      filterLeftOrganisationHeadingReference.current.onclick = () => {
        filterLeftOrganisationSelectReference.current.style.height = '21rem';
        filterLeftOrganisationSelectReference.current.style.opacity = '1';
        filterLeftDepartmentSelectReference.current.style.height = '0';
        filterLeftDepartmentSelectReference.current.style.opacity = '0';
        filterLeftPreferenceSelectReference.current.style.height = '0';
        filterLeftPreferenceSelectReference.current.style.opacity = '0';
      };
      
      filterLeftDepartmentHeadingReference.current.onclick = () => {
        filterLeftOrganisationSelectReference.current.style.height = '0';
        filterLeftOrganisationSelectReference.current.style.opacity = '0';
        filterLeftDepartmentSelectReference.current.style.height = '21rem';
        filterLeftDepartmentSelectReference.current.style.opacity = '1';
        filterLeftPreferenceSelectReference.current.style.height = '0';
        filterLeftPreferenceSelectReference.current.style.opacity = '0';
      };

      filterLeftPreferenceHeadingReference.current.onclick = () => {
        filterLeftOrganisationSelectReference.current.style.height = '0';
        filterLeftOrganisationSelectReference.current.style.opacity = '0';
        filterLeftDepartmentSelectReference.current.style.height = '0';
        filterLeftDepartmentSelectReference.current.style.opacity = '0';
        filterLeftPreferenceSelectReference.current.style.height = '21rem';
        filterLeftPreferenceSelectReference.current.style.opacity = '1';
      };
  
  }
},[])

    window.onscroll=()=>{
      console.log(window.scrollY);
      if(window.scrollY>=1422){
          if(filterup.current){
            filterup.current.style.position="fixed";
            filterup.current.style.width="73.88rem";
            filterup.current.style.top="-2.9rem";

          }
          if(filterleft.current){
            filterleft.current.style.position="fixed";
            filterleft.current.style.top="6rem";

          }
          if(queryContainer.current){
            queryContainer.current.style.marginTop="12.01rem";
          }

      }
      else{
        if(filterup.current){
          filterup.current.style.position="static";
          // filterup.current.style.width="73.8rem";  
          filterup.current.style.marginTop="2.9rem";
        }
        if(filterleft.current){
          filterleft.current.style.position="static";
          filterleft.current.style.marginTop="-6.06rem";
        }
        if(queryContainer.current){
          queryContainer.current.style.marginTop="-29.4rem";
        }
      }
    }



useEffect(()=>{
  if(filterUpInProgressQuery.current && filterUpCompleteQuery.current && filterUpAll.current){
    // console.log("dd")
    filterUpInProgressQuery.current.onclick=()=>{
      filterUpInProgressQuery.current.style.backgroundColor="#1937BE";
      filterUpInProgressQuery.current.style.color="white";
      filterUpCompleteQuery.current.style.backgroundColor="white";
      filterUpCompleteQuery.current.style.color="black";
      filterUpAll.current.style.backgroundColor="white";
      filterUpAll.current.style.color="black";
    }
    filterUpCompleteQuery.current.onclick=()=>{
      filterUpInProgressQuery.current.style.backgroundColor="white";
      filterUpInProgressQuery.current.style.color="black";
      filterUpCompleteQuery.current.style.backgroundColor="#1937BE";
      filterUpCompleteQuery.current.style.color="white";
      filterUpAll.current.style.backgroundColor="white";
      filterUpAll.current.style.color="black";
   
    }
    filterUpAll.current.onclick=()=>{
      filterUpInProgressQuery.current.style.backgroundColor="white";
      filterUpInProgressQuery.current.style.color="black";
      filterUpCompleteQuery.current.style.backgroundColor="white";
      filterUpCompleteQuery.current.style.color="black";
      filterUpAll.current.style.backgroundColor="#1937BE";
      filterUpAll.current.style.color="white";

    }

  }
  

},[])


  return (
    <div id="administrator_container">


      {/* FIRST PART */}
      {/* FIRST PART */}{/* FIRST PART */}{/* FIRST PART */}
      {/* FIRST PART */}
      {/* FIRST PART */}
      {/* FIRST PART */}{/* FIRST PART */}


      <div id="administrator_container_front">

        <div id="administrator_container_frontLeftPart">
      <div id="administrator_container_frontLeftPart_heading">
      Unlocking Insights, Managing Queries
      </div>
      <div id="administrator_container_frontLeftPart_para">
      Welcome to our administrative hub, where we believe in the power of organized information. Our platform is designed to be your trusted companion in managing queries, tracking responses, and gaining valuable insights. We understand that effective administration is built upon transparency and efficiency, and that's exactly what we offer
      </div>
      <div id="administrator_container_frontLeftPart_viewQueryButton" ref={takeToTheViewQueries}>
        View Recieved Queries
      </div>
</div>
<div id="administrator_container_frontRightPart">
<video height="500" width="500" autoPlay loop >
  <source src="Videos/A user starting a huddle and recording a video clip with the Slack app.webm" type="video/webm"></source>
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



{/* THIRD PART */}
{/* THIRD PART */}
{/* THIRD PART */}
{/* THIRD PART */}
{/* THIRD PART */}
{/* THIRD PART */}
{/* THIRD PART */}
{/* THIRD PART */}




<div id="administrator_container_thirdAds">

</div>




{/* //FOURTH PART */}
{/* //FOURTH PART */}

{/* //FOURTH PART */}

{/* //FOURTH PART */}





      <div id="administrator_container_viewQueries">
      
      Received Queries
      </div>
      <div id="administrator_container_allQueriesContainer">
      <div id="administrator_container_filterUp" ref={filterup}>
        <input id="administrator_container_filterUp_inputTitle" type="text" placeholder="Search specific title"/>
        <input id="administrator_container_filterUp_inputDesc" type="text" placeholder="Search specific description"/>
        <div id="administrator_container_filterUp_boxProgress" ref={filterUpInProgressQuery}>In-Progress Query</div>
        <div id="administrator_container_filterUp_boxCompleted" ref={filterUpCompleteQuery}>Completed query</div>
        <div id="administrator_container_filterUp_selectAll" ref={filterUpAll}>All</div>
        <div id="administrator_container_filterUp_firstSeparation"></div>
        <div id="administrator_container_filterUp_sort">Sort By</div>
        <div id="administrator_container_filterUp_secondSeparation"></div>

        <div id="administrator_container_filterUp_search">Search</div>
        <div id="administrator_container_filterUp_reset">Reset</div>
      </div>







      <div id="administrator_container_filterLeft" ref={filterleft}>      
     <div id="administrator_container_filterLeft_organisationHeading" ref={filterLeftOrganisationHeadingReference}>Select Organisation
     <span id="administrator_container_filterLeft_organisationHeading_expand" class="material-symbols-outlined">
expand_more
</span>
     </div> 
     <div id="administrator_container_filterLeft_organisationHeadingSelect" ref={filterLeftOrganisationSelectReference}>
     
      <div class="administrator_container_filterLeft_organisationHeadingSelect_childClass"> ABC Inc.</div>
      <div class="administrator_container_filterLeft_organisationHeadingSelect_childClass"> XYZ Corporation
</div>

      <div class="administrator_container_filterLeft_organisationHeadingSelect_childClass"> Tech Innovators Ltd.
</div>

      <div class="administrator_container_filterLeft_organisationHeadingSelect_childClass"> Global Corp</div>

      <div class="administrator_container_filterLeft_organisationHeadingSelect_childClass"> City Properties Inc.</div>

      <div class="administrator_container_filterLeft_organisationHeadingSelect_childClass"> Tech Solutions Ltd.</div>

      <div class="administrator_container_filterLeft_organisationHeadingSelect_childClass"> Regulatory Corp</div>

      <div class="administrator_container_filterLeft_organisationHeadingSelect_childClass"> Learning Academy</div>

     </div>

     <div id="administrator_container_filterLeft_departmentHeading" ref={filterLeftDepartmentHeadingReference}>Select Department
     <span id="administrator_container_filterLeft_departmentHeading_expand" class="material-symbols-outlined">
expand_more
</span>
</div>
<div id="administrator_container_filterLeft_departmentHeadingSelect" ref={filterLeftDepartmentSelectReference}>

  <div className="administrator_container_filterLeft_departmentHeadingSelect_childClass">IT Support

</div>
<div className="administrator_container_filterLeft_departmentHeadingSelect_childClass">Finance

</div>
<div className="administrator_container_filterLeft_departmentHeadingSelect_childClass">Product Development

</div>
<div className="administrator_container_filterLeft_departmentHeadingSelect_childClass">Human Resources

</div>
<div className="administrator_container_filterLeft_departmentHeadingSelect_childClass">Facilities Management

</div>
<div className="administrator_container_filterLeft_departmentHeadingSelect_childClass">Software Development

</div>
<div className="administrator_container_filterLeft_departmentHeadingSelect_childClass">Legal and Compliance

</div>
<div className="administrator_container_filterLeft_departmentHeadingSelect_childClass">Learning and Development

</div>
<div className="administrator_container_filterLeft_departmentHeadingSelect_childClass">Learning and Development
</div>
</div>
<div id="administrator_container_filterLeft_preferencesHeading" ref={filterLeftPreferenceHeadingReference}>Select Preferences 
<span id="administrator_container_filterLeft_preferencesHeading_expand" class="material-symbols-outlined">
expand_more
</span>
</div>
<div id="administrator_container_filterLeft_preferencesHeadingSelect" ref={filterLeftPreferenceSelectReference}>
  <div className="administrator_container_filterLeft_preferencesHeadingSelect_childClass">Urgent</div>
  <div className="administrator_container_filterLeft_preferencesHeadingSelect_childClass">Normal</div>
  <div className="administrator_container_filterLeft_preferencesHeadingSelect_childClass">Important</div>
  <div className="administrator_container_filterLeft_preferencesHeadingSelect_childClass">Completed</div>
</div>
  
</div>
      </div>







      {/* //Child container */}
      {/* Child container */}
      <div id="administrator_container_queriesContainer" ref={queryContainer}>
          {Administrative_matter_JSON.map((data,index)=>{
             return (
                <Child_Administrative_matter 
                 key={index}
                 queryTitle={data.queryTitle}
                 queryOrganisation={data.queryOrganisation}
                 queryDepartment={data.queryDepartment}
                 queryDescription={data.queryDescription}
                 preferences={data.preferences}
                 dateSent={data.dateSent}
                 status={data.status}
                 
                 
                 
                 
                 />
             )
          })}
      </div>
    </div>
  )
}

export default Administrative_matter
