"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Глобальный слой анимаций: сам находит элементы на странице и помечает их data-атрибутами.
// Стили анимаций лежат в app/globals.css (раздел MOTION). Разметку страниц менять не нужно.

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// анимация счётчика: "500+" -> 0..500 + "+"
const runCounter = (el: HTMLElement) => {
  const original = el.textContent ?? "";
  const match = original.match(/^(\d+)(.*)$/);
  if (!match || el.dataset.counted) return;
  el.dataset.counted = "1";
  const target = Number(match[1]);
  const suffix = match[2];
  const duration = 1600;
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 4);
    el.textContent = `${Math.round(target * eased)}${suffix}`;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = original;
  };
  requestAnimationFrame(tick);
};

const isGrid = (el: Element) => {
  const display = getComputedStyle(el).display;
  return display === "grid" || display === "inline-grid";
};

export default function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");
    const reduced = reduceMotion();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.dataset.inview = "";
          el.querySelectorAll<HTMLElement>("[data-counter]").forEach(runCounter);
          if (el.hasAttribute("data-counter")) runCounter(el);
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    const observe = (el: HTMLElement) => {
      if (el.hasAttribute("data-inview")) return;
      if (reduced) el.dataset.inview = "";
      else io.observe(el);
    };

    const reveal = (el: HTMLElement, type: string, index = 0) => {
      if (el.hasAttribute("data-reveal")) return;
      el.dataset.reveal = type;
      el.style.setProperty("--i", String(index));
      observe(el);
    };

    // видео играет только когда видно на экране; при экономии трафика остаётся постер
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const saveData = Boolean(connection?.saveData);
    const videoIo = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting && !document.hidden) video.play().catch(() => {});
        else video.pause();
      });
    });
    const watchVideo = (video: HTMLVideoElement) => {
      if (saveData || reduced) {
        video.removeAttribute("autoplay");
        video.pause();
        video.preload = "none";
        return;
      }
      videoIo.observe(video);
    };
    const onVisibility = () => {
      document.querySelectorAll<HTMLVideoElement>("[data-hero] > video").forEach((video) => {
        if (document.hidden) video.pause();
        else if (!saveData && !reduced) video.play().catch(() => {});
      });
    };
    document.addEventListener("visibilitychange", onVisibility);

    const scan = () => {
      // элементы, помеченные прошлым эффектом (до смены pathname), остались без observer
      // и навсегда скрыты с opacity: 0 — подхватываем их текущим observer
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-inview])").forEach(observe);

      const scope = document.querySelectorAll<HTMLElement>("main section, body > footer section");

      scope.forEach((section) => {
        // hero с видео
        const video = section.querySelector<HTMLVideoElement>(":scope > video");
        if (video) {
          if (!section.hasAttribute("data-hero")) watchVideo(video);
          section.dataset.hero = "";
          Array.from(section.children).forEach((child) => {
            if (child.tagName === "VIDEO") return;
            if (child.children.length === 0) (child as HTMLElement).dataset.heroShade = "";
            else (child as HTMLElement).dataset.heroContent = "";
          });
          return;
        }
        if (section.closest("[data-hero]")) return;

        // заголовки секций
        section.querySelectorAll<HTMLElement>(":scope h1, :scope h2").forEach((h) => {
          // заголовки вложенных секций (в т.ч. hero) обрабатывает сама вложенная секция
          if (h.closest("section") !== section) return;
          if (h.closest("[data-card]") || h.closest("article") || h.closest(".swiper")) return;
          reveal(h, "heading");
          if (h.tagName === "H1") h.dataset.heading = "";
          const next = h.nextElementSibling as HTMLElement | null;
          if (next && next.tagName === "P") reveal(next, "up", 2);
        });

        // карточки в сетках: появление по очереди
        [section, ...section.querySelectorAll<HTMLElement>("div, ul")].forEach((grid) => {
          if (grid.closest("section") !== section) return;
          if (grid.closest(".swiper") || !isGrid(grid) || grid.closest("[data-card]")) return;
          Array.from(grid.children).forEach((child, i) => {
            const card = child as HTMLElement;
            const onlyImage = card.children.length === 1 && card.querySelector(":scope > img");
            if (card.closest("footer")) {
              reveal(card, "up", i % 4);
              return;
            }
            card.dataset.card = onlyImage ? "image" : "";
            reveal(card, onlyImage ? "image" : "card", i % 4);

            // иконка карточки
            // карточка сама может быть ссылкой, поэтому ссылку-карточку не считаем помехой
            const icon = card.querySelector<HTMLElement>("svg")?.parentElement;
            const wrapper = icon?.closest("a, [data-counter]");
            if (icon && icon !== card && (!wrapper || wrapper === card) && icon.children.length === 1) {
              icon.dataset.icon = "";
            }
            card.querySelectorAll<HTMLElement>("h3").forEach((h3) => {
              if (/^\d+\D{0,2}$/.test(h3.textContent?.trim() ?? "")) h3.dataset.counter = "";
            });
          });
        });

        section.querySelectorAll<HTMLElement>(".swiper").forEach((swiper) => reveal(swiper, "zoom"));

        // остальные блоки: абзацы, кнопки
        section.querySelectorAll<HTMLElement>(":scope > div, :scope > p, :scope > ul").forEach((block, i) => {
          if (block.querySelector("[data-reveal]") || isGrid(block)) return;
          reveal(block, "up", i % 3);
        });
      });
    };

    let frame = 0;
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    };
    schedule();

    const mo = new MutationObserver(schedule);
    const main = document.querySelector("main");
    if (main) mo.observe(main, { childList: true, subtree: true });

    // подсветка карточки за курсором
    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest?.<HTMLElement>("[data-card]");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      videoIo.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
