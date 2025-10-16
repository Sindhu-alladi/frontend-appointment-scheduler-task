"use client";

import { useState, useEffect } from "react";
import { startOfWeek } from "date-fns";
import DoctorSelector from "@/components/DoctorSelector";
import DayView from "@/components/DayView";
import WeekView from "@/components/WeekView";
import { AppointmentService } from "@/services/appointmentService";
import { Patient } from "@/types";

const service = new AppointmentService();

export default function ScheduleView() {
  const [doctors, setDoctors] = useState(service.getAllDoctors());
  const [patients, setPatients] = useState<Patient[]>(service.getAllPatients());
  const [selectedDoctorId, setSelectedDoctorId] = useState(doctors[0]?.id || "");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<"day" | "week">("day");
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const data =
        viewMode === "day"
          ? service.getAppointmentsByDoctorAndDate(selectedDoctorId, selectedDate)
          : service.getAppointmentsByDoctorAndWeek(selectedDoctorId, startOfWeek(selectedDate, { weekStartsOn: 1 }));
      setAppointments(data);
      setLoading(false);
    }, 500); // simulate API loading
  }, [selectedDoctorId, selectedDate, viewMode]);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <DoctorSelector doctors={doctors} selectedDoctorId={selectedDoctorId} onSelect={setSelectedDoctorId} />

      <div className="flex flex-wrap gap-2 items-center mb-4">
        <input
          type="date"
          value={selectedDate.toISOString().slice(0, 10)}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
          className="border px-2 py-1 rounded"
        />
        <button
          className={`px-3 py-1 rounded ${viewMode === "day" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setViewMode("day")}
        >
          Day View
        </button>
        <button
          className={`px-3 py-1 rounded ${viewMode === "week" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setViewMode("week")}
        >
          Week View
        </button>
      </div>

      <div className="border rounded-lg p-2 bg-white shadow-sm">
        {loading ? (
          <div className="text-center text-gray-500 py-6">Loading appointments…</div>
        ) : viewMode === "day" ? (
          <DayView appointments={appointments} date={selectedDate} patients={patients} />
        ) : (
          <WeekView
            appointments={appointments}
            weekStartDate={startOfWeek(selectedDate, { weekStartsOn: 1 })}
            patients={patients}
            doctorName={doctors.find(d => d.id === selectedDoctorId)?.name || ""}
          />
        )}
      </div>
    </div>
  );
}
