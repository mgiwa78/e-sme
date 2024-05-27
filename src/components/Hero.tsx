import { TProduct } from "@/types/Product";
import { TStore } from "@/types/Store";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";

type Props = { products: Array<TProduct>; storeDetails: TStore };

const Hero = ({ products, storeDetails }: Props) => {
  return (
    <section className="overflow-hidden">
      <div style={{ height: "500px", position: "relative" }}>
        <Image
          src="/images/bg-home-04.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="d-flex flex-column justify-content-center h-100 position-relative z-20">
          <div className="d-flex flex-column h-100 justify-content-end pb-10 pb-lg-12 position-relative">
            <div className="container container-xxl">
              <p className="text-white font-weight-bold fs-20 mb-3">
                {storeDetails?.description || ""}
              </p>
              <h1 className="mb-7 fs-60 fs-xxl-100 lh-1 text-white">
                {storeDetails?.siteName || ""}
              </h1>
              <Link
                href={`/store/${storeDetails?.slug}/products`}
                className="btn btn-white text-uppercase letter-spacing-05"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
