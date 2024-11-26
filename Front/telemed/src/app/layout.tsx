import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/homepage/NavBar";
import Footer from "@/components/homepage/Footer";
import { hostGrotesk } from "../lib/fonts";

export const metadata: Metadata = {
  title: "Telemed",
  description: "App to check your health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hostGrotesk.variable}  antialiased font-hostGrotesk min-h-screen flex flex-col`}
      >
        <NavBar />
        <main className="flex-grow flex flex-col min-h-0 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
