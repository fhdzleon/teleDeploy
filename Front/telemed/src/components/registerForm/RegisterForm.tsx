"use client";

import React, { useState } from "react";

const RegisterForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <>
      {step === 1 && (
        <form className=" flex flex-col space-y-5 max-w-6xl mx-auto" action="">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <div>
              <label
                className=" block text-start text-base font-medium text-[#07074D]"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className=" rounded-full border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                type="text"
                name="nombre"
                required
              />
            </div>
            <div>
              <label
                className=" block text-start text-base font-medium text-[#07074D]"
                htmlFor="apellido"
              >
                Apellido
              </label>
              <input
                className=" rounded-full border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                type="text"
                name="apellido"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <div>
              <label
                className="block text-start text-base font-medium text-[#07074D]"
                htmlFor="sexo"
              >
                Sexo
              </label>
              <select
                className="w-full md:w-auto md:min-w-[17rem] rounded-full border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md appearance-none"
                name="sexo"
                required
              >
                <option value="" disabled selected></option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>
            </div>

            <div>
              <label
                className=" block text-start text-base font-medium text-[#07074D]"
                htmlFor="telefono"
              >
                Telefono
              </label>
              <input
                className="rounded-full border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                type="text"
                name="telefono"
                required
              />
            </div>
          </div>

          <button
            className="  hover:shadow-form rounded-full purple py-3 px-8 text-center text-base font-semibold text-white outline-none"
            onClick={nextStep}
          >
            Siguiente
          </button>
        </form>
      )}
      {step === 2 && (
        <form
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
                className="md:w-1/2 mx-auto w-full flex rounded-full border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                type="email"
                name="email"
                required
              />
            </div>
            <div>
              <label
                className="md:w-1/2 mx-auto block text-start text-base font-medium text-[#07074D]"
                htmlFor="apellido"
              >
                Contraseña
              </label>
              <input
                className="md:w-1/2 mx-auto mb-6 flex rounded-full border border-acent bg-white py-3 px-6 text-base font-medium text-textColor outline-none focus:border-[#4a41fe] focus:shadow-md"
                type="password"
                name="contraseña"
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
      )}
    </>
  );
};

export default RegisterForm;
