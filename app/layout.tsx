import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "AI Pulse News",
  description: "AI-ranked tech & startup news",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
