"use client";

import { useEffect } from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.style.colorScheme = theme;
}

export function DarkmodeToggle() {
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const initialTheme = storedTheme === "dark" || storedTheme === "light"
      ? (storedTheme as Theme)
      : systemTheme;

    applyTheme(initialTheme);
  }, []);

  const onToggleTheme = () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const toggledTheme: Theme = activeTheme === "dark" ? "light" : "dark";

    applyTheme(toggledTheme);
    window.localStorage.setItem("theme", toggledTheme);
  };

  return (
    <button
      type="button"
      className="themeToggle"
      onClick={onToggleTheme}
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <span className="themeTogglePrompt">$</span>
      <span>theme:</span>
      <span className="themeToggleState" aria-live="polite">
        <span className="themeStateAuto">auto</span>
        <span className="themeStateLight">light</span>
        <span className="themeStateDark">dark</span>
      </span>
    </button>
  );
}
