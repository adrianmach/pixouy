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
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- Archivo needs the wdth axis, which next/font/google doesn't expose */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;800;900&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
