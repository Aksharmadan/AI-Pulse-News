import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "AI Pulse News",
  description: "AI-powered real-time news intelligence platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
