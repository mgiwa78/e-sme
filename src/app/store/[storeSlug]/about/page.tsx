"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { selectStoreDetails } from "@/redux/selectors/store";
type Props = {};

const About = (props: Props) => {
  const params = useParams();
  const { storeSlug }: any = params;
  const storeDetails = useSelector(selectStoreDetails);

  return (
    <>
      <div className="pt-17 pb-4 bg-accent page-title-05">
        <div className="container">
          <h1 className="fs-40 mb-16 mt-5 text-center">About</h1>
        </div>
      </div>
      <div className="container pt-13 pb-13 text-center">
        <div className="mb-8   text-center">
          <h2>{storeDetails?.siteName || ""}</h2>
        </div>
        <div className="mxw-830 mx-auto ">
          <p className="mb-0">{storeDetails?.aboutPageInfo}</p>
        </div>
      </div>
    </>
  );
};

export default About;
