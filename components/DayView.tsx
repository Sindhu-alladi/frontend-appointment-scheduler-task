import { Appointment, Patient } from "@/types";
import { format } from "date-fns";

interface DayViewProps {
  appointments: Appointment[];
  date: Date;
  patients: Patient[];
}

const HOURS = Array.from({ length: 10 }, (_, i) => 8 + i); // 8:00 - 17:00
const APPOINTMENT_COLORS: Record<string, string> = {
  checkup: "#3b82f6",
  consultation: "#10b981",
  "follow-up": "#f59e0b",
  procedure: "#8b5cf6",
};

export default function DayView({ appointments, date, patients }: DayViewProps) {
  const timeSlots: { time: string; appointment?: Appointment }[] = [];

  HOURS.forEach((hour) => {
    timeSlots.push({ time: `${hour.toString().padStart(2, "0")}:00` });
    timeSlots.push({ time: `${hour.toString().padStart(2, "0")}:30` });
  });

  timeSlots.forEach((slot) => {
    const apt = appointments.find((a) => {
      const start = new Date(a.startTime);
      const [h, m] = slot.time.split(":").map(Number);
      return start.getHours() === h && start.getMinutes() === m;
    });
    if (apt) slot.appointment = apt;
  });

  if (!appointments.length) {
    return <div className="text-center py-6 text-gray-500">No appointments scheduled</div>;
  }

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="border p-2">Time</th>
          <th className="border p-2">Appointments</th>
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((slot, idx) => {
          const patientName = slot.appointment
            ? patients.find((p) => p.id === slot.appointment?.patientId)?.name
            : null;
          return (
            <tr key={idx} className="border-b">
              <td className="border p-2">{slot.time}</td>
              <td className="border p-2">
                {slot.appointment ? (
                  <span
                    className="px-2 py-1 rounded text-white text-sm"
                    style={{ backgroundColor: APPOINTMENT_COLORS[slot.appointment.type] || "#6b7280" }}
                  >
                    {slot.appointment.type} - {patientName}
                  </span>
                ) : (
                  "—"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
