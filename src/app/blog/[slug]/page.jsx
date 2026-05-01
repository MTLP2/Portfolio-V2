import React from "react";
import { getAllPosts, getPostBySlug } from "@/utils/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import BlogPost from "./BlogPost";

const siteUrl = "https://matheolopes.com";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  const url = `${siteUrl}/blog/${params.slug}`;
  const imageUrl = post.image ? `${siteUrl}${post.image}` : `${siteUrl}/Photo.jpg`;

  return {
    title: `${post.title} | Mathéo Lopes`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "Mathéo Lopes"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

function generateArticleJsonLd(post, slug) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image ? `${siteUrl}${post.image}` : undefined,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author || "Mathéo Lopes",
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: "Mathéo Lopes",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`,
    },
  };
}

const BlogPostPage = ({ params }) => {
  const post = getPostBySlug(params.slug);
  const allPosts = getAllPosts();

  const recommendations = (post.recommendations || [])
    .map((slug) => allPosts.find((p) => p.slug === slug))
    .filter(Boolean);

  const mdxContent = (
    <MDXRemote
      source={post.content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
      }}
    />
  );

  const jsonLd = generateArticleJsonLd(post, params.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPost post={post} content={mdxContent} recommendations={recommendations} />
    </>
  );
};

export default BlogPostPage;
