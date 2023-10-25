import React from 'react'
import Organisation_things from "./Organisation_things"; 
import GlobalSharing_concept from "./GlobalSharing_concept";
import Globally_Shared from "./Globally_Shared";
import Footer from "./Footer";
import Main_page from "./main_page";
import Add_Query_page from "./Add_Query_page";
import Quick_Updates from "./Quick_Updates";
const Landing_Page = () => {
  return (
    <>
      <Main_page/>
   <Add_Query_page/>
   <Quick_Updates/>
   <Organisation_things/>
   <GlobalSharing_concept/>
   <Globally_Shared/>
   <Footer/>
    </>
  )
}

export default Landing_Page
