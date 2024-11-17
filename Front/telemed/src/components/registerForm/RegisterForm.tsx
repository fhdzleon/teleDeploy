import React from "react";

const RegisterForm = () => {
  return (
    <div className="mt-12">
      <h1 className="text-white text-center mb-2 text-lg">
        Fromulario de registro
      </h1>
      <form className=" flex flex-col space-y-5 max-w-3xl mx-auto" action="">
        <input
          className="p-2 text-black"
          type="text"
          placeholder="Nombre"
          name="nombre"
          required
        />
        <input
          className="p-2 text-black"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="p-2 text-black"
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input
          className="p-2 text-black"
          type="tel"
          placeholder="Teléfono"
          name="telefono"
          pattern="[0-9]{10}"
          required
        />

        <div className="flex items-center space-x-4">
          <label className="font-medium text-white">Sexo:</label>
          <div className="flex space-x-4 items-center">
            <label className="flex items-center space-x-2">
              <input
                className="h-5 w-5 text-red-600 border-gray-300 focus:ring-red-500"
                type="radio"
                id="masculino"
                name="sexo"
                value="masculino"
              />
              <span>Masculino</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                className="h-5 w-5 text-red-600 border-gray-300 focus:ring-red-500"
                type="radio"
                id="femenino"
                name="sexo"
                value="femenino"
              />
              <span>Femenino</span>
            </label>
          </div>
        </div>

        <button className=" bg-red-700 p-2" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
