import React from "react";

type Props = {};

const MobileNavigation = (props: Props) => {
  return (
    <div className="sidenav canvas-sidebar bg-white">
      <div className="canvas-overlay"></div>
      <div className="pt-5 pb-7 card border-0 h-100">
        <div className="d-flex align-items-center card-header border-0 py-0 pl-8 pr-7 mb-9 bg-transparent">
          <a href="index-2.html" className="d-block w-52px">
            <img src="/images/short_logo.png" alt="Furnitor" />
          </a>
          <span className="canvas-close d-inline-block text-right fs-24 ml-auto lh-1 text-primary">
            <i className="fal fa-times"></i>
          </span>
        </div>
        <div className="overflow-y-auto pb-6 pl-8 pr-7 card-body pt-0">
          <ul className="navbar-nav main-menu px-0">
            <li
              aria-haspopup="true"
              aria-expanded="false"
              className="nav-item dropdown py-1 px-0"
            >
              <a
                className="nav-link dropdown-toggle p-0"
                href="index-2.html"
                data-toggle="dropdown"
              >
                Home
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu pt-3 pb-0 pb-xl-3 x-animated x-fadeInUp">
                <li className="dropdown-item">
                  <a className="dropdown-link" href="home-01.html">
                    {" "}
                    Home 01{" "}
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="home-02.html">
                    {" "}
                    Home 02{" "}
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="home-03.html">
                    {" "}
                    Home 03{" "}
                  </a>
                </li>
                <li className="dropdown-item active">
                  <a className="dropdown-link" href="home-04.html">
                    {" "}
                    Home 04{" "}
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="home-05.html">
                    {" "}
                    Home 05{" "}
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="home-06.html">
                    {" "}
                    Home 06{" "}
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="home-07.html">
                    {" "}
                    Home 07{" "}
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="home-08.html">
                    {" "}
                    Home 08{" "}
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="home-09.html">
                    {" "}
                    Home 09{" "}
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="home-10.html">
                    {" "}
                    Home 10{" "}
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="home-11.html">
                    {" "}
                    Home 11{" "}
                  </a>
                </li>
                <li className="dropdown-item">
                  <a className="dropdown-link" href="home-12.html">
                    {" "}
                    Home 12{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li
              aria-haspopup="true"
              aria-expanded="false"
              className="nav-item dropdown py-1 px-0"
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
                  <a className="dropdown-link" href="product-page-01.html">
                    Product Layout <sup>V1</sup>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="dropdown-link" href="product-page-02.html">
                    Product Layout <sup>V2</sup>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="dropdown-link" href="product-page-03.html">
                    Product Layout <sup>V3</sup>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="dropdown-link" href="product-page-04.html">
                    Product Layout <sup>V4</sup>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="dropdown-link" href="product-page-05.html">
                    Product Layout <sup>V5</sup>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="dropdown-link" href="product-page-06.html">
                    Product Layout <sup>V6</sup>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="dropdown-link" href="product-page-07.html">
                    Product Layout <sup>V7</sup>
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="dropdown-link" href="product-page-08.html">
                    Product Layout <sup>V8</sup>
                  </a>
                </div>

                <h4 className="dropdown-header text-dark fs-16 my-3">
                  Product Type
                </h4>

                <div className="dropdown-item">
                  <a className="dropdown-link" href="product-page-03.html">
                    Product Simple
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="dropdown-link" href="product-page-05.html">
                    Product Variable (Color/Size/etc.)
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="dropdown-link" href="product-page-07.html">
                    Product Time Limit
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="dropdown-link" href="product-page-06.html">
                    Product Grouped
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="dropdown-link" href="product-page-09.html">
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
                    {" "}
                    Compare{" "}
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
                    {" "}
                    Wishlist{" "}
                  </a>
                </div>
                <div className="dropdown-item">
                  <a className="dropdown-link" href="checkout.html">
                    {" "}
                    Checkout{" "}
                  </a>
                </div>
              </div>
            </li>
            <li
              aria-haspopup="true"
              aria-expanded="false"
              className="nav-item dropdown py-1 px-0"
            >
              <a
                className="nav-link dropdown-toggle p-0"
                href="#"
                data-toggle="dropdown"
              >
                Pages
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu pt-3 pb-0 pb-xl-3 x-animated x-fadeInUp">
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
                    {" "}
                    Service{" "}
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
              className="nav-item dropdown py-1 px-0"
            >
              <a
                className="nav-link dropdown-toggle p-0"
                href="#"
                data-toggle="dropdown"
              >
                Contact
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu pt-3 pb-0 pb-xl-3 x-animated x-fadeInUp">
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
              className="nav-item dropdown py-1 px-0"
            >
              <a
                className="nav-link dropdown-toggle p-0"
                href="#"
                data-toggle="dropdown"
              >
                Blog
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu pt-3 pb-0 pb-xl-3 x-animated x-fadeInUp">
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
              className="nav-item dropdown py-1 px-0"
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
                        <span className="d-block lh-15">Documentation</span>
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
                          <span className="badge badge-danger ml-2">50+</span>
                        </span>
                        <small className="d-block">Flexible components</small>
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
        </div>
        <div className="card-footer bg-transparent border-0 mt-auto pl-8 pr-7 pb-0 pt-4">
          <ul className="list-inline d-flex align-items-center mb-3">
            <li className="list-inline-item mr-4">
              <a href="#" className="fs-20 lh-1">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li className="list-inline-item mr-4">
              <a href="#" className="fs-20 lh-1">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item mr-4">
              <a href="#" className="fs-20 lh-1">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="fs-20 lh-1">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
          <p className="mb-0 text-gray">
            © 2020 Furnitor.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
