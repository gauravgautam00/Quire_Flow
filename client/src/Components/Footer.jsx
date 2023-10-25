import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div id="footer_container">
      <div id="footer_container_beforeLine">
        {/* //first */}
        <div id="footer_container_beforeLine_first">
        <img id="footer_container_beforeLine_first_image" src="/Images/284280fe2f484eaabc362670e44a9fc4 (1).png"/>

        </div>

       {/* Second */}
       <div id="footer_container_beforeLine_second">
        <div id="footer_container_beforeLine_second_title">
            Quire Flow
        </div>
        <div id="footer_container_beforeLine_second_para">
          3711 Tibbatta Street <br/> Covington, KY 41015 <br/> 859.491.1955 <br/> cbc@cbccky.org
        </div>
       </div>
       {/* Third */}
       <div id="footer_container_beforeLine_third">


        <div id="footer_container_beforeLine_third_title1">
          Random Again Text1
        </div>
        <div id="footer_container_beforeLine_third_para1">
          8:20am & 9:00am
        </div>

        <div id="footer_container_beforeLine_third_title2">
         Random Ne Text2
        </div>
        <div id="footer_container_beforeLine_third_para2">
          8:20am 
        </div>

        <div id="footer_container_beforeLine_third_title3">
          Random Loremipsum Next
        </div>
        <div id="footer_container_beforeLine_third_para3">
          8:20am 
        </div>


       </div>
       {/* Fourth */}
         <div id="footer_container_beforeLine_fourth">
          <div id="footer_container_beforeLine_fourth_title1">
            Connect With Us 
          </div>
          <div id="footer_container_beforeLine_fourth_icons">
          <i class="fa fa-facebook"></i>
          <i style={{marginLeft:"15px"}} class="fa fa-twitter"></i>
          <i style={{marginLeft:"15px"}} class="fa fa-envelope"></i>
          <i style={{marginLeft:"15px"}} class="fa fa-instagram"></i>
          <i style={{marginLeft:"15px"}} class="fa fa-telegram"></i>
                       </div>
          <div id="footer_container_beforeLine_fourth_title2">
          Join Our Mailing List
          </div>
          <div id="footer_container_beforeLine_fourth_second_but">
         Sign Up

          </div>
         </div>
      </div>



{/* line */}
<div id="footer_container_line"></div>

{/* after line container */}

<div id="footer_container_afterLine_container">
   <div id="footer_container_afterLine_container_first">
    Visit Calvary
   </div>
   <div id="footer_container_afterLine_container_second">
    Sermons
   </div>
   <div id="footer_container_afterLine_container_third">
    About Us
   </div>
   <div id="footer_container_afterLine_container_fourth">
    Get Connected
   </div>
   <div id="footer_container_afterLine_container_fifth">
    Contact Us
   </div>
   <div id="footer_container_afterLine_container_sixth">
    Giving
   </div>
   <div id="footer_container_afterLine_container_seventh">

   </div>
   <div id="footer_container_afterLine_container_eight">

   </div>
</div>
      </div>
  )
}

export default Footer 
