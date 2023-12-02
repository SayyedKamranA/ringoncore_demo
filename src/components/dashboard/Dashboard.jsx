import React from "react";
import "../../style.css";
import { useLocation } from "react-router-dom";
import { Line } from "react-chartjs-2";
import Header from "./Header";

function Dashboard({ chartData }) {
  const location = useLocation();
  const data = location?.state?.data;

  return (
    <>
      {/* <!--top-header-start--> */}
      <Header />
      {/* <!--top-header-end--> */}

      {/* <!--sidebar-start--> */}
      {data?.role === "Admin" ? (
        <>
          <section class="sidebar-sec">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-12">
                  <div class="d-lg-flex d-md-flex d-block align-items-start">
                    <div
                      class="nav flex-column d-flex flex-lg-nowrap nav-pills me-3 sdbr-bdr-box"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <button
                        class="nav-link sidebar-btm-bdr"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="true"
                      >
                        <i class="fa-solid fa-hat-cowboy"></i>Dashboard
                      </button>
                      {/* <button
                    class="nav-link sidebar-btm-bdr"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <i class="fa-solid fa-users-line"></i>User Groups
                  </button>
                  <button
                    class="nav-link sidebar-btm-bdr dropdown-toggle"
                    id="v-pills-messages-tab"
                    data-bs-toggle="dropdown"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="true"
                  >
                    <i class="fa-solid fa-user"></i>User List
                  </button>
                  <ul class="dropdown-menu siderbar-drpdwn">
                    <li>
                      <div class="d-flex align-items-start">
                        <div
                          class="nav flex-column nav-pills me-3"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <button
                            class="nav-link sidebar-innr-itm"
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
                            class="nav-link sidebar-innr-itm"
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
                    class="nav-link sidebar-btm-bdr"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    <i class="fa-solid fa-book"></i>Templates
                  </button> */}
                    </div>
                    <div
                      class="tab-content cntnt-bdr-box"
                      id="v-pills-tabContent"
                    >
                      <div
                        class="tab-pane fade active show"
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                      >
                        {/* <!--role-contet--> */}
                        <div class="tab_cntnt_box">
                          <div class="cntnt_title">
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
                        class="tab-pane fade"
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                      >
                        s
                      </div>
                      <div
                        class="tab-pane fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                      >
                        f
                      </div>
                      <div
                        class="tab-pane fade"
                        id="innr-pills-profile"
                        role="tabpanel"
                        aria-labelledby="innr-pills-profile-tab"
                      >
                        {/* <!--role-contet--> */}
                        <div class="tab_cntnt_box">
                          <div class="cntnt_title">
                            <h3>Add user</h3>
                          </div>
                          <div class="tab_sub_cntnt">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Consequuntur debitis praesentium iusto
                              quasi, temporibus accusamus quis possimus saepe
                              ipsa. Vel magni molestiae quae alias harum id esse
                              doloribus ab commodi.
                            </p>
                            {/* <!-- <div class="inpt-lft">
                                  <input class="form-control me-2 w-25" type="search" placeholder="Search" aria-label="Search">
                                 </div> --> */}
                          </div>

                          {/* <!--table---> */}
                          <div class="row">
                            <div class="col-12">
                              <div class="add_row">
                                <form class="add_frm_box">
                                  <div class="row">
                                    <div class="col-md-6 col-12 mb-3">
                                      <input
                                        type="name"
                                        class="form-control"
                                        id="fname"
                                        aria-describedby="nameHelp"
                                        placeholder="First Name"
                                      />
                                    </div>
                                    <div class="col-md-6 col-12 mb-3">
                                      <input
                                        type="name"
                                        class="form-control"
                                        id="lname"
                                        aria-describedby="lnameHelp"
                                        placeholder="Last Name"
                                      />
                                    </div>

                                    <div class="col-md-6 col-12 mb-3">
                                      <input
                                        type="email"
                                        class="form-control"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        placeholder="Email"
                                      />
                                      <div id="emailHelp" class="form-text">
                                        We'll never share your email with anyone
                                        else.
                                      </div>
                                    </div>
                                    <div class="col-md-6 col-12 mb-3">
                                      <input
                                        type="number"
                                        class="form-control"
                                        id="number"
                                        aria-describedby="emailHelp"
                                        placeholder="Phone Number"
                                      />
                                    </div>

                                    <div class="col-md-6 col-12 mb-3">
                                      <input
                                        type="password"
                                        class="form-control"
                                        id="password"
                                        aria-describedby="passwordHelp"
                                        placeholder="Password"
                                      />
                                    </div>
                                    <div class="col-md-6 col-12 mb-3">
                                      <input
                                        type="password"
                                        class="form-control"
                                        id="c_password"
                                        aria-describedby="passwordHelp"
                                        placeholder="Confirm Password"
                                      />
                                    </div>
                                  </div>
                                  <div class="mb-3">
                                    <input
                                      type="password"
                                      class="form-control"
                                      id="exampleInputPassword1"
                                    />
                                  </div>
                                  <div class="mb-3 form-check">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      id="exampleCheck1"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="exampleCheck1"
                                    >
                                      Check me out
                                    </label>
                                  </div>
                                  <button
                                    type="submit"
                                    class="info-btn submit_button"
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
                        class="tab-pane fade"
                        id="innr-pills-messages"
                        role="tabpanel"
                        aria-labelledby="innr-pills-messages-tab"
                      >
                        {/* <!--role-contet--> */}
                        <div class="tab_cntnt_box">
                          <div class="cntnt_title">
                            <h3>User list</h3>
                          </div>
                          <div class="tab_sub_cntnt">
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Consequuntur debitis praesentium iusto
                              quasi, temporibus accusamus quis possimus saepe
                              ipsa. Vel magni molestiae quae alias harum id esse
                              doloribus ab commodi.
                            </p>
                            <form class="d-flex d-none">
                              <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                              />
                              {/* <!-- <button class="info-btn" type="submit">Search</button> --> */}
                            </form>
                          </div>

                          {/* <!--table---> */}
                          <div class="table_box">
                            <table class="table">
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



{data?.role === "User" ?(<>
    <section class="sidebar-sec">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="">
                {/* <!----> */}
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    {/* <!--role-contet--> */}
                    <div class="tab_cntnt_box">
                      <div class="cntnt_title">
                        <h3>Message</h3>
                        <p>
                          Quickly access information and tools related to your
                          account.
                        </p>
                      </div>

                      {/* <!--table---> */}
                      <div class="row">
                        <div class="col-lg-5 vertical-bdr-line">
                          <div class="dashboard_tbs_one">
                            <button class="info-btn minutes-button">
                              total minutes 3100
                              <span
                                class="color_one"
                                style={{ backgroundColor: "red" }}
                              ></span>
                            </button>
                            <button class="info-btn minutes-button">
                              total used minutes 332
                              <span
                                class="color_one"
                                style={{ backgroundColor: "green" }}
                              ></span>
                            </button>
                          </div>
                          <div class="dashboard_tbs_one">
                            <button class="info-btn minutes-button">
                              total remaining minutes 2768
                              <span
                                class="color_one"
                                style={{ backgroundColor: "blue" }}
                              ></span>
                            </button>
                            <button class="info-btn minutes-button">
                              monthly used minutes 4000
                              <span
                                class="color_one"
                                style={{ backgroundColor: "yellow" }}
                              ></span>
                            </button>
                          </div>
                        </div>

                        <div class="col-lg-7">
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
                          <div class="dashboard_linechart">
                            {/* <!-- <canvas id="dashboardLineChart "></canvas> -->
                                      <!-- <canvas id="chartTwo"></canvas> --> */}
                            <canvas
                              id="myChart"
                              style={{ width: "100%" }}
                            ></canvas>
                          </div>
                        </div>
                      </div>
                      {/* <!--table-end--> */}
                    </div>
                    {/* <!--role-contet--> */}
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    {/* <!--role-contet--> */}
                    <div class="tab_cntnt_box">
                      <div class="cntnt_title">
                        <h3>User list</h3>
                      </div>
                      <div class="tab_sub_cntnt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequuntur debitis praesentium iusto quasi,
                          temporibus accusamus quis possimus saepe ipsa. Vel
                          magni molestiae quae alias harum id esse doloribus ab
                          commodi.
                        </p>
                        <form class="d-flex d-none">
                          <input
                            class="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                          {/* <!-- <button class="info-btn" type="submit">Search</button> --> */}
                        </form>
                      </div>

                      {/* <!--table---> */}
                      <div class="table_box">
                        <table class="table">
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
                    class="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    {/* <!--role-contet--> */}
                    <div class="tab_cntnt_box">
                      <div class="cntnt_title">
                        <h3>Add user</h3>
                      </div>
                      <div class="tab_sub_cntnt">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequuntur debitis praesentium iusto quasi,
                          temporibus accusamus quis possimus saepe ipsa. Vel
                          magni molestiae quae alias harum id esse doloribus ab
                          commodi.
                        </p>
                        <div class="inpt-lft">
                          <input
                            class="form-control me-2 w-25"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </div>

                      {/* <!--table---> */}
                      <div class="row">
                        <div class="col-12">
                          <div class="add_row">
                            <form class="add_frm_box">
                              <div class="row">
                                <div class="col-md-6 col-12 mb-3">
                                  <input
                                    type="name"
                                    class="form-control"
                                    id="fname"
                                    aria-describedby="nameHelp"
                                    placeholder="First Name"
                                  />
                                </div>
                                <div class="col-md-6 col-12 mb-3">
                                  <input
                                    type="name"
                                    class="form-control"
                                    id="lname"
                                    aria-describedby="lnameHelp"
                                    placeholder="Last Name"
                                  />
                                </div>

                                <div class="col-md-6 col-12 mb-3">
                                  <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Email"
                                  />
                                  <div id="emailHelp" class="form-text">
                                    We'll never share your email with anyone
                                    else.
                                  </div>
                                </div>
                                <div class="col-md-6 col-12 mb-3">
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="number"
                                    aria-describedby="emailHelp"
                                    placeholder="Phone Number"
                                  />
                                </div>

                                <div class="col-md-6 col-12 mb-3">
                                  <input
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    aria-describedby="passwordHelp"
                                    placeholder="Password"
                                  />
                                </div>
                                <div class="col-md-6 col-12 mb-3">
                                  <input
                                    type="password"
                                    class="form-control"
                                    id="c_password"
                                    aria-describedby="passwordHelp"
                                    placeholder="Confirm Password"
                                  />
                                </div>
                              </div>
                              <div class="mb-3">
                                <input
                                  type="password"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                />
                              </div>
                              <div class="mb-3 form-check">
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="exampleCheck1"
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleCheck1"
                                >
                                  Check me out
                                </label>
                              </div>
                              <button
                                type="submit"
                                class="info-btn submit_button"
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
                    class="tab-pane fade"
                    id="pills-call"
                    role="tabpanel"
                    aria-labelledby="pills-call-tab"
                  >
                    <p style={{ color: "#fff" }}>1</p>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-reports"
                    role="tabpanel"
                    aria-labelledby="pills-reports-tab"
                  >
                    <p style={{ color: "#fff" }}>2</p>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-block"
                    role="tabpanel"
                    aria-labelledby="pills-block-tab"
                  >
                    <p style={{ color: "#fff" }}>3</p>
                  </div>
                  <div
                    class="tab-pane fade"
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
