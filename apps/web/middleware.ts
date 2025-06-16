import { I18nMiddleware } from "@repo/localization/src/locale-middleware";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
