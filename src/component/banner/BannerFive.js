import React from "react";
import { Link } from "react-router-dom";
import FormOne from "../contact/FormOne";

const BannerFive = () => {
  return (
    <div
      className="banner banner-style-5"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/images/banner/Gemini_Generated_3.jpeg"
          })`,
        marginTop: "-20px",
      }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-7">
            <div className="banner-content">
              <h1 className="title" style={{ paddingTop: "30px", }}>
                Unleash Your Career With CLIF AI’s Guided Learning & Mentorship
              </h1>
              <div>
                <Link
                  to={process.env.PUBLIC_URL + "/project-grid-one"}
                  className="axil-btn btn-fill-white  btn-large" style={{ color: "#6600CC" }} >
                  Explore CLIF AI
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-xl-5">
            <div className="banner-form" style={{ marginTop: "-70px" }}>
              <div className="contact-form-box shadow-box">
                <h5 className="title">
                  Transform Your Career Now <br />
                  Need Something Quick?
                </h5>

                <FormOne />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerFive;
