import React from "react";
import { getAllPosts } from "@/utils/blog";
import HomeClient from "./HomeClient";

const Page = () => {
  const posts = getAllPosts();

  return <HomeClient posts={posts} />;
};

export default Page;
