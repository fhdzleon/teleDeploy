'use client'

import React, { useState, useEffect, useMemo } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TimeSlotPickerProps {
  onSelectSlot?: (date: Date, time: string) => void
}

export function TimeSlotPicker({ onSelectSlot }: TimeSlotPickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [numberOfDays, setNumberOfDays] = useState(4) // Default to 4 days

  // Generate array of consecutive days starting from selected date
  const dates = useMemo(() => {
    return Array.from({ length: numberOfDays }).map((_, i) => {
      const date = new Date(selectedDate)
      date.setDate(date.getDate() + i)
      return date
    })
  }, [selectedDate, numberOfDays])

  // Generate time slots
  const timeSlots = ["08:30", "09:00", "10:30", "11:30", "12:30"]

  // Handle date navigation
  const navigateDates = (direction: 'prev' | 'next') => {
    const newDate = new Date(selectedDate)
    newDate.setDate(newDate.getDate() + (direction === 'next' ? numberOfDays : -numberOfDays))
    setSelectedDate(newDate)
  }

  // Format date to display day name and date
  const formatDate = (date: Date) => {
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    return `${days[date.getDay()]} ${date.getDate()}/${date.getMonth() + 1}`
  }

  useEffect(() => {
    const handleResize = () => {
      setNumberOfDays(window.innerWidth >= 640 ? 4 : 2)
    }

    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateDates('prev')}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Anterior</span>
        </Button>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center flex-1 px-4">
          {dates.map((date) => (
            <div key={date.toISOString()} className="font-medium">
              {formatDate(date)}
            </div>
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigateDates('next')}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Siguiente</span>
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {dates.map((date) => (
          <div key={date.toISOString()} className="space-y-3">
            {timeSlots.map((time, index) => (
              <Button
                key={`${date.toISOString()}-${time}-${index}`}
                variant="outline"
                className={cn(
                  "w-full",
                  selectedSlot === `${date.toISOString()}-${time}-${index}` &&
                    "border-primary"
                )}
                onClick={() => {
                  setSelectedSlot(`${date.toISOString()}-${time}-${index}`)
                  onSelectSlot?.(date, time)
                }}
              >
                {time}
              </Button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

