import { TCategory } from "@/types/Category";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { categories: Array<TCategory> };

const Categories = ({ categories }: Props) => {
  return (
    <section className="py-6">
      <div className="container-fluid px-8 px-lg-10">
        <div className="row px-lg-10">
          {categories?.map((category) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={category._id}>
              <div className="card border-0">
                <Image
                  src={category?.image}
                  alt={category?.name}
                  className="rounded"
                  width={300}
                  height={300}
                  priority
                />
                <div className="card-img-overlay d-inline-flex flex-column px-6 py-4">
                  <h3 className="card-title fs-28 text-capitalize ">
                    {category?.name}
                  </h3>
                  <div className="mt-auto">
                    <Link
                      href={`/category/${category?._id}`}
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
