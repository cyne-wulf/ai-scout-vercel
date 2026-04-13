import Link from "next/link";
import type { ReactNode } from "react";

type CurrentPage = "home" | "testimonials" | "awards" | "blog";

type SiteChromeProps = {
  current?: CurrentPage;
  children: ReactNode;
};

export const demoUrl = "https://video-ingest-rag-demo.vercel.app/";

export function SiteChrome({ current, children }: SiteChromeProps) {
  return (
    <>
      <Header current={current} />
      {children}
      <Footer current={current} />
    </>
  );
}

function Header({ current }: { current?: CurrentPage }) {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="AI Scout home">
        <span className="brand-mark" aria-hidden="true" />
        <span>AI Scout</span>
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href="/#product">Product</Link>
        <Link href="/#auctions">Auctions</Link>
        <Link href="/#market">Market</Link>
        <Link href="/testimonials" aria-current={current === "testimonials" ? "page" : undefined}>
          Testimonials
        </Link>
        <Link href="/awards" aria-current={current === "awards" ? "page" : undefined}>
          Awards
        </Link>
        <Link href="/blog" aria-current={current === "blog" ? "page" : undefined}>
          Blog
        </Link>
        <a href={demoUrl} target="_blank" rel="noreferrer">
          Demo
        </a>
      </nav>
    </header>
  );
}

function Footer({ current }: { current?: CurrentPage }) {
  return (
    <footer className="site-footer">
      <span>AI Scout</span>
      <div className="footer-links">
        {current !== "home" ? <Link href="/">Home</Link> : null}
        {current !== "testimonials" ? <Link href="/testimonials">Testimonials</Link> : null}
        {current !== "awards" ? <Link href="/awards">Awards</Link> : null}
        {current !== "blog" ? <Link href="/blog">Blog</Link> : null}
        <a href={demoUrl} target="_blank" rel="noreferrer">
          Demo
        </a>
      </div>
    </footer>
  );
}
