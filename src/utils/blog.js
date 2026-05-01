import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getReadingTime(content) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        readingTime: getReadingTime(content),
        ...data,
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    readingTime: getReadingTime(content),
    ...data,
  };
}
