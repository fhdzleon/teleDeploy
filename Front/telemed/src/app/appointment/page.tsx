/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import ButtonCarpet from "@/components/ButtonCarpet";
/* import WithAuthProtect from "@/helpers/WithAuth"; */
import { DoctorCard } from "@/components/doctor/DoctorCard";
import SelectSpeciality from "@/components/doctor/SelectSpeciality";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import useGlobalStore from "@/store/globalStore";

const page = () => {
  const { selectedValue } = useGlobalStore();

  const doctorExample = {
    name: "Dr. Fernandez",
    specialty: "Dermatólogo",
  };
  const doctorExample2 = {
    name: "Dr. Jose",
    specialty: "Odontólogo",
  };
  const doctorExample3 = {
    name: "Dr. Jose",
    specialty: "Cardiologo",
  };

  return (
    <div>
      <div className="mx-auto p-6 flex flex-col ">
        <ButtonCarpet text="Solicite su Turno" />
        <Card className="flex flex-col p-10 items-start md:min-w-[500px] md:min-h-[500px]">
          <div className="pb-10">
            <SelectSpeciality />
          </div>
          {selectedValue === "Odontólogia" && (
            <div className="space-y-10">
              <DoctorCard {...doctorExample} />
              <DoctorCard {...doctorExample} />
            </div>
          )}
          <div className="space-y-10">
            {selectedValue === "ojologo" && (
              <div>
                <DoctorCard {...doctorExample2} />
              </div>
            )}
            {selectedValue === "Cardiologo" && (
              <div>
                <DoctorCard {...doctorExample3} />
              </div>
            )}
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
