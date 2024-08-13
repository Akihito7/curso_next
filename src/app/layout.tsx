import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dogs",
  description: "Curso Next js Origamid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
