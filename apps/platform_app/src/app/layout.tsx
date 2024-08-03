import { ReactNode } from 'react';
import Providers from './provider';
import './global.css';
import 'bootstrap/dist/css/bootstrap.css';
import ThemeProvider from './themeProvider';

export const metadata = {
  title: 'BeeQuant Platform',
  description: 'Generated AI with Quantitative trading platform',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
      </head>
      <body>
        <Providers>
          <ThemeProvider>
            <main id="root">{children}</main>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
