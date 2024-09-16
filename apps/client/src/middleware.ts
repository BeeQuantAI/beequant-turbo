import { NextRequest, NextResponse } from "next/server";
import { AuthRoute } from "@src/module/auth";
import { DashboardRoute } from "@src/module/dashboard";
import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./configs/configs";
import { LandingRoute } from "@src/module/landing-page/route";

const handleI18Routing = createMiddleware({
  locales,
  defaultLocale,
});

const checkRouteExists = (path: string): boolean => {
  const cleanPath = path.replace(/^\/(?:en|zh-cn)?\//, "");
  return AuthRoute.validRoutes.includes(cleanPath);
};

const middleware = (request: NextRequest) => {
  const token = request.cookies.get("token");
  const pathname = request.nextUrl.pathname;
  const pagesWithoutToken = [
    "login",
    "register",
    "register-successed",
    "landing",
  ];
  const pagesRegex = new RegExp(
    `^\/(?:en|zh-cn)?\/?(?:${pagesWithoutToken.join("|")})$`,
  );

  const response = handleI18Routing(request);
  const locale = request.cookies.get("NEXT_LOCALE")?.value || "en";
  const url = request.nextUrl.clone();
  // const routeExists = checkRouteExists(pathname);
  //
  // if (token && (pathname.includes("login") || pathname.includes("register"))) {
  //   url.pathname = `${locale}${DashboardRoute.Root.Path}`;
  //   return NextResponse.redirect(url);
  // }
  //
  // if (pathname === "/" && !token) {
  //   url.pathname = `${locale}${LandingRoute.Root.Path}`;
  //   return NextResponse.redirect(url);
  // }
  //
  // if (!token && !pagesRegex.test(pathname)) {
  //   if (routeExists) {
  //     url.pathname = `${locale}${AuthRoute.Login.Path}`;
  //     return NextResponse.redirect(url);
  //   } else if (!routeExists) {
  //     return response;
  //   }
  // }
  return response;
};
export default middleware;

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/img (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/img|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|auth|landing|login)$).*)",
  ],
};
