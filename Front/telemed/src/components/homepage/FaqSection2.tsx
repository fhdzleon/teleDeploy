import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function FaqSection2() {
  return (
    <div className="container mx-auto p-4 max-w-4xl mb-6">
      <div className="grid gap-6 md:grid-cols-2 ">
        {/* In-person Care Card */}
        <Card className="overflow-hidden rounded-3xl shadow-md">
          <CardHeader className="bg-primary text-white p-6 flex items-center justify-center gap-3">
            <div className="rounded-full bg-white/10 p-2">
              <Image src={"/x.svg"} alt="x" height={40} width={40}></Image>
            </div>
            <h2 className="text-xl font-semibold">Atención presencial</h2>
          </CardHeader>
          <CardContent className="p-6 space-y-16">
            <p className="text-center">Dolor o presión en el pecho</p>
            <p className="text-center">Hemorragias significativas</p>
            <p className="text-center">Pérdida de la conciencia</p>
            <p className="text-center">Lesiones graves o fracturas</p>
          </CardContent>
        </Card>

        {/* Video Call Card */}
        <Card className="overflow-hidden rounded-3xl shadow-md">
          <CardHeader className="bg-primary text-white p-6 flex items-center justify-center gap-3">
            <div className="rounded-full bg-white/10 p-2">
              <Image src={"/check.svg"} alt="x" height={40} width={40}></Image>
            </div>
            <h2 className="text-xl font-semibold">Atención por videollamada</h2>
          </CardHeader>
          <CardContent className="p-6 space-y-16">
            <p className="text-center">Resfriados, sinusitis y gripes</p>
            <p className="text-center">Erupciones cutáneas</p>
            <p className="text-center">Alergias y asma</p>
            <p className="text-center">Infecciones urinarias</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
