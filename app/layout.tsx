import type { Metadata } from "next";
import "./globals.css";
import NavHeader from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./i18n";
import I18nProvider from "@/components/I18nProvider/I18nProvider";
import Head from "next/head";


export const metadata: Metadata = {
  title: "MODUHAUSE",
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
        <Head>
          <link rel="preload" as="video" href="/video/repair/fon-repair-2.mp4" type="video/mp4" />
          <link rel="preload" as="video" href="/video/conditioners/conditioners-2.mp4" type="video/mp4" />
          <link rel="preload" as="video" href="/video/video-bg-fon-2.mp4" type="video/mp4" />
        </Head>
      <body>
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
