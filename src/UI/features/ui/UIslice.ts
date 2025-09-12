// src/state/uiSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import React from "react";



export type UIState = {
    sidebarOpen: boolean,
    pageTitle:string
    smallWindow:{
        open:boolean,
        content:React.ReactNode | null
    }
};




const initialState: UIState = {
    sidebarOpen: true,
    pageTitle: "Dashboard",
    smallWindow:{
        open:false,
        content:null
    }
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
        },

        openSmallWindow(state, action: PayloadAction<React.ReactNode>) {
            state.smallWindow.open = true;
            state.smallWindow.content = action.payload;
        },
        closeSmallWindow(state) {
            state.smallWindow.open = false;
            state.smallWindow.content = null;
        },
        setSmallWindowContent(state,action: PayloadAction<React.ReactNode>) {
            state.smallWindow.content = action.payload;
        }


    },
});

export const {
    toggleSidebar,
    setPageTitle,
    openSmallWindow,
    closeSmallWindow,
    setSmallWindowContent,

} = uiSlice.actions;
export default uiSlice.reducer;
