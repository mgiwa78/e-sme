import { TCategory } from "@/types/Category";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { categories: Array<TCategory>; storeSlug: string };

const Categories = ({ categories, storeSlug }: Props) => {
  console.log(categories[0]?.image);
  return (
    <section className="py-6">
      <div className="container-fluid px-6">
        <div
          className="slick-slider"
          data-slick-options='{"slidesToShow": 4, "autoplay":true,"dots":true,"arrows":false,"responsive":[{"breakpoint": 1200,"settings": {"slidesToShow":4}},{"breakpoint": 992,"settings": {"slidesToShow":3}},{"breakpoint": 768,"settings": {"slidesToShow": 2}},{"breakpoint": 576,"settings": {"slidesToShow": 1}}]}'
        >
          {categories?.map((category) => (
            <div className="box col-span-6" data-animate="fadeInUp">
              <div className="card border-0">
                <Image
                  src={category?.image}
                  alt={category?.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
                <div className="card-img-overlay d-inline-flex flex-column px-6 py-4">
                  <h3 className="card-title fs-28 uppercase">
                    {category?.name}
                  </h3>
                  <div className="mt-auto">
                    <Link
                      href={`${storeSlug}/category/${category?._id}`}
                      className="text-uppercase fs-14 letter-spacing-05 border-bottom border-light-dark border-hover-primary font-weight-bold"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
