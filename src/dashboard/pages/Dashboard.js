import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import SideBar from "../common/SideBar";
import RoadMapSvg from "../../assets/svgs/roadMap";
const Dashboard = () => {
  return (
    <>
      <div id="main-wrapper">
        <SideBar />
        <div className="page-wrapper">
          <Header />
          <div className="body-wrapper">
            <div className="container-fluid">
              <div className="row">
                {/* Enhanced Greeting Card */}
                <div className="col-12">
                  <div className="card border-0 shadow-sm">
                    <div
                      className="card-body text-center py-3"
                      style={{
                        background:
                          "linear-gradient(135deg, #6600CC 0%, #9933FF 100%)",
                        borderRadius: "15px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Decorative Elements */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10%",
                          left: "5%",
                          width: "15px",
                          height: "15px",
                          background: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "15%",
                          right: "10%",
                          width: "30px",
                          height: "30px",
                          background: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "50%",
                        }}
                      ></div>

                      {/* Content */}
                      <div className="position-relative">
                        <h2
                          className="fw-bold text-white mb-2"
                          style={{
                            fontSize: "1.8rem",
                            textShadow: "1px 1px 3px rgba(0,0,0,0.1)",
                          }}
                        >
                          Hey Nitin! ✨
                        </h2>
                        <p
                          className="h5 text-white mb-2"
                          style={{
                            opacity: "0.9",
                            fontWeight: "500",
                            fontSize: "1rem",
                          }}
                        >
                          You're on track to achieve your career goal with CLIF
                          AI by <b> December 2026 </b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Section */}
                <div className="col-12 mt-n3">
                  <div className="card">
                    <div className="card-body p-3">
                      <div className="text-center">
                        < RoadMapSvg />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Existing Dashboard Components */}
                <div className="col-lg-4 d-flex align-items-stretch">
                  <div
                    className="card w-100 p-2"
                    style={{ maxHeight: "400px", overflow: "hidden" }}
                  >
                    <div className="card-body p-2">
                      <h5 className="card-title fw-semibold mb-2 mt-2">
                        Learning Last Month
                      </h5>
                      <p className="card-subtitle mb-3">July 2025</p>
                      <div className="mt-2">
                        <div className="d-flex align-items-center mb-4 mt-2">
                          <div className="text-bg-light rounded me-2 p-1 d-flex align-items-center justify-content-center">
                            <i className="ti ti-grid-dots text-muted fs-6" />
                          </div>
                          <div>
                            <p className="fs-6 mb-1 fw-normal">
                              Total Courses Completed
                            </p>
                            <h6 className="fw-semibold text-dark fs-6 mb-1">
                              36
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                          <div className="text-bg-light rounded me-2 p-1 d-flex align-items-center justify-content-center">
                            <i className="ti ti-grid-dots text-muted fs-6" />
                          </div>
                          <div>
                            <p className="fs-6 mb-1 fw-normal">
                              Total Certificates
                            </p>
                            <h6 className="fw-semibold text-dark fs-6 mb-1">
                              52
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-4">
                          <div className="text-bg-light rounded me-2 p-1 d-flex align-items-center justify-content-center">
                            <i className="ti ti-grid-dots text-muted fs-6" />
                          </div>
                          <div>
                            <p className="fs-6 mb-1 fw-normal">
                              Learning Hours
                            </p>
                            <h6 className="fw-semibold text-dark fs-6 mb-1">
                              120 Hrs
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="text-bg-light rounded me-2 p-1 d-flex align-items-center justify-content-center">
                            <i className="ti ti-grid-dots text-muted fs-6" />
                          </div>
                          <div>
                            <p className="fs-6 mb-0 fw-normal">Mentor Hours</p>
                            <h6 className="fw-semibold text-dark fs-6 mb-0">
                              98 Hrs
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 d-flex align-items-stretch">
                  <div
                    className="card w-100"
                    style={{ maxHeight: "400px", overflow: "hidden" }}
                  >
                    <div className="card-body">
                      <div>
                        <h5 className="card-title fw-semibold mb-1">
                          Potential Career Position
                        </h5>
                        <p className="card-subtitle mb-n2">July 2025</p>
                        <div id="salary" className="mb-7 pb-8 mx-n4" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center mt-n4">
                            <div className="text-bg-light rounded me-8 p-8 d-flex align-items-center justify-content-center">
                              <i className="ti ti-grid-dots text-muted fs-6" />
                            </div>
                            <div>
                              <p className="fs-3 mb-0 fw-normal">
                                Highest Salary
                              </p>
                              <h6 className="fw-semibold text-dark fs-5 mb-1">
                                ₹3.5 Cr
                              </h6>
                            </div>
                          </div>
                          <div className="d-flex align-items-center mt-n4">
                            <div className="text-bg-light rounded me-8 p-8 d-flex align-items-center justify-content-center">
                              <i className="ti ti-grid-dots text-muted fs-6" />
                            </div>
                            <div>
                              <p className="fs-3 mb-0 fw-normal">
                                Average Salary
                              </p>
                              <h6 className="fw-semibold text-dark fs-5 mb-0">
                                ₹50 LPA
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 d-flex align-items-stretch flex-column">
                  <div className="row">
                    {/* Customers */}
                    <div className="col-sm-6 d-flex align-items-stretch">
                      <div className="card w-100">
                        <div className="card-body pb-0 mb-xxl-4 pb-1">
                          <p className="mb-1 fs-3">
                            Best Potential Salary Package
                          </p>
                          <h4 className="fw-semibold fs-7">₹19.3 LPA</h4>
                          <div className="d-flex align-items-center mb-3">
                            <span className="me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center">
                              <i className="ti ti-arrow-up-left text-success" />
                            </span>
                            <p className="text-dark fs-3 mb-0">+9%</p>
                          </div>
                        </div>
                        <div id="customers" />
                      </div>
                    </div>
                    {/* Projects */}
                    <div className="col-sm-6 d-flex align-items-stretch">
                      <div className="card w-100">
                        <div className="card-body">
                          <p className="mb-1 fs-3">Average Salary Package</p>
                          <h4 className="fw-semibold fs-7">₹8.3 LPA</h4>
                          <div className="d-flex align-items-center mb-3">
                            <span className="me-1 rounded-circle bg-success-subtle round-20 d-flex align-items-center justify-content-center">
                              <i className="ti ti-arrow-up-left text-success" />
                            </span>
                            <p className="text-dark fs-3 mb-0">+9%</p>
                          </div>
                          <div id="projects" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Comming Soon */}
                  {/* <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-7 pb-2">
                        <div className="me-3 pe-1">
                          <img
                            src="./assets/images/profile/user-2.jpg"
                            className="shadow-warning rounded-2"
                            alt="modernize-img"
                            width={72}
                            height={72}
                          />
                        </div>
                        <div>
                          <h5 className="fw-semibold fs-5 mb-2">
                            Super awesome, Vue coming soon!
                          </h5>
                          <p className="fs-3 mb-0">22 March, 2023</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <ul className="hstack mb-0">
                          <li className="ms-n8">
                            <a href="#" className="me-1">
                              <img
                                src="./assets/images/profile/user-2.jpg"
                                className="rounded-circle border border-2 border-white"
                                width={44}
                                height={44}
                                alt="modernize-img"
                              />
                            </a>
                          </li>
                          <li className="ms-n8">
                            <a href="#" className="me-1">
                              <img
                                src="./assets/images/profile/user-3.jpg"
                                className="rounded-circle border border-2 border-white"
                                width={44}
                                height={44}
                                alt="modernize-img"
                              />
                            </a>
                          </li>
                          <li className="ms-n8">
                            <a href="#" className="me-1">
                              <img
                                src="./assets/images/profile/user-4.jpg"
                                className="rounded-circle border border-2 border-white"
                                width={44}
                                height={44}
                                alt="modernize-img"
                              />
                            </a>
                          </li>
                          <li className="ms-n8">
                            <a href="#" className="me-1">
                              <img
                                src="./assets/images/profile/user-5.jpg"
                                className="rounded-circle border border-2 border-white"
                                width={44}
                                height={44}
                                alt="modernize-img"
                              />
                            </a>
                          </li>
                        </ul>
                        <a
                          href="#"
                          className="text-bg-light rounded py-1 px-8 d-flex align-items-center text-decoration-none">
                          <i className="ti ti-message-2 fs-6 text-primary" />
                        </a>
                      </div>
                    </div>
                  </div> */}
                </div>
                {/* <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="card text-bg-primary border-0 w-100">
                    <div className="card-body pb-0">
                      <h5 className="fw-semibold mb-1 text-white card-title">
                        Best Selling Products
                      </h5>
                      <p className="fs-3 mb-3 text-white">Overview 2023</p>
                      <div className="text-center mt-3">
                        <img
                          src="./assets/images/backgrounds/piggy.png"
                          className="img-fluid"
                          alt="modernize-img"
                        />
                      </div>
                    </div>
                    <div className="card mx-2 mb-2 mt-n2">
                      <div className="card-body">
                        <div className="mb-7 pb-1">
                          <div className="d-flex justify-content-between align-items-center mb-6">
                            <div>
                              <h6 className="mb-1 fs-4 fw-semibold">
                                MaterialPro
                              </h6>
                              <p className="fs-3 mb-0">$23,568</p>
                            </div>
                            <div>
                              <span className="badge bg-primary-subtle text-primary fw-semibold fs-3">
                                55%
                              </span>
                            </div>
                          </div>
                          <div className="progress bg-primary-subtle h-4">
                            <div
                              className="progress-bar w-50"
                              role="progressbar"
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="d-flex justify-content-between align-items-center mb-6">
                            <div>
                              <h6 className="mb-1 fs-4 fw-semibold">
                                Flexy Admin
                              </h6>
                              <p className="fs-3 mb-0">$23,568</p>
                            </div>
                            <div>
                              <span className="badge bg-secondary-subtle text-secondary fw-bold fs-3">
                                20%
                              </span>
                            </div>
                          </div>
                          <div className="progress bg-secondary-subtle h-4">
                            <div
                              className="progress-bar text-bg-secondary w-25"
                              role="progressbar"
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="card w-100">
                    <div className="card-body">
                      <h5 className="card-title fw-semibold">Weekly Stats</h5>
                      <p className="card-subtitle mb-0">Average sales</p>
                      <div id="stats" className="my-4" />
                      <div className="position-relative">
                        <div className="d-flex align-items-center justify-content-between mb-7">
                          <div className="d-flex">
                            <div className="p-6 bg-primary-subtle rounded me-6 d-flex align-items-center justify-content-center">
                              <i className="ti ti-grid-dots text-primary fs-6" />
                            </div>
                            <div>
                              <h6 className="mb-1 fs-4 fw-semibold">
                                Top Sales
                              </h6>
                              <p className="fs-3 mb-0">Johnathan Doe</p>
                            </div>
                          </div>
                          <div className="bg-primary-subtle badge">
                            <p className="fs-3 text-primary fw-semibold mb-0">
                              +68
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-7">
                          <div className="d-flex">
                            <div className="p-6 bg-success-subtle rounded me-6 d-flex align-items-center justify-content-center">
                              <i className="ti ti-grid-dots text-success fs-6" />
                            </div>
                            <div>
                              <h6 className="mb-1 fs-4 fw-semibold">
                                Best Seller
                              </h6>
                              <p className="fs-3 mb-0">MaterialPro Admin</p>
                            </div>
                          </div>
                          <div className="bg-success-subtle badge">
                            <p className="fs-3 text-success fw-semibold mb-0">
                              +68
                            </p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex">
                            <div className="p-6 bg-danger-subtle rounded me-6 d-flex align-items-center justify-content-center">
                              <i className="ti ti-grid-dots text-danger fs-6" />
                            </div>
                            <div>
                              <h6 className="mb-1 fs-4 fw-semibold">
                                Most Commented
                              </h6>
                              <p className="fs-3 mb-0">Ample Admin</p>
                            </div>
                          </div>
                          <div className="bg-danger-subtle badge">
                            <p className="fs-3 text-danger fw-semibold mb-0">
                              +68
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-lg-8 d-flex align-items-stretch">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="d-sm-flex d-block align-items-center justify-content-between mb-7">
                        <div className="mb-3 mb-sm-0">
                          <h4 className="card-title fw-semibold">
                            Top Performers
                          </h4>
                          <p className="card-subtitle">Best Employees</p>
                        </div>
                        <div>
                          <select className="form-select">
                            <option value={1}>March 2024</option>
                            <option value={2}>April 2024</option>
                            <option value={3}>May 2024</option>
                            <option value={4}>June 2024</option>
                          </select>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="table align-middle text-nowrap mb-0">
                          <thead>
                            <tr className="text-muted fw-semibold">
                              <th scope="col" className="ps-0">
                                Assigned
                              </th>
                              <th scope="col">Project</th>
                              <th scope="col">Priority</th>
                              <th scope="col">Budget</th>
                            </tr>
                          </thead>
                          <tbody className="border-top">
                            <tr>
                              <td className="ps-0">
                                <div className="d-flex align-items-center">
                                  <div className="me-2 pe-1">
                                    <img
                                      src="./assets/images/profile/user-3.jpg"
                                      className="rounded-circle"
                                      width={40}
                                      height={40}
                                      alt="modernize-img"
                                    />
                                  </div>
                                  <div>
                                    <h6 className="fw-semibold mb-1">
                                      Sunil Joshi
                                    </h6>
                                    <p className="fs-2 mb-0 text-muted">
                                      Web Designer
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 fs-3">Elite Admin</p>
                              </td>
                              <td>
                                <span className="badge fw-semibold py-1 w-85 bg-primary-subtle text-primary">
                                  Low
                                </span>
                              </td>
                              <td>
                                <p className="fs-3 text-dark mb-0">$3.9K</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="ps-0">
                                <div className="d-flex align-items-center">
                                  <div className="me-2 pe-1">
                                    <img
                                      src="./assets/images/profile/user-5.jpg"
                                      className="rounded-circle"
                                      width={40}
                                      height={40}
                                      alt="modernize-img"
                                    />
                                  </div>
                                  <div>
                                    <h6 className="fw-semibold mb-1">
                                      John Deo
                                    </h6>
                                    <p className="fs-2 mb-0 text-muted">
                                      Web Developer
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 fs-3">Flexy Admin</p>
                              </td>
                              <td>
                                <span className="badge fw-semibold py-1 w-85 bg-warning-subtle text-warning">
                                  Medium
                                </span>
                              </td>
                              <td>
                                <p className="fs-3 text-dark mb-0">$24.5K</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="ps-0">
                                <div className="d-flex align-items-center">
                                  <div className="me-2 pe-1">
                                    <img
                                      src="./assets/images/profile/user-6.jpg"
                                      className="rounded-circle"
                                      width={40}
                                      height={40}
                                      alt="modernize-img"
                                    />
                                  </div>
                                  <div>
                                    <h6 className="fw-semibold mb-1">
                                      Nirav Joshi
                                    </h6>
                                    <p className="fs-2 mb-0 text-muted">
                                      Web Manager
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 fs-3">Material Pro</p>
                              </td>
                              <td>
                                <span className="badge fw-semibold py-1 w-85 bg-info-subtle text-info">
                                  High
                                </span>
                              </td>
                              <td>
                                <p className="fs-3 text-dark mb-0">$12.8K</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="ps-0">
                                <div className="d-flex align-items-center">
                                  <div className="me-2 pe-1">
                                    <img
                                      src="./assets/images/profile/user-7.jpg"
                                      className="rounded-circle"
                                      width={40}
                                      height={40}
                                      alt="modernize-img"
                                    />
                                  </div>
                                  <div>
                                    <h6 className="fw-semibold mb-1">
                                      Yuvraj Sheth
                                    </h6>
                                    <p className="fs-2 mb-0 text-muted">
                                      Project Manager
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0 fs-3">Xtreme Admin</p>
                              </td>
                              <td>
                                <span className="badge fw-semibold py-1 w-85 bg-success-subtle text-success">
                                  Low
                                </span>
                              </td>
                              <td>
                                <p className="fs-3 text-dark mb-0">$4.8K</p>
                              </td>
                            </tr>
                            <tr>
                              <td className="border-0 ps-0">
                                <div className="d-flex align-items-center">
                                  <div className="me-2 pe-1">
                                    <img
                                      src="./assets/images/profile/user-8.jpg"
                                      className="rounded-circle"
                                      width={40}
                                      height={40}
                                      alt="modernize-img"
                                    />
                                  </div>
                                  <div>
                                    <h6 className="fw-semibold mb-1">
                                      Micheal Doe
                                    </h6>
                                    <p className="fs-2 mb-0 text-muted">
                                      Content Writer
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="border-0">
                                <p className="mb-0 fs-3">
                                  Helping Hands WP Theme
                                </p>
                              </td>
                              <td className="border-0">
                                <span className="badge fw-semibold py-1 w-85 bg-danger-subtle text-danger">
                                  High
                                </span>
                              </td>
                              <td className="border-0">
                                <p className="fs-3 text-dark mb-0">$9.3K</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/*  Search Bar */}
        {/* <SearchBar /> */}
      </div>
      <div className="dark-transparent sidebartoggler"></div>
    </>
  );
};
export default Dashboard;
