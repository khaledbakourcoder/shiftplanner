import { FiUser, FiX } from "react-icons/fi";
import { useUi } from "../../../features/ui/useUI.tsx";
import React, { useState } from "react";

import type { ShiftType } from "../../../features/shifts/ShiftsSlice.ts";
import useShifts from "../../../features/shifts/UseShift.tsx";
import {handleDaysChange} from "../EmployeeForm/helper.ts";

type Props = {
    shiftID?: string;
};

export default function ShiftForm({ shiftID }: Props) {
    const { closeSmallWindow } = useUi();
    const { addShift, getShiftById,updateShift } = useShifts();

    const [shiftData, setShiftData] = useState<ShiftType>(() => {
        if (shiftID) {
            const found = getShiftById(shiftID);
            if (found) return found;
        }

        return {
            id: "",
            name: "",
            desc: "",
            days: [""],
            color: "",
        };
    });

    function submittedHandle(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log("Neue Schicht:", shiftData);
        if(shiftID){
            updateShift(shiftData)

        }else {
            addShift(shiftData)

        }



        closeSmallWindow();
    }

    return (
        <div className="w-full rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
                <div className="flex items-center gap-3">
                    <div
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{ backgroundColor: "#F39200", color: "#0B3D2E" }}
                        aria-hidden
                    >
                        <FiUser />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">
                            {shiftID ? "Schicht bearbeiten" : "Neue Schicht hinzufügen"}
                        </h2>
                        <p className="text-xs text-gray-500">Bitte Schichtdaten eintragen</p>
                    </div>
                </div>

                <button
                    onClick={closeSmallWindow}
                    className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition"
                    aria-label="Schließen"
                >
                    <FiX />
                </button>
            </div>

            {/* Body */}
            <form onSubmit={submittedHandle} className="px-6 py-5 space-y-4">
                {/* Name */}
                <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700">Schicht-Name</span>
                    <input
                        name="name"
                        placeholder="z. B. Frühschicht"
                        value={shiftData.name}
                        onChange={(e) => setShiftData((prev) => ({ ...prev, name: e.target.value }))}
                        className="w-full rounded-lg border border-gray-300 pl-3 pr-3 py-2 text-sm text-gray-900
                            focus:outline-none focus:ring-2 focus:ring-[var(--team-green)] focus:border-[var(--team-green)]
                            transition"
                        required
                    />
                </label>

                {/* Beschreibung */}
                <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700">Beschreibung</span>
                    <textarea
                        name="desc"
                        placeholder="z. B. Schicht am Wochenende"
                        value={shiftData.desc}
                        onChange={(e) => setShiftData((prev) => ({ ...prev, desc: e.target.value }))}
                        className="w-full rounded-lg border border-gray-300 pl-3 pr-3 py-2 text-sm text-gray-900
                            focus:outline-none focus:ring-2 focus:ring-[var(--team-green)] focus:border-[var(--team-green)]
                            transition"
                        required
                    />
                </label>

                <div>
                    <h2> Arbeitstag</h2>
                    <div className={"grid grid-cols-2 gap-3 border border-gray-300 p-4"}>

                        {["Unter der Woche","Wochenend"].map(day=>
                            <label className={"p-2 shadow-md rounded-xl cursor-pointer hover:tracking-wider hover:bg-green-700 hover:text-white hover:scale-105 transition-all duration-400 flex justify-between border border-gray-300 "  } key={day}>
                                <span className="mb-1 block text-sm font-medium ">{day}</span>
                                <input type="checkbox" name={day} id=""/>
                            </label>
                        )}
                    </div>

                </div>

                {/* Farbe */}
                <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700">Farbe</span>
                    <input
                        type="color"
                        value={shiftData.color}
                        onChange={(e) => setShiftData((prev) => ({ ...prev, color: e.target.value }))}
                        className="h-10 w-20 border border-gray-300 rounded"
                        required
                    />
                </label>

                {/* Footer-Buttons */}
                <div className="mt-2 flex items-center justify-end gap-3 pt-4 border-t">
                    <button
                        type="button"
                        onClick={closeSmallWindow}
                        className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                    >
                        Abbrechen
                    </button>

                    <button
                        type="submit"
                        className="rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
                        style={{ backgroundColor: "#0E5A3C" }}
                    >
                        Speichern
                    </button>
                </div>
            </form>
        </div>
    );
}
