import React from "react";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Flipping Work App",
  description: "Clean starter for Mason's work app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
