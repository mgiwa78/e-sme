"use client";
import Products from "@/components/Products";
import { selectProducts } from "@/redux/selectors/products";
import { TProduct } from "@/types/Product";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const Shop = ({}: Props) => {
  const params = useParams();
  const { storeSlug }: any = params;
  const products = useSelector(selectProducts);
  return (
    <>
      <Products products={products} storeSlug={storeSlug} />
    </>
  );
};

export default Shop;
