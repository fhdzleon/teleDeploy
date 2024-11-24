"use client";
import React, { useState } from "react";
import ModalTurnos from "@/components/modalTurnos/ModalTurnos";

const Page = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Bienvenido &apos;Usuario&apos;</h2>
      <div className="flex flex-col space-y-4">
        <button className="rounded-full text-white purple px-4 py-2" disabled>
          Mis datos
        </button>
        <button
          onClick={openModal}
          className="rounded-full text-white purple px-4 py-2"
        >
          Mis Turnos
        </button>
        <button className="rounded-full text-white purple px-4 py-2" disabled>
          Cerrar sesión
        </button>
      </div>

      <ModalTurnos isOpen={ModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Page;
