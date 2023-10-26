import React from 'react'
import {motion} from "framer-motion"
const secondInfo_Child_administrator_container = (props) => {
console.log(props.styleCustomized);
  return (
    <motion.div
    
    whileHover={{ scale: 1.1 }} 
      initial={{ scale: 1 }}
      transition={{ type: 'spring', duration: 1 }}
    id="secondInfo_child_administratorContainer">
      <div id="secondInfo_child_administratorContainer_imageDiv">
        <img id="secondInfo_child_administratorContainer_image"src={props.url}></img>
      </div>
      <div id="secondInfo_child_administratorContainer_title1">
        {props.title1}
      </div>
      <div id="secondInfo_child_administratorContainer_title2">
        {props.title2}
      </div>
      <div style={
        { marginTop: props.styleCustomized === 0 || props.styleCustomized === 3 ? "5.7rem" : "1.7rem"}
      } id="secondInfo_child_administratorContainer_footer">
        {props.footer}
        <span style={
        { left: props.styleCustomized === 0 ? "4rem" : "8rem"}
      } id="secondInfo_child_administratorContainer_footerArrow" class="material-symbols-outlined">
trending_flat
</span>
      </div>
    </motion.div> 
  )
}

export default secondInfo_Child_administrator_container
