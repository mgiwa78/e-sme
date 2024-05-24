import { TProduct } from "@/types/Product";
import { TStore } from "@/types/Store";
import React from "react";
import Image from "next/image";

type Props = { products: Array<TProduct>; storeDetails: TStore };

const Hero = ({ products, storeDetails }: Props) => {
  return (
    <div>
      <section className="overflow-hidden">
        <div
          style={{ height: "500px" }}
          className="slick-slider custom-slider-02 dots-white"
          data-slick-options='{"slidesToShow": 1,"infinite":true,"autoplay":true,"dots":false,"arrows":false,"fade":true}'
        >
          <div className="box" style={{ height: "100%" }}>
            <div className="d-flex flex-column justify-content-center bg-img-cover-center h-100 custom-height-sm position-relative">
              <Image
                src="/images/bg-home-04.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
              <div className="d-flex flex-column h-100 justify-content-end pb-10 pb-lg-12 position-relative">
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
    </div>
  );
};

export default Hero;
