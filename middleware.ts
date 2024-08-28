import { NextResponse } from "next/server";

const locales = ['en', 'pl'];

function getLocale(request: any) { 
    const headerLangs = request.headers.get('accept-language');
    let best = locales.reduce((best, locale) => {
        if (headerLangs.includes(locale)) {
            if (best == null || headerLangs.indexOf(locale) < headerLangs.indexOf(best)) {
                return locale;
            }
        }
    }, null);
    
    if (!best) return locales[0];
    return best;
}
 
export function middleware(request: any) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  if (pathnameHasLocale) return
 
  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  if (!['.png', '.ico', '.mp4', '.svg'].includes(pathname.slice(-4))) return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}