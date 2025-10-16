'use client';

import ScheduleView from '@/components/ScheduleView';
import { FaHospitalSymbol } from 'react-icons/fa';

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 text-gray-800">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 bg-white shadow-md border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaHospitalSymbol className="text-green-600 text-xl" />
          <h1 className="text-xl font-semibold text-black-700">
            Hospital Appointment Scheduler
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Page Title */}
          <div className="bg-gradient-to-r from-orange-100 to-blue-50 px-8 py-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Appointment Schedule
            </h2>
            <p className="text-gray-600 text-md">
              View and manage doctor appointments
            </p>
          </div>

          {/* Schedule Component */}
          <div className="p-6 md:p-8 bg-black-50">
            <ScheduleView />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Hospital Scheduler. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
