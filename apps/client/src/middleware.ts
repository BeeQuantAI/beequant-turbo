import { NextRequest, NextResponse } from "next/server";
import { AuthRoute } from "./module/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = AuthRoute.Login.Path;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
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
    "/((?!_next/static|_next/image|favicon.ico|login|register|.*\\.(?:svg|png|jpg|jpeg|gif|webp|auth)$).*)",
  ],
};
