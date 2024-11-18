"use client";
import React from "react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  const isHomePage = path === "/";
  return (
    <>
      {isHomePage && (
        <footer className="w-full bg-gray-300">
          <div className="container mx-auto h-32 flex items-center justify-center">
            <p className="text-sm">Todos los derechos reservados</p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
