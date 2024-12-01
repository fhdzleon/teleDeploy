import { useState } from "react";
import { Button } from "@/components/ui/button";
import { format, parseISO } from "date-fns";
import { es } from "date-fns/locale";

interface Turno {
  fecha: string;
  hora: string;
  disponible: boolean;
}

interface TimeSlotPickerProps {
  turnosDisponibles: Turno[];
}

export function TimeSlotPicker({ turnosDisponibles }: TimeSlotPickerProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const uniqueDates = Array.from(
    new Set(turnosDisponibles.map((turno) => turno.fecha))
  );

  const handleDateClick = (date: string) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {uniqueDates.map((date) => (
          <div key={date}>
            <Button
              variant={selectedDate === date ? "default" : "outline"}
              onClick={() => handleDateClick(date)}
            >
              {format(parseISO(date), "d '/' MMM '/' yyyy", { locale: es })}
            </Button>
          </div>
        ))}
      </div>
      {selectedDate && (
        <div className="flex flex-wrap gap-2">
          {turnosDisponibles
            .filter((turno) => turno.fecha === selectedDate && turno.disponible)
            .map((turno) => (
              <Button
                key={turno.hora}
                variant={selectedTime === turno.hora ? "default" : "outline"}
                onClick={() => handleTimeClick(turno.hora)}
              >
                {turno.hora}
              </Button>
            ))}
        </div>
      )}
      {selectedDate && selectedTime && (
        <p className="text-sm font-medium">
          Turno seleccionado:
          {format(parseISO(selectedDate), " d 'de' MMMM, yyyy", { locale: es })}{" "}
          a las {selectedTime}
        </p>
      )}
    </div>
  );
}
