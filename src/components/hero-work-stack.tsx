import { useEffect, useState } from "react";
import { realWork } from "@/lib/real-work";

const heroWork = [realWork[2], realWork[7], realWork[3], realWork[9]].filter(
  (item): item is NonNullable<typeof item> => Boolean(item),
);

const baseZIndexes = [40, 30, 20, 10];

export function HeroWorkStack() {
  const [frontIndex, setFrontIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (isPaused || reducedMotion.matches || heroWork.length < 2) return;

    const interval = window.setInterval(() => {
      setFrontIndex((current) => (current + 1) % heroWork.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative mt-12 lg:mt-0">
      <div className="absolute -top-9 left-4 z-[70] flex items-center gap-1.5 rounded-full bg-background/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-foreground shadow-sm backdrop-blur-sm sm:-top-10 sm:px-3.5 sm:py-2 sm:text-xs">
        <span className="text-primary" aria-hidden="true">♥</span>
        <span className="relative">
          {heroWork.map((item, index) => (
            <span
              key={item.src}
              className={`transition-opacity duration-700 ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none ${index === frontIndex ? "opacity-100" : "absolute inset-0 opacity-0"}`}
              aria-hidden={index !== frontIndex}
            >
              {item.label}
            </span>
          ))}
        </span>
      </div>

      <div
        className="hero-frame group relative aspect-[1.22/1] isolate"
        aria-label="A rotating selection of real handmade work"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        tabIndex={0}
      >
        {heroWork.map((item, imageIndex) => {
          const isActive = imageIndex === frontIndex;
          return (
            <div
              key={item.src}
              className={`absolute inset-0 overflow-hidden bg-muted transition-opacity duration-1000 ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none ${isActive ? "opacity-100" : "opacity-0"}`}
              style={{ zIndex: isActive ? 50 : baseZIndexes[imageIndex] }}
              aria-hidden={!isActive}
            >
              <img
                src={item.src}
                alt={isActive ? item.alt : ""}
                width={768}
                height={1024}
                fetchPriority={imageIndex === 0 ? "high" : "auto"}
                loading={imageIndex === 0 ? "eager" : "lazy"}
                className="size-full object-cover"
              />
            </div>
          );
        })}

        <div className="absolute bottom-4 right-4 z-[60] flex gap-1.5" aria-hidden="true">
          {heroWork.map((item, index) => (
            <span
              key={item.src}
              className={`h-1.5 rounded-full bg-background/90 shadow-sm transition-[width,opacity] duration-500 ${index === frontIndex ? "w-7 opacity-100" : "w-1.5 opacity-65"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
