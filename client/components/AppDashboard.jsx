import React, {useState} from 'react';



function AppDashboard() {

    return (
      <>
      <div className ="AppDashBoard">
        <h1 id = 'AppDashBoardTitle'> Job Search Table</h1>
        <input type="text" placeholder='Search here' value={searchTerm} />
      </div>
        
      </>
    )
  
  }
  
  export default AppDashboard;