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
import { Loading } from "@/components/doctor/Loading";
import { Button } from "@/components/ui/button";

const page = () => {
  const { selectedValue } = useGlobalStore();
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const {
    selectedValueDate,
    selectedValueTime,
    selectedValueDoctor,
    setSelectedValueDoctor,
  } = useGlobalStore();

  useEffect(() => {
    async function handleFetchMedicos() {
      setLoading(true);
      try {
        const data = await fetchMedicos(selectedValue || "");
        setMedicos(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }

    if (selectedValue) {
      handleFetchMedicos();
    } else {
      setLoading(false);
    }
  }, [selectedValue]);

  const handleSendInformation = () => {
    console.log(selectedValueDate, selectedValueTime, selectedValueDoctor);
  };

  const handleCancel = () => {
    setSelectedValueDoctor("");
  };
  const handleDisabled =
    !selectedValueDate || !selectedValueTime || !selectedValueDoctor;

  return (
    <div>
      <div className="mx-auto p-6 flex flex-col ">
        <ButtonCarpet text="Solicite su Turno" />
        <Card className="flex flex-col p-10 items-start md:min-w-[500px] md:min-h-[500px]">
          <div className="pb-10">
            <SelectSpeciality />
          </div>
          <div className="space-y-10">
            {loading ? (
              <Loading />
            ) : (
              medicos?.map((item, index) => (
                <div key={index}>
                  <DoctorCard
                    turnosDisponibles={item.turnosDisponibles}
                    medico={item.medico}
                    especialidad={item.especialidad}
                  />
                </div>
              ))
            )}
          </div>
        </Card>
        <div className="flex justify-center md:justify-end items-end p-4 md:p-6 space-x-3 md:space-x-5 transition-all">
          <Button
            onClick={handleCancel}
            className="rounded-full bg-primary hover:bg-purple-600"
          >
            Cancelar
          </Button>
          <Button
            disabled={handleDisabled}
            onClick={handleSendInformation}
            className="rounded-full bg-primary hover:bg-purple-600 "
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

/* export default WithAuthProtect(page); */
export default page;
