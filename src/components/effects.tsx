"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("js");

    const root = document.documentElement;
    const spotlight = document.querySelector(".spotlight");

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--x", `${event.clientX}px`);
      root.style.setProperty("--y", `${event.clientY}px`);
    };

    if (spotlight) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("js");

    let observer: IntersectionObserver | null = null;
    let frame = 0;

    frame = window.requestAnimationFrame(() => {
      const revealItems = document.querySelectorAll<HTMLElement>(".reveal");

      if (!("IntersectionObserver" in window)) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
      );

      revealItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isNearViewport = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

        if (item.classList.contains("is-visible") || isNearViewport) {
          item.classList.add("is-visible");
        } else {
          observer?.observe(item);
        }
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return <div className="spotlight" aria-hidden="true" />;
}
