"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const pathnameSegments = pathname.split("/");
  var language = pathnameSegments[1];
  var newPath = pathname.endsWith("/")
    ? language === "en"
      ? pathname.replace(`/en/`, `/fa/`)
      : pathname.replace(`/fa/`, `/en/`)
    : language == "en"
    ? pathname.replace(`/en`, `/fa`)
    : pathname.replace(`/fa`, `/en`);

  return (
    <div className="flex space-x-4">
      <Link href={newPath}>{language == "en" ? "فارسی" : "English"}</Link>
    </div>
  );
}
