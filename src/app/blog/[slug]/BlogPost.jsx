"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import "katex/dist/katex.min.css";
import { useTranslations } from "next-intl";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const BlogPost = ({ post, content, recommendations }) => {
  const t = useTranslations("BlogComponent");

  return (
    <div className="dark:bg-[#121212] bg-[rgb(236,235,235)] min-h-screen pt-32 pb-20">
      <div className="mx-4 md:mx-10 lg:mx-auto max-w-5xl">
        <Link
          href="/blog"
          className="text-red-500 font-Tropical font-semibold hover:underline mb-8 inline-block"
        >
          ← {t("backToBlog")}
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-zinc-900 rounded-[30px] p-8 md:p-14 shadow-md"
        >
          <div className="flex items-center gap-4 mb-6">
            {post.authorImage && (
              <Image
                src={post.authorImage}
                alt={post.author}
                width={48}
                height={48}
                className="rounded-full object-cover w-12 h-12"
              />
            )}
            <div>
              <p className="text-gray-900 dark:text-gray-100 font-semibold">
                {post.author}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-Tropical font-bold dark:text-gray-100 mb-8">
            {post.title}
          </h1>

          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-Tropical prose-headings:font-bold prose-a:text-red-500">
            {content}
          </div>

          {post.image && (
            <div className="mt-10 rounded-[20px] overflow-hidden relative h-[300px] md:h-[400px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </motion.article>

        {recommendations && recommendations.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl md:text-4xl font-Tropical font-semibold dark:text-gray-100 mb-6">
              {t("recommendations")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.map((rec) => (
                <Link key={rec.slug} href={`/blog/${rec.slug}`}>
                  <motion.div
                    className="bg-white dark:bg-zinc-900 rounded-[30px] shadow-md overflow-hidden group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {rec.authorImage && (
                          <Image
                            src={rec.authorImage}
                            alt={rec.author}
                            width={28}
                            height={28}
                            className="rounded-full object-cover w-7 h-7"
                          />
                        )}
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {rec.author}
                        </p>
                      </div>
                      <h3 className="text-xl font-Tropical font-bold dark:text-gray-100 mb-2">
                        {rec.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {rec.description}
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
        )}
      </div>
    </div>
  );
};

export default BlogPost;
