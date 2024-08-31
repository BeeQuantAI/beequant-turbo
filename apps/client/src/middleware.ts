import { NextRequest } from "next/server";
import { AuthRoute } from "./module/auth";
import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./configs/configs";

const handleI18Routing = createMiddleware({
  locales,
  defaultLocale,
});

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const pathname = request.nextUrl.pathname;
  const pagesWithoutToken = [
    "login",
    "register",
    "register-successed",
    "not-found",
  ];
  const pagesRegex = new RegExp(
    `^\/(?:en|zh-cn)\/(?:${pagesWithoutToken.join("|")})$`,
  );

  if (!token && !pagesRegex.test(pathname)) {
    const locale = request.cookies.get("NEXT_LOCALE")?.value || "en";
    const url = request.nextUrl.clone();
    url.pathname = `${locale}${AuthRoute.Login.Path}`;
    return Response.redirect(url);
  }
  const response = handleI18Routing(request);
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|auth)$).*)",
  ],
};
