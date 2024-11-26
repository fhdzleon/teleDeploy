"use client";
import React, { useState } from "react";
import ModalTurnos from "@/components/modalTurnos/ModalTurnos";
import WithAuthProtect from "@/helpers/WithAuth";
import useGlobalStore from "@/store/globalStore";
import Logout from "@/components/logout/Logout";

const Page = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const { user } = useGlobalStore();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col flex-grow justify-center items-center px-4">
      <h2 className="text-2xl mb-10">
        Bienvenid@ {user?.name} {user?.lastName}
      </h2>
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
        <Logout />
      </div>

      <ModalTurnos isOpen={ModalOpen} onClose={closeModal} />
    </div>
  );
};

export default WithAuthProtect(Page);
