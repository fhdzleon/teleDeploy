/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import ButtonCarpet from "@/components/ButtonCarpet";
/* import WithAuthProtect from "@/helpers/WithAuth"; */
import { DoctorCard } from "@/components/doctor/DoctorCard";
import SelectSpeciality from "@/components/doctor/SelectSpeciality";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Medico } from "@/interfaces/interfaces";
import useGlobalStore from "@/store/globalStore";
import { useEffect, useState } from "react";
import { fetchMedicos } from "../api/actions";

const page = () => {
  const { selectedValue } = useGlobalStore();
  const [medicos, setMedicos] = useState<Medico[]>([]);
  
  // const { info } = useFetch('http://localhost:3001/medicos-por-especialidad?especialidad=psicologia');

  async function handleFetchMedicos() {
    try {
      const data = await fetchMedicos(selectedValue);
      setMedicos(data);
    } catch (error) {
      console.error("Error fetching medicos:", error);
    }
  }

  useEffect(() => {
    handleFetchMedicos();
  }, [selectedValue])
  


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
              <DoctorCard name={item.medico} speciality={item.speciality} />          
            </div>
           
           ))}
          </div>
        </Card>
      </div>
      <div className="flex float-right p-10 space-x-5">
        <Button className="rounded-full bg-red-600 hover:bg-red-700">
          Cancelar
        </Button>
        <Button className="rounded-full bg-green-600 hover:bg-green-700">
          Continuar
        </Button>
      </div>
    </div>
  );
};

/* export default WithAuthProtect(page); */
export default page;
