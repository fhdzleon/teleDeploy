"use server";

import { Medico } from "@/interfaces/interfaces";
import { revalidatePath } from "next/cache";

export async function fetchMedicos(especialidad: string): Promise<Medico[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/medicos-por-especialidad?especialidad=${especialidad}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Error al obtener los datos de los médicos");
    }

    const data: Medico[] = await res.json();
    console.log(data);

    revalidatePath("/appointment");
    
    return data;
  } catch (error) {
    const e = error as Error;
    console.log(e);
    return [];
  }
}
