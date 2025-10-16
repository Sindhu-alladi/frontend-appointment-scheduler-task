import { Appointment, Doctor, Patient } from "@/types";
import { MOCK_DOCTORS, MOCK_PATIENTS, MOCK_APPOINTMENTS } from "@/data/mockData";
import { isSameDay, isWithinInterval } from "date-fns";

export class AppointmentService {
  /** Get all doctors */
  getAllDoctors(): Doctor[] {
    return MOCK_DOCTORS;
  }

  /** Get all patients */
  getAllPatients(): Patient[] {
    return MOCK_PATIENTS;
  }

  /** Get all appointments for a doctor on a specific day */
  getAppointmentsByDoctorAndDate(doctorId: string, date: Date): Appointment[] {
    return MOCK_APPOINTMENTS.filter(
      (apt) =>
        apt.doctorId === doctorId &&
        isSameDay(new Date(apt.startTime), date)
    );
  }

  /** Get all appointments for a doctor for a week (Mon-Sun) */
  getAppointmentsByDoctorAndWeek(doctorId: string, weekStartDate: Date): Appointment[] {
    const weekEndDate = new Date(weekStartDate);
    weekEndDate.setDate(weekStartDate.getDate() + 6);

    return MOCK_APPOINTMENTS.filter(
      (apt) =>
        apt.doctorId === doctorId &&
        isWithinInterval(new Date(apt.startTime), { start: weekStartDate, end: weekEndDate })
    );
  }

  /** Get patient details by id */
  getPatientById(patientId: string): Patient | undefined {
    return MOCK_PATIENTS.find((p) => p.id === patientId);
  }

  /** Get doctor details by id */
  getDoctorById(doctorId: string): Doctor | undefined {
    return MOCK_DOCTORS.find((d) => d.id === doctorId);
  }
}
