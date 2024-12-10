/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/auth/callback.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useGlobalStore from "@/store/globalStore";
import { PATHROUTES } from "@/helpers/pathroutes";

const AuthCallback = () => {
  const router = useRouter();
  const { setUser } = useGlobalStore();

  useEffect(() => {
    const searchParams = new URL(window.location.href).searchParams;
    const userData = searchParams.get("userData");

    if (userData) {
      try {
        const parsedUser = JSON.parse(decodeURIComponent(userData));
        setUser(parsedUser);

        router.replace(PATHROUTES.IN);
      } catch (error) {
        console.error("Error al procesar datos del login");
      }
    }
  }, [router, setUser]);

  return <p>Procesando autenticación...</p>;
};

export default AuthCallback;
