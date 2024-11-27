/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import useGlobalStore from "@/store/globalStore";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function WithAuthProtect(Component: any) {
  return function WithAuthProtect(props: any) {
    // Accede al estado global dentro del cuerpo de esta función
    const { sessionStatusStorage, setSessionStatusStorage, user } = useGlobalStore();

    useEffect(() => {
      // Si no hay usuario, redirigir al inicio de sesión
      if (sessionStatusStorage) {
        redirect("auth/signin");
      }

      if (user) {
        setSessionStatusStorage(false);
        console.log(user);
      }
    }, [sessionStatusStorage, user, setSessionStatusStorage]);

    // Mientras sessionStatusStorage sea true, no renderiza nada
    if (sessionStatusStorage) {
      return null;
    }

    return <Component {...props} />;
  };
}
