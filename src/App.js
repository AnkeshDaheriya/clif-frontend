import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Correct import
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

// Import your components/pages
import DigitalAgency from "./pages/DigitalAgency";
import CreativeAgency from "./pages/CreativeAgency";
import PersonalPortfolio from "./pages/PersonalPortfolio";
import HomeStartup from "./pages/HomeStartup";
import CorporateAgency from "./pages/CorporateAgency";
import BlogGridView from "./pages/BlogGrid";
import BlogCategory from "./pages/Category";
import BlogArchive from "./pages/Archive";
import BlogDetails from "./pages/BlogDetails";
import ServiceOne from "./pages/ServiceOne";
import ServiceTwo from "./pages/ServiceTwo";
import ServiceDetails from "./pages/ServiceDetails";
import ProjectGridOne from "./pages/ProjectGridOne";
import ProjectGridTwo from "./pages/ProjectGridTwo";
import ProjectGridThree from "./pages/ProjectGridThree";
import ProjectGridFour from "./pages/ProjectGridFour";
import ProjectGridFive from "./pages/ProjectGridFive";
import ProjectDetails from "./pages/ProjectDetails";
import AboutUs from "./pages/AboutUs";
import OurOffice from "./pages/OurOffice";
import OurClients from "./pages/OurClients";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import CaseStudy from "./pages/CaseStudy";
import CaseDetails from "./pages/CaseStudyDetails";
import Testimonials from "./pages/Testimonials";
import PricingTable from "./pages/PricingTable";
import Typography from "./pages/Typography";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/404";
import ComingSoon from "./pages/ComingSoon";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Resource from "./pages/Resource";
import Dashboard from "./dashboard/pages/Dashboard";
// import CareerPath from "./dashboard/pages/CareerPath";
import "./assets/scss/app.scss";
import SkillAssessment from "./dashboard/pages/SkillAssessment";
import MileStone1 from "./milstones/MileStone1";
import CareerProgress from "./careerGrowth/CareerProgress";
import Mentor from "./dashboard/pages/Mentor";
import Profile from "./dashboard/pages/Profile";
// import Groups from "./dashboard/pages/Groups";
import Learn from "./dashboard/pages/Learn";
import Jobs from "./dashboard/pages/Jobs";
import HelpCenter from "./dashboard/pages/HelpCenter";
import Settings  from "./dashboard/pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      {/* Use BrowserRouter as Router */}
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<CorporateAgency />} />
          <Route path="/digital-agency" element={<DigitalAgency />} />
          <Route path="/creative-agency" element={<CreativeAgency />} />
          <Route path="/personal-portfolio" element={<PersonalPortfolio />} />
          <Route path="/home-startup" element={<HomeStartup />} />
          <Route path="/blog-grid" element={<BlogGridView />} />
          <Route path="/category/:slug" element={<BlogCategory />} />
          <Route path="/archive/:slug" element={<BlogArchive />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
          <Route path="/service-one" element={<ServiceOne />} />
          <Route path="/service-two" element={<ServiceTwo />} />
          <Route path="/service-details/:slug" element={<ServiceDetails />} />
          <Route path="/project-grid-one" element={<ProjectGridOne />} />
          <Route path="/project-grid-two" element={<ProjectGridTwo />} />
          <Route path="/project-grid-three" element={<ProjectGridThree />} />
          <Route path="/project-width-one" element={<ProjectGridFour />} />
          <Route path="/project-width-two" element={<ProjectGridFive />} />
          <Route path="/project-details/:slug" element={<ProjectDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-office" element={<OurOffice />} />
          <Route path="/our-clients" element={<OurClients />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-details/:slug" element={<TeamDetails />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/case-details/:slug" element={<CaseDetails />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pricing-table" element={<PricingTable />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-use" element={<TermsOfUse />} />
          <Route path="/resource" element={<Resource />} />
          {/* dashboard routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/skillassessment" element={<SkillAssessment />} />
          {/* <Route path="/careerpath" element={<CareerPath />} /> */}
          <Route path="/mile-stone1" element={<MileStone1 />} />
          <Route path="/career-growth" element={<CareerProgress />} />
          <Route path="/career-growth/:id" element={<CareerProgress />} />
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/groups" element={<Groups />} /> */}
          <Route path="/learn" element={<Learn />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
