import React from "react";
import { getAllPosts, getPostBySlug } from "@/utils/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import BlogPost from "./BlogPost";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.description,
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

  return <BlogPost post={post} content={mdxContent} recommendations={recommendations} />;
};

export default BlogPostPage;
