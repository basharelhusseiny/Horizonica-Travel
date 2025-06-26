import { NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import i18n from "./i18n"; // تأكد إنه عندك i18n.locales و i18n.defaultLocale

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const locales = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  let locale = "";

  try {
    locale = matchLocale(languages, locales, i18n.defaultLocale);
  } catch (error) {
    locale = i18n.defaultLocale;
  }

  return locale;
}

export default function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // لو اليوزر داخل على صفحة فيها اللغة فعلاً، نكمل عادي
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}`)
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
