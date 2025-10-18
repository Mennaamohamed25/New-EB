import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {

  matcher: [
    "/",         // الصفحة الرئيسية
    "/en/:path*", // كل المسارات اللي بتبدأ بـ /en/
    "/ar/:path*"  // كل المسارات اللي بتبدأ بـ /ar/
  ]
};
