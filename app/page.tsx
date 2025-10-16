"use client";

import Link from "next/link";
import { AppointmentService } from "@/services/appointmentService"; // your folder is servicess
import { Doctor } from "@/types";

const service = new AppointmentService();
const doctors: Doctor[] = service.getAllDoctors();

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hospital Appointment Scheduler
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to the appointment scheduling system. View and manage doctor schedules.
        </p>

        <div className="space-y-4">
          <Link
            href="/schedule"
            className="block w-full bg-green-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
          >
            Go to Schedule
          </Link>

          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">Available Doctors:</h2>
            <ul className="text-sm text-gray-600 space-y-1">
              {doctors.map((doc) => (
                <li key={doc.id}>• {doc.name} - {doc.specialty}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
