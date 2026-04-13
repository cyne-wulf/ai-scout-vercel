import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Effects } from "@/components/effects";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AI Scout | Unfundables On-Chain",
    template: "%s | AI Scout",
  },
  description:
    "AI Scout delivers immutable, on-chain structured deal data from real Silicon Valley founder pitches for Web3 investors, DAOs, and agentic AI workflows.",
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Effects />
        {children}
      </body>
    </html>
  );
}
