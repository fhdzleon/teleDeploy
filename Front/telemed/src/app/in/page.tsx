import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Bienvenido &apos;Usuario&apos;</h2>
      <div className="flex flex-col space-y-4">
        <button className="rounded-full text-white purple px-4 py-2" disabled>
          Mis datos
        </button>
        <button className="rounded-full text-white purple px-4 py-2" disabled>
          Mis Turnos
        </button>
        <button className="rounded-full text-white purple px-4 py-2" disabled>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Page;
