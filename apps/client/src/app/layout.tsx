import { ThemeProvider } from "next-themes";
import "./globals.css";

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
      </head>
      <body className="dark:bg-primary-800 text-primary-700 bg-primary-100 dark:text-primary-100 font-sans antialiased transition-colors">
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
