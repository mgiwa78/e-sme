import React from "react";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import TopBar from "./TopBar";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      className="main-header navbar-light header-sticky header-sticky-smart"
      style={{ position: "sticky", width: "100vw", top: 0, zIndex: 1200 }}
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
                    <img src="images/logo.png" alt="Furnitor" />
                  </a>
                </div>
                <Navigation />

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
                    className="navbar-brand d-inline-block mr-0"
                    href="index-2.html"
                  >
                    <img src="images/logo.png" alt="Furnitor" />
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
              <div className="collapse navbar-collapse mt-3" id="primaryMenu01">
                <ul className="navbar-nav main-menu px-0 mx-xl-n4">
                  <li
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4"
                  >
                    <a
                      className="nav-link dropdown-toggle p-0"
                      href="index-2.html"
                      data-toggle="dropdown"
                    >
                      Home
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu pt-3 pb-0 pb-xl-3">
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="home-01.html">
                          Home 01
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="home-02.html">
                          Home 02
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="home-03.html">
                          Home 03
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="home-04.html">
                          Home 04
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="home-05.html">
                          Home 05
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="home-06.html">
                          Home 06
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="home-07.html">
                          Home 07
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="home-08.html">
                          Home 08
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="home-09.html">
                          Home 09
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="home-10.html">
                          Home 10
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="home-11.html">
                          Home 11
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="home-12.html">
                          Home 12
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4"
                  >
                    <a
                      className="nav-link dropdown-toggle p-0"
                      href="store.html"
                      data-toggle="dropdown"
                    >
                      Shop
                      <span className="caret"></span>
                    </a>
                    <div className="dropdown-menu p-0 dropdown-menu-listing x-animated x-fadeInUp">
                      <h4 className="dropdown-header text-dark fs-16 my-3">
                        Shop Pages
                      </h4>

                      <div className="dropdown-item">
                        <a className="dropdown-link" href="shop-page-01.html">
                          Shop Layout <sup>V1</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a className="dropdown-link" href="shop-page-02.html">
                          Shop Layout <sup>V2</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a className="dropdown-link" href="shop-page-03.html">
                          Shop Layout <sup>V3</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a className="dropdown-link" href="shop-page-04.html">
                          Shop Layout <sup>V4</sup>
                        </a>
                      </div>

                      <div className="dropdown-item">
                        <a className="dropdown-link" href="shop-page-05.html">
                          Shop Layout <sup>V5</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a className="dropdown-link" href="shop-page-06.html">
                          Shop Layout <sup>V6</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a className="dropdown-link" href="shop-page-07.html">
                          Shop Layout <sup>V7</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a className="dropdown-link" href="shop-page-08.html">
                          Shop Layout <sup>V8</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a className="dropdown-link" href="shop-page-09.html">
                          Shop Layout <sup>V9</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a className="dropdown-link" href="shop-page-10.html">
                          Shop Layout <sup>V10</sup>
                        </a>
                      </div>

                      <h4 className="dropdown-header text-dark fs-16 my-3">
                        Product Page
                      </h4>

                      <div className="dropdown-item">
                        <a
                          className="dropdown-link"
                          href="product-page-01.html"
                        >
                          Product Layout <sup>V1</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a
                          className="dropdown-link"
                          href="product-page-02.html"
                        >
                          Product Layout <sup>V2</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a
                          className="dropdown-link"
                          href="product-page-03.html"
                        >
                          Product Layout <sup>V3</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a
                          className="dropdown-link"
                          href="product-page-04.html"
                        >
                          Product Layout <sup>V4</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a
                          className="dropdown-link"
                          href="product-page-05.html"
                        >
                          Product Layout <sup>V5</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a
                          className="dropdown-link"
                          href="product-page-06.html"
                        >
                          Product Layout <sup>V6</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a
                          className="dropdown-link"
                          href="product-page-07.html"
                        >
                          Product Layout <sup>V7</sup>
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a
                          className="dropdown-link"
                          href="product-page-08.html"
                        >
                          Product Layout <sup>V8</sup>
                        </a>
                      </div>

                      <h4 className="dropdown-header text-dark fs-16 my-3">
                        Product Type
                      </h4>

                      <div className="dropdown-item">
                        <a
                          className="dropdown-link"
                          href="product-page-03.html"
                        >
                          Product Simple
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a
                          className="dropdown-link"
                          href="product-page-05.html"
                        >
                          Product Variable (Color/Size/etc.)
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a
                          className="dropdown-link"
                          href="product-page-07.html"
                        >
                          Product Time Limit
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a
                          className="dropdown-link"
                          href="product-page-06.html"
                        >
                          Product Grouped
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a
                          className="dropdown-link"
                          href="product-page-09.html"
                        >
                          Product External / Affiliate
                        </a>
                      </div>
                      <h4 className="dropdown-header text-dark fs-16 my-3">
                        Shop Page
                      </h4>

                      <div className="dropdown-item">
                        <a className="dropdown-link" href="cart.html">
                          {" "}
                          Cart{" "}
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a className="dropdown-link" href="compare.html">
                          Compare
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a className="dropdown-link" href="stores.html">
                          {" "}
                          Store{" "}
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a className="dropdown-link" href="wishlist.html">
                          Wishlist
                        </a>
                      </div>
                      <div className="dropdown-item">
                        <a className="dropdown-link" href="checkout.html">
                          Checkout
                        </a>
                      </div>
                    </div>
                  </li>
                  <li
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4"
                  >
                    <a
                      className="nav-link dropdown-toggle p-0"
                      href="#"
                      data-toggle="dropdown"
                    >
                      Pages
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu pt-3 pb-0 pb-xl-3">
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="about-us-01.html">
                          About Us 01
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="about-us-02.html">
                          About Us 02
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="faqs.html">
                          {" "}
                          FAQs{" "}
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="service.html">
                          Service
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="login-register.html">
                          Login Register
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4"
                  >
                    <a
                      className="nav-link dropdown-toggle p-0"
                      href="#"
                      data-toggle="dropdown"
                    >
                      Contact
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu pt-3 pb-0 pb-xl-3">
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="contact-01.html">
                          Contact 01
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="contact-02.html">
                          Contact 02
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4"
                  >
                    <a
                      className="nav-link dropdown-toggle p-0"
                      href="#"
                      data-toggle="dropdown"
                    >
                      Blog
                      <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu pt-3 pb-0 pb-xl-3">
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="blog-layout-01.html">
                          Blog Layout 01
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="blog-layout-02.html">
                          Blog Layout 02
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="blog-layout-03.html">
                          Blog Layout 03
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="blog-layout-04.html">
                          Blog Layout 04
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="blog-post-01.html">
                          Blog Post 01
                        </a>
                      </li>
                      <li className="dropdown-item">
                        <a className="dropdown-link" href="blog-post-02.html">
                          Blog Post 02
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="nav-item dropdown py-2 py-xl-5 px-0 px-xl-4"
                  >
                    <a
                      className="nav-link dropdown-toggle p-0"
                      href="#"
                      data-toggle="dropdown"
                    >
                      Docs
                      <span className="caret"></span>
                    </a>
                    <div className="dropdown-menu px-0 pt-3 dropdown-menu-docs x-animated x-fadeInUp">
                      <div className="dropdown-body">
                        <a
                          className="dropdown-item py-1"
                          href="docs/getting-started/dev-environment-setup.html"
                        >
                          <div className="media">
                            <div className="fs-20 mr-3">
                              <i className="fal fa-file-alt"></i>
                            </div>
                            <div className="media-body">
                              <span className="d-block lh-15">
                                Documentation
                              </span>
                              <small className="d-block">
                                Kick-start customization
                              </small>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-divider m-0"></div>
                        <a
                          className="dropdown-item py-1"
                          href="docs/content/typography.html"
                        >
                          <div className="media">
                            <div className="fs-20 mr-3">
                              <i className="fal fa-layer-group"></i>
                            </div>
                            <div className="media-body">
                              <span className="d-block lh-15">
                                UI Kit
                                <span className="badge badge-danger ml-2">
                                  50+
                                </span>
                              </span>
                              <small className="d-block">
                                Flexible components
                              </small>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-divider m-0"></div>
                        <a
                          className="dropdown-item py-1"
                          href="docs/getting-started/changelog.html"
                        >
                          <div className="media">
                            <div className="fs-20 mr-3">
                              <i className="fal fa-edit"></i>
                            </div>
                            <div className="media-body">
                              <span className="d-block lh-15">
                                Changelog
                                <span className="badge badge-success ml-2">
                                  v1.1.0
                                </span>
                              </span>
                              <small className="d-block">Regular updates</small>
                            </div>
                          </div>
                        </a>
                        <div className="dropdown-divider m-0"></div>
                        <a
                          className="dropdown-item py-1"
                          href="https://sp.g5plus.net/"
                          target="_blank"
                        >
                          <div className="media">
                            <div className="fs-20 mr-3">
                              <i className="fal fa-life-ring"></i>
                            </div>
                            <div className="media-body">
                              <span className="d-block lh-15">Support</span>
                              <small className="d-block">
                                https://sp.g5plus.net/
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav flex-row justify-content-xl-end d-flex flex-wrap text-body py-2 navbar-right">
                  <li className="nav-item">
                    <a className="nav-link pr-3" href="#">
                      <i className="far fa-user-alt"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link position-relative px-3" href="#">
                      <i className="far fa-heart"></i>
                      <span className="position-absolute number">0</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link position-relative px-3 menu-cart"
                      href="cart.html"
                    >
                      <i className="far fa-shopping-basket"></i>
                      <span className="position-absolute number">0</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
