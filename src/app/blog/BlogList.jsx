"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  BlogShell,
  CategoryCard,
  PostList,
  SectionTitle,
} from "@/components/Blog/shared";

const BlogList = ({ posts, categories }) => {
  const t = useTranslations("BlogComponent");

  return (
    <BlogShell>
      <motion.section
        className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-accent text-[15px]">{t("heroKicker")}</span>
        <h1 className="text-[clamp(52px,8vw,96px)] font-normal tracking-[-0.03em] leading-[.95] mt-[14px]">
          {t("title")}.
        </h1>
        <p className="text-lg leading-[1.6] text-[#6b6b6b] dark:text-gray-400 max-w-[540px] mt-[26px] [text-wrap:pretty]">
          {t("heroDescription")}
        </p>
      </motion.section>

      <section className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-24">
        <div className="mb-8">
          <SectionTitle
            kicker={t("exploreKicker")}
            title={t("exploreTitle")}
            subtitle={t("exploreSubtitle")}
          />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {categories.map((c) => (
            <CategoryCard key={c.category} {...c} />
          ))}
        </div>
      </section>

      <PostList posts={posts} kicker={t("latestKicker")} title={t("latest")} />
    </BlogShell>
  );
};

export default BlogList;
