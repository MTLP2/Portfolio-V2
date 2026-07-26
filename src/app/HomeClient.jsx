"use client";
import React from "react";
import { useLocale } from "next-intl";
import About from "../components/Home/About/About";
import Hero from "@/components/Home/Hero/Hero";
import SmoothScroll from "@/utils/SmoothScrool";
import Project from "@/components/Home/Project/Project";
import Blog from "@/components/Home/Blog/Blog";
import PhotoSection from "@/components/Home/Section/photoSection";

const HomeClient = ({ posts }) => {
  const locale = useLocale();

  return (
    <div className=" dark:bg-[#121212] bg-[rgb(236,235,235)]   ">
      <SmoothScroll>
        <Hero />
      </SmoothScroll>

      <About />

      <SmoothScroll>
        {/* <VideoSection /> */}
        <Project />
        <PhotoSection />
        <Blog posts={posts} />
      </SmoothScroll>
      <a
        target="_blank"
        href={locale === "fr" ? "/Resume_Fr.pdf" : "/Resume_En.pdf"}
        className=" fixed p-4 border-solid bottom-4 right-4 font-Tropical text-red-500 border-red-500 border-2 rounded-xl hover:bg-red-100 transition-colors "
      >
        {" "}
        Resume
      </a>
    </div>
  );
};

export default HomeClient;
