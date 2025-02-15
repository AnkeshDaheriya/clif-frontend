import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const AboutFour = () => {
  return (
    <div className="section section-padding case-study-featured-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="case-study-featured-thumb text-start">
              <img
                src={process.env.PUBLIC_URL + "/images/others/case-study-4.png"}
                alt="travel"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="case-study-featured">
              <div className="section-heading heading-left">
                <h4 className="title h2">Our story</h4>
                <h5 className="">
                  A long time ago, in a classroom far, far away...
                </h5>
                <p>
                  From humble beginnings teaching tech skills in classrooms to
                  becoming an end-to-end tech workforce development solution,
                  our journey has always revolved around delivering what our
                  customers need to solve their most crucial problems. And this
                  isn’t even our final form.
                </p>
                <Link to="#" className="axil-btn btn-fill-primary btn-large">
                  learn More
                </Link>
              </div>
              <div className="case-study-counterup">
                <div className="single-counterup">
                  <h2 className="count-number">
                    <TrackVisibility once>
                      {({ isVisible }) => (
                        <span className="number count">
                          {isVisible ? <CountUp end="10" duration={1} /> : null}
                        </span>
                      )}
                    </TrackVisibility>
                    <span className="symbol">+</span>
                  </h2>
                  <span className="counter-title">Years on the market</span>
                </div>
                <div className="single-counterup">
                  <h2 className="count-number">
                    <TrackVisibility once>
                      {({ isVisible }) => (
                        <span className="number count">
                          {isVisible ? (
                            <CountUp end="1500" duration={1} />
                          ) : null}
                        </span>
                      )}
                    </TrackVisibility>
                    <span className="symbol">+</span>
                  </h2>
                  <span className="counter-title">
                    Projects delivered so far
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
