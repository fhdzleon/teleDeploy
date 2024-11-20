import React from "react";
import Link from "next/link";
import LoginForm from "@/components/loginForm/LoginForm";

const Page = () => {
  return (
    <div className="flex flex-col flex-grow justify-center items-center px-4">
      <Link href={"/"}>
        <h1 className="font-semibold text-[48px] text-center mb-4">Telemed</h1>
      </Link>

      <p className="text-lg text-center mb-8">Ingrese a su cuenta</p>

      <LoginForm />

      <p className="mt-4">Olvide mi contraseña</p>

      <p className="text-center mt-8">
        No tengo cuenta.{" "}
        <Link href="/auth/signup" className="text-acent font-medium">
          Crear una
        </Link>
      </p>
    </div>
  );
};

export default Page;
