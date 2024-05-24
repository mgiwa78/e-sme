"use client";
import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { selectItemsStatus, selectProducts } from "@/redux/selectors/products";
import { fetchProducts } from "@/redux/slice/productSlice";
import { AppDispatch } from "@/redux/store";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStoreDetails, selectStoreStatus } from "@/redux/selectors/store";
import { fetchStoreDetails } from "@/redux/slice/storeSlice";
import { fetchCategories } from "@/redux/slice/categoriesSlice";
import { selectCategories } from "@/redux/selectors/category";
import Loading from "../../../components/Loading";
import MobileNavigation from "@/components/MobileNavigation";
import Head from "next/head";

type Props = {};

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams();
  const { storeSlug } = params;
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector(selectProducts);
  const storeDetails = useSelector(selectStoreDetails);
  const storeStatus = useSelector(selectStoreStatus);
  const status = useSelector(selectItemsStatus);
  const router = useRouter();

  useEffect(() => {
    if (storeSlug && typeof storeSlug === "string") {
      dispatch(fetchStoreDetails(storeSlug));
      dispatch(fetchCategories(storeSlug));
      dispatch(fetchProducts(storeSlug));
    }
  }, [storeSlug, dispatch]);

  if (storeStatus === "failed") {
    return router.push("/not-found");
  }

  if (!storeStatus || storeStatus === "loading" || storeStatus === "idle") {
    return <Loading />;
  }

  return (
    <>
      {storeDetails && (
        <>
          <MobileNavigation />
          <Header storeDetails={storeDetails} />
          <main id="content">{children}</main>
          <Footer />
          <Cart />
        </>
      )}
    </>
  );
}
