"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ButtonCarpet from "@/components/ButtonCarpet";
import { Button } from "@/components/ui/button";
import useGlobalStore from "@/store/globalStore";
const Page = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const doctor = searchParams.get("doctor");

  const { user } = useGlobalStore();

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
            turn: {
              idTurn: "6748fc74a0b4cb86daa03d77",
              fecha: date,
              hora: time,
              medico: doctor,
              disponible: false,
            },
          }),
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error al realizar la petición:", error);
    }
  };
  return (
    <div className="container mx-auto mt-12 flex flex-col p-4 md:p-0">
      <div className="relative">
        <div className="relative mb-[-15px] z-20 ">
          <ButtonCarpet estilos="left-8 top-2" text="Confirme su turno" />
        </div>
      </div>
      <Card className="py-24 px-16 w-full ">
        <CardContent className="font-medium ">
          <p>Medico: {doctor}</p>
          <p>Fecha: {date}</p>
          <p>Hora: {time}</p>
          <p>Obra Social: hola</p>
          <h2 className="mt-12">
            Recibirás un email con la confirmación del turno y el enlace para la
            consulta.
          </h2>
        </CardContent>
      </Card>
      <div className="flex justify-center md:justify-end items-end p-4 md:p-6 space-x-3 md:space-x-5 transition-all">
        <Button className="rounded-full bg-primary hover:bg-purple-600">
          Cancelar
        </Button>

        <Button
          onClick={handleSendInformation}
          className="rounded-full bg-primary hover:bg-purple-600 "
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Page;
