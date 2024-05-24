import { TCategory } from "@/types/Category";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { categories: Array<TCategory> };

const Categories = ({ categories }: Props) => {
  return (
    <section className="py-6">
      <div className="container-fluid px-6">
        <div
          className="slick-slider"
          data-slick-options='{"slidesToShow": 4, "autoplay":true,"dots":true,"arrows":false,"responsive":[{"breakpoint": 1200,"settings": {"slidesToShow":4}},{"breakpoint": 992,"settings": {"slidesToShow":3}},{"breakpoint": 768,"settings": {"slidesToShow": 2}},{"breakpoint": 576,"settings": {"slidesToShow": 1}}]}'
        >
          {categories?.map((category) => (
            <>
              <div className="box col-span-6" data-animate="fadeInUp">
                <div className="card border-0">
                  <Image
                    src={category?.image}
                    alt={category?.name}
                    className="rounded"
                    width={300}
                    priority
                    height={300}
                  />
                  <div className="card-img-overlay d-inline-flex flex-column px-6 py-4">
                    <h3 className="card-title fs-28 uppercase">
                      {category?.name}
                    </h3>
                    <div className="mt-auto">
                      <a
                        // href={`${storeSlug}/category/${category?._id}`}
                        className="text-uppercase fs-14 letter-spacing-05 border-bottom border-light-dark border-hover-primary font-weight-bold"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
