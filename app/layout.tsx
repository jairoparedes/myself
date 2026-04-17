import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Dataslate // Tecno-Adepto",
  description:
    "Portfolio inmersivo grimdark sci-fi. Sistema tipo RPG con misiones, XP y habilidades. Ave Omnissiah.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div className="scanline-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
