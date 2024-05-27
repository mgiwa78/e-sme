"use client";
import { selectProducts } from "@/redux/selectors/products";
import { formatToNaira } from "@/utils/format";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Product = (props: Props) => {
  const params = useParams();
  const { productID }: any = params;

  const products = useSelector(selectProducts);
  const product = products.find((prod) => prod._id === productID);
  console.log(product);
  return (
    <>
      <section className="bg-color-3">
        <div className="container">
          <nav
            aria-label="breadcrumb"
            className="d-flex align-items-center justify-content-between"
          >
            <ol className="breadcrumb py-3 mr-6">
              <li className="breadcrumb-item">
                <a href="index-2.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#"> Shop </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {product?.name}
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="pt-10 pb-lg-15 pb-11">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-7 mb-6 mb-md-0 pr-md-6 pr-lg-9">
              <div className="galleries position-relative">
                <div className="position-absolute pos-fixed-top-right pr-4 pt-4 z-index-2">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add to favourite"
                    className="add-to-wishlist d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                  >
                    <i className="far fa-heart"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Add to compare"
                    className="add-to-compare d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
                  >
                    <i className="far fa-random"></i>
                  </a>
                </div>
                <div
                  className="slick-slider slider-for"
                  data-slick-options='{"slidesToShow": 1, "autoplay":false,"dots":false,"arrows":false,"asNavFor": ".slider-nav"}'
                >
                  <div className="box">
                    <div className="card p-0 hover-change-image rounded-0 border-0">
                      <a
                        href={`${product?.image}`}
                        className="card-img ratio ratio-1-1 bg-img-cover-center"
                        data-gtf-mfp="true"
                        data-gallery-id="02"
                        style={{
                          backgroundImage: `url('${product?.image}')`,
                        }}
                      ></a>
                    </div>
                  </div>
                  {product?.images.map((img) => (
                    <div className="box">
                      <div className="card p-0 hover-change-image rounded-0 border-0">
                        <a
                          href={`${img}`}
                          className="card-img ratio ratio-1-1 bg-img-cover-center"
                          data-gtf-mfp="true"
                          data-gallery-id="02"
                          style={{
                            backgroundImage: `url('${img}')`,
                          }}
                        ></a>
                      </div>
                    </div>
                  ))}

                  <div className="box">
                    <div className="card p-0 hover-change-image rounded-0 border-0">
                      <a
                        href="/images/product-page-16.jpg"
                        className="card-img ratio ratio-1-1 bg-img-cover-center"
                        data-gtf-mfp="true"
                        data-gallery-id="02"
                        style={{
                          backgroundImage: "url('/images/product-page-15.jpg')",
                        }}
                      ></a>
                    </div>
                  </div>
                  <div className="box">
                    <div className="card p-0 hover-change-image rounded-0 border-0">
                      <a
                        href="/images/product-page-14.jpg"
                        className="card-img ratio ratio-1-1 bg-img-cover-center"
                        data-gtf-mfp="true"
                        data-gallery-id="02"
                        style={{
                          backgroundImage: "url('/images/product-page-14.jpg')",
                        }}
                      ></a>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-slider slider-nav mt-1 mx-n1"
                  data-slick-options='{"slidesToShow": 4, "autoplay":false,"dots":false,"arrows":false,"asNavFor": ".slider-for","focusOnSelect": true,"responsive":[{"breakpoint": 768,"settings": {"slidesToShow": 3,"arrows":false}},{"breakpoint": 576,"settings": {"slidesToShow": 2,"arrows":false}}]}'
                >
                  <div className="box px-0">
                    <div className="bg-white p-1 h-100 rounded-0">
                      <img
                        src={`${product?.image}`}
                        alt="Image 3"
                        className="h-100 w-100"
                      />
                    </div>
                  </div>
                  {product?.images.map((img) => (
                    <div className="box px-0">
                      <div className="bg-white p-1 h-100 rounded-0">
                        <img
                          src={`${img}`}
                          alt="Image 1"
                          className="h-100 w-100"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <p className="text-muted fs-12 font-weight-500 letter-spacing-05 text-uppercase mb-3">
                accessories
              </p>
              <h2 className="fs-30 fs-lg-40 mb-2"> {product?.name}</h2>
              <p className="fs-20 text-primary mb-4">
                {formatToNaira(product?.price || 0)}
              </p>
              <p className="mb-4 d-flex text-primary">
                <span className="d-inline-block mr-2 fs-14">
                  <i className="far fa-stopwatch"></i>
                </span>
                <span className="fs-15">
                  Only <span className="font-weight-600">11</span> Left in Stock
                </span>
              </p>
              <p className="mb-5">{product?.description}</p>
              <img
                className="border mb-6"
                src="/images/product-page-09.jpg"
                alt="Image Product"
              />
              <form>
                <div className="form-group shop-swatch mb-6">
                  <label className="mb-3">
                    <span className="text-primary fs-16 font-weight-bold">
                      Color:
                    </span>
                    <span className="var text-capitalize text-primary">
                      black
                    </span>
                  </label>
                  <ul className="list-inline d-flex justify-content-start mb-0">
                    <li className="list-inline-item mr-1 selected">
                      <a
                        href="#"
                        className="d-block swatches-item"
                        data-var="black"
                        style={{ backgroundColor: "#000000" }}
                      ></a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="d-block swatches-item"
                        data-var="brown"
                        style={{ backgroundColor: "#68412d" }}
                      ></a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="#"
                        className="d-block swatches-item"
                        data-var="green"
                        style={{ backgroundColor: "#9ec8bb" }}
                      ></a>
                    </li>
                  </ul>
                  <select
                    name="swatches"
                    className="form-select swatches-select d-none"
                    aria-label="Default select example"
                  >
                    <option selected value="black">
                      Black
                    </option>
                    <option value="brown">Brown</option>
                    <option value="green">Green</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-sm-6 mb-4 form-group">
                    <label
                      className="text-primary fs-16 font-weight-bold mb-3"
                      htmlFor="size"
                    >
                      Select a Size:
                    </label>
                    <select
                      name="size"
                      className="form-control w-100"
                      required
                      id="size"
                    >
                      <option selected>Choose an option</option>
                      <option value="sm">SM</option>
                      <option value="md">MD</option>
                      <option value="lg">LG</option>
                      <option value="xl">XL</option>
                    </select>
                  </div>
                  <div className="col-sm-6 mb-4 form-group">
                    <label
                      className="text-primary fs-16 font-weight-bold mb-3"
                      htmlFor="material"
                    >
                      Material:
                    </label>
                    <select
                      name="size"
                      className="form-control w-100"
                      required
                      id="material"
                    >
                      <option selected>Choose an option</option>
                      <option value="sm">SM</option>
                      <option value="md">MD</option>
                      <option value="lg">LG</option>
                      <option value="xl">XL</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  add to cart
                </button>
                <ul className="list-inline px-xl-8 mb-4 d-flex align-items-center justify-content-center">
                  <li className="list-inline-item mr-5">
                    <img src="/images/p1.png" alt="Visa" />
                  </li>
                  <li className="list-inline-item mr-5">
                    <img src="/images/p2.png" alt="Visa" />
                  </li>
                  <li className="list-inline-item mr-5">
                    <img src="/images/p3.png" alt="Visa" />
                  </li>
                  <li className="list-inline-item mr-5">
                    <img src="/images/p4.png" alt="Visa" />
                  </li>
                  <li className="list-inline-item mr-5">
                    <img src="/images/p5.png" alt="Visa" />
                  </li>
                </ul>
              </form>
              <p className="d-flex text-primary justify-content-center">
                <span className="d-inline-block mr-2 fs-14">
                  <i className="far fa-lock"></i>
                </span>
                <span className="fs-15">
                  Guarantee Safe and Secure Checkout
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
