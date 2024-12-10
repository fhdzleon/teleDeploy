"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import useGlobalStore from "@/store/globalStore";
import Link from "next/link";
import Image from "next/image";
import formatFecha from "@/helpers/formatFecha";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { PATHROUTES } from "@/helpers/pathroutes";
import Swal from "sweetalert2";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const doctor = searchParams.get("doctor");
  const especialidad = searchParams.get("especialidad");

  const { user, selectedValueId } = useGlobalStore();

  console.log("id", user?.id);
  const handleSendInformation = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/turns/reserve/${user?.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            idTurno: selectedValueId,
          }),
        }
      );

      const data = await response.json();

      Swal.fire({
        title: "¡Su turno a sido solicitado con éxito!",
        text: "En breve será redirigido a su agenda",
        timer: 2500,
        showConfirmButton: false,
      }).then(() => {
        router.push(PATHROUTES.IN);
      });
      console.log(data);
    } catch (error) {
      console.error("Error al realizar la petición:", error);
    }
  };
  return (
    <div className="mx-auto w-full max-w-5xl p-4 sm:p-6 flex flex-col">
      <div className="flex justify-start items-end">
        <div className="relative w-[180px] px-4 py-2 flex justify-center rounded-t-lg border-b-0 text-gray-800 border border-celeste font-bold bg-celeste border-b-celeste z-20">
          <button className="text-sm sm:text-base">Confirme su turno</button>
        </div>
      </div>
      <div className="flex flex-col w-full p-4 sm:p-6 md:p-10 items-start border border-celeste bg-celeste z-0 space-y-5 shadow-xl rounded-t-none rounded-tr-xl rounded-br-xl rounded-bl-xl">
        <div className="w-full bg-white p-5 md:p-10 rounded-lg shadow-lg space-y-6">
          <div className="flex justify-between">
            <div className="flex">
              <Image
                className="mx-2"
                src={"/calendario.svg"}
                alt="calendario"
                height={20}
                width={20}
              />
              <p>
                {formatFecha(date ?? "no time")} {time} hrs
              </p>
            </div>

            <Card className="inline-flex px-3 py-1 bg-[#F0F7FF] border-gray-300 shadow-sm m-2 md:m-0">
              <span className="text-sm font-sm text-gray-800">
                Faltan 5 días
              </span>
            </Card>
          </div>
          <div className="flex">
            <Image
              className="mx-2"
              src={"/doctorIcon.svg"}
              alt="doctorIcon"
              height={20}
              width={20}
            />
            <p>{doctor}</p>
          </div>
          <div className="flex">
            <Image
              className="mx-2"
              src={"/nutricionista.svg"}
              alt="nutricionista"
              height={20}
              width={20}
            />
            <p className="capitalize">{especialidad}</p>
          </div>

          <div className="flex">
            <Image
              className="mx-2"
              src={"/laptop.svg"}
              alt="laptop"
              height={20}
              width={20}
            />
            <p>
              24 horas antes del turno agendado, recibirá por mail el enlace a
              Meet
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-end p-4 md:p-6 space-x-3 md:space-x-5 transition-all">
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
      </div>
    </div>
  );
};

export default Page;
