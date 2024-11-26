"use client";

import { useState } from "react";
import { format, isSameDay, parseISO } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";

// Datos simulados
const especialidades = ["Cardiología", "Dermatología", "Pediatría"];
const doctores = [
  { nombre: "Dr. Pérez", especialidad: "Cardiología" },
  { nombre: "Dra. Gómez", especialidad: "Dermatología" },
  { nombre: "Dr. Sánchez", especialidad: "Pediatría" },
];

const horarios = {
  Cardiología: ["2024-11-30", "2024-12-01"],
  Dermatología: ["2024-12-02", "2024-12-03"],
  Pediatría: ["2024-12-05", "2024-12-06"],
};

export default function CalendarioCitas() {
  const [especialidad, setEspecialidad] = useState<string | null>(null);
  const [doctor, setDoctor] = useState<string | null>(null);
  const [fecha, setFecha] = useState<Date | undefined>(undefined);
  const [disabledFields, setDisabledFields] = useState({
    especialidad: false,
    doctor: true,
    calendario: true,
  });

  const resetForm = () => {
    setEspecialidad(null);
    setDoctor(null);
    setFecha(undefined);
    setDisabledFields({ especialidad: false, doctor: true, calendario: true });
  };

  const handleEspecialidadChange = (value: string) => {
    setEspecialidad(value);
    setDisabledFields((prev) => ({
      ...prev,
      especialidad: true,
      doctor: false,
    }));
  };

  const handleDoctorChange = (value: string) => {
    setDoctor(value);
    setDisabledFields((prev) => ({ ...prev, doctor: true, calendario: false }));
  };

  const isDayDisabled = (date: Date): boolean => {
    const fechasDisponibles = especialidad
      ? horarios[especialidad as keyof typeof horarios]?.map((fecha) =>
          parseISO(fecha)
        ) || []
      : [];

    return !fechasDisponibles.some((disponible) => isSameDay(disponible, date));
  };

  return (
    <div className="flex flex-col items-start bg-background p-16">
      {/* Campo de selección de especialidad */}
      <div className="mb-4 flex flex-col justify-start items-start">
        <select
          id="especialidad"
          value={especialidad || ""}
          onChange={(e) => handleEspecialidadChange(e.target.value)}
          disabled={disabledFields.especialidad}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
        >
          <option value="">Selecciona una especialidad</option>
          {especialidades.map((esp) => (
            <option key={esp} value={esp}>
              {esp}
            </option>
          ))}
        </select>
      </div>

      {/* Campo de selección de doctor */}
      <div className="mb-4 flex justify-end">
        <select
          id="doctor"
          value={doctor || ""}
          onChange={(e) => handleDoctorChange(e.target.value)}
          disabled={disabledFields.doctor}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none"
        >
          <option value="">Selecciona un doctor</option>
          {doctores
            .filter((doc) => doc.especialidad === especialidad)
            .map((doc) => (
              <option key={doc.nombre} value={doc.nombre}>
                {doc.nombre}
              </option>
            ))}
        </select>
      </div>

      {/* Calendario */}
      <div className="flex flex-row">
        <div className="w-auto p-0 border-4 border-purple-300 mb-4">
          <Calendar
            mode="single"
            selected={fecha}
            onSelect={setFecha}
            disabled={
              disabledFields.calendario
                ? undefined
                : (date) => isDayDisabled(date)
            }
            locale={es}
          />
        </div>

        {/* Información seleccionada */}
        {especialidad && doctor && fecha && (
          <p className="mt-4 text-center p-10 ">
            Has seleccionado:
            <br />
            Especialidad: <strong>{especialidad}</strong>
            <br />
            Doctor: <strong>{doctor}</strong>
            <br />
            Fecha: <strong>{format(fecha, "PPP", { locale: es })}</strong>
          </p>
        )}
      </div>

      {/* Botón de reiniciar */}
      <button
        onClick={resetForm}
        className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600"
      >
        Reiniciar
      </button>
    </div>
  );
}
