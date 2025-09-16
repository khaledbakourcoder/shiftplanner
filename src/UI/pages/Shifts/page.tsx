import EmployeeForm from "../../components/Forms/EmployeeForm";
import React from "react";
import {useUi} from "../../features/ui/useUI.tsx";
import {Tabelle} from "../../components/Layout";
import useShifts from "../../features/shifts/UseShift.tsx";
import ShiftForm from "../../components/Forms/ShiftForm";

export default function ShiftsPage(){
    const {openSmallWindow}=useUi()
    const {shifts,removeShift}=useShifts()
    const cols: string[] = ["ID", "Name", "Beschreibung", "Tage","color"];

    const tableRows: React.ReactNode[][] = shifts.map((e: any) => [
        e.id ?? e.employeeId ?? "—",
        e.name ?? "-",
        e.desc?? "-",
        e.days.map((d,i)=>` ${d} ${  i  !== e.days.length-1 ?"," :""}` ) ?? "-",
        <div className={` bg-${e.color}  `  }> {e.color}</div>
    ]);

    return(
        <section className="max-w-screen-xl mx-auto px-6 py-10">
            <h1 className="mb-8 text-3xl font-bold text-gray-800">⛽ Schichtenübersicht</h1>
            <button
                className="block w-full cursor-pointer rounded-2xl bg-green-600 p-4 text-white transition-all duration-300 hover:bg-green-500 m-2"
                onClick={() => openSmallWindow(<ShiftForm/>)}
            >
                Schicht anlegen
            </button>

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                <Tabelle
                    cols={cols}
                    rows={tableRows}
                    actions={{
                        delete: (id) => removeShift(String(id)),
                        edit:   (id) => openSmallWindow(<ShiftForm shiftID={String(id)} />),
                        details:(id) => openSmallWindow(<h1>show {String(id)}</h1>),
                    }}
                />
            </div>
        </section>
    )
}