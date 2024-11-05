"use client";
import React, { useEffect } from "react";
import About from "../components/Home/About/About";
import Hero from "@/components/Home/Hero/Hero";
import SmoothScroll from "@/utils/SmoothScrool";
import VideoSection from "@/components/Home/Section/videoSection";
import Project from "@/components/Home/Project/Project";
import PhotoSection from "@/components/Home/Section/photoSection";

const Page = () => {
  return (
    <div className=" dark:bg-[#121212] bg-[rgb(236,235,235)]   ">
      <SmoothScroll>
        <Hero />
      </SmoothScroll>

      <About />
      <SmoothScroll>
        <VideoSection/>
        <Project/>
      </SmoothScroll>
        <PhotoSection/>

    </div>
  );
};

export default Page;