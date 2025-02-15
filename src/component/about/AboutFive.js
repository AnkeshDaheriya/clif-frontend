import React from "react";
import { Link } from "react-router-dom";

const AboutFive = () => {
  return (
    <div className="section-padding-equal">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-team">
              <div className="thumbnail">
                <img
                  src={process.env.PUBLIC_URL + "/images/about/about-2.png"}
                  alt="thumbnail"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-team">
              <div className="section-heading heading-left">
                <span className="subtitle">Meet the team</span>
                <h2>Our leadership</h2>
                <p>
                  Our executives lead by example and guide us to accomplish
                  great things every day. With experience across industries,
                  their breadth and depth of expertise enable us to solve
                  problems, realize our vision, and better serve our
                  customers—and each other.
                </p>
                <Link to="#" className="axil-btn btn-large btn-fill-primary">
                  learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFive;
