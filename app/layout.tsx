import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIXO — Páginas web, ecommerce, automatización e IA",
  description:
    "Creamos páginas web, tiendas online, automatizaciones e IA para hacer crecer tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- Keep the existing shared Google Fonts stylesheet with display=swap */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
