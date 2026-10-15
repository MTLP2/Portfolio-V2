import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

// Les noms et descriptions des catégories sont dans messages/*.json (BlogComponent.categories)
export const CATEGORIES = ["dev", "indie", "career", "taste"];

function getReadingTime(content) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

// Utilise titleEn / descriptionEn quand la langue est l'anglais et qu'ils existent
function localize(data, locale) {
  if (locale !== "en") return data;
  return {
    ...data,
    title: data.titleEn || data.title,
    description: data.descriptionEn || data.description,
  };
}

export function getAllPosts(locale = "fr") {
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
        ...localize(data, locale),
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Nombre d'articles et image de l'article le plus récent pour chaque catégorie
export function getCategorySummaries(posts) {
  return CATEGORIES.map((category) => {
    const inCategory = posts.filter((p) => p.category === category);
    return {
      category,
      count: inCategory.length,
      image: inCategory.find((p) => p.image)?.image || null,
    };
  });
}

export function getPostBySlug(slug, locale = "fr") {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    readingTime: getReadingTime(content),
    ...localize(data, locale),
  };
}
