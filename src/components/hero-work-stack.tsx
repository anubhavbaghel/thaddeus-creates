import { useEffect, useState } from "react";
import { realWork } from "@/lib/real-work";

const heroWork = [realWork[2], realWork[7], realWork[3], realWork[9]].filter(
  (item): item is NonNullable<typeof item> => Boolean(item),
);

const cardPositions = [
  "z-40 translate-x-0 translate-y-0 rotate-0 scale-100",
  "z-30 translate-x-2 translate-y-2 rotate-[0.8deg] scale-[0.985]",
  "z-20 translate-x-4 translate-y-4 rotate-[1.6deg] scale-[0.97]",
  "z-10 translate-x-6 translate-y-6 rotate-[2.4deg] scale-[0.955]",
];

export function HeroWorkStack() {
  const [frontIndex, setFrontIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (isPaused || reducedMotion.matches || heroWork.length < 2) return;

    const timer = window.setInterval(() => {
      setFrontIndex((current) => (current + 1) % heroWork.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="hero-frame group relative aspect-[1.22/1] isolate"
      aria-label="A rotating selection of real handmade work"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
    >
      <span className="absolute -left-3 top-8 z-50 -rotate-3 rounded-sm bg-accent px-3 py-2 text-xs font-semibold shadow-sm sm:-left-6 sm:text-sm">
        made from memories
      </span>

      {heroWork.map((item, imageIndex) => {
        const position = (imageIndex - frontIndex + heroWork.length) % heroWork.length;
        return (
          <div
            key={item.src}
            className={`absolute inset-0 origin-bottom-left overflow-hidden bg-muted transition-[transform,opacity] duration-1000 ease-[cubic-bezier(.22,.8,.22,1)] motion-reduce:transition-none ${cardPositions[position]}`}
            aria-hidden={position !== 0}
          >
            <img
              src={item.src}
              alt={position === 0 ? item.alt : ""}
              width={768}
              height={1024}
              fetchPriority={imageIndex === 0 ? "high" : "auto"}
              loading={imageIndex === 0 ? "eager" : "lazy"}
              className="size-full object-cover"
            />
          </div>
        );
      })}

      <div className="absolute bottom-4 right-4 z-50 flex gap-1.5" aria-hidden="true">
        {heroWork.map((item, index) => (
          <span
            key={item.src}
            className={`h-1.5 rounded-full bg-background/90 shadow-sm transition-[width,opacity] duration-500 ${index === frontIndex ? "w-7 opacity-100" : "w-1.5 opacity-65"}`}
          />
        ))}
      </div>
    </div>
  );
}