import React, { useState } from "react";

interface ModalTurnosProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalTurnos: React.FC<ModalTurnosProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<"initial" | "disclaimer" | "select" | null>(
    "initial"
  );
  const [isChecked, setIsChecked] = useState(false);

  const handleClose = () => {
    setStep("initial");
    setIsChecked(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-96">
        {/* Botón de Cerrar común */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white hover:text-gray-800"
        >
          ✕
        </button>

        {step === "initial" && (
          <>
            <h2 className="text-lg font-bold mb-4">¿Qué deseas hacer?</h2>
            <button
              onClick={() => setStep("disclaimer")}
              className="w-full bg-purple-500 text-white py-2 px-4 rounded mb-4"
            >
              Agregar Turno
            </button>
            <button
              onClick={() => console.log("Ver mis turnos")}
              className="w-full bg-purple-500 text-white py-2 px-4 rounded mb-4"
            >
              Ver Mis Turnos
            </button>
            <button
              onClick={handleClose}
              className="w-full bg-gray-500 text-white py-2 px-4 rounded"
            >
              Cancelar
            </button>
          </>
        )}

        {step === "disclaimer" && (
          <>
            <h2 className="text-lg text-center font-bold mb-4">Aviso</h2>
            <p className="text-sm text-center mb-4">
              Por favor, confirma antes de continuar.
            </p>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="acceptTerms"
                className="mr-2"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label htmlFor="acceptTerms" className="text-sm">
                Las videollamadas son ideales para consultas rapidas,
                interpretacion de estudios, seguimiento medico y dudas sobre
                sintomas leves, algunas condiciones requieren una consulta
                personal
              </label>
            </div>
            <button
              onClick={() => setStep("select")}
              className={`w-full text-white py-2 px-4 rounded mb-4 ${
                isChecked ? "bg-purple-500" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isChecked}
            >
              Aceptar
            </button>
            <button
              onClick={handleClose}
              className="w-full bg-gray-500 text-white py-2 px-4 rounded"
            >
              Cancelar
            </button>
          </>
        )}

        {step === "select" && (
          <>
            <h2 className="text-lg font-bold mb-4">
              Selecciona una especialidad
            </h2>
            <select className="w-full border rounded p-2 mb-4">
              <option>Especialidad 1</option>
              <option>Especialidad 2</option>
              <option>Especialidad 3</option>
            </select>
            <button
              onClick={handleClose}
              className="w-full bg-purple-500 text-white py-2 px-4 rounded"
            >
              Continuar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalTurnos;
