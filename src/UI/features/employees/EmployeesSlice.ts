import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export type EmployeeType={
    employeeId:string,
    firstName:string,
    secondName:string,
    shifts:string[],
    WorkTime:string,
    workTimePreMonth?:number,
    days?:string[]
    phoneNumber?:string,
    birthday?:Date,

}
const initialState:EmployeeType[] | null=[
    {
        employeeId:"1  ",
        firstName:"khaled",
        secondName:"bakour",
        shifts:["sa","so"],
        WorkTime:"40"
    }

]

const EmployeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers:{
        setEmployee: (state, action: PayloadAction<EmployeeType>) => {
            state.push(action.payload); // ✅ direkt mutieren (RTK macht es immutable)
        },
        removeEmployee: (state, action: PayloadAction<string>) => {
            return state.filter((e) => e.employeeId !== action.payload);
        },
        updateEmployee: (state, action: PayloadAction<EmployeeType>) => {
            const index = state.findIndex((e) => e.employeeId === action.payload.employeeId);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    }
})

export const {setEmployee,removeEmployee,updateEmployee} = EmployeeSlice.actions;
export default EmployeeSlice.reducer;