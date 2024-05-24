"use client";

import Categories from "@/components/Categories";
import Home from "@/components/Hero";
import Loading from "@/components/Loading";
import Products from "@/components/Products";
import { selectCategories } from "@/redux/selectors/category";
import { selectItemsStatus, selectProducts } from "@/redux/selectors/products";
import { selectStoreDetails } from "@/redux/selectors/store";
import { fetchProducts } from "@/redux/slice/productSlice";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

export default (props: Props) => {
  const params = useParams();
  const { storeSlug }: any = params;
  const dispatch = useDispatch<AppDispatch>();
  const categories = useSelector(selectCategories);

  const products = useSelector(selectProducts);
  const status = useSelector(selectItemsStatus);
  const router = useRouter();
  const storeDetails = useSelector(selectStoreDetails);

  if (status === "failed") {
    return router.push("/not-found");
  }

  if (!status || status === "loading" || status === "idle") {
    return <Loading />;
  }

  return (
    <>
      {products && storeDetails && (
        <>
          <Home products={products} storeDetails={storeDetails} />
        </>
      )}
      {categories && (
        <>
          <Categories categories={categories} storeSlug={storeSlug || ""} />
        </>
      )}

      {products && (
        <>
          <Products storeSlug={storeSlug} products={products} />
        </>
      )}
    </>
  );
};
