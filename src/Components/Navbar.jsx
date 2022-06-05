import React from 'react'

import {Link} from "react-router-dom";

const Navbar = () => {


  return (
    <div>

      <Link to="/">Home</Link>
       <Link to="/login">Login</Link>
      <Link to="/users">Users</Link>


    </div>
  )
}

export default Navbar

// import React from "react";
// import {

//   Link
// } 


// function Navbar() {
//   return (
//     <div>
//       {/* <a/> */}
//       <Link to="/">Home</Link>
//       <Link to="/login">Login</Link>
//       <Link to="/users">Users</Link>
      
//     </div>
//   );
// }

// export default Navbar;
