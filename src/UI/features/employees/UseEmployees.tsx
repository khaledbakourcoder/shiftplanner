import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
    type EmployeeType,
    removeEmployee as removeEmployeeAction,
    setEmployee as setEmployeeAction,
    updateEmployee as updateEmployeeAction,
} from "./EmployeesSlice";

export default function useEmployees() {
    const employees = useAppSelector((s) => s.Employees); // 👈 check den Key im store.ts
    const dispatch = useAppDispatch();

    function addEmployee(employee: EmployeeType) {
        dispatch(setEmployeeAction(employee));
    }

    function removeOneEmployee(employeeId: string) {
        dispatch(removeEmployeeAction(employeeId));
    }

    function updateOneEmployee(employee: EmployeeType) {
        dispatch(updateEmployeeAction(employee));
    }

    function getEmployeeById(employeeId: string) {
       return  employees.find((e) => e.id === employeeId);
    }


    return {
        employees,
        addEmployee,
        removeOneEmployee,
        updateEmployee: updateOneEmployee,
        getEmployeeById,
    };
}
