import React from "react";
import Navbar from "../Layout/Navbar";
import Sidebar from "../Layout/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../Layout/Footer";

function MainLayout() {
  return (
    <>
      <div>
        {/* loader starts*/}
        <div className="loader-wrapper">
          <div className="theme-loader">
            <div className="loader-p" />
          </div>
        </div>
        {/* loader ends*/}
        {/* tap on top starts*/}
        <div className="tap-top">
          <i data-feather="chevrons-up" />
        </div>
        {/* tap on tap ends*/}
        {/* page-wrapper Start*/}
        <div className="page-wrapper compact-wrapper" id="pageWrapper" />

        <Navbar />
        <div class="page-body-wrapper">
          <Sidebar />
          <div class="page-body">
            <Outlet />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainLayout;
