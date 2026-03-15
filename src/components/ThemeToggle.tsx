// components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] hover:bg-[var(--color-accent)] hover:text-white transition-all"
      aria-label="Toggle Theme"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}