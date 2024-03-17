import { NextResponse } from "next/server";

let locales = ["en", "fa"];
let excludedFileExtensions = [".png", ".jpg", ".jpeg", ".pdf", ".svg", "html"]; // Add more file extensions as needed

function getLocale(request) {
  return locales[0];
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isExcludedFile = excludedFileExtensions.some((extension) =>
    pathname.toLowerCase().endsWith(extension)
  );

  if (!isExcludedFile) {
    const pathnameHasLocale = locales.some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (!pathnameHasLocale) {
      const locale = getLocale(request);
      request.nextUrl.pathname = `/${locale}${pathname}`;
      return NextResponse.redirect(request.nextUrl);
    }
  }

  return;
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
