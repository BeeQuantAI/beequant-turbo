"use client";
import { ThemeSwitcher } from "@src/module/system";
//import type { Metadata } from "next";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#0B1120')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
          }}
        />
      </head>
      <body>
        <ThemeSwitcher />
        {children}
      </body>
    </html>
  );
}
