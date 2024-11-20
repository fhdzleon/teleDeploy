import React from "react";
import RegisterForm from "@/components/registerForm/RegisterForm";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col flex-grow justify-center items-center px-4">
      <Link href={"/"}>
        <h1 className="font-semibold text-[48px] text-center mb-4">Telemed</h1>
      </Link>
      <RegisterForm />
      <p className="text-center mt-8">
        ¿Ya tienes cuenta?
        <Link href={"/auth/signin"}>
          <span className="text-acent font-medium"> inicia sesión</span>
        </Link>
      </p>
    </div>
  );
};

export default Page;
