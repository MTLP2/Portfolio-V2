import React from "react";
import { getAllPosts } from "@/utils/blog";
import BlogList from "./BlogList";

const BlogPage = () => {
  const posts = getAllPosts();

  return <BlogList posts={posts} />;
};

export default BlogPage;
