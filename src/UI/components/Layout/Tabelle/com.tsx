import React from "react";
import Icon from "../../UI/Icon";

type Actions = {
    delete: (id: string) => void;
    details: (id: string) => void;
    edit: (id: string) => void;
};

type Props = {
    cols: string[];
    rows: React.ReactNode[][];
    actions: Actions;
    /** Aus welcher Spalte kommt die ID? (Standard: 0) */
    idIndex?: number;
};

export default function Tabelle({ cols, rows, actions, idIndex = 0 }: Props) {
    const colClassName = "px-6 py-3 font-semibold uppercase tracking-wide";

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
            <table className="min-w-full text-sm">
                <thead>
                <tr className="text-left "
                    style={{ background: "linear-gradient(90deg, var(--team-green-dark), var(--team-green))" }}>
                    {cols.map((col, i) => (
                        <th key={i} className={colClassName}>{col}</th>
                    ))}
                    <th className={colClassName}>Aktionen</th>
                </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                {rows.map((row, rowIndex) => {
                    const id = String(row[idIndex] ?? "");
                    return (
                        <tr
                            key={id || rowIndex}
                            className={`${rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-[var(--team-orange-weak)]`}
                        >
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-6 py-3 text-gray-700">{cell}</td>
                            ))}

                            <td className="px-2">
                                <div className="flex items-center justify-center gap-3">
                                    <Icon type="details" onClick={() => actions.details(id)} />
                                    <Icon type="edit"    onClick={() => actions.edit(id)} />
                                    <Icon type="delete"  onClick={() => actions.delete(id)} />
                                </div>
                            </td>
                        </tr>
                    );
                })}

                {rows.length === 0 && (
                    <tr>
                        <td colSpan={cols.length + 1} className="px-6 py-6 text-center text-gray-500">
                            Keine Daten vorhanden.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}
