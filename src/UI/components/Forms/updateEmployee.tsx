import { FiUser, FiClock, FiX } from "react-icons/fi";
import { useUi } from "../../features/ui/useUI.tsx";
import { useState } from "react";
import type { EmployeeType } from "../../features/employees/EmployeesSlice.ts";
import useEmployees from "../../features/employees/UseEmployees.tsx";

type Props = {
    employeeId: string;
};

export default function UpdateEmployee({ employeeId }: Props) {
    const { closeSmallWindow } = useUi();
    const { employees, updateEmployee } = useEmployees();

    const currentEmployee = employees.find((e) => e.employeeId === employeeId);

    if (!currentEmployee) {
        return (
            <div className="p-6 text-center text-sm text-red-500">
                Mitarbeiter nicht gefunden.
            </div>
        );
    }

    const [employeeData, setEmployeeData] = useState<EmployeeType>({
        employeeId: currentEmployee.employeeId,
        firstName: currentEmployee.firstName,
        secondName: currentEmployee.secondName,
        days: currentEmployee.days,
        shifts: currentEmployee.shifts,
        WorkTime: currentEmployee.WorkTime,
    });

    function submittedHandle(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        updateEmployee(employeeData);
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
                    >
                        <FiUser />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">Mitarbeiter bearbeiten</h2>
                        <p className="text-xs text-gray-500">Stammdaten anpassen</p>
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

            {/* Form */}
            <form onSubmit={submittedHandle} className="px-6 py-5 space-y-4">
                {/* Vorname */}
                <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700">Vorname</span>
                    <div className="relative">
                        <FiUser className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            name="firstName"
                            value={employeeData.firstName}
                            onChange={(e) =>
                                setEmployeeData((prev) => ({ ...prev, firstName: e.target.value }))
                            }
                            className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--team-green)] focus:border-[var(--team-green)] transition"
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
                            value={employeeData.secondName}
                            onChange={(e) =>
                                setEmployeeData((prev) => ({ ...prev, secondName: e.target.value }))
                            }
                            className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--team-green)] focus:border-[var(--team-green)] transition"
                            required
                        />
                    </div>
                </label>

                {/* Stunden pro Woche */}
                <label className="block">
                    <span className="mb-1 block text-sm font-medium text-gray-700">Stunden pro Woche</span>
                    <div className="relative">
                        <FiClock className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            name="WorkTime"
                            type="number"
                            min={0}
                            max={60}
                            value={employeeData.WorkTime}
                            onChange={(e) =>
                                setEmployeeData((prev) => ({ ...prev, WorkTime: e.target.value }))
                            }
                            className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--team-green)] focus:border-[var(--team-green)] transition"
                            required
                        />
                    </div>
                    <p className="mt-1 text-xs text-gray-500">Empfohlen: 10–48 Std.</p>
                </label>

                {/* Footer */}
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
