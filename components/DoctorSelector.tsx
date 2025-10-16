"use client";

import React from "react";
import { Doctor } from "@/types";

type Props = {
  doctors: Doctor[];
  selectedDoctorId: string;
  onSelect: (id: string) => void;
};

export default function DoctorSelector({ doctors, selectedDoctorId, onSelect }: Props) {
  return (
    <div className="mb-4 w-full max-w-sm">
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        Select Doctor:
      </label>
      <select
        value={selectedDoctorId}
        onChange={(e) => onSelect(e.target.value)}
        className="w-full border rounded px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          -- Select a doctor --
        </option>
        {doctors.length > 0 ? (
          doctors.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.name} ({doc.specialty})
            </option>
          ))
        ) : (
          <option disabled>No doctors available</option>
        )}
      </select>
    </div>
  );
}
