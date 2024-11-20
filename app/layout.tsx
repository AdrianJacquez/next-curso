import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacquez Home Page",
  description: "Home page by Adrian Jacquez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
