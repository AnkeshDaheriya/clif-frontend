import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWikipediaW,
  FaEnvelopeOpen,
} from "react-icons/fa";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from "../../utils";

const getServiceData = ServiceData;

const FooterOne = ({ parentClass }) => {
  return (
    <footer className={`footer-area ${parentClass}`}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-social-link">
            <ul className="list-unstyled">
              <li>
                <Link to="https://facebook.com/">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to="https://twitter.com/">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="https://www.pinterest.com/">
                  <FaPinterestP />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/">
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link to="https://www.wikipedia.org/">
                  <FaWikipediaW />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-main">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="footer-widget border-end">
                <div className="footer-newsletter">
                  <h2 className="title">Subscribe for Exclusive Updates!</h2>
                  <p>
                    Be the first to know about new opportunities, career advice,
                    and much more, by signing up for our newsletter! 21) Under
                    Services add the following link
                  </p>
                  <form>
                    <div className="input-group">
                      <span className="mail-icon">
                        <FaEnvelopeOpen />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                      />
                      <button className="subscribe-btn" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6 className="widget-title">Services</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        {getServiceData.slice(0, 6).map((data, index) => (
                          <li key={index}>
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                `/service-details/${slugify(data.title)}`
                              }>
                              {data.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Resourses</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/blog-grid"}>
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/case-study"}>
                            Mentors Pool
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Support</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/contact"}>
                            Contact
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/terms-use"}>
                            Terms of Use
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="botum">
                    <Link
                      to={process.env.PUBLIC_URL + "/project-grid-one"}
                      className="axil-btn btn-fill-white ">
                      <i className="fa fa-android"></i> Get our android app
                    </Link>
                  </div>
                  <div className="botum">
                    <Link
                      to={process.env.PUBLIC_URL + "/project-grid-one"}
                      className="axil-btn btn-fill-white ">
                      <i className="fa fa-apple"></i> Get our ios app
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <span className="copyright-text">
                  © {new Date().getFullYear()}. All rights reserved by{" "}
                  <Link to={process.env.PUBLIC_URL + "/"}> CLIF.AI </Link>.
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-link">
                <ul className="list-unstyled">
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/terms-use"}>
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
