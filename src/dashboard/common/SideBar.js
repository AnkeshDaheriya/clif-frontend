import React from "react";
import "../assets/sidebar.css";

const SideBar = () => {
  return (
    <aside className="left-sidebar">
      <div className="sidebar-wrapper">
        {/* Logo Section */}
        <div className="brand-logo d-flex align-items-center p-2">
          <a href="./main/index.html" className="logo-container p-2">
            <img
              src="./images/logo.png"
              className="logo-img"
              alt="Logo-Dark"
            />
          </a>
          <a
            href="#"
            className="sidebar-toggler d-xl-none ms-auto">
            <i className="fas fa-times"></i>
          </a>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <ul className="nav-list list-unstyled d-flex flex-column gap-3">
            {[
              { icon: "fas fa-tachometer-alt", text: "Dashboard", link: "/dashboard" },
              { icon: "fas fa-chart-bar", text: "Skill Assessment", link: "/skillassessment" },
              { icon: "fas fa-road", text: "Career Path", link: "/mile-stone1" },
              { icon: "fas fa-folder-open", text: "Portfolio", link: "/main/index3.html" }, // Updated icon
              { icon: "fas fa-user", text: "Mentor", link: "/mentor" }, // Updated icon
              // { icon: "fas fa-road", text: "Career Path", link: "/careerpath" },
              { icon: "fas fa-briefcase", text: "Jobs", link: "/jobs" },
              { icon: "fas fa-graduation-cap", text: "Learn", link: "/learn" },
              { icon: "fas fa-file-alt", text: "Resume & Letter", link: "/main/index6.html" },
              // { icon: "fas fa-users", text: "Groups", link: "/groups" },
              { icon: "fas fa-user", text: "Profile", link: "/profile" },
              { icon: "fas fa-cog", text: "Settings", link: "/settings" },
              { icon: "fas fa-question-circle", text: "Help & Support", link: "/helpcenter" }
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={item.link}>
                  <i className={`nav-icon ${item.icon}`}></i>
                  <span className="nav-text">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile Section */}
        <div className="profile-sections">
          <div className="d-flex align-items-center gap-3 p-3">
            <div className="profile-image">
              <img
                src="./assets/images/profile/user-1.jpg"
                className="rounded-circle"
                alt="user profile"
              />
            </div>
            <div className="profile-info">
              <h6 className="mb-0">Mathew</h6>
              <span className="text-muted">Designer</span>
            </div>
            <button
              className="logout-btn ms-auto"
              type="button"
              aria-label="logout"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="logout">
              <i className="fas fa-power-off"></i>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;