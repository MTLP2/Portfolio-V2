import React from "react";
import { getAllPosts } from "@/utils/blog";
import BlogList from "./BlogList";

const siteUrl = "https://matheolopes.com";

export const metadata = {
  title: "Blog | Mathéo Lopes - Développeur Web",
  description:
    "Articles sur le développement web, Next.js, React, et mes retours d'expérience en tant que développeur freelance à Paris.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Blog | Mathéo Lopes",
    description:
      "Articles sur le développement web, Next.js, React, et mes retours d'expérience.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog | Mathéo Lopes",
    description:
      "Articles sur le développement web, Next.js, React, et mes retours d'expérience.",
  },
};

const BlogPage = () => {
  const posts = getAllPosts();

  return <BlogList posts={posts} />;
};

export default BlogPage;
