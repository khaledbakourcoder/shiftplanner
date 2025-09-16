import { FiUser, FiClock, FiX } from "react-icons/fi";
import { useUi } from "../../../features/ui/useUI.tsx";
import React, { useState } from "react";
import type { EmployeeType } from "../../../features/employees/EmployeesSlice.ts";
import useEmployees from "../../../features/employees/UseEmployees.tsx";
import {handleDaysChange, handleShiftsChange} from "./helper.ts";

type Props={
    employeeID ?:string
}



export default function EmployeeForm({employeeID}:Props) {
    const { closeSmallWindow, } = useUi();
    const {addEmployee,getEmployeeById}=useEmployees()


    const [employeeData, setEmployeeData] = useState<EmployeeType>(() => {
        if (employeeID) {
            const found = getEmployeeById(employeeID);
            if (found) return found;
        }

        return {
            id: "",
            firstName: "",
            secondName: "",
            days: [],
            shifts: [],
            workTime: "",
            status: "Aktiv",
        };
    });







    function submittedHandle(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Hier kannst du speichern oder dispatchen
        console.log("Neuer Mitarbeiter:", employeeData);
        if(employeeData.shifts.length === 0 || employeeData.shifts.length === 0) {
            alert("alle Felder ausfüllen");
            return
        }
        addEmployee(employeeData)
        // Fenster schließen
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
                        <h2 className="text-lg font-semibold text-gray-900">Mitarbeiter hinzufügen</h2>
                        <p className="text-xs text-gray-500">Bitte Stammdaten eintragen</p>
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
                {/* Vorname */}
                <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700">Vorname</span>
                    <div className="relative">
                        <FiUser className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            name="firstName"
                            placeholder="z. B. Max"
                            value={employeeData.firstName}
                            onChange={(e) =>
                                setEmployeeData((prev) => ({ ...prev, firstName: e.target.value }))
                            }
                            className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-sm text-gray-900 placeholder:text-gray-400
                            focus:outline-none focus:ring-2 focus:ring-[var(--team-green)] focus:border-[var(--team-green)]
                            transition"
                            required
                        />
                    </div>
                </label>

                {/* Nachname */}
                <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700">Nachname</span>
                    <div className="relative">
                        <FiUser className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            name="secondName"
                            placeholder="z. B. Mustermann"
                            value={employeeData.secondName}
                            onChange={(e) =>
                                setEmployeeData((prev) => ({ ...prev, secondName: e.target.value }))
                            }
                            className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-sm text-gray-900 placeholder:text-gray-400
                            focus:outline-none focus:ring-2 focus:ring-[var(--team-green)] focus:border-[var(--team-green)]
                            transition"
                            required
                        />
                    </div>
                </label>

                <div>
                    <h2> Arbeitstag</h2>
                    <div className={"grid grid-cols-2 gap-3 border border-gray-300 p-4"}>

                        {["Unter der Woche","Wochenend"].map(day=>
                            <label className={"p-2 shadow-md rounded-xl cursor-pointer hover:tracking-wider hover:bg-green-700 hover:text-white hover:scale-105 transition-all duration-400 flex justify-between border border-gray-300 "  } key={day}>
                                <span className="mb-1 block text-sm font-medium ">{day}</span>
                                <input onChange={(e)=>handleDaysChange(e,setEmployeeData)} type="checkbox" name={day} id=""/>
                            </label>
                        )}
                    </div>


                </div>

                <div>
                    <h2> Schichten</h2>
                    <div className={"grid grid-cols-2 gap-3 border border-gray-300 p-4"}>

                        {["sa","so"].map(day=>
                            <label className={"p-2 shadow-md rounded-xl cursor-pointer hover:tracking-wider hover:bg-green-700 hover:text-white hover:scale-105 transition-all duration-400 flex justify-between border border-gray-300 "  } key={day}>
                                <span className="mb-1 block text-sm font-medium ">{day}</span>
                                <input onChange={(e)=>handleShiftsChange(e,setEmployeeData)} type="checkbox" name={day} id=""/>
                            </label>
                        )}
                    </div>


                </div>



                {/* Stunden pro Woche */}
                <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700">Stunden pro Woche</span>
                    <div className="relative">
                        <FiClock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            name="workTime"
                            type="number"
                            min={0}
                            max={60}
                            placeholder="z. B. 40"
                            value={employeeData.workTime}
                            onChange={(e) =>
                                setEmployeeData((prev) => ({ ...prev, workTime: e.target.value }))
                            }
                            className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-sm text-gray-900 placeholder:text-gray-400
                            focus:outline-none focus:ring-2 focus:ring-[var(--team-green)] focus:border-[var(--team-green)]
                            transition"
                            required
                        />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Empfohlen: 10–48 Std.</p>
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
