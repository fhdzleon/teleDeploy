"use client";
// import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TimeSlotPicker } from "./TimeSlot";

interface DoctorCardProps {
  name: string;
  specialty: string;
  //   rating: number;
  //   availableDays: Date[];
}

export function DoctorCard({
  name,
  specialty,
}: //   rating,
//   availableDays,
DoctorCardProps) {
  return (
    <Card className="w-auto flex">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-center sm:items-start gap-4">
          <div className="space-y-3 p-10">
            <div className="space-y-1 flex flex-col items-center">
              <div className="bg-slate-300 rounded-full w-48 h-48 "></div>
              <h3 className="text-lg font-medium">{name}</h3>
              <p className="text-sm text-muted-foreground">{specialty}</p>
            </div>
            <div className="flex items-center space-x-1"></div>
          </div>
          <TimeSlotPicker />
        </div>
      </CardContent>
    </Card>
  );
}
