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
    <div>
      <h1 className="text-white text-center mb-2 text-lg">
        Formulario de login
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col space-y-5 max-w-3xl mx-auto"
        action=""
      >
        <input
          className="p-2 text-black"
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

        <input
          className="p-2 text-black"
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          name="password"
          required
        />
        {errors.password && (
          <p className="text-xs text-secundary">{errors.password}</p>
        )}

        <button className=" bg-red-700 p-2">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
