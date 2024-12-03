"use client";
import { Card, CardContent } from "@/components/ui/card";
import { TimeSlotPicker } from "./TimeSlot";
import { Medico } from "../../interfaces/interfaces";
import Image from "next/image";
import useGlobalStore from "@/store/globalStore";
export function DoctorCard({
  medico,
  especialidad,
  turnosDisponibles,
}: Medico) {
  const {
    selectedValueDoctor,
    setSelectedValueDoctor,
  } = useGlobalStore();

  const isSelected = selectedValueDoctor === medico;

  if (selectedValueDoctor && !isSelected) {
    return null;
  }

  const handleCardClick = () => {
    if (!isSelected) {
      setSelectedValueDoctor(medico);
    }
  };


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
            <div className="w-auto h-auto md:w-42 md:h-42  flex justify-center items-center">
              <Image
                src={"/images/doctor1.png"}
                alt="doctor"
                height={200}
                width={200}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-medium ">{medico}</h3>
              <p className="text-sm capitalize ">{especialidad}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <TimeSlotPicker
            medico={medico}
            turnosDisponibles={turnosDisponibles}
          />
        </div>
      </CardContent>
    </Card>
  );
}
