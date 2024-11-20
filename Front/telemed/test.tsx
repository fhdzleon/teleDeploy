"use client";
import React, { ChangeEvent, useState } from "react";
import { validateLogin } from "@/middlewares/validateLogin";
import { CredentialErrors } from "@/interfaces/interfaces";

const LoginForm = () => {
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
        const response = await fetch(
          "https://c22-20-t-webapp.onrender.com/login/api",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );
        if (!response.ok) {
          throw new Error("Credenciales invalidas");
        }
        alert("Usuario autenticado");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        alert(error.message);
      }
    } else {
      alert("Ingresa tus credenciales de inicio");
    }
    setUserData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center flex-grow ">
      <p className="font-semibold text-[48px] text-center mb-2 text-lg text-textColor ">
        Telemed
      </p>

      <p>Ingrese a su cuenta</p>

      <div className="flex">
        <button>Soy paciente</button>
        <button>Soy médico</button>
        <button>Soy administrador</button>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" flex flex-col space-y-5 max-w-3xl mx-auto"
        action=""
      >
        <label htmlFor="email">Email</label>
        <input
          className="p-2 text-black border rounded-full border-slate-500"
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          name="email"
          required
        />
        {errors.email && (
          <p className="text-xs text-secundary">{errors.email}</p>
        )}
        <label htmlFor="password">Contraseña</label>
        <input
          className="p-2 text-black border rounded-full border-slate-500"
          type="password"
          value={userData.password}
          onChange={handleChange}
          name="password"
          required
        />
        {errors.password && (
          <p className="text-xs text-secundary">{errors.password}</p>
        )}

        <button className=" bg-primary text-white rounded-3xl p-2">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
