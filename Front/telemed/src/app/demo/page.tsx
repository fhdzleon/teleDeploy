import React from "react";
import RegisterForm from "@/components/registerForm/RegisterForm";
import LoginForm from "@/components/loginForm/LoginForm";

const Page = () => {
  return (
    <>
      <h2 className="text-center mt-16">TESTEO PARA FORMULARIOS</h2>
      <LoginForm />
      <RegisterForm />
    </>
  );
};

export default Page;
