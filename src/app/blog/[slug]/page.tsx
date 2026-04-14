import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { SiteChrome } from "@/components/site-chrome";
import { getPostBySlug, getPostParams } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPostParams();
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <SiteChrome current="blog">
      <main>
        <article className="section-pad article-shell">
          <Link className="back-link reveal is-visible" href="/blog">
            Back to blog
          </Link>
          <header className="article-header reveal is-visible">
            <p className="eyebrow">{post.category}</p>
            <h1>{post.title}</h1>
            <p className="hero-lede">{post.description}</p>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </header>
          <div className="article-body reveal">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </main>
    </SiteChrome>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00.000Z`));
}
