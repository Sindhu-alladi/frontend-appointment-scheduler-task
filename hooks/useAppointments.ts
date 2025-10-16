import { useEffect, useState } from "react";
import { Appointment } from "@/types";
import { AppointmentService } from "@/services/appointmentService";

const service = new AppointmentService();

export function useAppointments(doctorId: string, date: Date) {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);
      const data = service.getAppointmentsByDoctorAndDate(doctorId, date);
      setAppointments(data);
    } catch (err) {
      setError("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  }, [doctorId, date]);

  return { appointments, loading, error };
}
