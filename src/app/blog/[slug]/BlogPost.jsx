"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import "katex/dist/katex.min.css";
import { useLocale, useTranslations } from "next-intl";
import { BlogShell, PostCard, formatDate } from "@/components/Blog/shared";

const BlogPost = ({ post, content, recommendations }) => {
  const t = useTranslations("BlogComponent");
  const locale = useLocale();

  return (
    <BlogShell>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-16">
        <Link href="/blog" className="text-sm text-[#6b6b6b] dark:text-gray-400 hover:text-accent">
          ← {t("backToBlog")}
        </Link>

        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[720px] mx-auto mt-14 flex flex-col gap-6"
        >
          <div className="flex items-center gap-3">
            {post.authorImage && (
              <Image
                src={post.authorImage}
                alt={post.author}
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover"
              />
            )}
            <div className="flex flex-col gap-[2px] text-sm">
              <span className="font-normal">{post.author}</span>
              <span className="text-[13px] text-[#9a9a9a]">
                {formatDate(post.date, locale)} ·{" "}
                {t("readingTime", { minutes: post.readingTime })}
              </span>
            </div>
            {post.category && (
              <Link
                href={`/blog/category/${post.category}`}
                className="ml-auto text-[13px] text-accent px-3 py-[6px] border border-accent rounded-full hover:bg-accent hover:text-white transition-colors"
              >
                {t(`categories.${post.category}.name`)}
              </Link>
            )}
          </div>

          <h1 className="text-[clamp(36px,5vw,54px)] font-normal leading-[1.08] tracking-[-0.025em] [text-wrap:balance]">
            {post.title}
          </h1>

          {post.tags && (
            <div className="flex flex-wrap gap-2 text-[13px] text-[#6b6b6b] dark:text-gray-400">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-[10px] py-[5px] rounded-lg bg-[#f4f4f4] dark:bg-zinc-800"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </motion.header>

        {post.image && (
          <div className="relative w-full max-w-[1000px] mx-auto mt-12 aspect-[1200/630] rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,.12)]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 1064px) 1000px, 100vw"
              className="object-cover"
            />
          </div>
        )}

        <article
          className="prose prose-lg dark:prose-invert max-w-[680px] mx-auto mt-16 font-light text-lg leading-[1.75] text-[#2b2b2b] dark:text-gray-300
            prose-headings:font-normal prose-headings:tracking-[-0.01em] prose-headings:text-[#111] dark:prose-headings:text-gray-100
            prose-h2:text-[28px] prose-h3:text-xl prose-strong:font-medium
            prose-a:text-accent prose-hr:border-[#eee] dark:prose-hr:border-zinc-800 prose-img:rounded-[14px]
            prose-blockquote:not-italic prose-blockquote:font-light prose-blockquote:border-none prose-blockquote:rounded-[14px] prose-blockquote:px-[26px] prose-blockquote:py-[2px]
            prose-blockquote:shadow-[0_6px_20px_rgba(0,0,0,.07)] prose-blockquote:border prose-blockquote:border-[#f0f0f0] dark:prose-blockquote:border-zinc-800"
        >
          {content}
        </article>
      </div>

      {recommendations && recommendations.length > 0 && (
        <section className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-24">
          <h2 className="text-[32px] font-normal tracking-[-0.01em] mb-7">
            {t("recommendations")}
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
            {recommendations.map((rec) => (
              <PostCard key={rec.slug} post={rec} />
            ))}
          </div>
        </section>
      )}
    </BlogShell>
  );
};

export default BlogPost;
