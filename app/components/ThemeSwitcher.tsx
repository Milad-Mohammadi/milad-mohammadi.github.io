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
      <div className="border p-2">تم فعلی: {theme}</div>
      <button onClick={() => setTheme("light")}>تم روشن</button>
      <button onClick={() => setTheme("dark")}>تم تاریک</button>
    </div>
  );
}
