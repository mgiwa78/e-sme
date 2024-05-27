"use client";
import { TProduct } from "@/types/Product";
import { formatToNaira } from "@/utils/format";
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/slice/cartSlice";

type Props = { products: Array<TProduct>; storeSlug: string };

const Products = ({ products, storeSlug }: Props) => {
  const dispatch = useDispatch();
  return (
    <section className="pt-11 pt-lg-5 pb-lg-10" data-animated-id="3">
      <div className="container">
        <h2 className="mb-9 text-center fs-30 fs-md-40">Products</h2>
        <div className="row overflow-hidden">
          {products.map((product) => (
            <div
              className="col-sm-6 col-lg-3 mb-8 fadeInUp animated"
              data-animate="fadeInUp"
              key={product._id}
            >
              <div className="card border-0 hover-change-content product">
                <div className="card-img-top position-relative">
                  <div className="card-img ratio bg-img-cover-center ratio-1-1 position-relative">
                    <Image
                      src={product?.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                  <div className="position-absolute pos-fixed-bottom px-4 px-sm-6 pb-5 d-flex w-100 justify-content-center content-change-horizontal">
                    <span
                      onClick={() => dispatch(addItem(product))}
                      data-toggle="tooltip"
                      title=""
                      className="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mr-2 border"
                      data-original-title="Add to cart"
                    >
                      <i className="far fa-shopping-basket"></i>
                    </span>
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
                      href={`/store/${storeSlug}/shop/${product._id}`}
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
                      {product.name}
                    </a>
                    <a href="#" className="font-weight-bold mt-1 d-block">
                      {product.category.name}
                    </a>
                  </div>
                  <p className="text-primary mb-0 font-weight-500">
                    {formatToNaira(product.price)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
