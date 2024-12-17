import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/homepage/NavBar";
import Footer from "@/components/homepage/Footer";
import { hostGrotesk } from "../lib/fonts";
import Providers from "./Providers";

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
    <html className="scroll-smooth" lang="en">
      <Providers>
        <body
          className={`${hostGrotesk.variable}  antialiased font-hostGrotesk min-h-screen flex flex-col`}
        >
          <NavBar />
          <main className="flex-grow flex flex-col min-h-0 ">{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
