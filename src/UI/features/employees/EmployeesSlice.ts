import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

export type EmployeeType={
    id:string,
    firstName:string,
    secondName:string,
    shifts:string[],
    workTime:string,
    workTimePreMonth?:number,
    status:string,
    days:string[]
    phoneNumber?:string,
    birthday?:Date,

}
const initialState:EmployeeType[]|[]=[
    {
        id:"1",
        firstName:"khaled",
        secondName:"bakour",
        shifts:["sa","so"],
        workTime:"40",
        status:"active",
        days:["montag"]
    }

]

const EmployeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers:{


        setEmployee: (state, action: PayloadAction<EmployeeType>) => {
            const newEmployee = {
                ...action.payload,
                id:(state.length + 1 ).toString()   ,
            }
            state.push(newEmployee);
        },


        removeEmployee: (state, action: PayloadAction<string>) => {
            return state.filter((e) => e.id !== action.payload);
        },
        updateEmployee: (state, action: PayloadAction<EmployeeType>) => {
            const index = state.findIndex((e) => e.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },

    }
})

export const {setEmployee,removeEmployee,updateEmployee} = EmployeeSlice.actions;
export default EmployeeSlice.reducer;