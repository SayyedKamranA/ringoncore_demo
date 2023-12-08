import React from 'react'
import { useNavigate } from "react-router-dom";
import "../../src/style.css";
function Navbar() {
    const navigate = useNavigate();
  return (
    <div><div className="row p-0 m-0">
    <nav className="navbar navbar-expand-lg navbar-light p-0 m-0">
        <div className="container-fluid p-0 m-0">
          <ul className="nav nav-pills" id="pills-tab" role="tablist">
            <li className="nav-item dsbrd-tbs" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={()=>navigate("/dashboard")}>
              Dashboard</button>
            </li>
            <li className="nav-item dsbrd-tbs" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={()=>navigate("/blogs")}>
              Manage Campaign</button>
            </li>
            <li className="nav-item dsbrd-tbs" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" onClick={()=>navigate("/blogs")}>
              DID/TFN NUMBER</button>
            </li>
            <li className="nav-item dsbrd-tbs" role="presentation">
              <button className="nav-link" id="pills-call-tab" data-bs-toggle="pill" data-bs-target="#pills-call" type="button" role="tab" aria-controls="pills-call" aria-selected="false" onClick={()=>navigate("/blogs")}>
              Active Calls</button>
            </li>
            <li className="nav-item dsbrd-tbs" role="presentation">
              <button className="nav-link" id="pills-reports-tab" data-bs-toggle="pill" data-bs-target="#pills-reports" type="button" role="tab" aria-controls="pills-reports" aria-selected="false" onClick={()=>navigate("/blogs")}>
              Reports </button>
            </li>
            <li className="nav-item dsbrd-tbs" role="presentation">
           
              <button className="nav-link" id="pills-block-tab" data-bs-toggle="pill" data-bs-target="#pills-block" type="button" role="tab" aria-controls="pills-block" aria-selected="false" onClick={()=>navigate("/dashboard/blogs")}>
               Call Block  </button>
            </li>
            <li className="nav-item dsbrd-tbs" role="presentation">
              <button className="nav-link" id="pills-log-tab" data-bs-toggle="pill" data-bs-target="#pills-log" type="button" role="tab" aria-controls="pills-log" aria-selected="false" onClick={()=>navigate("/blogs")}>
              Minutes Log</button>
            </li>
          </ul>
        </div>
      </nav>
</div></div>
  )
}

export default Navbar