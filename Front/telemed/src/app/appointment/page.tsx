/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import ButtonCarpet from "@/components/ButtonCarpet";
/* import WithAuthProtect from "@/helpers/WithAuth"; */
import { DoctorCard } from "@/components/doctor/DoctorCard";
import SelectSpeciality from "@/components/doctor/SelectSpeciality";
import { Card } from "@/components/ui/card";
import { Medico } from "@/interfaces/interfaces";
import useGlobalStore from "@/store/globalStore";
import { useEffect, useState } from "react";
import { fetchMedicos } from "../api/actions";

const page = () => {
  const { selectedValue } = useGlobalStore();
  const [medicos, setMedicos] = useState<Medico[]>([]);

  useEffect(() => {
    async function handleFetchMedicos() {
      try {
        const data = await fetchMedicos(selectedValue);
        setMedicos(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    handleFetchMedicos();
  }, [selectedValue]);

  return (
    <div>
      <div className="mx-auto p-6 flex flex-col ">
        <ButtonCarpet text="Solicite su Turno" />
        <Card className="flex flex-col p-10 items-start md:min-w-[500px] md:min-h-[500px]">
          <div className="pb-10">
            <SelectSpeciality />
          </div>
          <div className="space-y-10">
            {medicos?.map((item, index) => (
              <div key={index}>
                <DoctorCard
                  turnosDisponibles={item.turnosDisponibles}
                  medico={item.medico}
                  especialidad={item.especialidad}
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
      
    </div>
  );
};

/* export default WithAuthProtect(page); */
export default page;
