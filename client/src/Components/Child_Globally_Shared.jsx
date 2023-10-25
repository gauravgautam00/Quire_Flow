import React from 'react'

const Child_Globally_Shared = (props) => {
  return (
    <div className='for_footer_color' id="child_globally_shared_container">
<div id="child_globally_shared_container_orgName">
<span className="child_globally_shared_container_bold">Organisation Name</span> - {props.organisation}

</div>
<div id="child_globally_shared_container_departmentName">
<span className="child_globally_shared_container_bold">Department </span>- {props.department}

</div>
<div id="child_globally_shared_container_query">
<span className="child_globally_shared_container_bold">Query </span>- {props.query}

</div>
    </div>
  )
}

export default Child_Globally_Shared
