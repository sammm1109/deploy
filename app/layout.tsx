"use client";

import { useEffect } from "react";

import AOS from "aos";
import "@/css/style.css";
import "@/css/additional-styles/swiper.css";
import "@/css/additional-styles/custom-fonts.css";
import "@/css/additional-styles/theme.css";
import "@/css/additional-styles/utility-patterns.css";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      {/* <Header /> */}

      <main className="grow">{children}</main>

      <Footer border={true} />
    </>
  );
}
