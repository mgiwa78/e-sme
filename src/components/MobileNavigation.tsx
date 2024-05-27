"use client";
import { selectStoreDetails } from "@/redux/selectors/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const MobileNavigation = (props: Props) => {
  const params = useParams();
  const { storeSlug }: any = params;
  const storeDetails = useSelector(selectStoreDetails);

  return (
    <div className="sidenav canvas-sidebar bg-white">
      <div className="canvas-overlay"></div>
      <div className="pt-5 pb-7 card border-0 h-100">
        <div className="d-flex align-items-center card-header border-0 py-0 pl-8 pr-7 mb-9 bg-transparent">
          <a href="index-2.html" className="d-block w-52px">
            {storeDetails?.siteName || ""}
          </a>
          <span className="canvas-close d-inline-block text-right fs-24 ml-auto lh-1 text-primary">
            <i className="fal fa-times"></i>
          </span>
        </div>
        <div className="overflow-y-auto pb-6 pl-8 pr-7 card-body pt-0">
          <ul className="navbar-nav main-menu px-0">
            <li className="nav-item  py-1 px-0">
              <Link className="nav-link  p-0" href={`/store/${storeSlug}`}>
                Home
              </Link>
            </li>
            <li className="nav-item  py-1 px-0">
              <Link className="nav-link  p-0" href={`/store/${storeSlug}/shop`}>
                Shop
              </Link>
            </li>
            <li className="nav-item  py-1 px-0">
              <Link
                className="nav-link  p-0"
                href={`/store/${storeSlug}/about`}
              >
                About
              </Link>
            </li>
            <li className="nav-item  py-1 px-0">
              <Link
                className="nav-link  p-0"
                href={`/store/${storeSlug}/contact`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="card-footer bg-transparent border-0 mt-auto pl-8 pr-7 pb-0 pt-4">
          <ul className="list-inline d-flex align-items-center mb-3">
            {storeDetails?.facebookUrl && (
              <li className="list-inline-item mr-4">
                <a href={storeDetails?.facebookUrl} className="fs-20 lh-1">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
            )}
            {storeDetails?.instagramUrl && (
              <li className="list-inline-item mr-4">
                <a href={storeDetails?.instagramUrl} className="fs-20 lh-1">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            )}
            {storeDetails?.twitterUrl && (
              <li className="list-inline-item">
                <a href={storeDetails?.twitterUrl} className="fs-20 lh-1">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            )}
          </ul>
          <p className="mb-0 text-gray">
            © 2024 {storeDetails?.siteName}.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
