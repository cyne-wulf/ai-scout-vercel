import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/site-chrome";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI Scout blog foundation for future posts on on-chain deal intelligence, founder signal, and Web3 fundraising.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <SiteChrome current="blog">
      <main>
        <section className="subpage-hero section-pad">
          <div className="subpage-media" aria-hidden="true">
            <img src="/assets/hero-chain-field.png" alt="" />
          </div>
          <div className="subpage-copy reveal is-visible">
            <p className="eyebrow">Blog</p>
            <h1>Research notes for the on-chain deal room.</h1>
            <p className="hero-lede">
              The blog route is ready for the next layer of AI Scout: founder signal, compliant auction mechanics, agentic investment workflows, and trustworthy Web3 deal data.
            </p>
          </div>
        </section>

        <section className="section-pad product-band">
          <div className="section-heading reveal">
            <p className="eyebrow">Research Notes</p>
            <h2>Primary-source thinking for Web3 deal intelligence.</h2>
          </div>
          <div className="blog-grid">
            {posts.map((post, index) => (
              <article className="blog-card reveal" key={post.slug}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p className="eyebrow">{post.category}</p>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </article>
            ))}
          </div>
        </section>
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
