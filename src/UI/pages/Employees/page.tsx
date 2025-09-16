import { useUi } from "../../features/ui/useUI";
import useEmployees from "../../features/employees/UseEmployees";
import { Tabelle } from "../../components/Layout";
import React from "react";
import EmployeeForm from "../../components/Forms/EmployeeForm";

export default function EmployeesPage() {
    const { openSmallWindow } = useUi();
    const { employees, removeOneEmployee } = useEmployees();

    const cols: string[] = ["ID", "Name", "Tage", "Schichten", "Stunden", "Status"];

    const tableRows: React.ReactNode[][] = employees.map((e: any) => [
        e.id ?? e.employeeId ?? "—",
        e.firstName && e.secondName ? `${e.firstName} ${e.secondName}` : e.name ?? "—",
        e.days ?? "-",
        Array.isArray(e.shifts) ? e.shifts.join(", ") : e.shifts ?? "—",
        `${Number(e.workTime ?? e.hours ?? 0)} Std.`,
        e.status ?? "Aktiv",
    ]);

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-10">
            <h1 className="mb-8 text-3xl font-bold text-gray-800">⛽ Mitarbeiterübersicht</h1>

            <button
                className="block w-full cursor-pointer rounded-2xl bg-green-600 p-4 text-white transition-all duration-300 hover:bg-green-500 m-2"
                onClick={() => openSmallWindow(<EmployeeForm />)}
            >
                Mitarbeiter anlegen
            </button>

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                <Tabelle
                    cols={cols}
                    rows={tableRows}
                    actions={{
                        delete: (id) => removeOneEmployee(String(id)),
                        edit:   (id) => openSmallWindow(<EmployeeForm employeeID={String(id)} />),
                        details:(id) => openSmallWindow(<h1>show {String(id)}</h1>),
                    }}
                />
            </div>
        </section>
    );
}
