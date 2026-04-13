"use client";

import { useEffect } from "react";

export function Effects() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const root = document.documentElement;
    const spotlight = document.querySelector(".spotlight");
    const revealItems = document.querySelectorAll(".reveal");

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--x", `${event.clientX}px`);
      root.style.setProperty("--y", `${event.clientY}px`);
    };

    if (spotlight) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    let observer: IntersectionObserver | null = null;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14 },
      );

      revealItems.forEach((item) => observer?.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      observer?.disconnect();
    };
  }, []);

  return <div className="spotlight" aria-hidden="true" />;
}
