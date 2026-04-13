import type { Metadata } from "next";
import { SiteChrome } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Blog",
  description: "AI Scout blog foundation for future posts on on-chain deal intelligence, founder signal, and Web3 fundraising.",
};

const posts = [
  {
    label: "Deal Intelligence",
    title: "On-chain founder signal is the next fundraising primitive.",
    summary:
      "A place for future writing on live pitch capture, evidence files, investor reactions, and the data layer behind AI Scout.",
  },
  {
    label: "Auctions",
    title: "From pitch rooms to compliant crypto auction workflows.",
    summary:
      "A future home for explainers on how live founder interactions can connect to transparent transaction records.",
  },
  {
    label: "Agentic AI",
    title: "Why AI agents need primary-source deal memory.",
    summary:
      "A future thread for how structured transcripts, sentiment, and verifiable records can feed autonomous investment workflows.",
  },
];

export default function BlogPage() {
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
            <p className="eyebrow">Coming Soon</p>
            <h2>Built as a route, ready for real posts.</h2>
          </div>
          <div className="feature-grid">
            {posts.map((post, index) => (
              <article className="feature-card reveal" key={post.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p className="eyebrow">{post.label}</p>
                <h3>{post.title}</h3>
                <p>{post.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
