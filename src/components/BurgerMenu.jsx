"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BurgerMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className=" fixed flex flex-col gap-4  items-center justify-center rounded-[15px]   right-4 top-1/2 bg-zinc-800 w-[60px] p-4  z-10"
    >
      <div className=" flex flex-col gap-4">
        <Link
          className=" font-Tropical font-bold rounded-[10px] h-[40px] w-[40px] flex items-center justify-center p-2 text-xl bg-white text-black"
          href="/"
        >
          Me
        </Link>
        <Link
          className=" font-Tropical font-bold rounded-[10px] h-[40px] w-[40px] flex items-center justify-center p-2 text-xl bg-white text-black"
          href="/about"
        >
          Blog{" "}
        </Link>
      </div>
    </motion.div>
  );
}
