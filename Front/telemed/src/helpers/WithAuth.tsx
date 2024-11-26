/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { sessionStatusStorage } from "@/constants";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function WithAuthProtect(Component: any) {
  const sessionStatus = sessionStatusStorage as boolean;

  return function WithAuthProtect(props: any) {
    useEffect(() => {
      if (!sessionStatus) {
        redirect("auth/signin");
      }
    }, []);
    if (!sessionStatus) {
      return null;
    }

    return <Component {...props} />;
  };
}
