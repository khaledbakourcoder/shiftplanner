import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {
    editShift as editShift ,
    removeOneShift as removeOneShift ,
    setShift as setShift
    , type ShiftType} from "./ShiftsSlice.ts";

export default  function useShifts(){
    const shifts=useAppSelector(s=> s.Shifts)
    const dispatch= useAppDispatch();

    function addShift(shift:ShiftType){
        dispatch(setShift(shift))
    }

    function updateShift(shift:ShiftType){
        dispatch(editShift(shift))
    }

    function removeShift(shiftID :string){
        dispatch(removeOneShift(shiftID))
    }

    function getShiftById(shiftID:string):ShiftType|undefined{
        return shifts.find(s=> s.id === shiftID)
    }



    return{
        shifts,
        addShift,
        updateShift,
        removeShift,
        getShiftById,
    }

}