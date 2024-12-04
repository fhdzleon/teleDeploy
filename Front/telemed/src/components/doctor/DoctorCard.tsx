"use client";
import { Card, CardContent } from "@/components/ui/card";
import { TimeSlotPicker } from "./TimeSlot";
import { Medico } from "../../interfaces/interfaces";
import { Button } from "../ui/button";
import Image from "next/image";
import useGlobalStore from "@/store/globalStore";
export function DoctorCard({
  medico,
  especialidad,
  turnosDisponibles,
}: Medico) {
  const {
    selectedValueDate,
    selectedValueTime,
    selectedValueDoctor,
    setSelectedValueDoctor,
  } = useGlobalStore();

  const isSelected = selectedValueDoctor === medico;

  if (selectedValueDoctor && !isSelected) {
    return null;
  }

  const handleSendInformation = () => {
    console.log(selectedValueDate, selectedValueTime, selectedValueDoctor);
  };

  const handleCardClick = () => {
    if (!isSelected) {
      setSelectedValueDoctor(medico);
    }
  };

  const handleCancel = () => {
    setSelectedValueDoctor("");
  };
  const handleDisabled = !selectedValueDate || !selectedValueTime || !selectedValueDoctor

  return (
    <Card
      className={`w-full max-w-[90vw] md:max-w-6xl flex flex-col md:flex-row transition-all  ${
        isSelected ? "" : "cursor-pointer hover:bg-blue-50"
      } `}
      onClick={handleCardClick}
    >
      <CardContent className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
        <div className="space-y-3 w-full md:w-auto">
          <div className="space-y-2 flex flex-col items-center">
            <div className="rounded-full w-40 h-40 md:w-60 md:h-60 bg-blue-50 flex justify-center items-center">
              <div className="h-32 w-32 md:h-48 md:w-48">
                <Image
                  style={{
                    filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
                  }}
                  src={"/images/doctor1.png"}
                  alt="doctor"
                  height={1000}
                  width={1000}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-medium ">{medico}</h3>
              <p className="text-sm capitalize ">{especialidad}</p>
            </div>
          </div>
        </div>

        <TimeSlotPicker medico={medico} turnosDisponibles={turnosDisponibles} />
      </CardContent>
      <div className="flex justify-center md:justify-end items-end p-4 md:p-6 space-x-3 md:space-x-5 transition-all">
        <Button
          onClick={handleCancel}
          className="rounded-full bg-red-600 hover:bg-red-700 hover:scale-105"
        >
          Cancelar
        </Button>
        <Button
          disabled={handleDisabled}
          onClick={handleSendInformation}
          className="rounded-full bg-green-600 hover:bg-green-700 hover:scale-105"
        >
          Continuar
        </Button>
      </div>
    </Card>
  );
}
