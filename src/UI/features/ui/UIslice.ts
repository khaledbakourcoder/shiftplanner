// src/state/uiSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UIState = {
    sidebarOpen: boolean,
    pageTitle:string
};

const initialState: UIState = {
    sidebarOpen: true,
    pageTitle: "Dashboard",
};

export const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleSidebar(state) {
            state.sidebarOpen = !state.sidebarOpen;
        },


        setPageTitle(state, action: PayloadAction<string>) {
            state.pageTitle= action.payload;
        }


    },
});

export const { toggleSidebar,setPageTitle } = uiSlice.actions;
export default uiSlice.reducer;
