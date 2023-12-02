import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../style.css";
import { toast } from "react-toastify";
import axios from "axios";
function Header() {
  const [number, setNumber] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location?.state?.data;
  const logout = () => {
    axios
      .get("https://ikalyuga.com/api/index.php?action=logout", {})
      .then((res) => {
        if (res?.data?.response?.message !== "") {
          toast.info(res.data.response.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
          });
          navigate("/");
        }
      });
  };

  useEffect(() => {
    setTimeout(() => {
      let x = Math.floor(Math.random() * 100 + 1);
      setNumber(x);
    }, 7000);
  }, [number]);
  return (
    <div>
      {" "}
      {/* <!--top-header-start--> */}
      <header class="header_sec">
        <div class="container-fluid">
          <div
            class="row"
            style={{
              boxShadow: "0px 0px 4px -1px #000",
              background: "linear-gradient(180deg, #0E397F 0%, #001E50 100%)",
              padding: "10px 0 10px",
            }}
          >
            <div class="col-lg-3 col-md-3 col-12">
              <div class="header-logo  d-flex justify-content-lg-start justify-content-md-start justify-content-center">
                <img
                  src="/img/white-logo.png"
                  class="img-fluid d-block"
                  alt="header logo"
                />
              </div>
            </div>
            <div class="col-lg-9 col-md-9 col-12 d-lg-block d-md-block d-none justify-content-end">
              <div class="dshbrd_hdr_icon">
                <ul>
                  <li>
                    <a>
                      <i class="fa-solid fa-phone"></i>{" "}
                      <span class="notification_icon">
                        {data && data?.role === "User" ? <>{number}</> : <>0</>}
                      </span>
                    </a>
                    <sub style={{color:"white"}}>live</sub>
                    
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <ul class="hdr_profile">
                      <li>
                        <img
                          src="/img/nav_author.jpg"
                          class="img-fluid d-block"
                          alt="profile image"
                        />
                        <div class="profile_name">
                          <b>{data?.username}</b>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="logout-button" onClick={logout}>
                    <a
                      type="button"
                      class="btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="LogOut"
                      data-bs-custom-class="color-tooltip"
                    >
                      <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--navbar-sec--> */}
          <div class="row p-0 m-0">
            <nav class="navbar navbar-expand-lg navbar-light p-0 m-0">
              <div class="container-fluid p-0 m-0">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                  <li class="nav-item dsbrd-tbs" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      Dashboard
                    </button>
                  </li>
                  <li class="nav-item dsbrd-tbs" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Manage Campaign
                    </button>
                  </li>
                  <li class="nav-item dsbrd-tbs" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      DID/TFN NUMBER
                    </button>
                  </li>
                  <li class="nav-item dsbrd-tbs" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-call-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-call"
                      type="button"
                      role="tab"
                      aria-controls="pills-call"
                      aria-selected="false"
                    >
                      Active Calls
                    </button>
                  </li>
                  <li class="nav-item dsbrd-tbs" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-reports-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-reports"
                      type="button"
                      role="tab"
                      aria-controls="pills-reports"
                      aria-selected="false"
                    >
                      Reports
                    </button>
                  </li>
                  <li class="nav-item dsbrd-tbs" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-block-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-block"
                      type="button"
                      role="tab"
                      aria-controls="pills-block"
                      aria-selected="false"
                    >
                      Call Block
                    </button>
                  </li>
                  <li class="nav-item dsbrd-tbs" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-log-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-log"
                      type="button"
                      role="tab"
                      aria-controls="pills-log"
                      aria-selected="false"
                    >
                      Minutes Log
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* <!--top-header-end--> */}
    </div>
  );
}

export default Header;
