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
import { useRouter } from "next/navigation";

const page = () => {
  const { selectedValue } = useGlobalStore();
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [file, setFile] = useState<File | null>(null);
  const {
    selectedValueDate,
    selectedValueTime,
    selectedValueDoctor,
    setSelectedValueDoctor,
    user,
  } = useGlobalStore();

  const router = useRouter();

  const handleSendInformation = async () => {
    // e.preventDefault();
    // const formData = new FormData();
    // formData.append('name', name);
    // formData.append('email', email);

    // try {
    //   const response = await fetch(`/turns/reserve/${user?.id}`, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       id: 1,
    //       turn: {
    //         fecha: selectedValueDate,
    //         hora: selectedValueTime,
    //         medico: selectedValueDoctor,
    //         disponible: false,
    //       },
    //     }),
    //   });

    //   const data = await response.json();
    //   if (data.success) {
    //     console.log("Recurso actualizado:", data.data);
    //   } else {
    //     console.error("Error al actualizar:", data.message);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }

    const queryParams = new URLSearchParams({
      date: selectedValueDate,
      time: selectedValueTime,
      doctor: selectedValueDoctor,
      userId: user?.id || "",
    }).toString();

    router.push(`/my-turn/${user?.id}?${queryParams}`);
  };

  const handleCancel = () => {
    setSelectedValueDoctor("");
  };
  const handleDisabled =
    !selectedValueDate || !selectedValueTime || !selectedValueDoctor;

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

  return (
    <div className="mx-auto p-6 flex flex-col ">
      <div className="relative mb-[-15px] z-20 ">
        <ButtonCarpet estilos="left-10 top-2" text="Solicite su Turno" />
      </div>
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
  );
};

/* export default WithAuthProtect(page); */
export default page;
