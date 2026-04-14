import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  excerpt: string;
  featuredImage?: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

type Frontmatter = {
  title?: unknown;
  description?: unknown;
  date?: unknown;
  category?: unknown;
  excerpt?: unknown;
  featuredImage?: unknown;
};

function getPostSlugs() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

function readPost(slug: string): BlogPost {
  const filePath = path.join(blogDirectory, `${slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);
  const frontmatter = data as Frontmatter;

  const post = {
    slug,
    title: readRequiredString(frontmatter.title, "title", slug),
    description: readRequiredString(frontmatter.description, "description", slug),
    date: readRequiredString(frontmatter.date, "date", slug),
    category: readRequiredString(frontmatter.category, "category", slug),
    excerpt: readRequiredString(frontmatter.excerpt, "excerpt", slug),
    featuredImage: readOptionalString(frontmatter.featuredImage),
    content,
  };

  return post;
}

function readRequiredString(value: unknown, field: string, slug: string) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Blog post "${slug}" is missing required frontmatter field "${field}".`);
  }

  return value;
}

function readOptionalString(value: unknown) {
  return typeof value === "string" && value.trim() !== "" ? value : undefined;
}

export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => readPost(slug))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string) {
  if (!getPostSlugs().includes(slug)) {
    return null;
  }

  return readPost(slug);
}

export function getPostParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}
