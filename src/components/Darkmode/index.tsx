"use client";

import { useEffect, useRef, useState } from "react";
import {
  THEME_STORAGE_KEY,
  applyTheme,
  resolveInitialTheme,
  type Theme,
} from "@/lib/theme";
import styles from "./Darkmode.module.css";

export function DarkmodeToggle() {
  const pulseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    return resolveInitialTheme();
  });
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    return () => {
      if (pulseTimerRef.current) {
        clearTimeout(pulseTimerRef.current);
      }
    };
  }, []);

  const triggerPulse = () => {
    if (pulseTimerRef.current) {
      clearTimeout(pulseTimerRef.current);
    }

    setIsPulsing(true);
    pulseTimerRef.current = setTimeout(() => {
      setIsPulsing(false);
      pulseTimerRef.current = null;
    }, 520);
  };

  const onToggleTheme = () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const resolvedActive: Theme = activeTheme === "dark" ? "dark" : "light";
    const nextTheme: Theme = resolvedActive === "dark" ? "light" : "dark";

    applyTheme(nextTheme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Ignore storage errors (private mode, restricted contexts).
    }

    setTheme(nextTheme);
    triggerPulse();
  };

  return (
    <button
      type="button"
      className={`${styles.themeToggle} ${isPulsing ? styles.themeTogglePulsing : ""}`.trim()}
      onClick={onToggleTheme}
      aria-pressed={theme === "dark"}
      aria-label="Toggle color theme"
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className={styles.icon} aria-hidden="true">
        <i className="icon-dark"></i>
      </span>
    </button>
  );
}
