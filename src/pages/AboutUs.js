import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import AboutProp from "../component/casestudy/AboutProp";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
// import ProcessOne from '../component/process/ProcessOne';
import BrandOne from "../component/brand/BrandOne";
import AboutFour from "../component/about/AboutFour";
import AboutFive from "../component/about/AboutFive";
import Tilty from "react-tilty";

const AboutUs = () => {
  return (
    <>
      <SEO title="About us" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BcrumbBannerOne
          title="Our mission"
          paragraph="           
              <h5>
                Inspire and empower the tech workforce to achieve their goals
              </h5>
              <p> We’re dreaming big, but our work is all about the details. After
              all, we get to a better tech workforce one skill, one process
              improvement, one technologist at a time. Find out how we're
              solving tech workforce challenges, boosting careers, and creating
              opportunity.</p>"
          styleClass="thumbnail-4"
          mainThumb="/images/banner/banner-thumb-3.png"
        />

        <AboutFour />
        <BrandOne />
        {/* <AboutFive /> */}
        <div className="pt--250 pt_lg--200 pt_md--100 pt_sm--80 case-study-page-area">
          <div className="container">
            <AboutProp />
          </div>
        </div>
        {/* <ProcessOne /> */}
        <CtaLayoutOne />
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default AboutUs;
