import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../src/style.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Dropdown } from "react-bootstrap";
import LiveCall from "./LiveCall";
function Header() {
  const state = useSelector((state) => state?.user?.user);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const location = useLocation();
  const data = location?.state;

  
  const logout = () => {
    axios
      .get("https://ikalyuga.com/api/index.php?action=logout", {})
      .then((res) => {
        if (res?.data?.response?.message !== "") {
          toast.info(res.data.response.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
          });
          localStorage.removeItem("user");
          navigate("/");
        }
      });
      
  };

 

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// myFunction();

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
  return (
    <div>
      {" "}
      {/* <!--top-header-start--> */}
      <header className="header_sec">
        <div className="container-fluid">
          <div
            className="row"
            style={{
              boxShadow: "0px 0px 4px -1px #000",
              background: "linear-gradient(180deg, #0E397F 0%, #001E50 100%)",
              padding: "10px 0 10px",
            }}
          >
            <div className="col-lg-3 col-md-3 col-12">
              <div className="header-logo  d-flex justify-content-lg-start justify-content-md-start justify-content-center">
                <img
                  src="/img/white-logo.png"
                  className="img-fluid d-block"
                  alt="header logo"
                />
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-12 d-lg-block d-md-block d-none justify-content-end">
              <div className="dshbrd_hdr_icon">
                <ul>
                 <LiveCall/>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <ul className="hdr_profile">
                      <li>
                        <img
                          src="/img/nav_author.jpg"
                          className="img-fluid d-block"
                          alt="profile"
                        />
                        <div className="profile_name">
                          <b>{user?.username}</b>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                  <Dropdown>
      <Dropdown.Toggle className="dropbtn" id="dropdown-basic">
        Services
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                      
                       </li>
                  <li className="logout-button" onClick={logout}>
                    <a
                      type="button"
                      className="btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="LogOut"
                      data-bs-custom-className="color-tooltip"
                    >
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--navbar-sec--> */}
          <Navbar/>
        </div>
      </header>
      {/* <!--top-header-end--> */}
    </div>
  );
}

export default Header;




// import React from 'react'
// import style from './style/header.module.css'
// //import {Link} from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';

// function Header() {
// //   window.onscroll = function() {myFunction()};

// // var header = document.getElementById("myHeader");
// // var sticky = header;

// // function myFunction() {
// //   if (window.pageYOffset > sticky) {
// //     header.classNameList.add('sticky');
// //   } else {
// //     header.classNameList.remove("sticky");
// //   }
// // }
//   return (
//     <div>
//         {/* <nav >
//     <ul classNameName="justify-content-end">
//       <li >
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/blogs">Blogs</Link>
//       </li>
//       <li>
//         <Link to="/contact">Contact</Link>
//       </li>
//     </ul>
//   </nav> */}
//   <div classNameName={style.head} id="myHeader">
//   <Nav classNameName="justify-content-end sticky" activeKey="/">
//         <Nav.Item>
//           <Nav.Link href="/">Home</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href='/blogs'>Blogs</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="/contact">Contact</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link href="/home" >
//             Disabled
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>
//       </div>
//   </div>
//   )
// }

// export default Header