import type { Metadata } from "next";
import { SiteChrome } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Awards",
  description: "Recognition for Hacker Dojo Pitch & Mix Nights as a leading grassroots Silicon Valley pitch room.",
};

export default function AwardsPage() {
  return (
    <SiteChrome current="awards">
      <main>
        <section className="subpage-hero section-pad">
          <div className="subpage-media" aria-hidden="true">
            <img src="/assets/signal-wave.png" alt="" />
          </div>
          <div className="subpage-copy reveal is-visible">
            <p className="eyebrow">Recognition</p>
            <h1>Hacker Dojo ranked as a top pitch room.</h1>
            <p className="hero-lede">
              The visible screenshot names Hacker Dojo (Pitch &amp; Mix Nights) as the #1 grassroots pitch room result, highlighting fast feedback, practical reps, and Silicon Valley connections.
            </p>
          </div>
        </section>

        <section className="section-pad recognition-layout">
          <article className="recognition-card reveal">
            <p className="eyebrow">#1 Mention</p>
            <h2>Hacker Dojo (Pitch &amp; Mix Nights)</h2>
            <p>
              The screenshot identifies Hacker Dojo in Mountain View as a leading pitch room for early-stage founders, MVP ideas, and practice reps.
            </p>
            <div className="recognition-stats" aria-label="Recognition details">
              <span>Mountain View</span>
              <span>~2-minute pitch + live feedback</span>
              <span>50-100+ founders, builders, some angels</span>
              <span>Weekly/monthly frequency</span>
            </div>
          </article>
          <article className="quote-card reveal">
            <p className="eyebrow">Visible Summary</p>
            <blockquote>
              <p>
                This is one of the most consistent grassroots pitch rooms in Silicon Valley. You&apos;ll get raw, honest feedback fast—and connections.
              </p>
            </blockquote>
            <p className="source-line">Captured from the ChatGPT screenshot shown below.</p>
          </article>
        </section>

        <section className="section-pad proof-intro">
          <div className="section-heading reveal">
            <p className="eyebrow">Why It Matters</p>
            <h2>Recognition compounds the on-chain intelligence story.</h2>
          </div>
          <p className="large-line reveal">
            AI Scout is built on recurring, in-person Silicon Valley signal. The recognition reinforces that the source room is active, consistent, and useful for founders before any data is anchored on-chain.
          </p>
        </section>

        <section className="section-pad evidence-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Screenshot Proof</p>
            <h2>The source screenshot stays attached.</h2>
          </div>
          <div className="proof-gallery proof-gallery-single">
            <figure className="proof-shot reveal">
              <img src="/awards/2026-04-13%2004.31.43.jpg" alt="ChatGPT screenshot ranking Hacker Dojo Pitch and Mix Nights as a top grassroots pitch room in Silicon Valley" loading="lazy" />
              <figcaption>ChatGPT recognition screenshot</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
