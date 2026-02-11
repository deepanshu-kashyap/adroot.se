'use client';
import { useEffect } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Carousel from "../components/Carousel";
import Sectiontwo from "../components/Section2";
import Sectionthree from "../components/Section3";
import Videosection from "../components/videosection";
import ScaleSection from "../components/scaleSection";
import ClientWins from "../components/ClientWins";
import Difference from "../components/difference";
import WorkWithUs from "../components/WorkWithUs";

export default function Home() {
  useEffect(() => {
    // Force update the title
    document.title = "Adroot";

    // Force update the favicon
    const existingFavicon = document.querySelector("link[rel='icon']");
    if (existingFavicon) {
      existingFavicon.href = "/logo.png";
    } else {
      const link = document.createElement("link");
      link.rel = "icon";
      link.href = "/logo.png";
      document.head.appendChild(link);
    }
  }, []); 
  return (
    <>
      <Head>
        <meta name="description" content="This is the home page of my awesome website" />
      </Head>

      {/* Page Components */}
      <Hero />
      <Partners />
      <Carousel />
      <Sectiontwo />
      <Sectionthree />
      <Videosection />
      <ScaleSection />
      <ClientWins />
      <Difference />
      <WorkWithUs />
    </>
  );
}
