import { Appointment, Patient } from "@/types";
import { addDays, format, endOfWeek } from "date-fns";

interface WeekViewProps {
  appointments: Appointment[];
  weekStartDate: Date;
  patients: Patient[];
  doctorName: string;
}

const HOURS = Array.from({ length: 11 }, (_, i) => 8 + i); // 8:00 - 18:00
const APPOINTMENT_COLORS: Record<string, string> = {
  checkup: "#3b82f6",
  consultation: "#10b981",
  "follow-up": "#f59e0b",
  procedure: "#8b5cf6",
};

export default function WeekView({ appointments, weekStartDate, patients, doctorName }: WeekViewProps) {
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStartDate, i));
  const weekEndDate = endOfWeek(weekStartDate, { weekStartsOn: 1 });

  const getPatientName = (appointment?: Appointment) =>
    appointment ? patients.find((p) => p.id === appointment.patientId)?.name : "";

  if (!appointments.length) {
    return <div className="text-center py-6 text-gray-500">No appointments this week</div>;
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center mb-2">
        <div className="font-bold text-lg">{doctorName}</div>
        <div className="text-sm text-gray-600">
          {format(weekStartDate, "MMM d")} - {format(weekEndDate, "MMM d, yyyy")}
        </div>
      </div>

      <table className="w-full table-fixed border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 w-16">Time</th>
            {days.map((day) => (
              <th key={day.toISOString()} className="border p-2">
                {format(day, "EEE")}
                <br />
                {format(day, "d")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {HOURS.map((hour) =>
            [0, 30].map((minute) => (
              <tr key={`${hour}-${minute}`} className="border-b">
                <td className="border p-2 text-sm w-16">
                  {`${hour.toString().padStart(2, "0")}:${minute === 0 ? "00" : "30"}`}
                </td>
                {days.map((day) => {
                  const slotTime = new Date(day);
                  slotTime.setHours(hour, minute, 0, 0);

                  const apt = appointments.find(
                    (a) => new Date(a.startTime).getTime() === slotTime.getTime()
                  );

                  return (
                    <td key={day.toISOString() + hour + minute} className="border p-2 h-12">
                      {apt ? (
                        <span
                          className="px-2 py-1 rounded text-white text-sm block truncate"
                          style={{ backgroundColor: APPOINTMENT_COLORS[apt.type] || "#6b7280" }}
                        >
                          {getPatientName(apt)}
                        </span>
                      ) : (
                        ""
                      )}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
