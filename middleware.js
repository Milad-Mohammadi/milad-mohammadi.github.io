import { NextResponse } from "next/server";

let locales = ["en", "fa"];

function getLocale(request) {
  return locales[0];
}

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  return;
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
