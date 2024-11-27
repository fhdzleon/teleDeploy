import React from "react";
import data from "@/helpers/mockAppointments";

const Page = () => {
  const formatFecha = (fechaISO: string): string => {
    const opciones: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
    const fecha = new Date(fechaISO);

    return fecha
      .toLocaleDateString("es-ES", opciones)
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  const getDiasRestantes = (fechaISO: string): string => {
    const fechaCita = new Date(fechaISO);
    const fechaActual = new Date();

    fechaCita.setHours(0, 0, 0, 0);
    fechaActual.setHours(0, 0, 0, 0);

    const diferenciaTiempo = fechaCita.getTime() - fechaActual.getTime();
    const diasRestantes = Math.ceil(diferenciaTiempo / (1000 * 3600 * 24)); // Convertir de milisegundos a días

    if (diasRestantes < 0) {
      return "La cita ya pasó";
    } else if (diasRestantes === 0) {
      return "Hoy";
    } else {
      return `Faltan ${diasRestantes} días`;
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-8">
      <div className=" w-full max-w-2xl flex justify-end">
        <button className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-blue-600 transition">
          Solicitar turno
        </button>
      </div>
      <div className="w-full max-w-2xl flex justify-start">
        <span>Proximos turnos</span>
      </div>

      {/* Contenedor con el borde alrededor de las cards */}
      <div className="w-full max-w-2xl border border-gray-400  p-6 space-y-4">
        {data.map((appointment, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white border border-gray-400 rounded-md p-4 w-full"
          >
            <div className="text-start space-y-3">
              <div className="flex justify-between">
                <p className="text-sm ">
                  {formatFecha(appointment.fecha)} {appointment.hora} hrs
                </p>
                <p className="text-sm border text-gray-500 border-gray-400 px-3">
                  {getDiasRestantes(appointment.fecha)}
                </p>
              </div>
              <p className="text-sm ">{appointment.doctor}</p>
              <p className="text-sm ">{appointment.especialidad}</p>
              <p className="text-sm ">
                24 horas antes del turno agendado, recibirás por email el enlace
                a Meet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
