import { TStore } from "@/types/Store";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

type Props = { storeDetails: TStore };

const Navigation = (props: Props) => {
  const params = useParams();
  const { storeSlug }: any = params;
  return (
    <div className="col-xl-8 mx-auto ">
      <div className="d-flex mt-3 mt-xl-0 align-items-center w-100 justify-content-center">
        <ul className="navbar-nav hover-menu main-menu px-0 mx-xl-n4">
          <li className="nav-item   py-2 py-xl-5 px-0 px-xl-4">
            <Link className="nav-link  p-0" href={`/store/${storeSlug}`}>
              Home
            </Link>
          </li>
          <li className="nav-item  py-2 py-xl-5 px-0 px-xl-4">
            <Link className="nav-link  p-0" href={`/store/${storeSlug}/products`}>
              Products
            </Link>
          </li>
          <li className="nav-item  py-2 py-xl-5 px-0 px-xl-4">
            <Link className="nav-link  p-0" href={`/store/${storeSlug}/about`}>
              About
            </Link>
          </li>
          <li className="nav-item  py-2 py-xl-5 px-0 px-xl-4">
            <Link
              className="nav-link  p-0"
              href={`/store/${storeSlug}/contact`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
