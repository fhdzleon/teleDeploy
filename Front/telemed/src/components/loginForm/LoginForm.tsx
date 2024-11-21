/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { ChangeEvent, useState } from "react";
import { validateLogin } from "@/middlewares/validateLogin";
import { CredentialErrors } from "@/interfaces/interfaces";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<CredentialErrors>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const newCredentialData = { ...userData, [name]: value };
    setUserData(newCredentialData);

    const newCredentialErrors = validateLogin(newCredentialData);
    setErrors(newCredentialErrors);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event?.preventDefault();

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch("http://localhost:3001/login/api", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) throw new Error("Credenciales inválidas");

        Swal.fire({
          icon: "success",
          title: "¡Inicio de sesión exitoso!",
          text: "Redirigiendo...",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          router.push("/");
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Credenciales invalidas",
          confirmButtonColor: "#2b4168",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error en el inicio de sesión. Verifica tus credenciales.",
        confirmButtonColor: "#2b4168",
      });
    }

    setUserData({ email: "", password: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-5 w-full max-w-md mx-auto"
    >
      <div className="flex justify-center mb-7">
        <button className="border border-acent py-2 px-5 rounded-l-full border-r-0">
          Soy paciente
        </button>
        <button className="border border-acent py-2 px-5">Soy médico</button>
        <button className="border border-acent py-2 px-5 rounded-r-full border-l-0">
          Soy administrador
        </button>
      </div>

      <div className="flex flex-col space-y-2">
        <label
          htmlFor="email"
          className="w-4/5 mx-auto   block text-start text-base font-medium text-[#07074D]"
        >
          Email
        </label>
        <input
          id="email"
          className="w-4/5 mx-auto rounded-full border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
          value={userData.email}
          onChange={handleChange}
          name="email"
          required
        />
        {errors.email && (
          <p className="text-xs text-secundary">{errors.email}</p>
        )}
      </div>

      <div className="flex flex-col space-y-2 ">
        <label
          htmlFor="password"
          className="w-4/5 mx-auto block text-start text-base font-medium text-[#07074D]"
        >
          Contraseña
        </label>
        <input
          id="password"
          className=" w-4/5 mx-auto  rounded-full border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
          type="password"
          value={userData.password}
          onChange={handleChange}
          name="password"
          required
        />

        {errors.password && (
          <p className="text-xs text-secundary">{errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className=" w-4/5 mx-auto hover:shadow-form rounded-full purple py-3 px-8 text-center text-base font-semibold text-white outline-none"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;
