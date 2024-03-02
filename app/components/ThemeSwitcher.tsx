"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconSun } from "./icons/IconSun";
import { IconMoon } from "./icons/IconMoon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex space-x-4">
      <Button
        variant="faded"
        radius="full"
        isIconOnly
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      >
        {theme == "dark" ? <IconSun /> : <IconMoon />}
      </Button>
    </div>
  );
}
