"use client";
import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import TopBar from "./TopBar";
import Link from "next/link";
import { TStore } from "@/types/Store";

type Props = { storeDetails: TStore };

const Header = ({ storeDetails }: Props) => {
  return (
    <section
      className="main-header navbar-light header-sticky header-sticky-smart"
      style={{ position: "sticky", top: 0, zIndex: 1200 }}
    >
      <div className=" bg-white">
        <div className="container container-xxl">
          <nav className="navbar navbar-expand-xl px-0 py-2 py-xl-0 d-block">
            <div className="d-none d-xl-block">
              <div className="row align-items-center">
                <div className="col-2">
                  <a
                    className="navbar-brand  mx-xxl-10 d-inline-block py-0"
                    href="index-2.html"
                  >
                    {/* <img src="logo/logo.png" alt="Furnitor" /> */}
                    {storeDetails?.siteName || ""}
                  </a>
                </div>
                <Navigation storeDetails={storeDetails} />

                <div className="col-2">
                  <ul className="navbar-nav flex-row justify-content-xl-end d-flex flex-wrap text-body py-0 navbar-right">
                    <li className="nav-item">
                      <a className="nav-link pr-3 py-0" href="#">
                        <i className="far fa-user-alt"></i>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link position-relative px-3 py-0"
                        href="#"
                      >
                        <i className="far fa-heart"></i>
                        <span className="position-absolute number">0</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link position-relative px-3 menu-cart py-0"
                        href="#"
                        data-canvas="true"
                        data-canvas-options='{"container":".cart-canvas"}'
                      >
                        <i className="far fa-shopping-basket"></i>
                        <span className="position-absolute number">0</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-block d-xl-none">
              <div className="d-flex align-items-center">
                <button
                  className="navbar-toggler border-0 px-0 canvas-toggle"
                  type="button"
                  data-canvas="true"
                  data-canvas-options='{"width":"250px","container":".sidenav"}'
                >
                  <span className="fs-24 toggle-icon"></span>
                </button>
                <div className="mx-auto">
                  <a
                    className="navbar-brand d-inline-block mr-0 fw-bolder font-extrabold"
                    href="index-2.html"
                  >
                    {/* <img src="images/logo.png" alt="Furnitor" /> */}{" "}
                    {storeDetails?.siteName || ""}
                  </a>
                </div>
                <a
                  href="#search-popup"
                  data-gtf-mfp="true"
                  data-mfp-options='{"type":"inline","focus": "#keyword","mainClass": "mfp-search-form mfp-move-from-top mfp-align-top"}'
                  className="nav-search d-flex align-items-center"
                >
                  <i className="far fa-search"></i>
                  <span className="d-none d-xl-inline-block ml-2 font-weight-500">
                    Search
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
