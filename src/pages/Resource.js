import React from "react";
import { Link } from "react-router-dom";
import HeaderFour from "../common/header/HeaderFour";
import FooterOne from "../common/footer/FooterOne";
import ResourceOne from "../elements/breadcrumb/ResourceOne";

function Resource() {
  return (
    <>
      <main className="main-wrapper">
        <HeaderFour />
        <ResourceOne title="Resources" page="Resources" />
        <div className="section section-padding">
          <div className="container">
            <h4>
              <b>Search</b>
            </h4>
            <div class="search-box">
              <input type="text" placeholder="Search here..." />
              <i class="fa fa-search"></i>
            </div>
          </div>
        </div>
        <FooterOne />
      </main>
    </>
  );
}
export default Resource;
