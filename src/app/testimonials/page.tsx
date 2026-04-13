import type { Metadata } from "next";
import { SiteChrome } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Founder and investor testimonials for AI Scout and the Hacker Dojo Mix & Pitch community.",
};

export default function TestimonialsPage() {
  return (
    <SiteChrome current="testimonials">
      <main>
        <section className="subpage-hero section-pad">
          <div className="subpage-media" aria-hidden="true">
            <img src="/assets/data-grid.png" alt="" />
          </div>
          <div className="subpage-copy reveal is-visible">
            <p className="eyebrow">Testimonials</p>
            <h1>Proof from the pitch floor.</h1>
            <p className="hero-lede">
              Founder and operator feedback from the Hacker Dojo pitch-auction community, captured from public recommendation screenshots and presented alongside the original proof.
            </p>
          </div>
        </section>

        <section className="section-pad proof-intro">
          <div className="section-heading reveal">
            <p className="eyebrow">Founder Signal</p>
            <h2>Live rooms create the kind of trust polished decks cannot.</h2>
          </div>
          <p className="large-line reveal">
            The recommendations point to the same pattern: active hosting, practical investor insight, efficient pitch format, and real founder engagement.
          </p>
        </section>

        <section className="section-pad testimonial-grid" aria-label="Recommendation highlights">
          <article className="quote-card reveal">
            <div>
              <p className="eyebrow">Cameron Buccellato</p>
              <h2>“The most engaging pitch event I&apos;ve been to.”</h2>
            </div>
            <blockquote>
              <p>
                SVET is a great host and runs a lively and engaging pitch night event! The most engaging pitch event I&apos;ve been to, largely in part due to SVET&apos;s hosting.
              </p>
            </blockquote>
            <p className="source-line">ballistalabs.ai</p>
          </article>

          <article className="quote-card reveal">
            <div>
              <p className="eyebrow">Gasser Aboubakr</p>
              <h2>“Practical, direct, and highly insightful.”</h2>
            </div>
            <blockquote>
              <p>
                I had the pleasure of attending an event hosted by Svet, and it was a genuinely valuable experience. His depth of knowledge as an angel investor and serial entrepreneur clearly comes through in the way he engages with founders—practical, direct, and highly insightful.
              </p>
            </blockquote>
            <p className="source-line">Unity 3D VR/XR Developer</p>
          </article>

          <article className="quote-card reveal">
            <div>
              <p className="eyebrow">Mohammad Najmzadeh, Ph.D.</p>
              <h2>“Creates real investor engagement.”</h2>
            </div>
            <blockquote>
              <p>
                Svet runs a well-organized pitch-auction at Hacker Dojo in the Bay area that brings together founders and active angels. The format is efficient and creates real investor engagement. Appreciate the opportunity to pitch and connect with the community.
              </p>
            </blockquote>
            <p className="source-line">Founder and CEO, Ph.D. in Nanoelectronics</p>
          </article>
        </section>

        <section className="section-pad evidence-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Screenshot Proof</p>
            <h2>The source screenshots stay attached.</h2>
          </div>
          <div className="proof-gallery">
            <figure className="proof-shot reveal">
              <img src="/testimonial-iphone-screenshots/2026-04-13%2004.25.35.jpg" alt="LinkedIn recommendation screenshot from Cameron Buccellato about SVET hosting an engaging pitch night" loading="lazy" />
              <figcaption>Cameron Buccellato recommendation</figcaption>
            </figure>
            <figure className="proof-shot reveal">
              <img src="/testimonial-iphone-screenshots/2026-04-13%2004.28.59.jpg" alt="LinkedIn recommendation screenshot from Gasser Aboubakr about Svet's practical investor insight" loading="lazy" />
              <figcaption>Gasser Aboubakr recommendation</figcaption>
            </figure>
            <figure className="proof-shot reveal">
              <img src="/testimonial-iphone-screenshots/2026-04-13%2004.30.08.jpg" alt="LinkedIn recommendation screenshot from Mohammad Najmzadeh about the Hacker Dojo pitch-auction format" loading="lazy" />
              <figcaption>Mohammad Najmzadeh recommendation</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
