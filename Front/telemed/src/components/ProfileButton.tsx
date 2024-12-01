"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logout from "./logout/Logout";
import { PATHROUTES } from "@/helpers/pathroutes";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded-full shadow transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        <Image
          src="/images/Perfilpurple.png"
          alt="Foto de perfil"
          width={32}
          height={32}
          className="rounded-full"
        />
        {/* <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg> */}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <Link
            href={PATHROUTES.MAIN}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Mis datos
          </Link>

          <Link
            href={PATHROUTES.IN}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setIsOpen(false)}
          >
            Turnos
          </Link>
          <hr className="my-1 border-t border-gray-200" />

          <Logout />
        </div>
      )}
    </div>
  );
}
