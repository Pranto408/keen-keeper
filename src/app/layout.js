import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/components/shared/navber/Navber";
import Footer from "@/components/shared/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeenKeeper",
  description: "Friends to keep close in your life",
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        style={{ fontFamily: "var(--font-geist-sans)" }}
        className="min-h-full flex flex-col"
      >
        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}
