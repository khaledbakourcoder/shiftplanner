// src/state/store.ts
import { configureStore } from "@reduxjs/toolkit";
import ui from "../features/ui/UIslice.ts";

export const store = configureStore({
    reducer: { ui },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
