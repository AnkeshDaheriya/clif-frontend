import React from "react";
function Header() {
  return (
    <>
      <style>
        {`
          .navbar-nav .nav-link {
            color: #6600CC !important;
            transition: all 0.3s ease;
            position: relative;
          }

          .navbar-nav .nav-link:hover {
            color: #8033D9 !important;
            transform: translateY(-2px);
          }
           

          .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: #6600CC;
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .nav-icon-hover-bg:hover {
            background-color: rgba(102, 0, 204, 0.1);
          }

          .bg-hover-primary:hover {
            color: #6600CC !important;
            background-color: rgba(102, 0, 204, 0.1);
            padding: 4px 8px;
            border-radius: 4px;
          }

          .text-bg-light {
            background-color: rgba(102, 0, 204, 0.1) !important;
          }

          .navbar-nav .btn-primary {
            background-color: #6600CC !important;
            border-color: #6600CC !important;
          }

          .navbar-nav .btn-primary:hover {
            background-color: #8033D9 !important;
            border-color: #8033D9 !important;
          }
        `}
      </style>
      {/*  Header Start */}
      <header className="topbar">
        <div className="with-vertical">
          {/* ---------------------------------- */}
          {/* Start Vertical Layout Header */}
          {/* ---------------------------------- */}
          <nav className="navbar navbar-expand-lg p-0">

            <ul className="navbar-nav">
              <li className="nav-item nav-icon-hover-bg rounded-circle ms-n2">
                <a
                  className="nav-link sidebartoggler"
                  id="headerCollapse"
                  href="#">
                  <i className="ti ti-menu-2" />
                </a>
              </li>
              <li className="nav-item nav-icon-hover-bg rounded-circle d-none d-lg-flex">
                <a
                  className="nav-link"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  <i className="ti ti-search" />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav quick-links d-none d-lg-flex align-items-center">
              {/* ------------------------------- */}
              {/* start apps Dropdown */}
              {/* ------------------------------- */}
              <li className="nav-item nav-icon-hover-bg rounded w-auto dropdown d-none d-lg-block mx-0">
                <div className="hover-dd">
                  <a className="nav-link" href="#">
                    Quick Access
                    <span className="mt-1">
                      <i className="ti ti-chevron-down fs-3" />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0">
                    <div className="row">
                      <div className="col-8">
                        <div className="ps-7 pt-7">
                          <div className="border-bottom">
                            <div className="row">
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="./main/app-chat.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-chat.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Career Graph
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get latest career graph 
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="./main/app-invoice.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-invoice.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Skill Assessment
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Assess your skills
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="./main/app-contact2.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-mobile.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Mentors Connect
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Connect with mentors
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="./main/app-email.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-message-box.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Video Upload
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Upload video
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="./main/page-user-profile.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-cart.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        User Profile
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        learn more information
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="./main/app-calendar.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-date.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Quick Job Search
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Search for job
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="./main/app-contact.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-lifebuoy.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Resume Builder
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Build your resume
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="./main/app-notes.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-application.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Settings
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Update settings
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center py-3">
                            <div className="col-6">
                              <a
                                className="fw-semibold d-flex align-items-center lh-1"
                                href="#">
                                <i className="ti ti-help fs-6 me-2" />
                                Frequently Asked Questions
                              </a>
                            </div>
                            <div className="col-4">
                              <div className="d-flex justify-content-end pe-4">
                                <button className="btn btn-primary">
                                  Check
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* ------------------------------- */}
              {/* end apps Dropdown */}
              {/* ------------------------------- */}
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="./main/app-chat.html">
                  Quick Help
                </a>
              </li>
            </ul>
            <div className="d-block d-lg-none py-4">
              <a href="./main/index.html" className="text-nowrap logo-img">
                <img
                  src="./assets/images/logos/dark-logo.svg"
                  className="dark-logo"
                  alt="Logo-Dark"
                />
              </a>
            </div>
            <a
              className="navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <i className="ti ti-dots fs-7" />
            </a>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav">
              <div className="d-flex align-items-center justify-content-between">
                <a
                  href="#"
                  className="nav-link nav-icon-hover-bg rounded-circle mx-0 ms-n1 d-flex d-lg-none align-items-center justify-content-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobilenavbar"
                  aria-controls="offcanvasWithBothOptions">
                  <i className="ti ti-align-justified fs-7" />
                </a>
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">

                  {/* ------------------------------- */}
                  {/* start profile Dropdown */}
                  {/* ------------------------------- */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link pe-0"
                      href="#"
                      id="drop1"
                      aria-expanded="false">
                      <div className="d-flex align-items-center">
                        <div className="user-profile-img">
                          <img
                            src="./assets/images/profile/user-1.jpg"
                            className="rounded-circle"
                            width={35}
                            height={35}
                            alt="modernize-img"
                          />
                        </div>
                      </div>
                    </a>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop1">
                      <div
                        className="profile-dropdown position-relative"
                        data-simplebar="">
                        <div className="py-3 px-7 pb-0">
                          <h5 className="mb-0 fs-5 fw-semibold">
                            User Profile
                          </h5>
                        </div>
                        <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                          <img
                            src="./assets/images/profile/user-1.jpg"
                            className="rounded-circle"
                            width={80}
                            height={80}
                            alt="modernize-img"
                          />
                          <div className="ms-3">
                            <h5 className="mb-1 fs-3">Mathew Anderson</h5>
                            <span className="mb-1 d-block">Designer</span>
                            <p className="mb-0 d-flex align-items-center gap-2">
                              <i className="ti ti-mail fs-4" />{" "}
                              info@modernize.com
                            </p>
                          </div>
                        </div>
                        <div className="message-body">
                          <a
                            href="./main/page-user-profile.html"
                            className="py-8 px-7 mt-8 d-flex align-items-center">
                            <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                              <img
                                src="./assets/images/svgs/icon-account.svg"
                                alt="modernize-img"
                                width={24}
                                height={24}
                              />
                            </span>
                            <div className="w-100 ps-3">
                              <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                My Profile
                              </h6>
                              <span className="fs-2 d-block text-body-secondary">
                                Account Settings
                              </span>
                            </div>
                          </a>
                          <a
                            href="./main/app-email.html"
                            className="py-8 px-7 d-flex align-items-center">
                            <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                              <img
                                src="./assets/images/svgs/icon-inbox.svg"
                                alt="modernize-img"
                                width={24}
                                height={24}
                              />
                            </span>
                            <div className="w-100 ps-3">
                              <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                My Progress
                              </h6>
                              <span className="fs-2 d-block text-body-secondary">
                                 Progress Report
                              </span>
                            </div>
                          </a>
                          <a
                            href="./main/app-notes.html"
                            className="py-8 px-7 d-flex align-items-center">
                            <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                              <img
                                src="./assets/images/svgs/icon-tasks.svg"
                                alt="modernize-img"
                                width={24}
                                height={24}
                              />
                            </span>
                            <div className="w-100 ps-3">
                              <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                My Goals
                              </h6>
                              <span className="fs-2 d-block text-body-secondary">
                                Goals &amp; Tasks
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="d-grid py-4 px-7 pt-8">
                          <div className="upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-4 p-4 mb-9">
                            <div className="row">
                              <div className="col-6">
                                <h5 className="fs-4 mb-3 fw-semibold">
                                  Unlimited Access
                                </h5>
                                <button className="btn btn-primary">
                                  Upgrade
                                </button>
                              </div>
                              <div className="col-6">
                                <div className="m-n4 unlimited-img">
                                  <img
                                    src="./assets/images/backgrounds/unlimited-bg.png"
                                    alt="modernize-img"
                                    className="w-100"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="./main/authentication-login.html"
                            className="btn btn-outline-primary">
                            Log Out
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* ------------------------------- */}
                  {/* end profile Dropdown */}
                  {/* ------------------------------- */}
                </ul>
              </div>
            </div>
          </nav>

          {/* apps Dropdown in Small screen */}
          {/* ------------------------------- */}
          {/*  Mobilenavbar */}
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabIndex={-1}
            id="mobilenavbar"
            aria-labelledby="offcanvasWithBothOptionsLabel">
            <nav className="sidebar-nav scroll-sidebar">
              <div className="offcanvas-header justify-content-between">
                <img
                  src="./assets/images/logos/favicon.ico"
                  alt="modernize-img"
                  className="img-fluid"
                />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body h-n80" data-simplebar="">
                <ul id="sidebarnav">
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link has-arrow"
                      href="#"
                      aria-expanded="false">
                      <span>
                        <i className="ti ti-apps" />
                      </span>
                      <span className="hide-menu">Apps</span>
                    </a>
                    <ul
                      aria-expanded="false"
                      className="collapse first-level my-3">
                      <li className="sidebar-item py-2">
                        <a
                          href="./main/app-chat.html"
                          className="d-flex align-items-center">
                          <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img
                              src="./assets/images/svgs/icon-dd-chat.svg"
                              alt="modernize-img"
                              className="img-fluid"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div>
                            <h6 className="mb-1 bg-hover-primary">
                              Chat Application
                            </h6>
                            <span className="fs-2 d-block text-muted">
                              New messages arrived
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item py-2">
                        <a
                          href="./main/app-invoice.html"
                          className="d-flex align-items-center">
                          <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img
                              src="./assets/images/svgs/icon-dd-invoice.svg"
                              alt="modernize-img"
                              className="img-fluid"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div>
                            <h6 className="mb-1 bg-hover-primary">
                              Invoice App
                            </h6>
                            <span className="fs-2 d-block text-muted">
                              Get latest invoice
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item py-2">
                        <a
                          href="./main/app-cotact.html"
                          className="d-flex align-items-center">
                          <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img
                              src="./assets/images/svgs/icon-dd-mobile.svg"
                              alt="modernize-img"
                              className="img-fluid"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div>
                            <h6 className="mb-1 bg-hover-primary">
                              Contact Application
                            </h6>
                            <span className="fs-2 d-block text-muted">
                              2 Unsaved Contacts
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item py-2">
                        <a
                          href="./main/app-email.html"
                          className="d-flex align-items-center">
                          <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img
                              src="./assets/images/svgs/icon-dd-message-box.svg"
                              alt="modernize-img"
                              className="img-fluid"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div>
                            <h6 className="mb-1 bg-hover-primary">Email App</h6>
                            <span className="fs-2 d-block text-muted">
                              Get new emails
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item py-2">
                        <a
                          href="./main/page-user-profile.html"
                          className="d-flex align-items-center">
                          <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img
                              src="./assets/images/svgs/icon-dd-cart.svg"
                              alt="modernize-img"
                              className="img-fluid"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div>
                            <h6 className="mb-1 bg-hover-primary">
                              User Profile
                            </h6>
                            <span className="fs-2 d-block text-muted">
                              learn more information
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item py-2">
                        <a
                          href="./main/app-calendar.html"
                          className="d-flex align-items-center">
                          <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img
                              src="./assets/images/svgs/icon-dd-date.svg"
                              alt="modernize-img"
                              className="img-fluid"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div>
                            <h6 className="mb-1 bg-hover-primary">
                              Calendar App
                            </h6>
                            <span className="fs-2 d-block text-muted">
                              Get dates
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item py-2">
                        <a
                          href="./main/app-contact2.html"
                          className="d-flex align-items-center">
                          <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img
                              src="./assets/images/svgs/icon-dd-lifebuoy.svg"
                              alt="modernize-img"
                              className="img-fluid"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div>
                            <h6 className="mb-1 bg-hover-primary">
                              Contact List Table
                            </h6>
                            <span className="fs-2 d-block text-muted">
                              Add new contact
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="sidebar-item py-2">
                        <a
                          href="./main/app-notes.html"
                          className="d-flex align-items-center">
                          <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                            <img
                              src="./assets/images/svgs/icon-dd-application.svg"
                              alt="modernize-img"
                              className="img-fluid"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div>
                            <h6 className="mb-1 bg-hover-primary">
                              Notes Application
                            </h6>
                            <span className="fs-2 d-block text-muted">
                              To-do and Daily tasks
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link"
                      href="./main/app-chat.html"
                      aria-expanded="false">
                      <span>
                        <i className="ti ti-message-dots" />
                      </span>
                      <span className="hide-menu">Chat</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="app-header with-horizontal">
          <nav className="navbar navbar-expand-xl container-fluid p-0">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item nav-icon-hover-bg rounded-circle d-flex d-xl-none ms-n2">
                <a
                  className="nav-link sidebartoggler"
                  id="sidebarCollapse"
                  href="#">
                  <i className="ti ti-menu-2" />
                </a>
              </li>
              <li className="nav-item d-none d-xl-block">
                <a href="./main/index.html" className="text-nowrap nav-link">
                  <img
                    src="./assets/images/logos/dark-logo.svg"
                    className="dark-logo"
                    width={180}
                    alt="modernize-img"
                  />
                  <img
                    src="./assets/images/logos/light-logo.svg"
                    className="light-logo"
                    width={180}
                    alt="modernize-img"
                  />
                </a>
              </li>
              <li className="nav-item nav-icon-hover-bg rounded-circle d-none d-xl-flex">
                <a
                  className="nav-link"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal">
                  <i className="ti ti-search" />
                </a>
              </li>
            </ul>
            <ul className="navbar-nav quick-links d-none d-xl-flex align-items-center">
              {/* ------------------------------- */}
              {/* start apps Dropdown */}
              {/* ------------------------------- */}
              <li className="nav-item nav-icon-hover-bg rounded w-auto dropdown d-none d-lg-flex">
                <div className="hover-dd">
                  <a className="nav-link" href="#">
                    Apps
                    <span className="mt-1">
                      <i className="ti ti-chevron-down fs-3" />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-nav dropdown-menu-animate-up py-0">
                    <div className="row">
                      <div className="col-8">
                        <div className="ps-7 pt-7">
                          <div className="border-bottom">
                            <div className="row">
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="./main/app-chat.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-chat.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Chat Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        New messages arrived
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="./main/app-invoice.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-invoice.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Invoice App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get latest invoice
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="./main/app-contact2.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-mobile.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Contact Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        2 Unsaved Contacts
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="./main/app-email.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-message-box.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Email App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get new emails
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="position-relative">
                                  <a
                                    href="./main/page-user-profile.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-cart.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        User Profile
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        learn more information
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="./main/app-calendar.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-date.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Calendar App
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Get dates
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="./main/app-contact.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-lifebuoy.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Contact List Table
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        Add new contact
                                      </span>
                                    </div>
                                  </a>
                                  <a
                                    href="./main/app-notes.html"
                                    className="d-flex align-items-center pb-9 position-relative">
                                    <div className="text-bg-light rounded-1 me-3 p-6 d-flex align-items-center justify-content-center">
                                      <img
                                        src="./assets/images/svgs/icon-dd-application.svg"
                                        alt="modernize-img"
                                        className="img-fluid"
                                        width={24}
                                        height={24}
                                      />
                                    </div>
                                    <div>
                                      <h6 className="mb-1 fw-semibold fs-3">
                                        Notes Application
                                      </h6>
                                      <span className="fs-2 d-block text-body-secondary">
                                        To-do and Daily tasks
                                      </span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center py-3">
                            <div className="col-8">
                              <a
                                className="fw-semibold d-flex align-items-center lh-1"
                                href="#">
                                <i className="ti ti-help fs-6 me-2" />
                                Frequently Asked Questions
                              </a>
                            </div>
                            <div className="col-4">
                              <div className="d-flex justify-content-end pe-4">
                                <button className="btn btn-primary">
                                  Check
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* ------------------------------- */}
              {/* end apps Dropdown */}
              {/* ------------------------------- */}
              <li className="nav-item dropdown-hover d-none d-lg-block">
                <a className="nav-link" href="./main/app-chat.html">
                  Chat
                </a>
              </li>
            </ul>
            <div className="d-block d-xl-none">
              <a href="./main/index.html" className="text-nowrap nav-link">
                <img
                  src="./assets/images/logos/dark-logo.svg"
                  width={180}
                  alt="modernize-img"
                />
              </a>
            </div>
            <a
              className="navbar-toggler nav-icon-hover-bg rounded-circle p-0 mx-0 border-0"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="p-2">
                <i className="ti ti-dots fs-7" />
              </span>
            </a>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav">
              <div className="d-flex align-items-center justify-content-between px-0 px-xl-8">
                <a
                  href="#"
                  className="nav-link round-40 p-1 ps-0 d-flex d-xl-none align-items-center justify-content-center"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#mobilenavbar"
                  aria-controls="offcanvasWithBothOptions">
                  <i className="ti ti-align-justified fs-7" />
                </a>
                <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-center">
                  {/* ------------------------------- */}
                  {/* start language Dropdown */}
                  {/* ------------------------------- */}

                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      id="drop2"
                      aria-expanded="false">
                      <img
                        src="./assets/images/svgs/icon-flag-en.svg"
                        alt="modernize-img"
                        width="20px"
                        height="20px"
                        className="rounded-circle object-fit-cover round-20"
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2">
                      <div className="message-body">
                        <a
                          href="#"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item">
                          <div className="position-relative">
                            <img
                              src="./assets/images/svgs/icon-flag-en.svg"
                              alt="modernize-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">English (UK)</p>
                        </a>
                        <a
                          href="#"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item">
                          <div className="position-relative">
                            <img
                              src="./assets/images/svgs/icon-flag-cn.svg"
                              alt="modernize-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">中国人 (Chinese)</p>
                        </a>
                        <a
                          href="#"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item">
                          <div className="position-relative">
                            <img
                              src="./assets/images/svgs/icon-flag-fr.svg"
                              alt="modernize-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">français (French)</p>
                        </a>
                        <a
                          href="#"
                          className="d-flex align-items-center gap-2 py-3 px-4 dropdown-item">
                          <div className="position-relative">
                            <img
                              src="./assets/images/svgs/icon-flag-sa.svg"
                              alt="modernize-img"
                              width="20px"
                              height="20px"
                              className="rounded-circle object-fit-cover round-20"
                            />
                          </div>
                          <p className="mb-0 fs-3">عربي (Arabic)</p>
                        </a>
                      </div>
                    </div>
                  </li>
                  {/* ------------------------------- */}
                  {/* end language Dropdown */}
                  {/* ------------------------------- */}
                  {/* ------------------------------- */}
                  {/* start shopping cart Dropdown */}
                  {/* ------------------------------- */}
                  <li className="nav-item nav-icon-hover-bg rounded-circle">
                    <a
                      className="nav-link position-relative"
                      href="#"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight">
                      <i className="ti ti-basket" />
                      <span className="popup-badge rounded-pill bg-danger text-white fs-2">
                        2
                      </span>
                    </a>
                  </li>
                  {/* ------------------------------- */}
                  {/* end shopping cart Dropdown */}
                  {/* ------------------------------- */}
                  {/* ------------------------------- */}
                  {/* start notification Dropdown */}
                  {/* ------------------------------- */}
                  <li className="nav-item nav-icon-hover-bg rounded-circle dropdown">
                    <a
                      className="nav-link position-relative"
                      href="#"
                      id="drop2"
                      aria-expanded="false">
                      <i className="ti ti-bell-ringing" />
                      <div className="notification bg-primary rounded-circle" />
                    </a>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2">
                      <div className="d-flex align-items-center justify-content-between py-3 px-7">
                        <h5 className="mb-0 fs-5 fw-semibold">Notifications</h5>
                        <span className="badge text-bg-primary rounded-4 px-3 py-1 lh-sm">
                          5 new
                        </span>
                      </div>
                      <div className="message-body" data-simplebar="">
                        <a
                          href="#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item">
                          <span className="me-3">
                            <img
                              src="./assets/images/profile/user-2.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              Roman Joined the Team!
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Congratulate him
                            </span>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item">
                          <span className="me-3">
                            <img
                              src="./assets/images/profile/user-3.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              New message
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Salma sent you new message
                            </span>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item">
                          <span className="me-3">
                            <img
                              src="./assets/images/profile/user-4.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              Bianca sent payment
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Check your earnings
                            </span>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item">
                          <span className="me-3">
                            <img
                              src="./assets/images/profile/user-5.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              Jolly completed tasks
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Assign her new tasks
                            </span>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item">
                          <span className="me-3">
                            <img
                              src="./assets/images/profile/user-6.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              John received payment
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              $230 deducted from account
                            </span>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="py-6 px-7 d-flex align-items-center dropdown-item">
                          <span className="me-3">
                            <img
                              src="./assets/images/profile/user-7.jpg"
                              alt="user"
                              className="rounded-circle"
                              width={48}
                              height={48}
                            />
                          </span>
                          <div className="w-100">
                            <h6 className="mb-1 fw-semibold lh-base">
                              Roman Joined the Team!
                            </h6>
                            <span className="fs-2 d-block text-body-secondary">
                              Congratulate him
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="py-6 px-7 mb-1">
                        <button className="btn btn-outline-primary w-100">
                          See All Notifications
                        </button>
                      </div>
                    </div>
                  </li>
                  {/* ------------------------------- */}
                  {/* end notification Dropdown */}
                  {/* ------------------------------- */}
                  {/* ------------------------------- */}
                  {/* start profile Dropdown */}
                  {/* ------------------------------- */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link pe-0"
                      href="#"
                      id="drop1"
                      aria-expanded="false">
                      <div className="d-flex align-items-center">
                        <div className="user-profile-img">
                          <img
                            src="./assets/images/profile/user-1.jpg"
                            className="rounded-circle"
                            width={35}
                            height={35}
                            alt="modernize-img"
                          />
                        </div>
                      </div>
                    </a>
                    <div
                      className="dropdown-menu content-dd dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop1">
                      <div
                        className="profile-dropdown position-relative"
                        data-simplebar="">
                        <div className="py-3 px-7 pb-0">
                          <h5 className="mb-0 fs-5 fw-semibold">
                            User Profile
                          </h5>
                        </div>
                        <div className="d-flex align-items-center py-9 mx-7 border-bottom">
                          <img
                            src="./assets/images/profile/user-1.jpg"
                            className="rounded-circle"
                            width={80}
                            height={80}
                            alt="modernize-img"
                          />
                          <div className="ms-3">
                            <h5 className="mb-1 fs-3">Mathew Anderson</h5>
                            <span className="mb-1 d-block">Designer</span>
                            <p className="mb-0 d-flex align-items-center gap-2">
                              <i className="ti ti-mail fs-4" />{" "}
                              info@modernize.com
                            </p>
                          </div>
                        </div>
                        <div className="message-body">
                          <a
                            href="./main/page-user-profile.html"
                            className="py-8 px-7 mt-8 d-flex align-items-center">
                            <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                              <img
                                src="./assets/images/svgs/icon-account.svg"
                                alt="modernize-img"
                                width={24}
                                height={24}
                              />
                            </span>
                            <div className="w-100 ps-3">
                              <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                My Profile
                              </h6>
                              <span className="fs-2 d-block text-body-secondary">
                                Account Settings
                              </span>
                            </div>
                          </a>
                          <a
                            href="./main/app-email.html"
                            className="py-8 px-7 d-flex align-items-center">
                            <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                              <img
                                src="./assets/images/svgs/icon-inbox.svg"
                                alt="modernize-img"
                                width={24}
                                height={24}
                              />
                            </span>
                            <div className="w-100 ps-3">
                              <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                My Inbox
                              </h6>
                              <span className="fs-2 d-block text-body-secondary">
                                Messages &amp; Emails
                              </span>
                            </div>
                          </a>
                          <a
                            href="./main/app-notes.html"
                            className="py-8 px-7 d-flex align-items-center">
                            <span className="d-flex align-items-center justify-content-center text-bg-light rounded-1 p-6">
                              <img
                                src="./assets/images/svgs/icon-tasks.svg"
                                alt="modernize-img"
                                width={24}
                                height={24}
                              />
                            </span>
                            <div className="w-100 ps-3">
                              <h6 className="mb-1 fs-3 fw-semibold lh-base">
                                My Task
                              </h6>
                              <span className="fs-2 d-block text-body-secondary">
                                To-do and Daily Tasks
                              </span>
                            </div>
                          </a>
                        </div>
                        <div className="d-grid py-4 px-7 pt-8">
                          <div className="upgrade-plan bg-primary-subtle position-relative overflow-hidden rounded-4 p-4 mb-9">
                            <div className="row">
                              <div className="col-6">
                                <h5 className="fs-4 mb-3 fw-semibold">
                                  Unlimited Access
                                </h5>
                                <button className="btn btn-primary">
                                  Upgrade
                                </button>
                              </div>
                              <div className="col-6">
                                <div className="m-n4 unlimited-img">
                                  <img
                                    src="./assets/images/backgrounds/unlimited-bg.png"
                                    alt="modernize-img"
                                    className="w-100"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <a
                            href="./main/authentication-login.html"
                            className="btn btn-outline-primary">
                            Log Out
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* ------------------------------- */}
                  {/* end profile Dropdown */}
                  {/* ------------------------------- */}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/*  Header End */}
      <aside className="left-sidebar with-horizontal">
        {/* Sidebar scroll*/}
        <div>
          {/* Sidebar navigation*/}
          <nav
            id="sidebarnavh"
            className="sidebar-nav scroll-sidebar container-fluid">
            <ul id="sidebarnav">
              {/* ============================= */}
              {/* Home */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Home</span>
              </li>
              {/* =================== */}
              {/* Dashboard */}
              {/* =================== */}
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow"
                  href="#"
                  aria-expanded="false">
                  <span>
                    <i className="ti ti-home-2" />
                  </span>
                  <span className="hide-menu">Dashboard</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="./main/index.html" className="sidebar-link">
                      <i className="ti ti-aperture" />
                      <span className="hide-menu">Modern</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/index2.html" className="sidebar-link">
                      <i className="ti ti-shopping-cart" />
                      <span className="hide-menu">eCommerce</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/index3.html" className="sidebar-link">
                      <i className="ti ti-currency-dollar" />
                      <span className="hide-menu">NFT</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/index4.html" className="sidebar-link">
                      <i className="ti ti-cpu" />
                      <span className="hide-menu">Crypto</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/index5.html" className="sidebar-link">
                      <i className="ti ti-activity-heartbeat" />
                      <span className="hide-menu">General</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/index6.html" className="sidebar-link">
                      <i className="ti ti-playlist" />
                      <span className="hide-menu">Music</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* Apps */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Apps</span>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link two-column has-arrow"
                  href="#"
                  aria-expanded="false">
                  <span>
                    <i className="ti ti-archive" />
                  </span>
                  <span className="hide-menu">Apps</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="./main/app-calendar.html" className="sidebar-link">
                      <i className="ti ti-calendar" />
                      <span className="hide-menu">Calendar</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/app-kanban.html" className="sidebar-link">
                      <i className="ti ti-layout-kanban" />
                      <span className="hide-menu">Kanban</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/app-chat.html" className="sidebar-link">
                      <i className="ti ti-message-dots" />
                      <span className="hide-menu">Chat</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link"
                      href="./main/app-email.html"
                      aria-expanded="false">
                      <span>
                        <i className="ti ti-mail" />
                      </span>
                      <span className="hide-menu">Email</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/app-contact.html" className="sidebar-link">
                      <i className="ti ti-phone" />
                      <span className="hide-menu">Contact Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/app-contact2.html" className="sidebar-link">
                      <i className="ti ti-list-details" />
                      <span className="hide-menu">Contact List</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/app-notes.html" className="sidebar-link">
                      <i className="ti ti-notes" />
                      <span className="hide-menu">Notes</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/app-invoice.html" className="sidebar-link">
                      <i className="ti ti-file-text" />
                      <span className="hide-menu">Invoice</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/page-user-profile.html"
                      className="sidebar-link">
                      <i className="ti ti-user-circle" />
                      <span className="hide-menu">User Profile</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/blog-posts.html" className="sidebar-link">
                      <i className="ti ti-article" />
                      <span className="hide-menu">Posts</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/blog-detail.html" className="sidebar-link">
                      <i className="ti ti-details" />
                      <span className="hide-menu">Detail</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/eco-shop.html" className="sidebar-link">
                      <i className="ti ti-shopping-cart" />
                      <span className="hide-menu">Shop</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/eco-shop-detail.html"
                      className="sidebar-link">
                      <i className="ti ti-basket" />
                      <span className="hide-menu">Shop Detail</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/eco-product-list.html"
                      className="sidebar-link">
                      <i className="ti ti-list-check" />
                      <span className="hide-menu">List</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/eco-checkout.html" className="sidebar-link">
                      <i className="ti ti-brand-shopee" />
                      <span className="hide-menu">Checkout</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link"
                      href="./main/eco-add-product.html">
                      <i className="ti ti-file-plus" />
                      <span className="hide-menu">Add Product</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      className="sidebar-link"
                      href="./main/eco-edit-product.html">
                      <i className="ti ti-file-pencil" />
                      <span className="hide-menu">Edit Product</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* Frontend pages */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Frontend pages</span>
              </li>
              {/* =================== */}
              {/* pages */}
              {/* =================== */}
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow"
                  href="#"
                  aria-expanded="false">
                  <span className="rounded-3">
                    <i className="ti ti-app-window" />
                  </span>
                  <span className="hide-menu">Frontend pages</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a
                      href="./main/frontend-landingpage.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Homepage</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/frontend-aboutpage.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">About Us</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/frontend-contactpage.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Contact Us</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/frontend-blogpage.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Blog</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/frontend-blogdetailpage.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Blog Details</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* PAGES */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">PAGES</span>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow"
                  href="#"
                  aria-expanded="false">
                  <span>
                    <i className="ti ti-notebook" />
                  </span>
                  <span className="hide-menu">Pages</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="./main/page-faq.html" className="sidebar-link">
                      <i className="ti ti-help" />
                      <span className="hide-menu">FAQ</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/page-account-settings.html"
                      className="sidebar-link">
                      <i className="ti ti-user-circle" />
                      <span className="hide-menu">Account Setting</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/page-pricing.html" className="sidebar-link">
                      <i className="ti ti-currency-dollar" />
                      <span className="hide-menu">Pricing</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/widgets-cards.html"
                      className="sidebar-link">
                      <i className="ti ti-cards" />
                      <span className="hide-menu">Card</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/widgets-banners.html"
                      className="sidebar-link">
                      <i className="ti ti-ad" />
                      <span className="hide-menu">Banner</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/widgets-charts.html"
                      className="sidebar-link">
                      <i className="ti ti-chart-bar" />
                      <span className="hide-menu">Charts</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./landingpage/index.html" className="sidebar-link">
                      <i className="ti ti-app-window" />
                      <span className="hide-menu">Landing Page</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* UI */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">UI</span>
              </li>
              {/* =================== */}
              {/* UI Elements */}
              {/* =================== */}
              <li className="sidebar-item mega-dropdown">
                <a
                  className="sidebar-link has-arrow"
                  href="#"
                  aria-expanded="false">
                  <span className="rounded-3">
                    <i className="ti ti-layout-grid" />
                  </span>
                  <span className="hide-menu">UI</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="./main/ui-accordian.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Accordian</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/ui-badge.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Badge</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/ui-buttons.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Buttons</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/ui-dropdowns.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Dropdowns</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/ui-modals.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Modals</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/ui-tab.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Tab</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/ui-tooltip-popover.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Tooltip &amp; Popover</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/ui-notification.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Alerts</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/ui-progressbar.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Progressbar</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/ui-pagination.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Pagination</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/ui-typography.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Typography</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/ui-bootstrap-ui.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Bootstrap UI</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/ui-breadcrumb.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Breadcrumb</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/ui-offcanvas.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Offcanvas</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/ui-lists.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Lists</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/ui-grid.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Grid</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/ui-carousel.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Carousel</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/ui-scrollspy.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Scrollspy</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/ui-spinner.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Spinner</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/ui-link.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Link</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* Forms */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Forms</span>
              </li>
              {/* =================== */}
              {/* Forms */}
              {/* =================== */}
              <li className="sidebar-item">
                <a
                  className="sidebar-link two-column has-arrow"
                  href="#"
                  aria-expanded="false">
                  <span className="rounded-3">
                    <i className="ti ti-file-text" />
                  </span>
                  <span className="hide-menu">Forms</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  {/* form elements */}
                  <li className="sidebar-item">
                    <a href="./main/form-inputs.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Forms Input</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/form-input-groups.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Input Groups</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/form-input-grid.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Input Grid</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/form-checkbox-radio.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Checkbox &amp; Radios</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/form-bootstrap-switch.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Bootstrap Switch</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/form-select2.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Select2</span>
                    </a>
                  </li>
                  {/* form inputs */}
                  <li className="sidebar-item">
                    <a href="./main/form-basic.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Basic Form</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/form-vertical.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Form Vertical</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/form-horizontal.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Form Horizontal</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/form-actions.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Form Actions</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/form-row-separator.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Row Separator</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/form-bordered.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Form Bordered</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/form-detail.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Form Detail</span>
                    </a>
                  </li>
                  {/* form wizard */}
                  <li className="sidebar-item">
                    <a href="./main/form-wizard.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Form Wizard</span>
                    </a>
                  </li>
                  {/* Quill Editor */}
                  <li className="sidebar-item">
                    <a
                      href="./main/form-editor-quill.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Quill Editor</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* Tables */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Tables</span>
              </li>
              {/* =================== */}
              {/* Bootstrap Table */}
              {/* =================== */}
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow"
                  href="#"
                  aria-expanded="false">
                  <span className="rounded-3">
                    <i className="ti ti-layout-sidebar" />
                  </span>
                  <span className="hide-menu">Tables</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="./main/table-basic.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Basic Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/table-dark-basic.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Dark Basic Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/table-sizing.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Sizing Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/table-layout-coloured.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Coloured Table</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/table-datatable-basic.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Basic Initialisation</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/table-datatable-api.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">API</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/table-datatable-advanced.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Advanced Initialisation</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* Charts */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Charts</span>
              </li>
              {/* =================== */}
              {/* Apex Chart */}
              {/* =================== */}
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow"
                  href="#"
                  aria-expanded="false">
                  <span className="rounded-3">
                    <i className="ti ti-chart-pie" />
                  </span>
                  <span className="hide-menu">Charts</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a
                      href="./main/chart-apex-line.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Line Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/chart-apex-area.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Area Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/chart-apex-bar.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Bar Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/chart-apex-pie.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Pie Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/chart-apex-radial.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Radial Chart</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a
                      href="./main/chart-apex-radar.html"
                      className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Radar Chart</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* ============================= */}
              {/* Icons */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Icons</span>
              </li>
              {/* =================== */}
              {/* Tabler Icon */}
              {/* =================== */}
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow"
                  href="#"
                  aria-expanded="false">
                  <span className="rounded-3">
                    <i className="ti ti-archive" />
                  </span>
                  <span className="hide-menu">Icon</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="./main/icon-tabler.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Tabler Icon</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="./main/icon-solar.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Solar Icon</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* multi level */}
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow"
                  href="#"
                  aria-expanded="false">
                  <span className="rounded-3">
                    <iconify-icon
                      icon="solar:airbuds-case-minimalistic-line-duotone"
                      className="ti"
                    />
                  </span>
                  <span className="hide-menu">Multi DD</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="./docs/index.html" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Documentation</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Page 1</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link has-arrow">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Page 2</span>
                    </a>
                    <ul aria-expanded="false" className="collapse second-level">
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Page 2.1</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Page 2.2</span>
                        </a>
                      </li>
                      <li className="sidebar-item">
                        <a href="#" className="sidebar-link">
                          <i className="ti ti-circle" />
                          <span className="hide-menu">Page 2.3</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i className="ti ti-circle" />
                      <span className="hide-menu">Page 3</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </aside>
    </>
  );
}

export default Header;
