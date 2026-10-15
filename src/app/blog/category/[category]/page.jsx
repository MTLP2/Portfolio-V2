import React from "react";
import { notFound } from "next/navigation";
import { getLocale, getTranslations } from "next-intl/server";
import { CATEGORIES, getAllPosts, getCategorySummaries } from "@/utils/blog";
import CategoryView from "./CategoryView";

const siteUrl = "https://matheolopes.com";

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  if (!CATEGORIES.includes(params.category)) return {};
  const t = await getTranslations("BlogComponent");
  const name = t(`categories.${params.category}.name`);
  const description = t(`categories.${params.category}.description`);
  const url = `${siteUrl}/blog/category/${params.category}`;

  return {
    title: `${name} | Blog | Mathéo Lopes`,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${name} | Blog | Mathéo Lopes`, description, url, type: "website" },
  };
}

const CategoryPage = async ({ params }) => {
  if (!CATEGORIES.includes(params.category)) notFound();

  const locale = await getLocale();
  const allPosts = getAllPosts(locale);
  const summaries = getCategorySummaries(allPosts);

  return (
    <CategoryView
      current={summaries.find((c) => c.category === params.category)}
      others={summaries.filter((c) => c.category !== params.category)}
      posts={allPosts.filter((p) => p.category === params.category)}
    />
  );
};

export default CategoryPage;
