import React from "react";
import Link from "next/link";
import LoginForm from "@/components/loginForm/LoginForm";

const Page = () => {
  return (
    <>
      <LoginForm />

      <div>
        Aun no tienes cuenta
        <Link href={"/auth/signup"}>
          <span>Registrate</span>
        </Link>
        para acceder
      </div>
    </>
  );
};

export default Page;
