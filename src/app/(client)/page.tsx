import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <section className="overflow-hidden">
        <div
          className="slick-slider custom-slider-02 dots-white"
          data-slick-options='{"slidesToShow": 1,"infinite":true,"autoplay":true,"dots":false,"arrows":false,"fade":true}'
        >
          <div className="box">
            <div
              className="d-flex flex-column justify-content-center bg-img-cover-center vh-100 custom-height-sm"
              style={{ backgroundImage: "url('/images/bg-home-04.jpg')" }}
            >
              <div className="d-flex flex-column h-100 justify-content-end pb-10 pb-lg-12">
                <div className="container container-xxl">
                  <p
                    className="text-white font-weight-bold fs-20 mb-3"
                    data-animate="fadeInUp"
                  >
                    Modern Design
                  </p>
                  <h1
                    className="mb-7 fs-60 fs-xxl-100 lh-1 text-white"
                    data-animate="fadeInUp"
                  >
                    Sweet Home
                  </h1>
                  <a
                    href="#"
                    className="btn btn-white text-uppercase letter-spacing-05"
                    data-animate="fadeInUp"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div
              className="d-flex flex-column justify-content-center bg-img-cover-center vh-100 custom-height-sm"
              style={{ backgroundImage: "url('/images/bg-home-04.jpg')" }}
            >
              <div className="d-flex flex-column h-100 justify-content-end pb-10 pb-lg-12">
                <div className="container container-xxl">
                  <p
                    className="text-white font-weight-bold fs-20 mb-3"
                    data-animate="fadeInUp"
                  >
                    Modern Design
                  </p>
                  <h2
                    className="mb-7 fs-60 fs-xxl-100 lh-1 text-white"
                    data-animate="fadeInUp"
                  >
                    Sweet Home
                  </h2>
                  <a
                    href="#"
                    className="btn btn-white text-uppercase letter-spacing-05"
                    data-animate="fadeInUp"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div
              className="d-flex flex-column justify-content-center bg-img-cover-center vh-100 custom-height-sm"
              style={{ backgroundImage: "url('/images/bg-home-04.jpg')" }}
            >
              <div className="d-flex flex-column h-100 justify-content-end pb-10 pb-lg-12">
                <div className="container container-xxl">
                  <p
                    className="text-white font-weight-bold fs-20 mb-3"
                    data-animate="fadeInUp"
                  >
                    Modern Design
                  </p>
                  <h2
                    className="mb-7 fs-60 fs-xxl-100 lh-1 text-white"
                    data-animate="fadeInUp"
                  >
                    Sweet Home
                  </h2>
                  <a
                    href="#"
                    className="btn btn-white text-uppercase letter-spacing-05"
                    data-animate="fadeInUp"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="container-fluid px-6">
          <div
            className="slick-slider"
            data-slick-options='{"slidesToShow": 4, "autoplay":true,"dots":true,"arrows":false,"responsive":[{"breakpoint": 1200,"settings": {"slidesToShow":4}},{"breakpoint": 992,"settings": {"slidesToShow":3}},{"breakpoint": 768,"settings": {"slidesToShow": 2}},{"breakpoint": 576,"settings": {"slidesToShow": 1}}]}'
          >
            <div className="box" data-animate="fadeInUp">
              <div className="card border-0">
                <img src="/images/c_07.jpg" alt="Chairs" className="card-img" />
                <div className="card-img-overlay d-inline-flex flex-column px-6 py-4">
                  <h3 className="card-title fs-28">Chairs</h3>
                  <div className="mt-auto">
                    <a
                      href="shop-page-03.html"
                      className="text-uppercase fs-14 letter-spacing-05 border-bottom border-light-dark border-hover-primary font-weight-bold"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box" data-animate="fadeInUp">
              <div className="card border-0">
                <img
                  src="/images/c_08.jpg"
                  alt="Accessories"
                  className="card-img"
                />
                <div className="card-img-overlay d-inline-flex flex-column px-6 py-4">
                  <h3 className="card-title fs-28">Accessories</h3>
                  <div className="mt-auto">
                    <a
                      href="shop-page-03.html"
                      className="text-uppercase fs-14 letter-spacing-05 border-bottom border-light-dark border-hover-primary font-weight-bold"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box" data-animate="fadeInUp">
              <div className="card border-0">
                <img src="/images/c_09.jpg" alt="Tables" className="card-img" />
                <div className="card-img-overlay d-inline-flex flex-column px-6 py-4">
                  <h3 className="card-title fs-28">Tables</h3>
                  <div className="mt-auto">
                    <a
                      href="shop-page-03.html"
                      className="text-uppercase fs-14 letter-spacing-05 border-bottom border-light-dark border-hover-primary font-weight-bold"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box" data-animate="fadeInUp">
              <div className="card border-0">
                <img src="/images/c_10.jpg" alt="Sofa" className="card-img" />
                <div className="card-img-overlay d-inline-flex flex-column px-6 py-4">
                  <h3 className="card-title fs-28">Sofa</h3>
                  <div className="mt-auto">
                    <a
                      href="shop-page-03.html"
                      className="text-uppercase fs-14 letter-spacing-05 border-bottom border-light-dark border-hover-primary font-weight-bold"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="box" data-animate="fadeInUp">
              <div className="card border-0">
                <img src="/images/c_07.jpg" alt="Chairs" className="card-img" />
                <div className="card-img-overlay d-inline-flex flex-column px-6 py-4">
                  <h3 className="card-title fs-28">Chairs</h3>
                  <div className="mt-auto">
                    <a
                      href="shop-page-03.html"
                      className="text-uppercase fs-14 letter-spacing-05 border-bottom border-light-dark border-hover-primary font-weight-bold"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-11 pt-lg-12 pb-lg-10" data-animated-id="3">
        <div className="container">
          <h2 className="mb-9 text-center fs-30 fs-md-40">Essenstial Items</h2>
          <div className="row overflow-hidden">
            <div
              className="col-sm-6 col-lg-3 mb-8 fadeInUp animated"
              data-animate="fadeInUp"
            >
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: "url('/images/product-19.jpg')" }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"
                  ></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to cart"
                    >
                      <i className="far fa-shopping-basket"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to favourite"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to compare"
                    >
                      <i className="far fa-random"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle border"
                      data-original-title="Preview"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-12 d-block font-weight-500"
                    >
                      Table
                    </a>
                    <a href="#" className="font-weight-bold mt-1 d-block">
                      Bow Chair
                    </a>
                  </div>
                  <p className="text-primary mb-0 font-weight-500">$1390.00</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 mb-8 fadeInUp animated"
              data-animate="fadeInUp"
            >
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: "url('/images/product-02.jpg')" }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"
                  ></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to cart"
                    >
                      <i className="far fa-shopping-basket"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to favourite"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to compare"
                    >
                      <i className="far fa-random"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle border"
                      data-original-title="Preview"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-12 d-block font-weight-500"
                    >
                      chair
                    </a>
                    <a href="#" className="font-weight-bold mt-1 d-block">
                      Potato Chair
                    </a>
                  </div>
                  <p className="text-primary mb-0 font-weight-500">$1390.00</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 mb-8 fadeInUp animated"
              data-animate="fadeInUp"
            >
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: "url('/images/product-10.jpg')" }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"
                  ></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to cart"
                    >
                      <i className="far fa-shopping-basket"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to favourite"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to compare"
                    >
                      <i className="far fa-random"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle border"
                      data-original-title="Preview"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-12 d-block font-weight-500"
                    >
                      decor
                    </a>
                    <a href="#" className="font-weight-bold mt-1 d-block">
                      Golden Clock
                    </a>
                  </div>
                  <p className="text-primary mb-0 font-weight-500">$1390.00</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 mb-8 fadeInUp animated"
              data-animate="fadeInUp"
            >
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: "url('/images/product-04.jpg')" }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"
                  ></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to cart"
                    >
                      <i className="far fa-shopping-basket"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to favourite"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to compare"
                    >
                      <i className="far fa-random"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle border"
                      data-original-title="Preview"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-12 d-block font-weight-500"
                    >
                      Table
                    </a>
                    <a href="#" className="font-weight-bold mt-1 d-block">
                      Piper Bar
                    </a>
                  </div>
                  <p className="text-primary mb-0 font-weight-500">$1390.00</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 mb-8 fadeInUp animated"
              data-animate="fadeInUp"
            >
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: "url('/images/product-16.jpg')" }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"
                  ></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to cart"
                    >
                      <i className="far fa-shopping-basket"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to favourite"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to compare"
                    >
                      <i className="far fa-random"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle border"
                      data-original-title="Preview"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-12 d-block font-weight-500"
                    >
                      table
                    </a>
                    <a href="#" className="font-weight-bold mt-1 d-block">
                      Bow Chair
                    </a>
                  </div>
                  <p className="text-primary mb-0 font-weight-500">$1390.00</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 mb-8 fadeInUp animated"
              data-animate="fadeInUp"
            >
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: "url('/images/product-04.jpg')" }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"
                  ></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to cart"
                    >
                      <i className="far fa-shopping-basket"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to favourite"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to compare"
                    >
                      <i className="far fa-random"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle border"
                      data-original-title="Preview"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-12 d-block font-weight-500"
                    >
                      table
                    </a>
                    <a href="#" className="font-weight-bold mt-1 d-block">
                      Bow Chair
                    </a>
                  </div>
                  <p className="text-primary mb-0 font-weight-500">$1000.00</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 mb-8 fadeInUp animated"
              data-animate="fadeInUp"
            >
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: "url('/images/product-06.jpg')" }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"
                  ></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to cart"
                    >
                      <i className="far fa-shopping-basket"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to favourite"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to compare"
                    >
                      <i className="far fa-random"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle border"
                      data-original-title="Preview"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-12 d-block font-weight-500"
                    >
                      decor
                    </a>
                    <a href="#" className="font-weight-bold mt-1 d-block">
                      Golden Clock
                    </a>
                  </div>
                  <p className="text-primary mb-0 font-weight-500">$1390.00</p>
                </div>
              </div>
            </div>
            <div
              className="col-sm-6 col-lg-3 mb-8 fadeInUp animated"
              data-animate="fadeInUp"
            >
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: "url('/images/product-05.jpg')" }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"
                  ></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to cart"
                    >
                      <i className="far fa-shopping-basket"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to favourite"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to compare"
                    >
                      <i className="far fa-random"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle border"
                      data-original-title="Preview"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-12 d-block font-weight-500"
                    >
                      decor
                    </a>
                    <a href="#" className="font-weight-bold mt-1 d-block">
                      Golden Clock
                    </a>
                  </div>
                  <p className="text-primary mb-0 font-weight-500">$1390.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-11 pt-lg-15 pb-lg-10" data-animated-id="6">
        <div className="container">
          <h2 className="mb-9 text-center fs-30 fs-md-40">Featured Items</h2>
          <div className="row overflow-hidden">
            <div
              className="col-md-4 mb-6 fadeInUp animated"
              data-animate="fadeInUp"
            >
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{
                      backgroundImage: "url('/images/product-17_3.jpg')",
                    }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"
                  ></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to cart"
                    >
                      <i className="far fa-shopping-basket"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to favourite"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to compare"
                    >
                      <i className="far fa-random"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle border"
                      data-original-title="Preview"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-12 d-block font-weight-500"
                    >
                      Table
                    </a>
                    <a href="#" className="font-weight-bold mt-1 d-block">
                      Bow Chair
                    </a>
                  </div>
                  <p className="text-primary mb-0 font-weight-500">$1390.00</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mb-6 fadeInUp animated"
              data-animate="fadeInUp"
            >
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{
                      backgroundImage: "url('/images/product-08_1.jpg')",
                    }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"
                  ></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to cart"
                    >
                      <i className="far fa-shopping-basket"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to favourite"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to compare"
                    >
                      <i className="far fa-random"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle border"
                      data-original-title="Preview"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-12 d-block font-weight-500"
                    >
                      chair
                    </a>
                    <a href="#" className="font-weight-bold mt-1 d-block">
                      Potato Chair
                    </a>
                  </div>
                  <p className="text-primary mb-0 font-weight-500">$1390.00</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 mb-6 fadeInUp animated"
              data-animate="fadeInUp"
            >
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div
                    style={{ backgroundImage: "url('/images/product-21.jpg')" }}
                    className="card-img ratio bg-img-cover-center ratio-1-1"
                  ></div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to cart"
                    >
                      <i className="far fa-shopping-basket"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to favourite"
                    >
                      <i className="far fa-heart"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to compare"
                    >
                      <i className="far fa-random"></i>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      title=""
                      className="preview d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle border"
                      data-original-title="Preview"
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </div>
                </div>
                <div className="card-body px-0 pt-4 pb-0 d-flex align-items-end">
                  <div className="mr-auto">
                    <a
                      href="#"
                      className="text-uppercase text-muted letter-spacing-05 fs-12 d-block font-weight-500"
                    >
                      decor
                    </a>
                    <a href="#" className="font-weight-bold mt-1 d-block">
                      Golden Clock
                    </a>
                  </div>
                  <p className="text-primary mb-0 font-weight-500">$1390.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#f7f7f7" }} data-animated-id="7">
        <div className="row align-items-center no-gutters room-inspiration">
          <div className="col-lg-6 order-1 order-lg-first">
            <img src="/images/b-05.jpg" />
          </div>
          <div
            className="col-lg-6 mb-6 mb-lg-0 order-first order-lg-1 ml-auto py-8 py-lg-0 content fadeInRight animated"
            data-animate="fadeInRight"
          >
            <h2 className="fs-30 fs-md-56 mb-3">Room Inspiration</h2>
            <p className="mb-7 font-weight-500">
              We believe in crafting pieces where sustainability and style go
              hand in hand. Made from materials like recycled cashmere and
              sustainable.
            </p>
            <a
              href="shop-page-04.html"
              className="btn btn-outline-primary text-uppercase letter-spacing-05"
            >
              our journal
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
