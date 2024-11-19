import React from "react";
import RegisterForm from "@/components/registerForm/RegisterForm";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <RegisterForm />
      <div>
        Ya estas registrado?
        <Link href={"/auth/signin"}>
          <span>ingresa</span>
        </Link>
        a tu cuenta
      </div>
    </>
  );
};

export default Page;
