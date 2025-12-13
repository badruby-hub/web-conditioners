import type { Metadata } from "next";
import "./globals.css";
import NavHeader from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./i18n";
import I18nProvider from "@/components/I18nProvider/I18nProvider";
import Head from "next/head";
import Script from "next/script";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "MODUHAUS",
  description: "Кондицианирование и Ремонт квартир",
  icons:{
    icon:[
      {url: "/logo/home-16.png", sizes: "16x16", type: "image/png"},
      {url: "/logo/home-24.png", sizes: "24x24", type: "image/png"},
      {url: "/logo/home-32.png", sizes: "32x32", type: "image/png"},
      {url: "/logo/home-64.png", sizes: "64x64", type: "image/png"},
      {url: "/logo/home-128.png", sizes: "128x128", type: "image/png"},
      {url: "/logo/home-256.png", sizes: "256x256", type: "image/png"},
      {url: "/logo/home-512.png", sizes: "512x512", type: "image/png"},
    ],
    apple:[
      {url: "/logo/home-256.png", sizes: "256x256", type: "image/png"},
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
<Script
  id="gtm-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5XM76WQV');
    `,
  }}
/>

      </head>
      <body>
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-5XM76WQV"
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
    ></iframe>
  </noscript>
      <Toaster/>
      <I18nProvider>
      <NavHeader/>
        <main>
            {children}
        </main>
        <footer className="footer">
           <Footer/>
        </footer> 
        </I18nProvider>    
      </body>
    </html>
  );
}
