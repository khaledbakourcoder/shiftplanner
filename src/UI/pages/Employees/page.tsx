import {
    FiCheckCircle,
    FiXCircle,
    FiClock,
    FiEdit2,
    FiTrash2,
    FiEye,
} from "react-icons/fi";
import { useUi } from "../../features/ui/useUI";
import useEmployees from "../../features/employees/UseEmployees";
import AddEmployee from "../../components/Forms/AddEmployee.tsx";

// Hilfstyp falls nötig
type EmployeeView = {
    id: string;
    name: string;
    role: string;
    workHours: number;
    status: "Aktiv" | "Urlaub" | "Krank";
};

export default function EmployeesPage() {
    const { openSmallWindow } = useUi();
    const { employees } = useEmployees();

    // Mappe deine Store-Struktur auf die View-Struktur
    const rows: EmployeeView[] = employees.map((e: any) => ({
        id: e.employeeId ?? e.id,
        name: e.firstName && e.secondName ? `${e.firstName} ${e.secondName}` : (e.name ?? "—"),
        role: e.role ?? "—",
        workHours: Number(e.WorkTime ?? e.hours ?? 0),
        status: (e.status ?? "Aktiv") as EmployeeView["status"],
    }));

    const StatusBadge = ({ status }: { status: EmployeeView["status"] }) => {
        if (status === "Aktiv") {
            return (
                <span
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(14,90,60,0.12)", color: "var(--team-green)" }}
                >
          <FiCheckCircle size={14} /> {status}
        </span>
            );
        }
        if (status === "Urlaub") {
            return (
                <span
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "var(--team-orange-weak)", color: "var(--team-orange)" }}
                >
          <FiClock size={14} /> {status}
        </span>
            );
        }
        return (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
        <FiXCircle size={14} /> {status}
      </span>
        );
    };

    return (
        <section className="max-w-screen-xl mx-auto px-6 py-10">
            <h1 className="mb-8 text-3xl font-bold text-gray-800">⛽ Mitarbeiterübersicht</h1>
<button onClick={()=> openSmallWindow(<AddEmployee/>)}> Mitarbeiter anlegen </button>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                <table className="min-w-full text-sm">
                    <thead>
                    <tr
                        className="text-left text-white"
                        style={{ background: "linear-gradient(90deg, var(--team-green-dark), var(--team-green))" }}
                    >
                        <th className="px-6 py-4 font-semibold uppercase tracking-wide">Name</th>
                        <th className="px-6 py-4 font-semibold uppercase tracking-wide">Rolle</th>
                        <th className="px-6 py-4 font-semibold uppercase tracking-wide">Stunden</th>
                        <th className="px-6 py-4 font-semibold uppercase tracking-wide">Status</th>
                        <th className="px-6 py-4 font-semibold uppercase tracking-wide">Aktionen</th>
                    </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                    {rows.map((emp, i) => (
                        <tr
                            key={emp.id}
                            className={`transition-colors ${i % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-[var(--team-orange-weak)]`}
                        >
                            <td className="px-6 py-4 font-medium text-gray-800">{emp.name}</td>
                            <td className="px-6 py-4 text-gray-600">{emp.role}</td>
                            <td className="px-6 py-4 text-gray-600">{emp.workHours} Std.</td>
                            <td className="px-6 py-4">
                                <StatusBadge status={emp.status} />
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex gap-3 text-gray-500">
                                    <button
                                        onClick={() => openSmallWindow(<h1>Details</h1>)}
                                        className="transition hover:-translate-y-0.5"
                                        style={{ color: "var(--team-green)" }}
                                        aria-label="Details ansehen"
                                        title="Details"
                                    >
                                        <FiEye size={18} />
                                    </button>

                                    <button
                                        onClick={() => openSmallWindow(<h1>Bearbeiten</h1>)}
                                        className="transition hover:-translate-y-0.5"
                                        style={{ color: "var(--team-orange)" }}
                                        aria-label="Mitarbeiter bearbeiten"
                                        title="Bearbeiten"
                                    >
                                        <FiEdit2 size={18} />
                                    </button>

                                    <button
                                        onClick={() => openSmallWindow(<h1>Löschen</h1>)}
                                        className="transition hover:-translate-y-0.5 text-red-600"
                                        aria-label="Mitarbeiter löschen"
                                        title="Löschen"
                                    >
                                        <FiTrash2 size={18} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}

                    {rows.length === 0 && (
                        <tr>
                            <td className="px-6 py-10 text-center text-gray-500" colSpan={5}>
                                Keine Mitarbeiter gefunden.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
