"use client";
import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const cardMotion = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Blog = ({ posts }) => {
  const t = useTranslations("BlogComponent");
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });
  const titleControls = useAnimation();

  React.useEffect(() => {
    if (titleInView) {
      titleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [titleInView, titleControls]);

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-[60px] mx-4 md:mx-20 p-10 mt-10 mb-10">
      <div className="mb-6 flex flex-col md:flex-row justify-between md:items-end">
        <motion.h2
          ref={titleRef}
          className="text-[2.6rem] md:text-[4.375rem] lg:text-[6.375rem] xl:text-[7.375rem] leading-[1.10] font-Tropical font-semibold dark:text-gray-100"
          initial={{ opacity: 0, y: 50 }}
          animate={titleControls}
        >
          {t("title")}
        </motion.h2>
        <Link
          href="/blog"
          className="text-gray-700 dark:text-gray-300 font-Tropical text-lg hover:text-red-500 transition-colors mt-4 md:mt-0"
        >
          {t("viewAll")} →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {posts.slice(0, 3).map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <motion.div
              className="rounded-[30px] shadow-md overflow-hidden relative group cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardMotion}
            >
              <div className="h-[200px] relative bg-zinc-200 dark:bg-zinc-700">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <h3 className="text-gray-500 dark:text-gray-300 text-2xl md:text-3xl font-Tropical font-bold text-center px-8">
                      {post.title}
                    </h3>
                  </div>
                )}
              </div>
              <div className="p-6 bg-white dark:bg-zinc-800">
                <h3 className="text-gray-900 dark:text-gray-100 text-lg font-Tropical font-bold mb-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 mb-3">
                  {post.authorImage && (
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={32}
                      height={32}
                      className="rounded-full object-cover w-8 h-8"
                    />
                  )}
                  <div>
                    <p className="text-gray-900 dark:text-gray-100 text-sm font-semibold">
                      {post.author}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">
                      {new Date(post.date).toLocaleDateString("fr-FR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-200 text-sm">
                  {post.description}
                </p>
                <div className="flex items-center mt-4 text-red-500 font-Tropical font-semibold group-hover:gap-2 transition-all">
                  <span>{t("readMore")}</span>
                  <ArrowUpRightIcon className="w-5 h-5 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
