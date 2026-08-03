import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PIXO — Diseño web, automatización y ecommerce",
  description:
    "Diseñamos productos digitales para negocios modernos: páginas web, automatizaciones y tiendas online.",
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
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- Archivo needs the wdth axis, which next/font/google doesn't expose */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
