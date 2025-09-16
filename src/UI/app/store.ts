// src/state/store.ts
import { configureStore } from "@reduxjs/toolkit";
import ui from "../features/ui/UIslice.ts";
import Employees from "../features/employees/EmployeesSlice.ts";
import Shifts from "../features/shifts/ShiftsSlice.ts"

export const store = configureStore({
    reducer: { ui,Employees ,Shifts},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
