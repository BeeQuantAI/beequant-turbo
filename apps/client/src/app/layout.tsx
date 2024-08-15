import { ThemeToggle } from "@src/module/system";
import "./globals.css";

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
      <body className="dark:bg-primary-800 text-primary-700 bg-primary-100 dark:text-primary-100 font-sans antialiased transition-colors duration-300">
        <span className="fixed right-2 top-2">
          <ThemeToggle />
        </span>
        {children}
      </body>
    </html>
  );
}
