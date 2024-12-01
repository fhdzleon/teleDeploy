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
    setSelectedValueDoctor,
    selectedValueDate,
    selectedValueTime,
    selectedValueDoctor,
  } = useGlobalStore();

  const handleSendInformation = () => {
    setSelectedValueDoctor(medico);
    console.log(selectedValueDate, selectedValueTime, selectedValueDoctor);
  };

  return (
    <Card className="w-auto flex flex-col md:flex-row md:max-w-6xl max-w-[260px]">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-center sm:items-start gap-4">
          <div className="space-y-3 p-10">
            <div className="space-y-1 flex flex-col items-center">
              <div className="rounded-full w-60 h-60 bg-blue-50 flex justify-center items-center">
                <div className="h-48 w-48">
                  <Image
                    style={{
                      filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
                    }}
                    src={"/images/doctor1.png"}
                    alt="doctor"
                    height={1000}
                    width={1000}
                  />
                </div>
              </div>
              <h3 className="text-lg font-medium">{medico}</h3>
              <p className="text-sm capitalize">{especialidad}</p>
            </div>
            <div className="flex items-center space-x-1"></div>
          </div>
          <TimeSlotPicker turnosDisponibles={turnosDisponibles} />
        </div>
      </CardContent>
      <div className="flex items-center md:items-end p-10 space-x-5 transition-all">
        <Button className="rounded-full bg-red-600 hover:bg-red-700 hover:scale-105 ">
          Cancelar
        </Button>
        <Button
          onClick={handleSendInformation}
          className="rounded-full bg-green-600 hover:bg-green-700 hover:scale-105"
        >
          Continuar
        </Button>
      </div>
    </Card>
  );
}
