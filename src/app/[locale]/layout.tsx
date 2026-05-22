import type { Metadata } from "next";
import "../globals.css";
import { ClientBody } from "@/components/shared/ClientBody";
import { Navigation } from "@/components/shared/Navigation";
import { Footer } from "@/components/shared/Footer";
import { NextIntlClientProvider } from 'next-intl';

// Nuevas tipografías más técnicas
import { DM_Sans, Space_Grotesk } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Vantix Marketing ",
  description: "Estrategias de alto rendimiento y arquitectura de crecimiento para dominar tu mercado digital.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className={`${dmSans.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      {/* Eliminamos clases de color en el body para que globals.css mande */}
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <NextIntlClientProvider locale={locale} messages={{}}>
          <ClientBody>
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </ClientBody>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}