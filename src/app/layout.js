import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBarWeb from "./NavBarWeb";
import ContextAutWeb from "./ContextAutWeb";


import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
    return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>

      <ContextAutWeb>
          <>
              <NavBarWeb></NavBarWeb>
              <div className={'container bg-dark-subtle min-vh-100'}>
                  {children}
              </div>
          </>
      </ContextAutWeb>
      </body>
    </html>
  );
}
