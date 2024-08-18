import './globals.css';
import React from 'react';
import ProviderWrapper from '@src/boot/ProviderWrapper';

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <head>
      <link
        rel="stylesheet"
        href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
      />
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
    <body
      className="text-primary-700 dark:bg-primary-800 bg-primary-100 dark:text-primary-100 font-sans antialiased transition-colors">
    <ProviderWrapper>
      {children}
    </ProviderWrapper>
    </body>
    </html>
  );
}
