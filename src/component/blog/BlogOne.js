import React from "react";
import SectionTitle from "../../elements/section-title/SectionTitle";
import BlogListOne from "../../component/blog/BlogListOne";

const BlogOne = () => {
  return (
    <div className="section section-padding-equal">
      <div className="container">
        <SectionTitle
          subtitle="What's Going On"
          title="Recently Onboarded Mentors"
          description="With diverse backgrounds and expertise, our newly appointed mentors are here to help you unlock your full potential and accelerate your career growth."
          textAlignment=""
          textColor=""
        />
        <div className="row g-0">
          <BlogListOne colSize="col-xl-6" itemShow="2" />
        </div>
      </div>
      <ul className="shape-group-1 list-unstyled">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"}
            alt="bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-1.png"}
            alt="bubble"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-2.png"}
            alt="bubble"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"}
            alt="bubble"
          />
        </li>
      </ul>
    </div>
  );
};

export default BlogOne;
