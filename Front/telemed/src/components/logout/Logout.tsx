import React from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { PATHROUTES } from "@/helpers/pathroutes";
import useGlobalStore from "@/store/globalStore";

const Logout = () => {
  const router = useRouter();
  const { setUser } = useGlobalStore();

  const handleLogout = () => {
    document.cookie =
      "userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    localStorage.removeItem("userData");

    setUser(null);

    Swal.fire({
      icon: "success",
      title: "¡Cierre de sesión exitoso!",
      text: "Redirigiendo...",
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      router.push(PATHROUTES.MAIN);
    });
  };

  return (
    <button
      onClick={handleLogout} // Llama a handleLogout para realizar la limpieza
      className="rounded-full text-white purple px-4 py-2"
    >
      Cerrar sesión
    </button>
  );
};

export default Logout;
