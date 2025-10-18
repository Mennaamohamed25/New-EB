// import { Lexend, Cairo } from "next/font/google";
import { Inter } from "next/font/google";

import "../globals.css";
import Navbar from '../components/common/Navbar.jsx'
import Footer from '../components/common/Footer.jsx'
import { NextIntlClientProvider} from "next-intl"
import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", 
});



export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html     lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar/>
          {children}
        <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
