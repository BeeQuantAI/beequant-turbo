import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import ProviderWrapper from "@src/boot/ProviderWrapper";
import React from "react";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
      </head>
      <body className="dark:bg-primary-800 text-primary-700 bg-primary-100 dark:text-primary-100 h-auto font-sans antialiased transition-colors">
        <ProviderWrapper>
          <ThemeProvider attribute="class">
            <NextIntlClientProvider
              messages={messages}
              timeZone="Australia/Sydney"
            >
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </ProviderWrapper>
      </body>
    </html>
  );
}
