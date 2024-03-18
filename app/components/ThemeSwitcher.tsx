"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconSun } from "./icons/common/IconSun";
import { IconMoon } from "./icons/common/IconMoon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Button
        variant="faded"
        radius="full"
        isIconOnly
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        className="hidden md:flex"
        size="md"
      >
        {theme == "dark" ? <IconSun size={24} /> : <IconMoon size={24} />}
      </Button>

      <Button
        variant="faded"
        radius="full"
        isIconOnly
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
        className="flex md:hidden"
        size="sm"
      >
        {theme == "dark" ? <IconSun size={16} /> : <IconMoon size={16} />}
      </Button>
    </div>
  );
}
