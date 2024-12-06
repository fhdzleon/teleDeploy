import React from "react";
import RegisterForm from "@/components/registerForm/RegisterForm";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col flex-grow justify-center justify-items-center px-4  ">
      <Link href={"/"}>
        <h1 className="font-semibold text-[48px] text-center mb-4">Telemed</h1>
      </Link>
      <RegisterForm />
    </div>
  );
};

export default Page;
