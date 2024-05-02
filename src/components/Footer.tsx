import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="pt-13 pb-4 footer bg-color-2">
      <div className="container container-xxl">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-6 mb-lg-0">
            <h3 className="fs-14 mb-3 text-uppercase letter-spacing-05">
              menu
            </h3>
            <ul className="list-unstyled mb-0">
              <li className="py-0">
                <a
                  href="#"
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Seatting
                </a>{" "}
              </li>
              <li className="py-0">
                <a
                  href="#"
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Tables
                </a>{" "}
              </li>
              <li className="py-0">
                <a
                  href="#"
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Decoration
                </a>{" "}
              </li>
              <li className="py-0">
                <a
                  href="#"
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Gift Ideas
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-6 mb-lg-0">
            <h3 className="fs-14 mb-3 text-uppercase letter-spacing-05">
              about
            </h3>
            <ul className="list-unstyled mb-0">
              <li className="py-0">
                <a
                  href="#"
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Contact Us
                </a>{" "}
              </li>
              <li className="py-0">
                <a
                  href="#"
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Contributiors
                </a>{" "}
              </li>
              <li className="py-0">
                <a
                  href="#"
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Privacy
                </a>{" "}
              </li>
              <li className="py-0">
                <a
                  href="#"
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Sponsors
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-6 mb-lg-0">
            <h3 className="fs-14 mb-3 text-uppercase letter-spacing-05">
              follow us
            </h3>
            <ul className="list-unstyled mb-0">
              <li className="py-0">
                <a
                  href="#"
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Facebook
                </a>{" "}
              </li>
              <li className="py-0">
                <a
                  href="#"
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Pinterest
                </a>{" "}
              </li>
              <li className="py-0">
                <a
                  href="#"
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Instagram
                </a>{" "}
              </li>
              <li className="py-0">
                <a
                  href="#"
                  className="text-gray hover-primary lh-2 font-weight-500"
                >
                  Twitter
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 mb-6 mb-lg-0">
            <h3 className="fs-14 mb-3 text-uppercase letter-spacing-05">
              newsletter
            </h3>
            <form>
              <div className="input-group position-relative">
                <input
                  type="text"
                  className="form-control border-top-0 border-left-0 border-right-0 px-0 border-2x bg-transparent"
                  placeholder="Email Address"
                />
                <div className="input-group-append fs-14 position-absolute pos-fixed-right-center z-index-2">
                  <button className="bg-transparent border-0 outline-none">
                    <i className="far fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-2 mt-md-7 row align-items-center">
          <p className="col-md-auto mb-4 mb-md-0 text-gray lh-1 fs-14 font-weight-500">
            © 2021 Furnitor. All rights reserved.
          </p>
          <ul className="list-inline mb-0 col-md-6 ml-auto text-md-right">
            <li className="list-inline-item">
              <a href="#">
                <img src="/images/card_01.png" alt="Amex" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <img src="/images/card_02.png" alt="G-Pay" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <img src="/images/card_03.png" alt="Master Card" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <img src="/images/card_04.png" alt="Paypal" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <img src="/images/card_05.png" alt="D-Pay" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <img src="/images/card_06.png" alt="V-Card" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
