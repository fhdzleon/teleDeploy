/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { ChangeEvent, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { PATHROUTES } from "@/helpers/pathroutes";
import {
  validateRegisterStep1,
  validateRegisterStep2,
  validateRegisterStep3,
} from "@/middlewares/validateRegister";
import { registerErrors, registerInputs } from "@/interfaces/interfaces";

const RegisterForm = () => {
  const router = useRouter();

  const [step, setStep] = useState<number>(1);

  const [userData, setUserData] = useState<registerInputs>({
    name: "",
    lastName: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    socialWork: "",
    idSocialWork: "",
    role: "patient",
  });

  const [errors, setErrors] = useState<registerErrors>({});

  // Función para avanzar al siguiente paso
  const nextStep = () => {
    let newUserErrors: registerErrors = {};

    if (step === 1) {
      newUserErrors = validateRegisterStep1(userData);
    } else if (step === 2) {
      newUserErrors = validateRegisterStep2(userData);
    }

    setErrors(newUserErrors);

    if (Object.keys(newUserErrors).length > 0) {
      return;
    }

    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => setStep((prevStep) => Math.max(prevStep - 1, 1));

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    const newUser = { ...userData, [name]: value };
    setUserData(newUser);

    let newUserErrors: registerErrors = {};
    if (step === 1) {
      newUserErrors = validateRegisterStep1(newUser);
    } else if (step === 2) {
      newUserErrors = validateRegisterStep2(newUser);
    } else if (step === 3) {
      newUserErrors = validateRegisterStep3(newUser);
    }

    setErrors(newUserErrors);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event?.preventDefault();

    const newUserErrors = validateRegisterStep1(userData);
    setErrors(newUserErrors);
    console.log(userData);

    if (Object.keys(newUserErrors).length > 0) {
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/register/api`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Usuario registrado, Inicia sesión!",
          showConfirmButton: true,
        }).then(() => {
          router.push(PATHROUTES.LOGIN);
        });
      } else if (response.status === 409) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El correo electrónico ya está registrado. Inicia sesión",
          confirmButtonColor: "#2b4168",
        }).then(() => {
          setStep(1);
        });
      } else {
        throw new Error("Datos invalidos");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Problema al intentar registrarte, intenta de nuevo",
        confirmButtonColor: "#2b4168",
      });
    }

    setUserData({
      name: "",
      lastName: "",
      gender: "",
      phone: "",
      email: "",
      password: "",
      role: "patient",
      socialWork: "",
      idSocialWork: "",
    });
  };

  return (
    <>
      {step === 1 && (
        <>
          <div className="flex items-center mt-6 mb-16">
            <div className="border border-primary bg-secundary text-primary rounded-full  h-10 w-10 flex items-center justify-center">
              1
            </div>

            <div className="h-0.5 w-16 bg-primary"></div>
            <div className="border bg-secundary rounded-full text-gray-400 h-10 w-10 flex items-center justify-center">
              2
            </div>
            <div className="h-0.5 w-16 bg-primary"></div>
            <div className="border bg-secundary rounded-full text-gray-400 h-10 w-10 flex items-center justify-center">
              3
            </div>
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
                  className=" rounded-full md:min-w-[280px] border border-borderInput/50 bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                  type="text"
                  name="name"
                  required
                />
                {errors.name && (
                  <p className="text-xs text-red-600">{errors.name}</p>
                )}
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
                  className=" rounded-full md:min-w-[280px] border border-borderInput/50 bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                  type="text"
                  name="lastName"
                  required
                />
                {errors.lastName && (
                  <p className="text-xs text-red-600">{errors.lastName}</p>
                )}
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
                  className="w-full md:w-auto md:min-w-[280px] rounded-full border border-borderInput/50 bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md appearance-none"
                  name="gender"
                  required
                >
                  <option value=""></option>
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                </select>
                {errors.gender && (
                  <p className="text-xs text-red-600">{errors.gender}</p>
                )}
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
                  className="rounded-full md:min-w-[280px] border border-borderInput/50 bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                  type="string"
                  name="phone"
                  required
                />
                {errors.phone && (
                  <p className="text-xs text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>

            <button
              className=" md:w-1/2 md:mx-auto mt-12 hover:shadow-form rounded-full purple py-3 px-8 text-center text-base font-semibold text-white outline-none"
              onClick={nextStep}
            >
              Siguiente
            </button>
          </form>
        </>
      )}

      {step === 2 && (
        <>
          <div className="flex items-center  mt-6 mb-16">
            <div className="border bg-primary rounded-full text-white h-10 w-10 flex items-center justify-center">
              1
            </div>
            <div className="h-0.5 w-16 bg-primary"></div>
            <div className="border border-primary bg-secundary text-primary rounded-full  h-10 w-10 flex items-center justify-center">
              2
            </div>
            <div className="h-0.5 w-16 bg-primary"></div>
            <div className="border bg-secundary rounded-full text-gray-400 h-10 w-10 flex items-center justify-center">
              3
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
                  Obra social
                </label>
                <select
                  id="socialWork"
                  value={userData.socialWork}
                  onChange={handleChange}
                  className="md:w-1/2 mx-auto w-full   flex rounded-full border border-borderInput/50 bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                  name="socialWork"
                  required
                >
                  <option value="" disabled></option>
                  <option value="option1">Osecac</option>
                  <option value="option2">Prevencion salud</option>
                  <option value="option3">Ospe</option>
                  <option value="option4">Avalian</option>
                  <option value="option5">Osde</option>
                  <option value="option6">Osuthgra</option>
                  <option value="option7">Luis Pasteur</option>
                </select>
                {errors.name && (
                  <p className="text-xs text-red-600">{errors.socialWork}</p>
                )}
              </div>
              <div>
                <label
                  className="md:w-1/2 mx-auto block text-start text-base font-medium text-[#07074D]"
                  htmlFor="password"
                >
                  Numero de afiliado
                </label>
                <input
                  id="idSocialWork"
                  value={userData.idSocialWork}
                  onChange={handleChange}
                  className="md:w-1/2 mx-auto mb-6 flex rounded-full border border-borderInput/50 bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                  type="number"
                  name="idSocialWork"
                  required
                />
                {errors.name && (
                  <p className="text-xs text-red-600">{errors.idSocialWork}</p>
                )}
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
                onClick={nextStep}
                className="w-full md:w-4/5 mx-auto hover:shadow-form rounded-full purple py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Siguiente
              </button>
            </div>
          </form>
        </>
      )}

      {step === 3 && (
        <>
          <div className="flex items-center  mt-6 mb-16">
            <div className="border bg-primary rounded-full text-white h-10 w-10 flex items-center justify-center">
              1
            </div>
            <div className="h-0.5 w-16 bg-primary"></div>
            <div className="border bg-primary rounded-full text-white h-10 w-10 flex items-center justify-center">
              2
            </div>
            <div className="h-0.5 w-16 bg-primary"></div>
            <div className="border border-primary bg-secundary text-primary rounded-full  h-10 w-10 flex items-center justify-center">
              3
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
                  className="md:w-1/2 mx-auto w-full flex rounded-full border border-borderInput/50 bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                  type="email"
                  name="email"
                  required
                />
                {errors.name && (
                  <p className="text-xs text-red-600">{errors.email}</p>
                )}
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
                  className="md:w-1/2 mx-auto mb-6 flex rounded-full border border-borderInput/50 bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                  type="password"
                  name="password"
                  required
                />
                {errors.name && (
                  <p className="text-xs text-red-600">{errors.password}</p>
                )}
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
