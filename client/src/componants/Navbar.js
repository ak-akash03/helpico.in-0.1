import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

// const Navbar = () => {
//   const { isLoggedIn } = useAuth();
//   console.log("login or not ", isLoggedIn);
//   return (
//     <>
//       <header>
//         <div className="container mainpart">
//           <div className="logo-brand part01">
//             <Link to="/">Helpico.in</Link>
//           </div>
//           <div className="part02">
//             <nav className="">
//               <ul>
// <li>
//   <Link to="/"> Home </Link>
// </li>
// <li>
//   <Link to="/about"> About </Link>
// </li>
// <li>
//   <Link to="/service"> Services </Link>
// </li>
// <li>
//   <Link to="/contact"> Contact </Link>
// </li>

// {isLoggedIn ? (
//   <li>
//     <Link to="/logout">Logout</Link>
//   </li>
// ) : (
//   <>
//     <li>
//       <Link to="/register"> Register </Link>
//     </li>
//     <li>
//       <Link to="/login"> Login </Link>
//     </li>
//   </>
// )}
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;

// ---------------------------------------------------------

import React from "react";
// import { Link } from "react-router-dom";

function Navbar() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid container">
          <Link className="navbar-brand link" to="/home">
            Helpico.in
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  
                  Contact
                </Link>
              </li>

              {isLoggedIn ? (
                <li className="nav-item">
                  <Link className="nav-link s-nav" to="/logout">
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link s-nav" to="/register">
                      
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link s-nav" to="/login">
                      
                      Login
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
