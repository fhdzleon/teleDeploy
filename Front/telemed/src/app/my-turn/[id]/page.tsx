"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ButtonCarpet from "@/components/ButtonCarpet";
import { Button } from "@/components/ui/button";

const Page = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const doctor = searchParams.get("doctor");
  return (
    <div className="container mx-auto mt-12 flex flex-col">
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

        <Button className="rounded-full bg-primary hover:bg-purple-600 ">
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Page;
