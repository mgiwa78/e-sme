import { TProduct } from "@/types/Product";
import { TStore } from "@/types/Store";
import React from "react";

type Props = { products: Array<TProduct>; storeDetails: TStore };

const Home = ({ products, storeDetails }: Props) => {
  return (
    <div>
      <section className="overflow-hidden">
        <div
          style={{ height: "500px" }}
          className="slick-slider custom-slider-02 dots-white"
          data-slick-options='{"slidesToShow": 1,"infinite":true,"autoplay":true,"dots":false,"arrows":false,"fade":true}'
        >
          <div className="box" style={{ height: "100%" }}>
            <div
              className="d-flex flex-column justify-content-center bg-img-cover-center h-100 custom-height-sm"
              style={{ backgroundImage: "url('/images/bg-home-04.jpg')" }}
            >
              <div className="d-flex flex-column h-100 justify-content-end pb-10 pb-lg-12">
                <div className="container container-xxl">
                  <p
                    className="text-white font-weight-bold fs-20 mb-3"
                    data-animate="fadeInUp"
                  >
                    {storeDetails?.description || ""}
                  </p>
                  <h1
                    className="mb-7 fs-60 fs-xxl-100 lh-1 text-white"
                    data-animate="fadeInUp"
                  >
                    {storeDetails?.siteName || ""}
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
        </div>
      </section>
      {/* 
   
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
                    style={{
                      backgroundImage: "url('/images/product-21.jpg')",
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
      </section> */}
    </div>
  );
};

export default Home;
