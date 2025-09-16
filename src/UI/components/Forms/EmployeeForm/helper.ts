import React, { type ChangeEvent } from "react";
import type {EmployeeType} from "../../../features/employees/EmployeesSlice.ts";

// Typ für setEmployeeData
type SetEmployeeData = React.Dispatch<React.SetStateAction<EmployeeType>>;

// 🧩 Allgemeine Array-Toggle-Funktion
function toggleItemInArray(array: string[], item: string, checked: boolean): string[] {
    return checked ? [...array, item] : array.filter((v) => v !== item);
}

// ✅ Für Checkboxen: Arbeitstage
export function handleDaysChange(
    e: ChangeEvent<HTMLInputElement>,
    setEmployeeData: SetEmployeeData
) {
    const { name, checked } = e.currentTarget;

    setEmployeeData((prev:EmployeeType) => ({
        ...prev,
        days: toggleItemInArray(prev.days, name, checked),
    }));
}

// ✅ Für Checkboxen: Schichten
export function handleShiftsChange(
    e: ChangeEvent<HTMLInputElement>,
    setEmployeeData: SetEmployeeData
) {
    const { name, checked } = e.currentTarget;

    setEmployeeData((prev:EmployeeType) => ({
        ...prev,
        shifts: toggleItemInArray(prev.shifts, name, checked),
    }));
}
