import React, { useState, useRef } from 'react'
import Administrative_matter_JSON from "./administrativeMatter.json"
import Child_Administrative_matter from './Child_Administrative_matter'

const Administrative_matter = () => {



  const filterup=useRef(null);
  const filterleft =useRef(null);
  const queryContainer=useRef(null);


  window.onscroll=()=>{
    console.log(window.scrollY);
    if(window.scrollY>=430){
        if(filterup.current){
          filterup.current.style.position="fixed";
          filterup.current.style.width="73.7rem";
          filterup.current.style.marginTop="-23.84rem";
          

        }
        if(filterleft.current){
          filterleft.current.style.position="fixed";
          filterleft.current.style.marginTop="-23.84rem";

        }
        if(queryContainer.current){
          queryContainer.current.style.marginTop="11rem";
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
        filterleft.current.style.marginTop="-6.27rem";
      }
      if(queryContainer.current){
        queryContainer.current.style.marginTop="-36rem";
      }
    }
  }
  return (
    <div id="administrator_container">
      
      <div id="administrator_container_heading">
        Administrator Matter
      </div>
      <div id="administrator_container_para">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quidem hic ipsa provident at placeat debitis? Deleniti dignissimos ratione id!      
</div>

      <div id="administrator_container_viewQueries">
      
       View all Recieved Queries
        <span id="administrator_container_viewQueries_down" class="material-symbols-outlined">
expand_more
</span>
      </div>
      
      <div id="administrator_container_filterUp" ref={filterup}>
        <input id="administrator_container_filterUp_inputTitle" type="text" placeholder="Search specific title"/>
        <input id="administrator_container_filterUp_inputDesc" type="text" placeholder="Search specific description"/>
        <div id="administrator_container_filterUp_boxProgress">In-Progress Query</div>
        <div id="administrator_container_filterUp_boxCompleted">Completed query</div>
        <div id="administrator_container_filterUp_selectAll">All</div>
        <div id="administrator_container_filterUp_search">
          Search
        </div>
<div id="administrator_container_filterUp_reset">
  Reset
</div>
      </div>
      <div id="administrator_container_filterLeft" ref={filterleft}>

       

      </div>








      {/* //Child container */}
      {/* Child container */}
      <div id="administrator_container_queriesContainer" ref={queryContainer}>
          {Administrative_matter_JSON.map((data,index)=>{
             return (
                <Child_Administrative_matter/>
             )
          })}
      </div>
    </div>
  )
}

export default Administrative_matter
