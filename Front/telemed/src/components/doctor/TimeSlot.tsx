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
  const [startIndex, setStartIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const { setSelectedValueDate, setSelectedValueTime, setSelectedValueDoctor } = useGlobalStore()

  const availableDates = useMemo(() => {
    return Array.from(new Set(turnosDisponibles.map(turno => turno.fecha)))
      .map(fecha => startOfDay(new Date(fecha)))
      .sort((a, b) => a.getTime() - b.getTime())
      .filter(date => isAfter(date, startOfDay(new Date())))
  }, [turnosDisponibles])

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640) // 640px es el breakpoint de sm en Tailwind
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  useEffect(() => {
    setSelectedDate(null)
    setSelectedTime(null)
    setStartIndex(0)
  }, [turnosDisponibles, availableDates])

  const visibleDates = useMemo(() => {
    const count = isMobile ? 2 : 4
    return availableDates.slice(startIndex, startIndex + count)
  }, [availableDates, startIndex, isMobile])

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
    setStartIndex(prev => Math.max(0, prev - (isMobile ? 2 : 4)))
  }

  const handleNext = () => {
    setStartIndex(prev => Math.min(availableDates.length - (isMobile ? 2 : 4), prev + (isMobile ? 2 : 4)))
  }

  if (availableDates.length === 0) {
    return <p className="text-sm text-muted-foreground">No hay turnos disponibles para este médico.</p>
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            disabled={startIndex === 0}
            className="absolute left-0 top-3 -translate-y-1/2 z-10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center px-8 overflow-x-auto">
            {visibleDates.map((date) => (
              <div
                key={date.toISOString()}
                className="font-medium text-xs sm:text-sm whitespace-nowrap"
                onClick={() => handleDateClick(date)}
              >
                {format(date, "EEE dd/MM", { locale: es })}
              </div>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            disabled={startIndex >= availableDates.length - (isMobile ? 2 : 4)}
            className="absolute right-0 top-3 -translate-y-1/2 z-10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {visibleDates.map((date) => (
            <div key={date.toISOString()} className="space-y-2">
              {turnosDisponibles
                .filter(turno => isSameDay(parseISO(turno.fecha), date) && turno.disponible)
                .sort((a, b) => a.hora.localeCompare(b.hora))
                .map((turno, index) => (
                  <Button
                    key={`${date}-${turno.hora} - ${index}`}
                    variant={selectedDate === turno.fecha && selectedTime === turno.hora ? "default" : "outline"}
                    className={`w-full text-xs sm:text-sm focus:outline-none focus:ring focus:ring-violet-300 ${
                      selectedDate === turno.fecha && selectedTime === turno.hora
                        ? "bg-primary text-primary-foreground"
                        : "bg-[#E6E6FA] hover:bg-violet-300"
                    }`}
                    onClick={() => {
                      handleDateClick(date)
                      handleTimeClick(turno.hora)
                    }}
                  >
                    {turno.hora}
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

