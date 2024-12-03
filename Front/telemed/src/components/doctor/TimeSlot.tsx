"use client"

import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { format, parseISO, isSameDay, isAfter, startOfDay } from "date-fns"
import { es } from "date-fns/locale"
import useGlobalStore from "@/store/globalStore"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Turno {
  fecha: string
  hora: string
  disponible: boolean
}

interface TimeSlotPickerProps {
  turnosDisponibles: Turno[]
  medico: string
}

export function TimeSlotPicker({ turnosDisponibles, medico }: TimeSlotPickerProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [startDate, setStartDate] = useState<Date | null>(null)

  const { setSelectedValueDate, setSelectedValueTime, setSelectedValueDoctor } = useGlobalStore()

  const availableDates = useMemo(() => {
    return Array.from(new Set(turnosDisponibles.map(turno => turno.fecha)))
      .map(fecha => startOfDay(new Date(fecha))) // Usar startOfDay para normalizar la fecha
      .sort((a, b) => a.getTime() - b.getTime())
      .filter(date => isAfter(date, startOfDay(new Date()))) // Solo fechas futuras
  }, [turnosDisponibles])

  useEffect(() => {
    // Reiniciar selecciones cuando cambian los turnos disponibles
    setSelectedDate(null)
    setSelectedTime(null)
    setStartDate(availableDates[0] || null)
  }, [turnosDisponibles, availableDates])

  const dateRange = useMemo(() => {
    if (!startDate) return []
    const startIndex = availableDates.findIndex(date => isSameDay(date, startDate))
    return availableDates.slice(startIndex, startIndex + 4)
  }, [availableDates, startDate])

  const handleDateClick = (date: Date) => {
    const dateString = date.toISOString()
    setSelectedDate(dateString)
    setSelectedTime(null)
    setSelectedValueDate(dateString)
    setSelectedValueDoctor(medico)
  }

  const handleTimeClick = (time: string) => {
    setSelectedTime(time)
    setSelectedValueTime(time)
  }

  const handlePrevious = () => {
    const currentIndex = availableDates.findIndex(date => isSameDay(date, startDate!))
    if (currentIndex > 0) {
      setStartDate(availableDates[currentIndex - 1])
    }
  }

  const handleNext = () => {
    const currentIndex = availableDates.findIndex(date => isSameDay(date, startDate!))
    if (currentIndex < availableDates.length - 4) {
      setStartDate(availableDates[currentIndex + 1])
    }
  }

  if (availableDates.length === 0) {
    return <p className="text-sm text-muted-foreground">No hay turnos disponibles para este médico.</p>
  }

  return (
    <div className="w-full mx-auto p-4">
      <div className="relative">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            disabled={!startDate || isSameDay(startDate, availableDates[0])}
            className="absolute left-0 top-3 -translate-y-1/2"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center px-8 overflow-x-auto">
            {dateRange.map((date) => (
              <div key={date.toISOString()} className="font-medium text-sm">
               {format(date, "EEE dd/MM", { locale: es })}
              </div>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            disabled={!startDate || isSameDay(startDate, availableDates[availableDates.length - 4])}
            className="absolute right-0 top-3 -translate-y-1/2"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {dateRange.map((date) => (
            <div key={date.toISOString()} className="space-y-2">
              {turnosDisponibles
                .filter(turno => isSameDay(parseISO(turno.fecha), date) && turno.disponible)
                .sort((a, b) => a.hora.localeCompare(b.hora))
                .map((turno) => (
                  <Button
                    key={`${date}-${turno.hora}`}
                    variant="outline"
                    className={`w-full bg-[#E6E6FA] hover:bg-purple-100 ${
                      selectedDate === turno.fecha && selectedTime === turno.hora
                        ? "bg-[#D8BFD8] border-primary"
                        : "focus:outline-none focus:ring focus:ring-violet-300"
                    }`}
                    onClick={() => {
                      handleDateClick(date)
                      handleTimeClick(turno.hora)
                    }}
                  >
                    <span className="text-sm ">
                    {turno.hora}
                    </span>
                  </Button>
                ))}
            </div>
          ))}
        </div>
      </div>
      {selectedDate && selectedTime && (
        <p className="text-sm font-medium mt-4">
          Turno seleccionado:
          {format(parseISO(selectedDate), " d 'de' MMMM, yyyy", { locale: es })}{" "}
          a las {selectedTime}
        </p>
      )}
    </div>
  )
}