import Cart from "@/components/Cart";
import MobileNavigation from "@/components/MobileNavigation";
import { store } from "@/redux/store";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Empowering Small and Medium Enterprises"
        />
        <meta name="author" />
        <meta name="generator" content="Jekyll" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/vendors/fontawesome-pro-5/css/all.css" />
        <link
          rel="stylesheet"
          href="/vendors/bootstrap-select/css/bootstrap-select.min.css"
        />
        <link rel="stylesheet" href="/vendors/slick/slick.min.css" />
        <link
          rel="stylesheet"
          href="/vendors/magnific-popup/magnific-popup.min.css"
        />
        <link rel="stylesheet" href="/vendors/jquery-ui/jquery-ui.min.css" />
        <link rel="stylesheet" href="/vendors/animate.css" />
        <link rel="stylesheet" href="/vendors/mapbox-gl/mapbox-gl.min.css" />
        <link rel="stylesheet" href="/css/custom.css" />

        <link rel="stylesheet" href="/css/themes.css" />

        <link rel="icon" href="/logo/icon-5.svg" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@" />
        <meta name="twitter:creator" content="@" />
        <meta name="twitter:title" content="Home 04" />
        <meta
          name="twitter:description"
          content="Furniture Shop Html Template"
        />
        <meta name="twitter:image" content="/logo/icon-2" />

        <meta property="og:url" content="home-04.html" />
        <meta property="og:title" content="Home 04" />
        <meta
          property="og:description"
          content="Furniture Shop Html Template"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo/icon-2" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={inter.className}>
        {children}

        <Script strategy="afterInteractive" src="/vendors/jquery.min.js" />
        <Script
          strategy="afterInteractive"
          src="/vendors/jquery-ui/jquery-ui.min.js"
        />
        <Script
          strategy="afterInteractive"
          src="/vendors/bootstrap/bootstrap.bundle.js"
        />
        <Script
          strategy="afterInteractive"
          src="/vendors/bootstrap-select/js/bootstrap-select.min.js"
        />
        <Script strategy="afterInteractive" src="/vendors/slick/slick.min.js" />
        <Script
          strategy="afterInteractive"
          src="/vendors/waypoints/jquery.waypoints.min.js"
        />
        <Script strategy="afterInteractive" src="/vendors/counter/countUp.js" />
        <Script
          strategy="afterInteractive"
          src="/vendors/magnific-popup/jquery.magnific-popup.min.js"
        />
        <Script
          strategy="afterInteractive"
          src="/vendors/hc-sticky/hc-sticky.min.js"
        />
        <Script
          strategy="afterInteractive"
          src="/vendors/jparallax/TweenMax.min.js"
        />
        <Script
          strategy="afterInteractive"
          src="/vendors/mapbox-gl/mapbox-gl.js"
        />
        <Script strategy="afterInteractive" src="/js/theme.js" />
      </body>
    </html>
  );
}
