"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRightIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

const cardMotion = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const BlogList = ({ posts }) => {
  const t = useTranslations("BlogComponent");
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const allTags = useMemo(() => {
    const tags = new Set();
    posts.forEach((post) => {
      (post.tags || []).forEach((tag) => tags.add(tag));
    });
    return Array.from(tags);
  }, [posts]);

  const availableTags = useMemo(
    () => allTags.filter((tag) => !activeTags.includes(tag)),
    [allTags, activeTags]
  );

  const addTag = (tag) => {
    setActiveTags((prev) => [...prev, tag]);
    setDropdownOpen(false);
  };

  const removeTag = (tag) => {
    setActiveTags((prev) => prev.filter((t) => t !== tag));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());
      const matchesTags =
        activeTags.length === 0 ||
        activeTags.every((tag) => post.tags && post.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
  }, [posts, search, activeTags]);

  return (
    <div className="dark:bg-[#121212] bg-[rgb(236,235,235)] min-h-screen pt-32 pb-20">
      <div className="mx-4 md:mx-20">
        <motion.h1
          className="text-[2.6rem] md:text-[4.375rem] lg:text-[6.375rem] font-Tropical font-semibold dark:text-gray-100 mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("title")}
        </motion.h1>

        <div className="mb-8 flex flex-col md:flex-row gap-4 items-start">
          <div className="relative flex-shrink-0 w-full md:w-80">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100 shadow-md outline-none focus:ring-2 focus:ring-red-500 transition-shadow"
            />
          </div>

          <div className="relative flex-shrink-0" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-200 shadow-md font-semibold text-sm hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors"
            >
              {t("filterByTag")}
              <ChevronDownIcon
                className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {dropdownOpen && availableTags.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg py-2 z-50 min-w-[180px]"
                >
                  {availableTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => addTag(tag)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <AnimatePresence>
              {activeTags.map((tag) => (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => removeTag(tag)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-colors"
                >
                  #{tag}
                  <XMarkIcon className="w-3.5 h-3.5" />
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center text-lg mt-20">
            {t("noResults")}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
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
                        <h2 className="text-gray-500 dark:text-gray-300 text-2xl md:text-3xl font-Tropical font-bold text-center px-8">
                          {post.title}
                        </h2>
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-white dark:bg-zinc-800 rounded-b-[30px]">
                    <h2 className="text-gray-900 dark:text-gray-100 text-lg font-Tropical font-bold mb-2">
                      {post.title}
                    </h2>
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
                          {" · "}
                          {t("readingTime", { minutes: post.readingTime })}
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
        )}
      </div>
    </div>
  );
};

export default BlogList;
