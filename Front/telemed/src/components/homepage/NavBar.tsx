"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const path = usePathname();
  const isHomePage = path === "/"; // Check if the current path is '/'
  const navItems = [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Obras Sociales", href: "#obras-sociales" },
    { name: "Faqs", href: "#faqs" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {isHomePage && (
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link href="/" className="text-4xl font-bold text-black">
                  Telemed
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-12">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-black hover:bg-gray-100 hover:text-gray-700 px-3 py-2 rounded-md text-md font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <Link href={"/auth"}>
                  <button className="rounded-full text-white purple px-4 py-2">
                    Ingresar
                  </button>
                </Link>
              </div>
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-400"
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? (
                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </nav>

          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-500 hover:purple-light hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-200 hover:purple-light transition-all">
                <div className="px-2">
                  <Link href={"/auth"}>
                    <button className="w-full font-medium" onClick={toggleMenu}>
                      Ingresar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </header>
      )}
    </>
  );
}
