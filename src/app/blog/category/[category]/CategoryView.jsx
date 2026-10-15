"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BlogShell, Placeholder, PostList } from "@/components/Blog/shared";

const CategoryView = ({ current, others, posts }) => {
  const t = useTranslations("BlogComponent");
  const name = t(`categories.${current.category}.name`);

  return (
    <BlogShell>
      <section className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-16">
        <Link href="/blog" className="text-sm text-[#6b6b6b] dark:text-gray-400 hover:text-accent">
          ← {t("backToBlog")}
        </Link>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-[18px]">
            <span className="text-accent text-[15px]">{t("category")}</span>
            <h1 className="text-[clamp(48px,7vw,84px)] font-normal tracking-[-0.03em] leading-[.95]">
              {name}
            </h1>
            <p className="text-lg leading-[1.6] text-[#6b6b6b] dark:text-gray-400 max-w-[460px] [text-wrap:pretty]">
              {t(`categories.${current.category}.description`)}
            </p>
            <span className="text-[13px] text-[#9a9a9a]">
              {t("postsCount", { count: current.count })}
            </span>
          </div>
          <div className="relative rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,.10)] aspect-[4/3]">
            {current.image ? (
              <Image src={current.image} alt={name} fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />
            ) : (
              <Placeholder label={name} className="absolute inset-0" />
            )}
          </div>
        </motion.div>
      </section>

      <PostList posts={posts} kicker={name} title={t("allPosts")} />

      <section className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-24">
        <h2 className="text-2xl font-normal mb-5">{t("otherCategories")}</h2>
        <div className="flex gap-3 flex-wrap">
          {others.map((c) => (
            <Link
              key={c.category}
              href={`/blog/category/${c.category}`}
              className="text-[15px] px-5 py-3 border border-[#e2e2e2] dark:border-zinc-700 rounded-xl hover:border-accent hover:text-accent transition-colors"
            >
              {t(`categories.${c.category}.name`)} →
            </Link>
          ))}
        </div>
      </section>
    </BlogShell>
  );
};

export default CategoryView;
