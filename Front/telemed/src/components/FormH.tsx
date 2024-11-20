"use client";
import React, { useState } from "react";

const FormH = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    motivo: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes agregar la lógica para enviar los datos del formulario
  };
  return (
     <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-[750px] p-12">
        <form onSubmit={handleSubmit}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full sm:w-1/2">
              <div className="mb-5 mr-0 md:mr-5">
                <label
                  htmlFor="nombre"
                  className="mb-3 block text-start text-base font-medium text-[#07074D]"
                >
                  Nombre
                </label>
                <input
                  value={formData.nombre}
                  onChange={handleChange}
                  type="text"
                  name="nombre"
                  id="nombre"
                  
                  className="w-full rounded-full border border-[#6A64F1] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#4a41fe] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="apellido"
                  className="mb-3 text-start block text-base font-medium text-[#07074D]"
                >
                  Apellido
                </label>
                <input
                  value={formData.apellido}
                  onChange={handleChange}
                  type="text"
                  name="apellido"
                  id="apellido"
                  
                  className="w-full rounded-full border border-[#6A64F1] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#4a41fe] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full sm:w-1/2">
              <div className="mb-5 mr-0 md:mr-5">
                <label
                  htmlFor="email"
                  className="mb-3 text-start block text-base font-medium text-[#07074D]"
                >
                  Email
                </label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  
                  className="w-full rounded-full border border-[#6A64F1] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#4a41fe] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="telefono"
                  className="mb-3 text-start block text-base font-medium text-[#07074D]"
                >
                  Teléfono
                </label>
                <input
                  value={formData.telefono}
                  onChange={handleChange}
                  type="text"
                  name="telefono"
                  id="telefono"
                 
                  className="w-full rounded-full border border-[#6A64F1] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#4a41fe] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full">
              <div className="mb-5">
                <label
                  htmlFor="motivo"
                  className="mb-3 text-start block text-base font-medium text-[#07074D]"
                >
                  Motivo del contacto
                </label>
                <input
                  value={formData.motivo}
                  onChange={handleChange}
                  type="text"
                  name="motivo"
                  id="motivo"
                  className="w-full rounded-full border border-[#6A64F1] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#4a41fe]focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full">
              <div className="mb-5">
                <label
                  htmlFor="mensaje"
                  className="mb-3 text-start block text-base font-medium text-[#07074D]"
                >
                  Escribe tu mensaje aqui
                </label>
                <textarea
                  value={formData.mensaje}
                  onChange={handleChange}
                  name="mensaje"
                  id="mensaje"
                  className="resize-none w-full h-48 rounded-lg border border-[#6A64F1] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#4a41fe] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex justify-end">
            <button className="hover:shadow-form rounded-full purple py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormH;
