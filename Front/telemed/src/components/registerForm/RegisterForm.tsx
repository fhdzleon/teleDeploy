/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { ChangeEvent, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    role: "patient",
  });

  /*   const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
  }); */

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    const newUser = { ...userData, [name]: value };
    setUserData(newUser);

    /*   const newUserErrors = validateRegister(newUser);
    setErrors(newUserErrors); */
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event?.preventDefault();
    console.log(userData);

    /*    if (Object.keys(errors).length === 0) { */
    try {
      const response = await fetch("http://localhost:3001/register/api", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) throw new Error("Datos invalidos");

      Swal.fire({
        icon: "success",
        title: "¡Usuario registrado, Inicia sesión!",
        showConfirmButton: true,
      }).then(() => {
        router.push("/auth/signin");
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Error en el inicio de sesión. Verifica tus credenciales.",
        confirmButtonColor: "#2b4168",
      });
    }
    /*  } else { */
    /*     Swal.fire({
      icon: "error",
      title: "Error",
      text: "Error en el inicio de sesión. Verifica tus credenciales.",
      confirmButtonColor: "#2b4168",
    }); */

    /*   } */

    setUserData({
      name: "",
      lastName: "",
      gender: "",
      phone: "",
      email: "",
      password: "",
      role: "patient",
    });
  };

  return (
    <>
      {step === 1 && (
        <>
          <div className="flex items-center space-x-2 mb-16">
            <div className="border bg-primary rounded-full text-white h-10 w-10 flex items-center justify-center">
              1
            </div>
            <div className="h-0.5 w-8 bg-primary"></div>
            <button
              onClick={nextStep}
              className="border bg-secundary rounded-full text-textColor h-10 w-10 flex items-center justify-center"
            >
              2
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col space-y-5 max-w-6xl mx-auto"
            action=""
          >
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <div>
                <label
                  className=" block text-start text-base font-medium text-[#07074D]"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  value={userData.name}
                  onChange={handleChange}
                  className=" rounded-full md:min-w-[280px] border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div>
                <label
                  className=" block text-start text-base font-medium text-[#07074D]"
                  htmlFor="lastName"
                >
                  Apellido
                </label>
                <input
                  id="lastName"
                  value={userData.lastName}
                  onChange={handleChange}
                  className=" rounded-full md:min-w-[280px] border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                  type="text"
                  name="lastName"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <div>
                <label
                  className="block text-start text-base font-medium text-[#07074D]"
                  htmlFor="gender"
                >
                  Sexo
                </label>
                <select
                  id="gender"
                  value={userData.gender}
                  onChange={handleChange}
                  className="w-full md:w-auto md:min-w-[280px] rounded-full border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md appearance-none"
                  name="gender"
                  required
                >
                  <option value=""></option>
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                </select>
              </div>

              <div>
                <label
                  className=" block text-start text-base font-medium text-[#07074D]"
                  htmlFor="phone"
                >
                  Telefono
                </label>
                <input
                  id="phone"
                  value={userData.phone}
                  onChange={handleChange}
                  className="rounded-full md:min-w-[280px] border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                  type="text"
                  name="phone"
                  required
                />
              </div>
            </div>

            <button
              className=" md:w-1/2 md:mx-auto  hover:shadow-form rounded-full purple py-3 px-8 text-center text-base font-semibold text-white outline-none"
              onClick={nextStep}
            >
              Siguiente
            </button>
          </form>
        </>
      )}
      {step === 2 && (
        <>
          <div className="flex items-center space-x-2 mb-16">
            <button
              onClick={prevStep}
              className="border bg-secundary rounded-full text-textColor h-10 w-10 flex items-center justify-center"
            >
              1
            </button>
            <div className="h-0.5 w-8 bg-primary"></div>
            <div className="border bg-primary rounded-full text-white h-10 w-10 flex items-center justify-center">
              2
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5 max-w-6xl md:min-w-[50rem] mx-auto"
            action=""
          >
            <div className="flex flex-col space-y-6">
              <div>
                <label
                  className="md:w-1/2 mx-auto block text-start text-base font-medium text-[#07074D]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  value={userData.email}
                  onChange={handleChange}
                  className="md:w-1/2 mx-auto w-full flex rounded-full border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <label
                  className="md:w-1/2 mx-auto block text-start text-base font-medium text-[#07074D]"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  value={userData.password}
                  onChange={handleChange}
                  className="md:w-1/2 mx-auto mb-6 flex rounded-full border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                  type="password"
                  name="password"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row  space-y-2 md:space-0 md:space-x-4">
              <button
                onClick={prevStep}
                className=" w-full md:w-4/5 mx-auto hover:shadow-form rounded-full bg-secundary text-primary py-3 px-8 text-center text-base font-semibold  outline-none"
              >
                Volver
              </button>
              <button
                type="submit"
                className="w-full md:w-4/5 mx-auto hover:shadow-form rounded-full purple py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Registrarse
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default RegisterForm;
