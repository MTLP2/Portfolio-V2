import React from "react";
import { getLocale } from "next-intl/server";
import { getAllPosts } from "@/utils/blog";
import HomeClient from "./HomeClient";

const Page = async () => {
  const posts = getAllPosts(await getLocale());

  return <HomeClient posts={posts} />;
};

export default Page;
