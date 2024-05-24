"use client";

import Header from "@/components/Header";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

type Props = {};

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
