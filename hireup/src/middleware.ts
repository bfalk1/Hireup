import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

import createMiddleware from "next-intl/middleware";


const intlMiddleware = createMiddleware({
  locales: ["en", "el"],
 
  defaultLocale: "en",
});
 
export default authMiddleware({
  afterAuth(auth, req, evt) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
  },
  // Routes that can be accessed while signed out
  publicRoutes: ['/', '/sign-in','/sign-up','/register', '/forgot-password'],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ['/no-auth-in-this-route'],
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // The matcher configuration is updated to ensure all pages and APIs are covered,
  // except for those explicitly marked as public or ignored.
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
