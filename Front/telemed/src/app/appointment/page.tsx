/* eslint-disable react-hooks/rules-of-hooks */
"use client";
/* import WithAuthProtect from "@/helpers/WithAuth"; */
import { DoctorCard } from "@/components/doctor/DoctorCard";
import SelectSpeciality from "@/components/doctor/SelectSpeciality";
import { Medico } from "@/interfaces/interfaces";
import useGlobalStore from "@/store/globalStore";
import { useEffect, useState } from "react";
import { fetchMedicos } from "../api/actions";
import { Loading } from "@/components/doctor/Loading";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const page = () => {
  const [medicos, setMedicos] = useState<Medico[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [file, setFile] = useState<File | null>(null);
  const {
    selectedValue,
    selectedValueDate,
    selectedValueTime,
    selectedValueDoctor,
    setSelectedValueDoctor,
    user,
  } = useGlobalStore();

  const router = useRouter();

  const handleSendInformation = async () => {
    const queryParams = new URLSearchParams({
      date: selectedValueDate,
      time: selectedValueTime,
      doctor: selectedValueDoctor,
      userId: user?.id || "",
      especialidad: selectedValue,
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
    <div className="mx-auto w-full max-w-4xl p-4 sm:p-6 flex flex-col">
      <div className="flex justify-start items-end">
        <div className="relative w-[180px] px-4 py-2 flex justify-center rounded-t-lg border-b-0 text-gray-800 border border-celeste font-bold bg-celeste border-b-celeste z-20">
          <button className="text-sm sm:text-base">Solicita tu turno</button>
        </div>
      </div>
      <div className="flex flex-col w-full p-4 sm:p-6 md:p-10 items-start border border-celeste bg-celeste z-0 space-y-5 shadow-xl rounded-t-none rounded-tr-xl rounded-br-xl rounded-bl-xl">
        <div className="w-full pb-6 sm:pb-10">
          <SelectSpeciality />
        </div>
        <div className="w-full space-y-6 sm:space-y-10">
          {loading ? (
            <Loading />
          ) : (
            medicos?.map((item, index) => (
              <div key={index} className="w-full">
                <DoctorCard
                  imagenPerfilUrl={item.imagenPerfilUrl}
                  turnosDisponibles={item.turnosDisponibles}
                  medico={item.medico}
                  especialidad={item.especialidad}
                />
              </div>
            ))
          )}
        </div>
      </div>
      <div className="flex items-end justify-end mt-4 space-y-3 space-x-3 md:space-x-5 transition-all">
        <Button
          onClick={handleCancel}
          className="bg-primary hover:bg-[#5B21B6] text-white shadow-md rounded-full px-8 py-2"
          >
          Cancelar
        </Button>
        <Button
          disabled={handleDisabled}
          onClick={handleSendInformation}
          className="bg-[#EDE9FE] hover:bg-[#DDD6FE] text-[#6D28D9] border-0 rounded-full px-8 py-2 shadow-md"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

/* export default WithAuthProtect(page); */
export default page;
{/* <div className="flex justify-end items-end p-4 md:p-6 space-x-3 md:space-x-5 transition-all">
<Button
  variant="default"
  className="bg-[#6D28D9] hover:bg-[#5B21B6] text-white rounded-full px-8 py-2"
>
  <Link href={"/appointment"}>Cancelar</Link>
</Button>
<Button
  onClick={handleSendInformation}
  variant="outline"
  className="bg-[#EDE9FE] hover:bg-[#DDD6FE] text-[#6D28D9] border-0 rounded-full px-8 py-2"
>
  Continuar
</Button>
</div> */}