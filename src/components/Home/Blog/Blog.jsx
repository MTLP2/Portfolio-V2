"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { PostCard } from "@/components/Blog/shared";

const Blog = ({ posts }) => {
  const t = useTranslations("BlogComponent");

  return (
    <section className="bg-white dark:bg-zinc-900 rounded-[60px] mx-4 md:mx-20 px-6 py-10 md:p-16 mt-10 mb-10 font-Geist font-light text-[#111] dark:text-gray-100">
      <motion.div
        className="flex justify-between items-end gap-5 flex-wrap"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-[10px]">
          <span className="text-accent text-[15px]">{t("latest")}</span>
          <h2 className="text-[clamp(40px,5vw,56px)] font-normal tracking-[-0.02em] leading-none">
            {t("title")}
          </h2>
        </div>
        <Link
          href="/blog"
          className="text-sm px-[18px] py-[10px] border border-accent text-accent rounded-[10px] hover:bg-accent hover:text-white transition-colors"
        >
          {t("viewAll")} →
        </Link>
      </motion.div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-7 mt-10">
        {posts.slice(0, 3).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Blog;
