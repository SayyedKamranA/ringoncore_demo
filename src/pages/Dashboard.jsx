import React from "react";
import "../../src/style.css";
import { useLocation } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

function Dashboard({ chartData }) {
  const state = useSelector((state) => state?.user?.user);
  const user = JSON.parse(localStorage.getItem("user"));
  //const location = useLocation();
  //const data = location?.state;

  return (
    <>
      {/* <!--top-header-start--> */}
      {/* <!--top-header-end--> */}

      {/* <!--sidebar-start--> */}
      {user?.role === "Admin" ? (
        <>
          <section className="sidebar-sec">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-lg-flex d-md-flex d-block align-items-start">
                    <div
                      className="nav flex-column d-flex flex-lg-nowrap nav-pills me-3 sdbr-bdr-box"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        className="nav-link sidebar-btm-bdr"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                      >
                        <i className="fa-solid fa-hat-cowboy"></i>Dashboard
                      </button>
                      {/* <button
                    className="nav-link sidebar-btm-bdr"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <i className="fa-solid fa-users-line"></i>User Groups
                  </button>
                  <button
                    className="nav-link sidebar-btm-bdr dropdown-toggle"
                    id="v-pills-messages-tab"
                    data-bs-toggle="dropdown"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="true"
                  >
                    <i className="fa-solid fa-user"></i>User List
                  </button>
                  <ul className="dropdown-menu siderbar-drpdwn">
                    <li>
                      <div className="d-flex align-items-start">
                        <div
                          className="nav flex-column nav-pills me-3"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <button
                            className="nav-link sidebar-innr-itm"
                            id="innr-pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#innr-pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="innr-pills-profile"
                            aria-selected="false"
                          >
                            Add User
                          </button>
                          <button
                            className="nav-link sidebar-innr-itm"
                            id="innr-pills-messages-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#innr-pills-messages"
                            type="button"
                            role="tab"
                            aria-controls="innr-pills-messages"
                            aria-selected="false"
                          >
                            Show List
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <button
                    className="nav-link sidebar-btm-bdr"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    <i className="fa-solid fa-book"></i>Templates
                  </button> */}
                    </div>
                    <div
                      className="tab-content cntnt-bdr-box"
                      id="v-pills-tabContent"
                    >
                      <div
                        className="tab-pane fade active show"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                      >
                        {/* <!--role-contet--> */}
                        <div className="tab_cntnt_box">
                          <div className="cntnt_title">
                            <h3>Dashboard</h3>
                          </div>
                          <img
                            style={{ width: "100%" }}
                            src="../../img/demo.jpg"
                          />
                        </div>
                        {/* <!--role-contet--> */}
                      </div>

                      <div
                        className="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                      >
                        s
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                      >
                        f
                      </div>
                      <div
                        className="tab-pane fade"
                        id="innr-pills-profile"
                        role="tabpanel"
                        aria-labelledby="innr-pills-profile-tab"
                      >
                        {/* <!--role-contet--> */}
                        <div className="tab_cntnt_box">
                          <div className="cntnt_title">
                            <h3>Add user</h3>
                          </div>
                          <div className="tab_sub_cntnt">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Consequuntur debitis praesentium iusto
                              quasi, temporibus accusamus quis possimus saepe
                              ipsa. Vel magni molestiae quae alias harum id esse
                              doloribus ab commodi.
                            </p>
                            {/* <!-- <div className="inpt-lft">
                                  <input className="form-control me-2 w-25" type="search" placeholder="Search" aria-label="Search">
                                 </div> --> */}
                          </div>

                          {/* <!--table---> */}
                          <div className="row">
                            <div className="col-12">
                              <div className="add_row">
                                <form className="add_frm_box">
                                  <div className="row">
                                    <div className="col-md-6 col-12 mb-3">
                                      <input
                                        type="name"
                                        className="form-control"
                                        id="fname"
                                        aria-describedby="nameHelp"
                                        placeholder="First Name"
                                      />
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                      <input
                                        type="name"
                                        className="form-control"
                                        id="lname"
                                        aria-describedby="lnameHelp"
                                        placeholder="Last Name"
                                      />
                                    </div>

                                    <div className="col-md-6 col-12 mb-3">
                                      <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Email"
                                      />
                                      <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone
                                        else.
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                      <input
                                        type="number"
                                        className="form-control"
                                        id="number"
                                        aria-describedby="emailHelp"
                                        placeholder="Phone Number"
                                      />
                                    </div>

                                    <div className="col-md-6 col-12 mb-3">
                                      <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        aria-describedby="passwordHelp"
                                        placeholder="Password"
                                      />
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                      <input
                                        type="password"
                                        className="form-control"
                                        id="c_password"
                                        aria-describedby="passwordHelp"
                                        placeholder="Confirm Password"
                                      />
                                    </div>
                                  </div>
                                  <div className="mb-3">
                                    <input
                                      type="password"
                                      className="form-control"
                                      id="exampleInputPassword1"
                                    />
                                  </div>
                                  <div className="mb-3 form-check">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="exampleCheck1"
                                    />
                                    <label
                                      className="form-check-label"
                                      for="exampleCheck1"
                                    >
                                      Check me out
                                    </label>
                                  </div>
                                  <button
                                    type="submit"
                                    className="info-btn submit_button"
                                  >
                                    Submit
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                          {/* <!--table-end--> */}
                        </div>
                        {/* <!--role-contet--> */}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="innr-pills-messages"
                        role="tabpanel"
                        aria-labelledby="innr-pills-messages-tab"
                      >
                        {/* <!--role-contet--> */}
                        <div className="tab_cntnt_box">
                          <div className="cntnt_title">
                            <h3>User list</h3>
                          </div>
                          <div className="tab_sub_cntnt">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Consequuntur debitis praesentium iusto
                              quasi, temporibus accusamus quis possimus saepe
                              ipsa. Vel magni molestiae quae alias harum id esse
                              doloribus ab commodi.
                            </p>
                            <form className="d-flex d-none">
                              <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                              />
                              {/* <!-- <button className="info-btn" type="submit">Search</button> --> */}
                            </form>
                          </div>

                          {/* <!--table---> */}
                          <div className="table_box">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">First</th>
                                  <th scope="col">Last</th>
                                  <th scope="col">Handle</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row">1</th>
                                  <td>Mark</td>
                                  <td>Otto</td>
                                  <td>@mdo</td>
                                </tr>
                                <tr>
                                  <th scope="row">2</th>
                                  <td>Jacob</td>
                                  <td>Thornton</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <th scope="row">3</th>
                                  <td>Larry the Bird</td>
                                  <td>@fat</td>
                                  <td>@twitter</td>
                                </tr>
                                <tr>
                                  <th scope="row">4</th>
                                  <td>Larry the Bird</td>
                                  <td>@twitter</td>
                                  <td>@fat</td>
                                </tr>
                                <tr>
                                  <th scope="row">5</th>
                                  <td>Larry the Bird</td>
                                  <td>@twitter</td>
                                  <td>@twitter</td>
                                </tr>
                                <tr>
                                  <th scope="row">6</th>
                                  <td>Larry the Bird</td>
                                  <td>@twitter</td>
                                  <td>@twitter</td>
                                </tr>
                                <tr>
                                  <th scope="row">7</th>
                                  <td>Larry the Bird</td>
                                  <td>@twitter</td>
                                  <td>@twitter</td>
                                </tr>
                                <tr>
                                  <th scope="row">8</th>
                                  <td>Larry the Bird</td>
                                  <td>@twitter</td>
                                  <td>@twitter</td>
                                </tr>
                                <tr>
                                  <th scope="row">9</th>
                                  <td>Larry the Bird</td>
                                  <td>@twitter</td>
                                  <td>@twitter</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/* <!--table-end--> */}
                        </div>
                        {/* <!--role-contet--> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <></>
      )}
      {/* <!--sidebar-end--> */}



{user?.role === "User" ?(<>
    <section className="sidebar-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="">
                {/* <!----> */}
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    {/* <!--role-contet--> */}
                    <div className="tab_cntnt_box">
                      <div className="cntnt_title">
                        <h3>Message</h3>
                        <p>
                          Quickly access information and tools related to your
                          account.
                        </p>
                      </div>

                      {/* <!--table---> */}
                      <div className="row">
                        <div className="col-lg-6 vertical-bdr-line">
                          <div className="dashboard_tbs_one">
                            <button className="info-btn minutes-button">
                              total minutes 3100
                              <span
                                className="color_one"
                                style={{ backgroundColor: "red" }}
                              ></span>
                            </button>
                            <button className="info-btn minutes-button">
                              total used minutes 332
                              <span
                                className="color_one"
                                style={{ backgroundColor: "green" }}
                              ></span>
                            </button>
                          </div>
                          <div className="dashboard_tbs_one">
                            <button className="info-btn minutes-button">
                              total remaining minutes 2768
                              <span
                                className="color_one"
                                style={{ backgroundColor: "blue" }}
                              ></span>
                            </button>
                            <button className="info-btn minutes-button">
                              monthly used minutes 4000
                              <span
                                className="color_one"
                                style={{ backgroundColor: "yellow" }}
                              ></span>
                            </button>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="chart-container">
                            {/* <h2 style={{ textAlign: "center" }}></h2> */}
                            <Line
                              data={chartData}
                              options={{
                                plugins: {
                                  title: {
                                    display: true,
                                    text: "Total Minutes",
                                  },
                                  legend: {
                                    display: false,
                                  },
                                },
                              }}
                            />
                          </div>
                          <div className="dashboard_linechart">
                            {/* <!-- <canvas id="dashboardLineChart "></canvas> -->
                                      <!-- <canvas id="chartTwo"></canvas> --> */}
                            {/* <canvas
                              id="myChart"
                              style={{ width: "100%" }}
                            ></canvas> */}
                          </div>
                        </div>
                      </div>
                      {/* <!--table-end--> */}
                    </div>
                    {/* <!--role-contet--> */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    {/* <!--role-contet--> */}
                    <div className="tab_cntnt_box">
                      <div className="cntnt_title">
                        <h3>User list</h3>
                      </div>
                      <div className="tab_sub_cntnt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequuntur debitis praesentium iusto quasi,
                          temporibus accusamus quis possimus saepe ipsa. Vel
                          magni molestiae quae alias harum id esse doloribus ab
                          commodi.
                        </p>
                        <form className="d-flex d-none">
                          <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                          {/* <!-- <button className="info-btn" type="submit">Search</button> --> */}
                        </form>
                      </div>

                      {/* <!--table---> */}
                      <div className="table_box">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry the Bird</td>
                              <td>@fat</td>
                              <td>@twitter</td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Larry the Bird</td>
                              <td>@twitter</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">5</th>
                              <td>Larry the Bird</td>
                              <td>@twitter</td>
                              <td>@twitter</td>
                            </tr>
                            <tr>
                              <th scope="row">6</th>
                              <td>Larry the Bird</td>
                              <td>@twitter</td>
                              <td>@twitter</td>
                            </tr>
                            <tr>
                              <th scope="row">7</th>
                              <td>Larry the Bird</td>
                              <td>@twitter</td>
                              <td>@twitter</td>
                            </tr>
                            <tr>
                              <th scope="row">8</th>
                              <td>Larry the Bird</td>
                              <td>@twitter</td>
                              <td>@twitter</td>
                            </tr>
                            <tr>
                              <th scope="row">9</th>
                              <td>Larry the Bird</td>
                              <td>@twitter</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* <!--table-end--> */}
                    </div>
                    {/* <!--role-contet--> */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    {/* <!--role-contet--> */}
                    <div className="tab_cntnt_box">
                      <div className="cntnt_title">
                        <h3>Add user</h3>
                      </div>
                      <div className="tab_sub_cntnt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequuntur debitis praesentium iusto quasi,
                          temporibus accusamus quis possimus saepe ipsa. Vel
                          magni molestiae quae alias harum id esse doloribus ab
                          commodi.
                        </p>
                        <div className="inpt-lft">
                          <input
                            className="form-control me-2 w-25"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </div>

                      {/* <!--table---> */}
                      <div className="row">
                        <div className="col-12">
                          <div className="add_row">
                            <form className="add_frm_box">
                              <div className="row">
                                <div className="col-md-6 col-12 mb-3">
                                  <input
                                    type="name"
                                    className="form-control"
                                    id="fname"
                                    aria-describedby="nameHelp"
                                    placeholder="First Name"
                                  />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                  <input
                                    type="name"
                                    className="form-control"
                                    id="lname"
                                    aria-describedby="lnameHelp"
                                    placeholder="Last Name"
                                  />
                                </div>

                                <div className="col-md-6 col-12 mb-3">
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Email"
                                  />
                                  <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone
                                    else.
                                  </div>
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                  <input
                                    type="number"
                                    className="form-control"
                                    id="number"
                                    aria-describedby="emailHelp"
                                    placeholder="Phone Number"
                                  />
                                </div>

                                <div className="col-md-6 col-12 mb-3">
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    aria-describedby="passwordHelp"
                                    placeholder="Password"
                                  />
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                  <input
                                    type="password"
                                    className="form-control"
                                    id="c_password"
                                    aria-describedby="passwordHelp"
                                    placeholder="Confirm Password"
                                  />
                                </div>
                              </div>
                              <div className="mb-3">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div className="mb-3 form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="exampleCheck1"
                                />
                                <label
                                  className="form-check-label"
                                  for="exampleCheck1"
                                >
                                  Check me out
                                </label>
                              </div>
                              <button
                                type="submit"
                                className="info-btn submit_button"
                              >
                                Submit
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                      {/* <!--table-end--> */}
                    </div>
                    {/* <!--role-contet--> */}
                  </div>

                  <div
                    className="tab-pane fade"
                    id="pills-call"
                    role="tabpanel"
                    aria-labelledby="pills-call-tab"
                  >
                    <p style={{ color: "#fff" }}>1</p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-reports"
                    role="tabpanel"
                    aria-labelledby="pills-reports-tab"
                  >
                    <p style={{ color: "#fff" }}>2</p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-block"
                    role="tabpanel"
                    aria-labelledby="pills-block-tab"
                  >
                    <p style={{ color: "#fff" }}>3</p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-log"
                    role="tabpanel"
                    aria-labelledby="pills-log-tab"
                  >
                    <p style={{ color: "#fff" }}>4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>):(<></>)}
     
    </>
  );
}

export default Dashboard;
