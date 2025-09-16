import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ShiftType = {
    id: string;
    name: string;
    desc: string;
    days: string[];
    color?: string;
};

const initialState: ShiftType[] = [
    {
        id: "1",
        name: "SA",
        desc: "Schicht am Wochenende",
        days: ["so", "sa"],
        color: "black",
    },
];

const ShiftsSlice = createSlice({
    name: "shifts",
    initialState,
    reducers: {
        setShift(state, action: PayloadAction<ShiftType>) {
            const newShift={
                ...action.payload,
                id:String(state.length),
            }

            state.push(newShift);
        },

        editShift(state, action: PayloadAction<ShiftType>) {
            return state.map(s=> s.id === action.payload.id ? action.payload:s);
        },

        removeOneShift(state, action: PayloadAction<string>) {
            return state.filter((s) => s.id !== action.payload);
        },

        removeAllShifts() {
            return [];
        },



    },
});

export const { setShift, removeOneShift, editShift,removeAllShifts } = ShiftsSlice.actions;

export default ShiftsSlice.reducer;
