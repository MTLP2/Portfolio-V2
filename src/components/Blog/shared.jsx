"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export const cardClass =
  "rounded-[18px] bg-white dark:bg-zinc-900 shadow-[0_10px_30px_rgba(0,0,0,.10),0_1px_3px_rgba(0,0,0,.06)] overflow-hidden";

export const formatDate = (date, locale) =>
  new Date(date).toLocaleDateString(locale === "en" ? "en-US" : "fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

// Fond hachuré utilisé quand il n'y a pas d'image
export const Placeholder = ({ label, className = "" }) => (
  <div
    className={`w-full h-full flex items-center justify-center bg-[repeating-linear-gradient(135deg,#f3f3f3_0_10px,#ebebeb_10px_20px)] dark:bg-[repeating-linear-gradient(135deg,#1f1f22_0_10px,#26262a_10px_20px)] font-GeistMono text-[11px] text-[#9a9a9a] text-center px-6 ${className}`}
  >
    {label}
  </div>
);

export const Cover = ({ post, sizes, className = "" }) => (
  <div className={`relative w-full aspect-[1200/630] ${className}`}>
    {post.image ? (
      <Image
        src={post.image}
        alt={post.title}
        fill
        sizes={sizes}
        className="object-cover"
      />
    ) : (
      <Placeholder label={post.title} className="absolute inset-0" />
    )}
  </div>
);

export const PostMeta = ({ post, className = "" }) => {
  const t = useTranslations("BlogComponent");
  const locale = useLocale();

  return (
    <div className={`flex flex-wrap gap-x-3 gap-y-1 text-[#9a9a9a] ${className}`}>
      {post.category && (
        <span className="text-accent">
          {t(`categories.${post.category}.name`)}
        </span>
      )}
      <span>
        {formatDate(post.date, locale)} ·{" "}
        {t("readingTime", { minutes: post.readingTime })}
      </span>
    </div>
  );
};

export const PostCard = ({ post }) => {
  const t = useTranslations("BlogComponent");

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`${cardClass} group h-full flex flex-col transition-transform duration-[250ms] hover:-translate-y-1`}
    >
      <Cover post={post} sizes="(min-width: 1024px) 380px, 100vw" className="flex-shrink-0" />
      <div className="flex-1 px-6 pt-[22px] pb-[26px] flex flex-col gap-3">
        <PostMeta post={post} className="text-xs" />
        <h3 className="text-xl font-normal leading-[1.3] text-[#111] dark:text-gray-100 [text-wrap:balance] line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm leading-[1.6] text-[#6b6b6b] dark:text-gray-400 [text-wrap:pretty] line-clamp-3">
          {post.description}
        </p>
        <span className="mt-auto text-sm text-accent">{t("readMore")} ↗</span>
      </div>
    </Link>
  );
};

export const PostRow = ({ post }) => {
  const t = useTranslations("BlogComponent");

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid grid-cols-1 md:grid-cols-[minmax(220px,380px)_minmax(0,1fr)] gap-6 md:gap-10 items-center py-9 border-b border-[#eee] dark:border-zinc-800"
    >
      <div className="rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,.10)] transition-transform duration-[250ms] group-hover:-translate-y-[3px]">
        <Cover post={post} sizes="(min-width: 768px) 380px, 100vw" />
      </div>
      <div className="flex flex-col gap-3">
        <PostMeta post={post} className="text-[13px]" />
        <h3 className="text-[28px] font-normal leading-[1.2] tracking-[-0.01em] text-[#111] dark:text-gray-100 [text-wrap:balance]">
          {post.title}
        </h3>
        <p className="text-[15px] leading-[1.65] text-[#6b6b6b] dark:text-gray-400 max-w-[560px] [text-wrap:pretty]">
          {post.description}
        </p>
        <div className="flex items-center gap-[10px] mt-1">
          {post.authorImage && (
            <Image
              src={post.authorImage}
              alt=""
              width={26}
              height={26}
              className="w-[26px] h-[26px] rounded-full object-cover"
            />
          )}
          <span className="text-[13px] text-[#111] dark:text-gray-200">
            {post.author}
          </span>
          <span className="ml-auto text-sm text-accent">
            {t("readMore")} ↗
          </span>
        </div>
      </div>
    </Link>
  );
};

export const CategoryCard = ({ category, count, image }) => {
  const t = useTranslations("BlogComponent");
  const name = t(`categories.${category}.name`);

  return (
    <Link
      href={`/blog/category/${category}`}
      className={`${cardClass} flex flex-col transition-transform duration-[250ms] hover:-translate-y-1`}
    >
      <div className="relative aspect-[4/3]">
        {image ? (
          <Image src={image} alt={name} fill sizes="300px" className="object-cover" />
        ) : (
          <Placeholder label={name} className="absolute inset-0" />
        )}
      </div>
      <div className="px-[26px] pt-6 pb-7 flex flex-col gap-[10px]">
        <div className="flex justify-between items-baseline gap-3">
          <h3 className="text-[28px] font-normal tracking-[-0.01em] text-[#111] dark:text-gray-100">
            {name}
          </h3>
          <span className="text-xs text-[#9a9a9a]">
            {t("postsCount", { count })}
          </span>
        </div>
        <p className="text-[15px] leading-[1.6] text-[#6b6b6b] dark:text-gray-400 [text-wrap:pretty]">
          {t(`categories.${category}.description`)}
        </p>
        <span className="text-sm text-accent mt-[6px]">
          {t("exploreCategory", { name })} →
        </span>
      </div>
    </Link>
  );
};

export const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="flex flex-col gap-2 mb-3">
    <span className="text-xs tracking-[.14em] uppercase text-[#9a9a9a]">
      {kicker}
    </span>
    <h2 className="text-[32px] font-normal tracking-[-0.01em] text-[#111] dark:text-gray-100">
      {title}
    </h2>
    {subtitle && (
      <p className="text-[15px] text-[#6b6b6b] dark:text-gray-400">{subtitle}</p>
    )}
  </div>
);

export const PER_PAGE = 6;

// Liste d'articles paginée côté client
export const PostList = ({ posts, kicker, title }) => {
  const t = useTranslations("BlogComponent");
  const [page, setPage] = React.useState(0);
  const nPages = Math.max(1, Math.ceil(posts.length / PER_PAGE));
  const shown = posts.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const goTo = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navClass = (disabled) =>
    `px-[14px] py-2 rounded-[10px] ${
      disabled ? "text-[#c4c4c4] dark:text-zinc-600" : "hover:text-accent"
    }`;

  return (
    <section className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-24">
      <SectionTitle kicker={kicker} title={title} />
      <div className="flex flex-col">
        {shown.map((post) => (
          <PostRow key={post.slug} post={post} />
        ))}
      </div>
      {posts.length === 0 && (
        <p className="py-10 text-[15px] text-[#9a9a9a]">{t("emptyCategory")}</p>
      )}
      {nPages > 1 && (
        <nav className="flex justify-center items-center gap-2 pt-12 text-sm text-[#111] dark:text-gray-200">
          <button
            disabled={page === 0}
            onClick={() => goTo(page - 1)}
            className={navClass(page === 0)}
          >
            ← {t("previous")}
          </button>
          {Array.from({ length: nPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-[38px] h-[38px] flex items-center justify-center rounded-[10px] border ${
                i === page
                  ? "border-accent text-accent"
                  : "border-[#e2e2e2] dark:border-zinc-700"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={page === nPages - 1}
            onClick={() => goTo(page + 1)}
            className={navClass(page === nPages - 1)}
          >
            {t("next")} →
          </button>
        </nav>
      )}
    </section>
  );
};

export const BlogShell = ({ children }) => (
  <div className="bg-white dark:bg-[#121212] text-[#111] dark:text-gray-100 font-Geist font-light antialiased min-h-screen pt-24 pb-24">
    {children}
  </div>
);
