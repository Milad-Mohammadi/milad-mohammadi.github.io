"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex space-x-4">
      <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
        {theme == "dark" ? "تم روشن" : "تم تاریک"}
      </button>
    </div>
  );
}
