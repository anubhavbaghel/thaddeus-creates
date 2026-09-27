import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function Analytics() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-36F2JL5YX9";
    if (!gaId || typeof window === "undefined" || !window.gtag) return;

    window.gtag("config", gaId, {
      page_path: currentPath,
    });
  }, [currentPath]);

  return null;
}
